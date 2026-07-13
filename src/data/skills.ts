export type SkillCluster = {
  title: string
  signal: string
  tools: string[]
  proof: string
}

export const skillClusters: SkillCluster[] = [
  {
    title: "Frontend systems",
    signal: "Interfaces that feel fast, readable, and intentional.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    proof: "Component architecture, responsive layouts, motion systems, forms, and production pages.",
  },
  {
    title: "Backend systems",
    signal: "APIs and services with clear contracts and secure defaults.",
    tools: ["Node.js", "Express", "FastAPI", "REST APIs", "Prisma", "JWT"],
    proof: "Auth flows, service boundaries, validation, data models, and multi-service app backends.",
  },
  {
    title: "Cloud / Linux / DevOps",
    signal: "Deployment thinking grounded in Linux and containers.",
    tools: ["Linux", "Docker", "Kubernetes", "AWS EC2", "AWS S3", "AWS RDS", "Nginx"],
    proof: "RHCSA, RHCE, Red Hat container specialist, containerized services, and AWS deployments.",
  },
  {
    title: "Data / AI",
    signal: "Pipelines that move from messy inputs to explainable outputs.",
    tools: ["Python", "SQL", "Pandas", "Scikit-learn", "LightGBM", "LLM APIs"],
    proof: "EDA, recommendation services, AI-assisted parsing, model scoring, and dashboard-ready outputs.",
  },
  {
    title: "Finance / analytics",
    signal: "Financial systems as a blend of behavior, risk, and infrastructure.",
    tools: ["FinTech", "Scenario modeling", "Risk scoring", "Forecasting", "Portfolio thinking"],
    proof: "Personal finance workflows, insurance analysis, fraud/risk experiments, and finance study.",
  },
  {
    title: "Security / infrastructure",
    signal: "Reliability, privacy, and threat models treated as product constraints.",
    tools: ["Encryption", "Rate limiting", "Token auth", "Hardening", "Network basics", "SELinux"],
    proof: "Secure auth flows, encrypted fields, Linux hardening practice, and security-conscious API design.",
  },
]

export const skills = skillClusters.map((cluster) => ({
  category: cluster.title,
  items: cluster.tools,
}))
