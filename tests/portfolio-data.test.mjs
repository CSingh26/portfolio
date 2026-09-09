import assert from "node:assert/strict"
import test from "node:test"
import { readFileSync } from "node:fs"
import { featuredProjectSlugs, getProjectMedia } from "../src/data/project-visuals.ts"

const projectsModule = await import("../src/data/projects.ts")
const writingModule = await import("../src/data/writing.ts")

const expectedTiers = [
  "Financial systems",
  "Intelligent systems",
  "Applied products",
  "Archive",
]

const expectedProjectsByTier = {
  "Financial systems": [
    "synaxis",
    "portfolio-pilot",
    "credit-lens",
    "fraud-pulse",
    "hedgefund-ai-agent",
    "stock-market-predictions",
  ],
  "Intelligent systems": [
    "hybrid-token-efficient-routing-agent",
    "careerpath-ai",
    "reli-score",
  ],
  "Applied products": [
    "apex-arena",
    "cinejaal",
    "quiz-app",
    "grid-design-website",
    "studyos",
    "habit-app",
    "regulus",
    "algorithm-visualizer",
  ],
  Archive: [
    "used-car-price-prediction",
    "breast-cancer-prediction",
    "sentiment-analysis",
    "movie-genre-nlp",
  ],
}

test("projects are grouped into the approved tiers and order", () => {
  assert.deepEqual(projectsModule.projectTiers, expectedTiers)

  for (const tier of expectedTiers) {
    const slugs = projectsModule.projects
      .filter((project) => project.tier === tier)
      .map((project) => project.slug)

    assert.deepEqual(slugs, expectedProjectsByTier[tier], `${tier} membership or order changed`)
  }
})

test("every project appears exactly once across tiers", () => {
  const slugs = projectsModule.projects.map((project) => project.slug)
  const uniqueSlugs = new Set(slugs)

  assert.equal(uniqueSlugs.size, slugs.length)
  assert.equal(slugs.length, Object.values(expectedProjectsByTier).flat().length)
  assert.ok(projectsModule.projects.every((project) => expectedTiers.includes(project.tier)))
})

test("latest writing returns newest records independent of source order", () => {
  assert.equal(typeof writingModule.getLatestWriting, "function")
  if (typeof writingModule.getLatestWriting !== "function") return

  assert.deepEqual(
    writingModule.getLatestWriting(3).map((post) => post.slug),
    ["apex-arena-completion", "fine-tuning-lifecycle", "choosing-tuning-method"],
  )
})

test("homepage selections prioritize portfolio work and cover all six finance projects", () => {
  assert.equal(featuredProjectSlugs[0], "portfolio-pilot")
  assert.equal(new Set(featuredProjectSlugs).size, 6)
  const finance = projectsModule.projects.filter((project) => project.tier === "Financial systems")
  assert.deepEqual([...featuredProjectSlugs].sort(), finance.map((project) => project.slug).sort())
})

test("every project has real cover, animated flow, and reduced-motion still assets", () => {
  for (const project of projectsModule.projects) {
    const media = getProjectMedia(project.slug)
    assert.ok(media, `Missing media for ${project.slug}`)
    assert.equal(media.steps.length, 4)
    const readAsset = (path) => readFileSync(new URL(`../public${path}`, import.meta.url))
    assert.match(readAsset(media.cover).toString(), /<svg[\s>]/)
    assert.equal(readAsset(media.flow).subarray(0, 6).toString(), "GIF89a")
    assert.equal(readAsset(media.still).subarray(1, 4).toString(), "PNG")
  }
  assert.equal(getProjectMedia("unknown-project"), undefined)
})
