import type { Project } from "./projects"

export const manualProjects = [
  {
    title: "CineJaal",
    slug: "cinejaal",
    description:
      "An interactive cultural archive for exploring the interconnected universe of Hindi cinema across films, artists, studios, music, and franchises.",
    status: "Live",
    field: "Data Science & Analytics",
    categories: ["Full-Stack", "Data"],
    tags: ["Next.js", "TypeScript", "React", "Graph Visualization", "Python", "Wikidata"],
    links: {
      github: "https://github.com/CSingh26/CineJaal",
      live: "https://cinejaal-hindi-cinema.vercel.app",
    },
    thinking:
      "Turns a dense cultural dataset into an explorable graph where relationships, time, and provenance remain visible.",
    confidence: "high",
    featured: true,
    source: "manual",
    updatedAt: "2026-07-11",
    language: "TypeScript",
    details: {
      overview:
        "CineJaal is a browser-based Hindi cinema archive that connects films, actors, directors, music directors, singers, production houses, and franchises. Its progressive force-directed canvas stays synchronized with a 1970–2026 timeline, supports shortest-path exploration, and pairs sourced relationship data with an original deterministic poster system.",
      highlights: [
        "Archives 500 real Hindi-language films released between 1970 and 2026.",
        "Connects 2,096 deduplicated entities through 4,953 sourced relationships.",
        "Combines a progressive force-directed canvas with a synchronized historical timeline.",
        "Supports shortest-path exploration between people, films, studios, and franchises.",
        "Runs from bundled JSON at runtime, avoiding upstream availability and latency dependencies.",
      ],
      stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Python", "Wikidata", "IMDb datasets"],
      facts: [
        { label: "Films", value: "500" },
        { label: "Entities", value: "2,096" },
        { label: "Relationships", value: "4,953" },
        { label: "Timeline", value: "1970–2026" },
      ],
      sections: [
        {
          title: "Archive & Graph Experience",
          body: [
            "The archive treats Hindi cinema as a connected network rather than a catalog of isolated titles. Visitors can move through a force-directed canvas while a synchronized timeline keeps every discovery grounded in its release era.",
          ],
          bullets: [
            "Covers films, performers, directors, music directors, singers, production houses, and source-backed franchises.",
            "Progressively reveals the graph so a large network stays navigable in the browser.",
            "Shortest-path exploration explains how any two entities are connected.",
          ],
        },
        {
          title: "Data Pipeline & Provenance",
          bullets: [
            "Build scripts can reuse cached sources, reproduce the committed snapshot offline, or refresh upstream inputs.",
            "The deployed application reads bundled JSON and makes no upstream data calls at runtime.",
            "Wikidata provides CC0 structured data, while IMDb fields follow its non-commercial dataset terms.",
            "Validation scripts check the generated archive before it is shipped.",
          ],
        },
        {
          title: "Original Visual System",
          bullets: [
            "Deterministic CSS geometry creates a consistent poster identity from factual movie metadata.",
            "No theatrical posters, film stills, celebrity likenesses, or third-party images are bundled.",
            "The visual language keeps the archive expressive while respecting source and licensing boundaries.",
          ],
        },
      ],
    },
  },
  {
    title: "Hybrid Token-Efficient Routing Agent",
    slug: "hybrid-token-efficient-routing-agent",
    description:
      "AMD Developer Hackathon routing agent that solves provable tasks deterministically, accepts gated local-model answers, and escalates difficult work to cloud models.",
    status: "Completed",
    field: "AI & Intelligent Systems",
    categories: ["AI/ML", "Cloud", "Data"],
    tags: ["Python", "LLM Routing", "Qwen", "llama.cpp", "Fireworks API", "Docker"],
    links: {
      github: "https://github.com/aroramrinaal/hybrid-token-efficient-routing-agent",
    },
    thinking:
      "Treats token efficiency as a verification problem: use zero tokens when an answer is provable and escalate whenever confidence is not earned.",
    confidence: "high",
    featured: true,
    source: "manual",
    updatedAt: "2026-07-13",
    language: "Python",
    details: {
      overview:
        "Built for Track 1 of the AMD Developer Hackathon ACT II, this agent routes natural-language tasks through a dependable escalation ladder. Conservative deterministic solvers answer only what they can prove, category-specific gates validate eligible local Qwen outputs, and cloud batching handles the remaining work while preserving a strict JSON contract.",
      highlights: [
        "Uses deterministic solvers for zero-token answers when an independent proof path succeeds.",
        "Routes eligible tasks through a local Qwen 3.5 2B model running with llama.cpp and category-specific validation gates.",
        "Escalates rejected or ineligible work to configured cloud models instead of silently accepting weak answers.",
        "Supports eight task families spanning factual Q&A, math, logic, sentiment, summarization, entities, debugging, and code generation.",
        "Ships with 282 passing tests and a synthetic 1,000-record evaluation dataset.",
      ],
      stack: ["Python 3.12", "Qwen 3.5 2B", "llama.cpp", "Fireworks API", "Docker", "unittest"],
      facts: [
        { label: "Hackathon", value: "AMD Developer Hackathon ACT II" },
        { label: "Track", value: "Track 1" },
        { label: "Task families", value: "8" },
        { label: "Regression tests", value: "282 passing" },
      ],
      sections: [
        {
          title: "Routing Architecture",
          body: [
            "Every task passes schema validation and an ordered classifier before entering a three-tier resolution ladder. Each tier has an explicit acceptance boundary, so an unproven answer moves upward instead of being treated as correct.",
          ],
          bullets: [
            "Deterministic solvers handle arithmetic, logic, extraction, and other provable patterns without model tokens.",
            "The local tier is category-scoped and accepts an answer only after its proof or contract gate passes.",
            "Cloud requests are batched and retried using runtime-configured providers and allowed models.",
            "A last-resort placeholder is reserved for genuine provider exhaustion or offline runs with no safe answer.",
          ],
        },
        {
          title: "Task Coverage & Validation",
          bullets: [
            "Passage-aware factual extraction and validated model fallback.",
            "Safe arithmetic with an independent proof path plus deterministic ordering and constraint solving.",
            "Constraint-aware summarization, named-entity span completeness, and conservative sentiment classification.",
            "AST-aware narrow debugging repairs and contract-aware code generation that abstain on ambiguous inputs.",
          ],
        },
        {
          title: "Local Model & Container Runtime",
          bullets: [
            "The Docker image pins llama.cpp and packages the Qwen 3.5 2B local model for the grading environment.",
            "Environment settings control the local model, eligible categories, cloud endpoint, and allowed model list.",
            "The CLI reads a JSON task list and always writes one strict task_id/answer object per input task.",
          ],
        },
        {
          title: "Evaluation & Reliability",
          bullets: [
            "A 1,000-record synthetic dataset provides 125 deterministic examples for each supported task family.",
            "Diagnostic evaluation records the actual resolving tier without changing the submission output contract.",
            "Crash-safe output handling keeps results.json valid even when an upstream component fails.",
            "The design explicitly prioritizes accuracy before token minimization and never relies on hidden evaluation data.",
          ],
        },
      ],
      contributors: [
        { name: "Mrinaal Arora", github: "https://github.com/aroramrinaal" },
      ],
    },
  },
  {
    title: "Synaxis (MoneyMatters)",
    slug: "synaxis",
    description:
      "24-hour hackathon platform combining personal finance management with AI-powered insurance analysis, coverage-gap detection, and scenario simulation.",
    status: "Completed",
    field: "Finance & Fintech",
    categories: ["Full-Stack", "AI/ML", "Cloud", "Data", "Finance", "Security"],
    tags: ["Expo", "React Native", "TypeScript", "PostgreSQL", "AWS"],
    links: {
      github: "https://github.com/CSingh26/MoneyMatters",
    },
    thinking:
      "Shows how financial workflows can become structured, explainable product systems.",
    confidence: "high",
    featured: true,
    source: "manual",
    updatedAt: "2026-04-08",
    language: "TypeScript",
    details: {
      overview:
        "Synaxis, documented in the MoneyMatters repository, combines a full personal-finance tracker with an AI-assisted insurance workspace. An Expo client connects through Nginx to five Express microservices backed by PostgreSQL, Prisma, Anthropic-powered analysis, and AWS infrastructure.",
      highlights: [
        "Built during a 24-hour hackathon with an Expo mobile client and five backend services.",
        "Tracks income, expenses, savings, goals, and personal assets through complete CRUD workflows.",
        "Parses uploaded insurance PDFs, detects coverage gaps, and reviews protection against tracked assets.",
        "Generates 12-month what-if projections comparing the status quo with proposed life events or decisions.",
        "Layers JWT rotation, bcrypt, AES-256-GCM field encryption, Helmet, validation, and rate limiting.",
      ],
      stack: [
        "Expo SDK 54",
        "React Native",
        "TypeScript",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Anthropic Claude Sonnet",
        "AWS EC2",
        "AWS RDS",
        "Nginx",
      ],
      media: {
        src: "/projects/moneymatters-hackathon.jpg",
        alt: "MoneyMatters team photo from the hackathon",
        width: 4898,
        height: 3265,
        caption: "Innovation Hack team photo for Synaxis / MoneyMatters.",
      },
      facts: [
        { label: "Build window", value: "24-hour hackathon" },
        { label: "Frontend", value: "Expo / React Native" },
        { label: "Backend", value: "5 Express services" },
        { label: "Deployment", value: "AWS EC2 + RDS" },
      ],
      sections: [
        {
          title: "Architecture Overview",
          body: [
            "The Expo-based React Native frontend runs on iOS, Android, and web while Nginx routes traffic across dedicated auth, finance, policy, AI, and dashboard services.",
            "The dashboard aggregator queries the other services in parallel to render a unified financial and insurance overview with fewer client round-trips.",
          ],
          bullets: [
            "Auth service handles registration, login, token refresh, and profile data.",
            "Finance service manages income, expenses, savings, goals, assets, and summary scoring.",
            "Policy service owns PDF uploads, policy records, and parse-state lifecycle.",
            "AI service powers policy parsing, watchdog analysis, orchestration, and scenario simulations.",
          ],
        },
        {
          title: "App Screens & Product Surface",
          bullets: [
            "Two-step authentication with password-strength validation and demographic personalization.",
            "Financial tracker with searchable transactions, savings accounts, goals, assets, and chart-driven summaries.",
            "Policy workspace with PDF uploads, coverage cards, exclusions, risk scoring, and expandable gap analysis.",
            "Scenario chat for what-if prompts such as job loss, major purchases, or policy changes.",
          ],
        },
        {
          title: "Backend Services & AI Agents",
          bullets: [
            "REST APIs cover auth, finance, policies, AI operations, and dashboard aggregation.",
            "AI agents include a policy parser, financial watchdog, orchestration layer, and 12-month simulator.",
            "Service-to-service communication uses Axios with internal authentication keys.",
            "Containerized backend services run on AWS EC2 with PostgreSQL in AWS RDS.",
          ],
        },
        {
          title: "Security, Analytics & Visualization",
          bullets: [
            "JWT access and refresh tokens use bcrypt password hashing and secure client storage.",
            "AES-256-GCM protects monetary fields while Helmet supplies security headers.",
            "Rate limiting, Zod validation, PDF checks, and CORS configuration protect service boundaries.",
            "Line, bar, and pie charts surface financial trends and portfolio summaries.",
          ],
        },
      ],
      contributors: [
        { name: "Shreyl Arya", github: "https://github.com/Sherylarya" },
        { name: "Harsh Bhanushali", github: "https://github.com/hbhanus2" },
      ],
    },
  },
] satisfies Project[]
