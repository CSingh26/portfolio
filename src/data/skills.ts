export type SkillCategory = {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      "Python",
      "R",
      "Java",
      "C",
      "C++",
      "SQL",
      "JavaScript",
      "Swift",
      "TypeScript",
      "HTML",
      "CSS",
      "Shell Scripting",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Express.js", "Flask", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "DynamoDB", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, Lambda, RDS, CloudFormation)", "Docker", "Kubernetes", "CI/CD Basics"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook", "Excel", "Linux", "RESTful APIs"],
  },
]
