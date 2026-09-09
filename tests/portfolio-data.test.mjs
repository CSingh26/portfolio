import assert from "node:assert/strict"
import test from "node:test"

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
