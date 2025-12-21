export type ProjectStatus = "Live" | "In Progress" | "Research"

export type Project = {
  title: string
  slug: string
  description: string
  status: ProjectStatus
  tags: string[]
  links?: {
    github?: string
    live?: string
    caseStudy?: string
  }
}

export const projects: Project[] = [
  {
    title: "Quiz Website",
    slug: "quiz-website",
    description:
      "Quiz platform where instructors create rooms, share unique codes, and run timed sessions with real-time leaderboards.",
    status: "Live",
    tags: ["Next.js", "React", "Express.js", "AWS", "MongoDB", "Vercel"],
  },
  {
    title: "Online Journal Website",
    slug: "online-journal",
    description: "Secure journaling app with authentication, entry creation, and journal history tracking.",
    status: "Live",
    tags: ["Flask", "Python", "MySQL", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Grid Design Website",
    slug: "grid-design",
    description: "Portfolio site for a design agency featuring services, testimonials, and a client quote form.",
    status: "Live",
    tags: ["React", "Tailwind CSS", "Framer Motion", "JSON"],
  },
]
