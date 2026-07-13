export type Writing = {
  title: string
  slug: string
  description: string
  tags: string[]
  readingTime: string
  date: string
  content: string[]
}

export const writing: Writing[] = [
  {
    title: "Why I am combining CS and finance",
    slug: "combining-cs-and-finance",
    description:
      "Finance gives software sharper consequences: risk, incentives, trust, and timing all become part of the system design problem.",
    tags: ["Finance", "Computer Science", "Systems"],
    readingTime: "5 min read",
    date: "Jan 2026",
    content: [
      "Computer science taught me how to reason about systems. Finance keeps reminding me that systems are never just technical. They sit inside incentives, constraints, uncertainty, and trust.",
      "That combination is what pulls me in. A payment workflow, risk model, or portfolio tool is not only a set of screens and APIs. It is a decision environment where latency, explainability, data quality, and human behavior all matter.",
      "I want to build at that intersection because it rewards disciplined thinking. The best financial software is calm, precise, auditable, and useful under pressure.",
    ],
  },
  {
    title: "Learning finance from a CS background",
    slug: "learning-finance-from-cs",
    description:
      "I approach finance like a new system: define the primitives, trace the flows, learn the failure modes, then build intuition through examples.",
    tags: ["Learning", "Finance", "Mental Models"],
    readingTime: "4 min read",
    date: "Feb 2026",
    content: [
      "Coming from computer science, I like to learn a domain by finding its primitives. In finance, those primitives are cash flows, risk, time, incentives, information, and constraints.",
      "Once the primitives are visible, the field becomes less intimidating. A valuation model is a structured argument. A portfolio is a risk allocation system. A market is an information network with real consequences.",
      "That does not make finance easy, but it gives me a path. I can connect abstract concepts to systems I already understand: queues, latency, observability, model drift, and failure recovery.",
    ],
  },
  {
    title: "How I think about backend systems",
    slug: "thinking-about-backend-systems",
    description:
      "A backend is a contract with the rest of the product. It should make the right thing easy, the wrong thing visible, and failure survivable.",
    tags: ["Backend", "Cloud", "Reliability"],
    readingTime: "6 min read",
    date: "Mar 2026",
    content: [
      "I think of backend systems as the product's nervous system. They move information, enforce rules, coordinate state, and decide what gets trusted.",
      "Good backend work is often quiet. It shows up as clear APIs, predictable errors, careful validation, useful logs, and data models that do not fight the product six months later.",
      "The question I keep asking is simple: if this fails, can we understand it, recover from it, and protect the user while doing so?",
    ],
  },
  {
    title: "AI agents in financial workflows",
    slug: "ai-agents-in-financial-workflows",
    description:
      "Useful financial agents need boundaries: retrieval discipline, audit trails, confidence signals, and human checkpoints.",
    tags: ["AI", "FinTech", "Agents"],
    readingTime: "5 min read",
    date: "Apr 2026",
    content: [
      "AI agents are interesting in finance because the workflow is full of context switching: documents, numbers, policies, rules, exceptions, and decisions.",
      "But the bar is higher than convenience. A financial agent should show sources, expose uncertainty, log decisions, and know when it is not allowed to act.",
      "The strongest use cases feel like decision support rather than magic. They reduce cognitive load while preserving accountability.",
    ],
  },
  {
    title: "Systems thinking and product execution",
    slug: "systems-thinking-and-product-execution",
    description:
      "Execution improves when product choices are treated as system choices: every shortcut changes the behavior of the whole machine.",
    tags: ["Product", "Execution", "Systems"],
    readingTime: "5 min read",
    date: "May 2026",
    content: [
      "Systems thinking has changed how I build products. A feature is never isolated. It changes data shape, operational load, user expectations, and future maintenance.",
      "That perspective helps me avoid treating design, engineering, and strategy as separate lanes. The product is the sum of all those decisions interacting.",
      "The goal is not to make everything complex. The goal is to see complexity early enough to make calm, deliberate choices.",
    ],
  },
]
