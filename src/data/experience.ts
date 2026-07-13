export type TimelineKind = "Education" | "Experience" | "Certification" | "Milestone"

export type Experience = {
  role: string
  org: string
  period: string
  location?: string
  kind: TimelineKind
  bullets: string[]
  tech: string[]
}

export const experience: Experience[] = [
  {
    role: "Master's in Finance",
    org: "W. P. Carey School of Business, Arizona State University",
    period: "Aug 2026 - May 2027",
    location: "Tempe, AZ",
    kind: "Education",
    bullets: [
      "Extending a computer science foundation into finance, markets, analytics, and risk-aware decision making.",
      "Using the program as a bridge between software systems and financial products.",
    ],
    tech: ["Finance", "Analytics", "Markets", "Risk"],
  },
  {
    role: "Bachelor's in Computer Science",
    org: "Ira A. Fulton Schools of Engineering, Arizona State University",
    period: "Aug 2022 - May 2026",
    location: "Tempe, AZ",
    kind: "Education",
    bullets: [
      "Built the technical base for backend systems, data structures, operating systems, cloud, AI, and product engineering.",
      "Used project work to connect coursework with deployable web, data, and infrastructure systems.",
    ],
    tech: ["Computer Science", "Systems", "Data", "Cloud"],
  },
  {
    role: "MERN Stack Intern",
    org: "Yudiz Solutions",
    period: "Apr 2024 - Jul 2024",
    location: "Ahmedabad, India",
    kind: "Experience",
    bullets: [
      "Worked with GitHub, Jira, and Slack to collaborate within cross-functional teams.",
      "Assisted with project tracking and agile workflows in a fast-paced development environment.",
      "Contributed to sprint planning, stand-ups, and progress documentation.",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "GitHub", "Jira"],
  },
  {
    role: "Data Science Intern",
    org: "Nexus Info",
    period: "Apr 2024 - Jun 2024",
    location: "Remote, India",
    kind: "Experience",
    bullets: [
      "Performed exploratory data analysis and created visual summaries for internal reporting.",
      "Produced model evaluation documentation, including accuracy and recall metrics.",
    ],
    tech: ["EDA", "Data Visualization", "Model Evaluation", "Reporting"],
  },
  {
    role: "Marketing Trainee",
    org: "Amiha Agro Pvt Ltd",
    period: "Apr 2024 - Jan 2025",
    location: "Ahmedabad, India",
    kind: "Experience",
    bullets: [
      "Supported marketing events and conference logistics in coordination with internal teams.",
      "Managed email communications and document workflows for the International Cotton Association Conference.",
      "Produced outreach materials and digital assets using PowerPoint and Excel.",
    ],
    tech: ["PowerPoint", "Excel", "Conference Logistics", "Email Coordination"],
  },
  {
    role: "Red Hat Certified Specialist in Containers and Kubernetes",
    org: "Red Hat",
    period: "2025",
    kind: "Certification",
    bullets: [
      "Validated container and Kubernetes fundamentals, reinforcing deployment and infrastructure fluency.",
    ],
    tech: ["Containers", "Kubernetes", "Podman", "DevOps"],
  },
  {
    role: "Red Hat Certified Engineer (RHCE)",
    org: "Red Hat",
    period: "2024",
    kind: "Certification",
    bullets: ["Validated Linux automation, Ansible workflows, troubleshooting, and system administration."],
    tech: ["Linux", "Ansible", "Automation", "Troubleshooting"],
  },
  {
    role: "Red Hat Certified System Administrator (RHCSA)",
    org: "Red Hat",
    period: "2024",
    kind: "Certification",
    bullets: ["Validated Linux administration, storage, networking basics, permissions, and SELinux fundamentals."],
    tech: ["Linux", "SELinux", "Storage", "Networking"],
  },
]
