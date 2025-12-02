export type Writing = {
  title: string
  slug: string
  description: string
  tags: string[]
  readingTime: string
}

export const writing: Writing[] = [
  {
    title: "Building HIPAA-friendly architectures for healthcare apps",
    slug: "hipaa-friendly-architecture",
    description:
      "Design notes from EazyRoute on encrypting PHI, threat modeling, and keeping velocity while staying compliant.",
    tags: ["HealthTech", "Security"],
    readingTime: "6 min read",
  },
  {
    title: "Real-time fraud detection in tokenized settlement",
    slug: "realtime-fraud-detection",
    description:
      "How streaming features, anomaly scoring, and deterministic rules fit together for fraud decisions.",
    tags: ["FinTech", "ML"],
    readingTime: "7 min read",
  },
  {
    title: "From OS labs to production microservices",
    slug: "os-to-microservices",
    description:
      "Systems engineering lessons that carry over to distributed services: observability, limits, and failure modes.",
    tags: ["Systems", "Cloud"],
    readingTime: "5 min read",
  },
  {
    title: "Shipping quiz platforms that stay fast",
    slug: "quiz-platforms-performance",
    description:
      "Caching, schema design, and AWS primitives that keep QuizBee lean while handling exam-week spikes.",
    tags: ["Backend", "Cloud"],
    readingTime: "4 min read",
  },
]
