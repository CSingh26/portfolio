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
    id: "languages",
    title: "Languages",
    description: "Core programming languages used across coursework and projects.",
    skills: [
      { label: "Python", value: 82 },
      { label: "JavaScript", value: 80 },
      { label: "TypeScript", value: 78 },
      { label: "Java", value: 74 },
      { label: "SQL", value: 76 },
      { label: "C/C++", value: 70 },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    description: "Full-stack web frameworks and UI tooling for modern apps.",
    skills: [
      { label: "React", value: 85 },
      { label: "Next.js", value: 82 },
      { label: "Express.js", value: 76 },
      { label: "Flask", value: 72 },
      { label: "Tailwind CSS", value: 78 },
      { label: "Framer Motion", value: 70 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Relational and NoSQL data stores used in projects.",
    skills: [
      { label: "MySQL", value: 78 },
      { label: "PostgreSQL", value: 74 },
      { label: "MongoDB", value: 76 },
      { label: "DynamoDB", value: 70 },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "AWS services and deployment tooling for cloud-hosted apps.",
    skills: [
      { label: "AWS", value: 80 },
      { label: "Docker", value: 76 },
      { label: "Kubernetes", value: 68 },
      { label: "Linux", value: 84 },
      { label: "CI/CD Basics", value: 65 },
      { label: "CloudFormation", value: 66 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Daily workflow and productivity tools.",
    skills: [
      { label: "Git", value: 85 },
      { label: "GitHub", value: 82 },
      { label: "VS Code", value: 80 },
      { label: "Postman", value: 74 },
      { label: "Jupyter Notebook", value: 72 },
      { label: "Excel", value: 70 },
    ],
  },
]
