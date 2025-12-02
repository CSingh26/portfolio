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
    title: "QuizBee",
    slug: "quizbee",
    description: "AWS-hosted quiz platform with real-time leaderboards and analytics, built for scale on EC2, ALB, and S3.",
    status: "Live",
    tags: ["Cloud", "Backend", "PostgreSQL", "AWS"],
    links: {
      live: "https://quizbee.tech",
      github: "https://github.com/example/quizbee",
    },
  },
  {
    title: "MoneyMind",
    slug: "moneymind",
    description: "Fintech budgeting app with cash-flow insights, categorization, and smart alerts for overspending.",
    status: "In Progress",
    tags: ["FinTech", "Next.js", "tRPC", "Prisma"],
    links: {
      github: "https://github.com/example/moneymind",
    },
  },
  {
    title: "FraudGuard",
    slug: "fraudguard",
    description: "Streaming fraud detection engine combining rules and anomaly detection for tokenized settlements.",
    status: "In Progress",
    tags: ["ML", "Security", "Streaming"],
    links: {
      github: "https://github.com/example/fraudguard",
    },
  },
  {
    title: "HabitForge",
    slug: "habitforge",
    description: "Habit tracker with spaced repetition nudges, focus timer, and simple analytics for streak health.",
    status: "Live",
    tags: ["Productivity", "Next.js", "TypeScript"],
    links: {
      github: "https://github.com/example/habitforge",
    },
  },
  {
    title: "Tokenized Asset Settlement",
    slug: "token-settlement",
    description: "Prototype settlement rails with event-driven architecture and simulated validators for digital assets.",
    status: "Research",
    tags: ["FinTech", "Distributed Systems", "Cloud"],
  },
  {
    title: "AI Voiceover Generator",
    slug: "ai-voiceover",
    description: "Voice cloning + TTS stack with script editor, export pipeline, and GPU-backed inference service.",
    status: "In Progress",
    tags: ["AI", "Audio", "Backend"],
  },
  {
    title: "OS Kernel Module Work",
    slug: "kernel-module",
    description: "Linux kernel modules for syscall tracing, packet filtering, and sandbox-style controls.",
    status: "Live",
    tags: ["Systems", "Security", "C"],
  },
  {
    title: "EazyRoute · Evolve HealthTech Solutions",
    slug: "eazyroute",
    description: "Capstone optimizing healthcare routing with secure data flows and HIPAA-aligned architecture.",
    status: "Live",
    tags: ["HealthTech", "Security", "Cloud"],
  },
]
