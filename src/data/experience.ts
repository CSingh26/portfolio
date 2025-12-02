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
    role: "Backend Lead · QuizBee.tech",
    org: "AWS-hosted quiz platform",
    period: "2024 — Present",
    location: "Remote",
    bullets: [
      "Architected containerized Node.js services behind ALB on EC2 with S3 for media assets and Route53 DNS failover.",
      "Implemented autoscaling policies plus structured logging and tracing, cutting p99 latency by 28%.",
      "Designed quiz analytics pipeline with PostgreSQL + Redis caching for live leaderboards.",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS EC2", "ALB", "S3", "Route53"],
  },
  {
    role: "FinTech Engineer · MoneyMind",
    org: "Personal budgeting & forecasting suite",
    period: "2024",
    location: "Phoenix, AZ",
    bullets: [
      "Built budgeting engine with envelope-style accounts, anomaly detection on spend, and CSV statement ingestion.",
      "Implemented Plaid-like mock integration and webhook simulation to test real-time categorization flows.",
      "Delivered responsive Next.js dashboard with role-based access and secure session handling.",
    ],
    tech: ["Next.js", "tRPC", "PostgreSQL", "Prisma", "Docker", "Charts"],
  },
  {
    role: "Security & Systems Labs",
    org: "ASU · Coursework & research",
    period: "2023 — 2024",
    bullets: [
      "Developed Linux kernel modules for syscall tracing and built custom networking stacks in C.",
      "Completed reverse-engineering and cryptography challenges; automated exploit scripts for CTF-style exercises.",
      "Explored threat modeling for healthcare workloads and implemented HIPAA-aligned access controls.",
    ],
    tech: ["C", "Ghidra", "Wireshark", "Python", "iptables", "Linux"],
  },
  {
    role: "Certification Journey",
    org: "Red Hat",
    period: "2022 — 2024",
    bullets: [
      "Completed RHCSA, RHCE, and Red Hat Certified Specialist in Containers and Kubernetes.",
      "Emphasized SELinux hardening, automation with Ansible, and secure container supply chains.",
      "Mentored peers on Linux fundamentals, containerization, and exam prep labs.",
    ],
    tech: ["RHEL", "Ansible", "Podman", "Kubernetes", "SELinux"],
  },
]
