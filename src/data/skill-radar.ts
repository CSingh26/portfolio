export type RadarSkill = {
  label: string
  value: number // 0-100
}

export type RadarCategory = {
  id: string
  title: string
  description: string
  skills: RadarSkill[]
}

export const radarCategories: RadarCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "UX-first, responsive, and motion-aware interfaces.",
    skills: [
      { label: "React", value: 90 },
      { label: "Next.js", value: 88 },
      { label: "TypeScript", value: 92 },
      { label: "JavaScript", value: 90 },
      { label: "UX/UI", value: 82 },
      { label: "HTML/CSS", value: 95 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "APIs with strong observability and data models.",
    skills: [
      { label: "Node.js", value: 90 },
      { label: "tRPC/REST", value: 86 },
      { label: "PostgreSQL", value: 84 },
      { label: "Prisma", value: 82 },
      { label: "Auth/Security", value: 80 },
      { label: "Caching", value: 78 },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Cloud-native delivery with secure defaults.",
    skills: [
      { label: "AWS", value: 82 },
      { label: "Docker", value: 88 },
      { label: "Kubernetes", value: 70 },
      { label: "CI/CD", value: 80 },
      { label: "Linux", value: 92 },
      { label: "Monitoring", value: 74 },
    ],
  },
  {
    id: "data",
    title: "Data",
    description: "Streaming and analytical flows for fintech-style workloads.",
    skills: [
      { label: "Python", value: 82 },
      { label: "Pandas", value: 76 },
      { label: "Anomaly Detection", value: 78 },
      { label: "Kafka", value: 70 },
      { label: "Airflow", value: 64 },
      { label: "Data Modeling", value: 80 },
    ],
  },
]
