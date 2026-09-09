export type SkillCategory = {
  category: "Finance" | "Quantitative" | "Engineering" | "Product"
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "Finance",
    items: [
      "Financial statement analysis",
      "Corporate finance",
      "Valuation",
      "Capital budgeting",
      "Risk and return",
      "Portfolio concepts",
      "Accounting fundamentals",
      "SEC filings (10-K, 10-Q)",
    ],
  },
  {
    category: "Quantitative",
    items: [
      "Volatility modeling (GARCH)",
      "Monte Carlo simulation",
      "Regime detection",
      "Risk metrics",
      "Time-series analysis",
      "Backtesting discipline",
    ],
  },
  {
    category: "Engineering",
    items: [
      "Python",
      "TypeScript",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Containers",
      "Cloud deployment",
      "Data pipelines",
      "Machine learning",
      "AI integration",
    ],
  },
  {
    category: "Product",
    items: [
      "User journeys",
      "Simplification",
      "Feature prioritization",
      "Product architecture",
      "Platform strategy",
    ],
  },
]
