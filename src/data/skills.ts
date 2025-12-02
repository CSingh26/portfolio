export type SkillCategory = {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "JavaScript", "Go (learning)", "C", "SQL"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "tRPC", "Next.js API Routes", "Prisma", "GraphQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js App Router", "Tailwind CSS", "Framer Motion", "Accessibility"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, ALB, Route53)",
      "Docker",
      "Podman",
      "Kubernetes",
      "GitHub Actions",
      "Linux (RHEL)",
    ],
  },
  {
    category: "Data & ML",
    items: ["PostgreSQL", "MongoDB", "Redis", "Airflow (basics)", "Pandas", "Anomaly Detection"],
  },
  {
    category: "Tools",
    items: ["Git", "Ghidra", "Wireshark", "OpenAPI", "Jest/Testing Library", "Figma"],
  },
]
