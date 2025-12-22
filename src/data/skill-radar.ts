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
    description: "Interfaces and interaction design for modern web apps.",
    skills: [
      { label: "React", value: 86 },
      { label: "Next.js", value: 82 },
      { label: "TypeScript", value: 80 },
      { label: "JavaScript", value: 84 },
      { label: "HTML/CSS", value: 86 },
      { label: "Tailwind CSS", value: 78 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "API design, data modeling, and authentication flows.",
    skills: [
      { label: "Node.js", value: 82 },
      { label: "Express.js", value: 78 },
      { label: "Flask", value: 72 },
      { label: "REST APIs", value: 78 },
      { label: "MongoDB", value: 76 },
      { label: "MySQL", value: 72 },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Delivery pipelines, infrastructure, and reliability.",
    skills: [
      { label: "AWS", value: 80 },
      { label: "Docker", value: 78 },
      { label: "Kubernetes", value: 70 },
      { label: "Linux", value: 82 },
      { label: "CI/CD Basics", value: 68 },
      { label: "CloudFormation", value: 66 },
    ],
  },
  {
    id: "data",
    title: "Data",
    description: "Analytics, visualization, and applied data workflows.",
    skills: [
      { label: "Python", value: 82 },
      { label: "R", value: 74 },
      { label: "SQL", value: 80 },
      { label: "Machine Learning", value: 72 },
      { label: "NLP", value: 70 },
      { label: "Data Visualization", value: 74 },
    ],
  },
]
