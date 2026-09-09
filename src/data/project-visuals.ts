export type ProjectVisual = {
  label: string
  accent: "blue" | "teal" | "amber"
  motif: "frontier" | "coverage" | "risk" | "pulse" | "network" | "series" | "grid"
  steps: [string, string, string, string]
}

// Editorial illustrations of the documented workflows, not product screenshots
// or performance claims. This data also drives the generated media assets.
export const projectVisuals: Record<string, ProjectVisual> = {
  "portfolio-pilot": { label: "Portfolio construction", accent: "teal", motif: "frontier", steps: ["Market data", "Optimization", "Backtesting", "Risk analytics"] },
  synaxis: { label: "Finance & coverage", accent: "blue", motif: "coverage", steps: ["Finance & policies", "Policy analysis", "Coverage gaps", "Scenarios"] },
  "credit-lens": { label: "Explainable credit risk", accent: "amber", motif: "risk", steps: ["Applicant data", "Model scoring", "Calibration", "Underwriter review"] },
  "fraud-pulse": { label: "Transaction intelligence", accent: "teal", motif: "pulse", steps: ["Transactions", "Scoring workers", "ML risk service", "Analyst alerts"] },
  "hedgefund-ai-agent": { label: "Market research agents", accent: "blue", motif: "network", steps: ["Market sources", "Normalization", "Agent research", "Signal summaries"] },
  "stock-market-predictions": { label: "Time-series research", accent: "amber", motif: "series", steps: ["OHLCV data", "EDA & RSI", "Model training", "Forecast evaluation"] },
  "hybrid-token-efficient-routing-agent": { label: "Evidence-gated routing", accent: "blue", motif: "network", steps: ["Validated task", "Proven solvers", "Gated local model", "Cloud escalation"] },
  "careerpath-ai": { label: "Evidence to direction", accent: "teal", motif: "network", steps: ["Transcript review", "Course evidence", "Skill inference", "Career guidance"] },
  "reli-score": { label: "Storage risk intelligence", accent: "amber", motif: "risk", steps: ["SMART telemetry", "Feature pipeline", "Batch scoring", "Fleet insights"] },
  "apex-arena": { label: "Evidence-linked racing", accent: "amber", motif: "pulse", steps: ["Race feeds", "Event normalization", "Agent discussion", "Live race room"] },
  cinejaal: { label: "A connected film archive", accent: "amber", motif: "network", steps: ["Source datasets", "Entity resolution", "Bundled graph", "Archive explorer"] },
  "quiz-app": { label: "Live learning systems", accent: "blue", motif: "grid", steps: ["Instructor room", "Test modules", "Student attempts", "Live leaderboard"] },
  "grid-design-website": { label: "A modular web presence", accent: "teal", motif: "grid", steps: ["Content data", "Reusable sections", "Page composition", "Service inquiries"] },
  studyos: { label: "Connected study planning", accent: "blue", motif: "grid", steps: ["Canvas & iCal", "Local cache", "Smart planning", "Focus sessions"] },
  "habit-app": { label: "Small actions, over time", accent: "teal", motif: "grid", steps: ["Habit schedules", "Local tracking", "Streak engine", "Reflection & trends"] },
  regulus: { label: "Codebase intelligence", accent: "blue", motif: "network", steps: ["Repository index", "AST graph", "RAG & risk analysis", "Architecture map"] },
  "algorithm-visualizer": { label: "Algorithms made visible", accent: "amber", motif: "grid", steps: ["Input state", "Algorithm steps", "Comparisons", "Visual simulation"] },
  "used-car-price-prediction": { label: "Structured price research", accent: "blue", motif: "series", steps: ["Vehicle listings", "Feature engineering", "Model comparison", "RMSE evaluation"] },
  "breast-cancer-prediction": { label: "Diagnostic model research", accent: "teal", motif: "risk", steps: ["Wisconsin dataset", "Preprocessing", "Model comparison", "Precision & recall"] },
  "sentiment-analysis": { label: "Language signal research", accent: "amber", motif: "series", steps: ["Tweet dataset", "Text processing", "MLP & tuning", "LIME & evaluation"] },
  "movie-genre-nlp": { label: "Stories into categories", accent: "blue", motif: "network", steps: ["Plot summaries", "Text cleaning", "Model training", "Genre inference"] },
}

export const featuredProjectSlugs = [
  "portfolio-pilot", "synaxis", "credit-lens", "fraud-pulse",
  "hedgefund-ai-agent", "stock-market-predictions",
] as const

export function getProjectMedia(slug: string) {
  const visual = projectVisuals[slug]
  if (!visual) return undefined
  return {
    ...visual,
    cover: `/projects/visuals/${slug}.svg`,
    flow: `/projects/visuals/${slug}-flow.gif`,
    still: `/projects/visuals/${slug}-flow.png`,
    alt: `${visual.label}: ${visual.steps.join(" → ")}`,
  }
}
