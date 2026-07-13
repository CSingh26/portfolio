import { Github, Instagram, Linkedin, Mail, Twitter, type LucideIcon } from "lucide-react"

export type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
}

export const profile = {
  name: "Chaitanya Singh",
  shortName: "Chaitanya",
  location: "Tempe, AZ",
  email: "singh.chaittanya@gmail.com",
  phone: "+1 (480)-742-8613",
  siteUrl: "https://chaitanyasingh.org",
  githubUsername: "CSingh26",
  resumePath: "/Chaitanya_Singh_Resume.pdf",
  profileImage: "/profile.png",
  heroLine: "I build intelligent systems where software, finance, and infrastructure meet.",
  roles: [
    "Full-Stack Engineer",
    "Backend & Cloud Builder",
    "FinTech Systems Explorer",
    "Data + AI Product Builder",
  ],
  links: {
    github: "https://github.com/CSingh26",
    linkedin: "https://www.linkedin.com/in/chaitanya-singh-10065a213/",
    twitter: "https://twitter.com/csingh04",
    instagram: "https://www.instagram.com/chaitanya.singh4",
    email: "mailto:singh.chaittanya@gmail.com",
    personal: "https://chaitanyasingh.org",
  },
  currentSignal: [
    "Deepening finance through a computer science lens.",
    "Building backend, cloud, and data systems with sharper product judgment.",
    "Exploring AI agents for financial workflows, explainability, and operational control.",
  ],
}

export const socialLinks: SocialLink[] = [
  { href: profile.links.github, label: "GitHub", icon: Github },
  { href: profile.links.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: profile.links.twitter, label: "Twitter", icon: Twitter },
  { href: profile.links.instagram, label: "Instagram", icon: Instagram },
  { href: profile.links.email, label: "Email", icon: Mail },
]
