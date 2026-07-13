import { Buffer } from "node:buffer"
import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"

const ROOT = process.cwd()
const OUTPUT_FILE = path.join(ROOT, "src/data/generated-projects.ts")
const PROFILE_FILE = path.join(ROOT, "src/data/profile.ts")
const blockedPattern = new RegExp(["quant", "edge"].join("\\s*"), "i")

const apiHeaders = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
}

if (process.env.GITHUB_TOKEN) {
  apiHeaders.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
}

async function main() {
  const username = await resolveGithubUsername()
  const repos = await fetchAllRepos(username)
  const projects = []

  for (const repo of repos) {
    const project = await projectFromRepo(username, repo)
    if (project) projects.push(project)
  }

  projects.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
  const visibleProjects = projects.map((project, index) => {
    const output = { ...project }
    delete output.score
    return {
      ...output,
      featured: index < 3,
    }
  })

  await fs.writeFile(OUTPUT_FILE, formatProjects(visibleProjects), "utf8")
  console.log(`Wrote ${visibleProjects.length} public GitHub projects to ${path.relative(ROOT, OUTPUT_FILE)}`)
}

async function resolveGithubUsername() {
  if (process.env.GITHUB_USERNAME) return process.env.GITHUB_USERNAME

  const profile = await fs.readFile(PROFILE_FILE, "utf8").catch(() => "")
  const direct = profile.match(/githubUsername:\s*"([^"]+)"/)
  if (direct?.[1]) return direct[1]

  const url = profile.match(/github\.com\/([A-Za-z0-9-]+)/)
  if (url?.[1]) return url[1]

  throw new Error("Could not resolve GitHub username. Set GITHUB_USERNAME or add it to src/data/profile.ts.")
}

async function fetchAllRepos(username) {
  const repos = []
  let page = 1

  while (page <= 10) {
    const batch = await fetchJson(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}&type=owner&sort=updated`,
    )
    if (!Array.isArray(batch) || batch.length === 0) break
    repos.push(...batch)
    if (batch.length < 100) break
    page += 1
  }

  return repos
}

async function projectFromRepo(username, repo) {
  const readme = await fetchRepoText(username, repo.name, "README.md", true)
  const firstSearchable = [
    repo.name,
    repo.description,
    repo.language,
    ...(repo.topics ?? []),
    readme?.slice(0, 8000),
  ].join(" ")

  if (blockedPattern.test(firstSearchable)) return null
  if (repo.fork && !hasMeaningfulForkEvidence(repo, readme)) return null
  if (repo.archived && !isClearlyImportant(repo, readme)) return null

  const evidence = readme ? { readme } : await inspectRepo(username, repo.name)
  const fullSearchable = [
    firstSearchable,
    evidence.packageJson,
    evidence.pyproject,
    evidence.requirements,
    evidence.contents,
    evidence.srcApp,
  ].join(" ")

  if (blockedPattern.test(fullSearchable)) return null

  const summarySource = extractSummary(readme) || clean(repo.description)
  const evidenceScore = scoreEvidence(repo, evidence, summarySource)
  if (!summarySource || evidenceScore < 2) return null

  const categories = inferCategories(fullSearchable, repo.language)
  const tags = inferTags(fullSearchable, repo.language, repo.topics ?? [])
  const confidence = readme ? "high" : evidenceScore >= 4 ? "medium" : "low"

  if (confidence === "low" && tags.length < 3) return null

  return {
    title: titleFromRepo(repo.name),
    slug: slugify(repo.name),
    description: truncate(summarySource, 190),
    status: inferStatus(repo),
    categories,
    tags,
    links: {
      github: repo.html_url,
      ...(isValidUrl(repo.homepage) ? { live: repo.homepage } : {}),
    },
    thinking: inferThinking(categories),
    confidence,
    source: "github",
    updatedAt: repo.pushed_at ? new Date(repo.pushed_at).toISOString().slice(0, 10) : undefined,
    language: repo.language || undefined,
    details: {
      overview: truncate(summarySource, 360),
      highlights: buildHighlights(repo, evidence, categories),
      stack: tags,
    },
    score: scoreProject(repo, evidenceScore, categories, tags, confidence),
  }
}

async function inspectRepo(username, repoName) {
  const [packageJson, pyproject, requirements, rootContents, srcAppContents] = await Promise.all([
    fetchRepoText(username, repoName, "package.json"),
    fetchRepoText(username, repoName, "pyproject.toml"),
    fetchRepoText(username, repoName, "requirements.txt"),
    fetchRepoContents(username, repoName, ""),
    fetchRepoContents(username, repoName, "src/app"),
  ])

  return {
    packageJson,
    pyproject,
    requirements,
    contents: rootContents,
    srcApp: srcAppContents,
  }
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: apiHeaders })
  if (!response.ok) {
    throw new Error(`GitHub API request failed (${response.status}) for ${url}`)
  }
  return response.json()
}

async function fetchRepoText(username, repoName, filePath, allowReadmeFallback = false) {
  const encodedPath = filePath
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/")
  const url = `https://api.github.com/repos/${username}/${repoName}/contents/${encodedPath}`
  const response = await fetch(url, { headers: apiHeaders })

  if (!response.ok) {
    if (allowReadmeFallback) {
      return fetchReadmeEndpoint(username, repoName)
    }
    return ""
  }

  const payload = await response.json()
  if (payload?.encoding !== "base64" || typeof payload.content !== "string") return ""
  return Buffer.from(payload.content, "base64").toString("utf8")
}

async function fetchReadmeEndpoint(username, repoName) {
  const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/readme`, {
    headers: apiHeaders,
  })

  if (!response.ok) return ""
  const payload = await response.json()
  if (payload?.encoding !== "base64" || typeof payload.content !== "string") return ""
  return Buffer.from(payload.content, "base64").toString("utf8")
}

async function fetchRepoContents(username, repoName, directory) {
  const suffix = directory
    ? `/${directory
        .split("/")
        .map((part) => encodeURIComponent(part))
        .join("/")}`
    : ""
  const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/contents${suffix}`, {
    headers: apiHeaders,
  })

  if (!response.ok) return ""
  const payload = await response.json()
  if (!Array.isArray(payload)) return ""

  return payload
    .map((item) => `${item.type}:${item.name}`)
    .slice(0, 80)
    .join("\n")
}

function hasMeaningfulForkEvidence(repo, readme) {
  const text = [repo.description, readme].join(" ")
  return Boolean(readme && clean(readme).length > 600 && /(custom|modified|built|added|implemented|extended)/i.test(text))
}

function isClearlyImportant(repo, readme) {
  return Boolean(repo.stargazers_count > 0 || (readme && clean(readme).length > 900))
}

function scoreEvidence(repo, evidence, summarySource) {
  let score = 0
  if (summarySource && summarySource.length > 50) score += 2
  if (evidence.readme && evidence.readme.length > 400) score += 3
  if (evidence.packageJson || evidence.pyproject || evidence.requirements) score += 1
  if (evidence.contents || evidence.srcApp) score += 1
  if ((repo.topics ?? []).length) score += 1
  if (repo.language) score += 1
  return score
}

function scoreProject(repo, evidenceScore, categories, tags, confidence) {
  const confidenceScore = confidence === "high" ? 6 : confidence === "medium" ? 3 : 1
  const domainScore = categories.length * 2
  const tagScore = Math.min(tags.length, 7)
  const liveScore = isValidUrl(repo.homepage) ? 3 : 0
  const recentScore = repo.pushed_at ? Math.max(0, 4 - ageInYears(repo.pushed_at)) : 0
  return evidenceScore + confidenceScore + domainScore + tagScore + liveScore + recentScore
}

function ageInYears(dateString) {
  const ageMs = Date.now() - new Date(dateString).getTime()
  return Math.floor(ageMs / (365 * 24 * 60 * 60 * 1000))
}

function extractSummary(readme) {
  if (!readme) return ""
  const withoutCode = readme.replace(/```[\s\S]*?```/g, " ")
  const lines = withoutCode
    .split(/\n+/)
    .map((line) => clean(line.replace(/^#+\s*/, "").replace(/^[-*]\s*/, "")))
    .filter(Boolean)
    .filter((line) => !/^!\[/.test(line))
    .filter((line) => !/^https?:\/\//.test(line))
    .filter((line) => line.length > 40)

  return lines[0] ?? ""
}

function inferCategories(text, language) {
  const haystack = `${text} ${language ?? ""}`.toLowerCase()
  const categories = []
  const add = (label, pattern) => {
    if (pattern.test(haystack) && !categories.includes(label)) categories.push(label)
  }

  add("Full-Stack", /\b(next|react|vue|svelte|express|node|api|frontend|backend|full.?stack|tailwind)\b/)
  add("AI/ML", /\b(ai|ml|machine learning|model|llm|langchain|pytorch|tensorflow|sklearn|lightgbm|nlp|agent)\b/)
  add("Cloud", /\b(aws|cloud|docker|kubernetes|container|terraform|nginx|ec2|s3|rds|vercel)\b/)
  add("Data", /\b(data|analytics|sql|postgres|mysql|mongodb|pandas|pipeline|dashboard|etl)\b/)
  add("Finance", /\b(finance|fintech|stock|portfolio|trading|insurance|expense|budget|payment|credit|loan|fraud)\b/)
  add("Security", /\b(security|auth|jwt|encryption|bcrypt|fraud|vulnerability|hardening|oauth|token)\b/)

  return categories.length ? categories : ["Full-Stack"]
}

function inferTags(text, language, topics) {
  const haystack = text.toLowerCase()
  const known = [
    ["Next.js", /\bnext(?:\.js)?\b/],
    ["React", /\breact\b/],
    ["React Native", /react native|expo/],
    ["TypeScript", /\btypescript\b|\btsx\b/],
    ["JavaScript", /\bjavascript\b|\bjsx\b/],
    ["Node.js", /\bnode(?:\.js)?\b/],
    ["Express", /\bexpress\b/],
    ["FastAPI", /\bfastapi\b/],
    ["Python", /\bpython\b|requirements\.txt|pyproject/],
    ["PostgreSQL", /\bpostgres|postgresql\b/],
    ["MongoDB", /\bmongodb|mongo\b/],
    ["Prisma", /\bprisma\b/],
    ["Docker", /\bdocker\b|dockerfile/],
    ["AWS", /\baws|ec2|s3|rds|lambda\b/],
    ["Tailwind CSS", /\btailwind\b/],
    ["Framer Motion", /\bframer\b/],
    ["Machine Learning", /\bmachine learning|ml|sklearn|lightgbm|model\b/],
    ["SQL", /\bsql\b/],
  ]

  const tags = []
  for (const [label, pattern] of known) {
    if (pattern.test(haystack)) tags.push(label)
  }

  for (const topic of topics) {
    const label = titleFromRepo(topic)
    if (label.length > 1 && !tags.includes(label)) tags.push(label)
  }

  if (language && !tags.includes(language)) tags.push(language)
  return tags.slice(0, 8)
}

function inferThinking(categories) {
  if (categories.includes("Finance") && categories.includes("AI/ML")) {
    return "Shows how financial workflows can become structured, explainable product systems."
  }
  if (categories.includes("Cloud") && categories.includes("Data")) {
    return "Connects infrastructure, data movement, and operational visibility instead of treating them as separate layers."
  }
  if (categories.includes("Security")) {
    return "Treats trust, auth, and failure modes as part of the product surface."
  }
  if (categories.includes("AI/ML")) {
    return "Turns uncertain model output into a user-facing workflow with clearer context."
  }
  return "Shows a bias for turning a problem into a shipped, inspectable system."
}

function inferStatus(repo) {
  if (isValidUrl(repo.homepage)) return "Live"
  if (!repo.pushed_at) return "Completed"
  const days = (Date.now() - new Date(repo.pushed_at).getTime()) / (24 * 60 * 60 * 1000)
  return days < 120 ? "In Progress" : "Completed"
}

function buildHighlights(repo, evidence, categories) {
  const highlights = []

  if (evidence.readme) highlights.push("README-backed summary from public repository documentation.")
  if (repo.language) highlights.push(`Primary language reported by GitHub: ${repo.language}.`)
  if ((repo.topics ?? []).length) highlights.push(`Repository topics: ${repo.topics.slice(0, 6).join(", ")}.`)
  if (isValidUrl(repo.homepage)) highlights.push("Includes a public live link from repository metadata.")
  if (categories.length) highlights.push(`Relevant categories: ${categories.join(", ")}.`)

  return highlights.slice(0, 5)
}

function titleFromRepo(name) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function clean(value = "") {
  return String(value)
    .replace(/[^\x00-\x7F]/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#*_`>|]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function truncate(value, max) {
  const cleaned = clean(value)
  if (cleaned.length <= max) return cleaned
  return `${cleaned.slice(0, max - 3).trim()}...`
}

function isValidUrl(value) {
  if (!value) return false
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

function formatProjects(projects) {
  return `import type { Project } from "./projects"

export const generatedProjects = ${JSON.stringify(projects, null, 2)} satisfies Project[]
`
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
