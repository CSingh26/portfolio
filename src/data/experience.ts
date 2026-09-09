export type Experience = {
  role: string
  org: string
  period: string
  location?: string
  summary: string
}

export const experience: Experience[] = [
  {
    role: "Marketing Trainee",
    org: "Amiha Agro Pvt Ltd",
    period: "Apr 2024 - Jan 2025",
    location: "Ahmedabad, India",
    summary: "Coordinated conference operations, communications, and outreach materials across internal teams.",
  },
  {
    role: "MERN Stack Intern",
    org: "Yudiz Solutions",
    period: "Apr 2024 - Jul 2024",
    location: "Ahmedabad, India",
    summary: "Contributed to full-stack delivery and cross-functional sprint work in a production development environment.",
  },
  {
    role: "Data Science Intern",
    org: "Nexus Info",
    period: "Apr 2024 - Jun 2024",
    location: "Remote, India",
    summary: "Performed exploratory analysis and documented model performance through clear visual and evaluation reports.",
  },
]
