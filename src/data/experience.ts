export type Experience = {
  role: string
  org: string
  period: string
  location?: string
  bullets: string[]
  tech: string[]
}

export const experience: Experience[] = [
  {
    role: "Marketing Trainee",
    org: "Amiha Agro Pvt Ltd",
    period: "Apr 2024 - Jan 2025",
    location: "Ahmedabad, India",
    bullets: [
      "Supported marketing events and conference logistics in coordination with internal teams.",
      "Managed email communications and document workflows for the International Cotton Association Conference.",
      "Produced outreach materials and digital assets using PowerPoint and Excel.",
    ],
    tech: ["PowerPoint", "Excel", "Conference Logistics", "Email Coordination"],
  },
  {
    role: "MERN Stack Intern",
    org: "Yudiz Solutions",
    period: "Apr 2024 - Jul 2024",
    location: "Ahmedabad, India",
    bullets: [
      "Worked with GitHub, Jira, and Slack to collaborate within cross-functional teams.",
      "Assisted with project tracking and agile workflows in a fast-paced environment.",
      "Contributed to bi-weekly stand-ups and sprint planning, documenting progress updates.",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "GitHub", "Jira"],
  },
  {
    role: "Data Science Intern",
    org: "Nexus Info",
    period: "Apr 2024 - Jun 2024",
    location: "Remote, India",
    bullets: [
      "Performed exploratory data analysis and created visual summaries for internal reporting.",
      "Produced and maintained model evaluation documentation, including accuracy and recall metrics.",
    ],
    tech: ["EDA", "Data Visualization", "Model Evaluation", "Reporting"],
  },
]
