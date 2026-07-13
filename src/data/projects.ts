import { generatedProjects } from "./generated-projects"
import { manualProjects } from "./manual-projects"

export type ProjectStatus = "Live" | "In Progress" | "Completed" | "Research"
export type ProjectConfidence = "high" | "medium" | "low"
export type ProjectCategory =
  | "Full-Stack"
  | "AI/ML"
  | "Cloud"
  | "Data"
  | "Finance"
  | "Security"

export type ProjectField =
  | "AI & Intelligent Systems"
  | "Data Science & Analytics"
  | "Full-Stack & Web"
  | "Mobile Apps"
  | "Cloud & Infrastructure"
  | "Finance & Fintech"
  | "Security & Privacy"
  | "Developer Tools & Systems"

export type ProjectMedia = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export type ProjectSection = {
  title: string
  body?: string[]
  bullets?: string[]
}

export type ProjectFact = {
  label: string
  value: string
}

export type ProjectContributor = {
  name: string
  github: string
}

export type ProjectDetail = {
  overview: string
  highlights: string[]
  stack: string[]
  media?: ProjectMedia
  facts?: ProjectFact[]
  sections?: ProjectSection[]
  contributors?: ProjectContributor[]
}

export type Project = {
  title: string
  slug: string
  description: string
  status: ProjectStatus
  categories: ProjectCategory[]
  field?: ProjectField
  tags: string[]
  links?: {
    github?: string
    live?: string
    caseStudy?: string
  }
  thinking: string
  confidence: ProjectConfidence
  featured?: boolean
  source?: "github" | "manual"
  updatedAt?: string
  language?: string
  details?: ProjectDetail
}

const blockedPattern = new RegExp(["quant", "edge"].join("\\s*"), "i")

export const projectFields = [
  "AI & Intelligent Systems",
  "Data Science & Analytics",
  "Full-Stack & Web",
  "Mobile Apps",
  "Cloud & Infrastructure",
  "Finance & Fintech",
  "Security & Privacy",
  "Developer Tools & Systems",
] as const

export const projectFieldDescriptions: Record<ProjectField, string> = {
  "AI & Intelligent Systems": "Agents, language systems, predictive models, and applied machine learning.",
  "Data Science & Analytics": "Data pipelines, analysis, visualization, and evidence-driven exploration.",
  "Full-Stack & Web": "End-to-end products, browser experiences, APIs, and production websites.",
  "Mobile Apps": "Native and cross-platform products designed around mobile workflows.",
  "Cloud & Infrastructure": "Operational systems, deployment architecture, and cloud-native platforms.",
  "Finance & Fintech": "Financial decision tools, risk systems, and money-management products.",
  "Security & Privacy": "Projects centered on authentication, encryption, and safer user data.",
  "Developer Tools & Systems": "Engineering tools, visualizers, networked systems, and code intelligence.",
}

export const projectFilters = ["All", ...projectFields] as const

export type PortfolioProject = Project & { field: ProjectField }

const excludedGeneratedSlugs = new Set(["moneymatters"])

const fieldBySlug: Record<string, ProjectField> = {
  fraudpulse: "Finance & Fintech",
  "quiz-app": "Full-Stack & Web",
  reliscore: "Cloud & Infrastructure",
  creditlens: "Finance & Fintech",
  gridesign: "Full-Stack & Web",
  csingh26: "Full-Stack & Web",
  portfoliopilot: "Finance & Fintech",
  regulus: "Developer Tools & Systems",
  sentimentanalysis: "AI & Intelligent Systems",
  "dev-city": "Full-Stack & Web",
  "habit-app": "Mobile Apps",
  stockmarketpredictions: "Finance & Fintech",
  "carrerpath-ai": "AI & Intelligent Systems",
  usedcarpriceprediction: "AI & Intelligent Systems",
  "f1-walloffame": "Full-Stack & Web",
  studyos: "Mobile Apps",
  breastcancerprediction: "AI & Intelligent Systems",
  "java-passwordgui": "Security & Privacy",
  portfolio: "Full-Stack & Web",
  algorithmvisualizer: "Developer Tools & Systems",
  bostonhousingproject: "Data Science & Analytics",
  chatapplication: "Developer Tools & Systems",
  "handwriting-recognition": "AI & Intelligent Systems",
}

function isVisible(project: Project) {
  const searchable = [
    project.title,
    project.slug,
    project.description,
    project.thinking,
    project.tags.join(" "),
    project.categories.join(" "),
  ].join(" ")

  return !blockedPattern.test(searchable)
}

const projectCandidates: Project[] = [
  ...manualProjects,
  ...generatedProjects.filter((project) => !excludedGeneratedSlugs.has(project.slug)),
]

export const projects: PortfolioProject[] = projectCandidates
  .filter(isVisible)
  .map((project) => ({
    ...project,
    field: project.field ?? fieldBySlug[project.slug] ?? "Full-Stack & Web",
  }))

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)
