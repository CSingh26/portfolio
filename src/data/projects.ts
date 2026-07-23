export type ProjectStatus = "Live" | "In Progress" | "Completed" | "Research"

export type ProjectField =
  | "AI & Intelligent Systems"
  | "Data Science & Analytics"
  | "Web & Full-Stack"
  | "Mobile Applications"
  | "Finance & Fintech"
  | "Cloud & Infrastructure"
  | "Developer Tools & Security"

export type ProjectMedia = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export type ProjectSection = {
  title: string
  body?: string[]
  bullets?: string[]
}

export type ProjectFact = {
  label: string
  value: string
}

export type ProjectContributor = {
  name: string
  github: string
}

export type ProjectDetail = {
  overview: string
  highlights: string[]
  stack: string[]
  media?: ProjectMedia
  facts?: ProjectFact[]
  sections?: ProjectSection[]
  contributors?: ProjectContributor[]
}

export type Project = {
  title: string
  slug: string
  description: string
  status: ProjectStatus
  field: ProjectField
  tags: string[]
  links?: {
    github?: string
    live?: string
    caseStudy?: string
  }
  details?: ProjectDetail
}

export const projectFields: ProjectField[] = [
  "AI & Intelligent Systems",
  "Data Science & Analytics",
  "Web & Full-Stack",
  "Mobile Applications",
  "Finance & Fintech",
  "Cloud & Infrastructure",
  "Developer Tools & Security",
]

export const projects: Project[] = [
  {
    title: "Apex Arena",
    slug: "apex-arena",
    description:
      "Live Formula racing fan experience where five specialist AI agents debate strategy, telemetry, racecraft, and history using evidence-linked session data.",
    status: "Live",
    field: "Web & Full-Stack",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "OpenF1", "Railway"],
    links: {
      github: "https://github.com/CSingh26/Apex-Arena",
      live: "https://chaitanyasingh.org/apex-arena",
    },
    details: {
      overview:
        "Apex Arena is a public 2026-season Formula racing experience that turns live and historical race data into a structured, evidence-linked conversation. The platform combines a Next.js frontend, FastAPI backend, PostgreSQL event archive, Redis event bus, and provider integrations from OpenF1 and Jolpica so visitors can follow a session as an editorial debate instead of a raw timing screen.",
      highlights: [
        "Built around five specialist agents covering strategy, telemetry, racecraft, championship history, and moderation.",
        "Supports live and replay Race Rooms with grounded discussion, evidence drawers, room timelines, and session-aware playback controls.",
        "Uses deterministic normalization, ordering, and deduplication so the interface never sounds more certain than the underlying data.",
        "Publishes a 2026 season catalog with circuit intelligence, weather context, and resilient fallbacks when provider data is incomplete.",
        "Runs in production beneath the portfolio domain at /apex-arena with Vercel rewrites, Railway backend services, Neon PostgreSQL, and Upstash Redis.",
      ],
      stack: [
        "Next.js App Router",
        "React",
        "TypeScript",
        "FastAPI",
        "Pydantic",
        "SQLAlchemy",
        "PostgreSQL",
        "Redis",
        "Server-Sent Events",
        "OpenF1 REST / MQTT",
        "Jolpica F1",
        "Railway",
        "Vercel",
      ],
      media: {
        src: "/projects/apex-arena-home.jpg",
        alt: "Apex Arena landing page showing the race-room fan experience",
        width: 952,
        height: 998,
        caption: "Apex Arena landing experience from the production project README.",
      },
      facts: [
        { label: "Status", value: "Live at /apex-arena" },
        { label: "Season focus", value: "2026 Formula calendar" },
        { label: "Agent roster", value: "5 specialist voices" },
        { label: "Streaming model", value: "SSE + Redis event flow" },
      ],
      sections: [
        {
          title: "Product Direction",
          body: [
            "Apex Arena treats a race weekend as a living argument instead of a static dashboard. Each session is framed as a moderated conversation where agent opinions stay distinct, explain their reasoning, and expose the evidence behind supported claims.",
            "The experience is designed for both live sessions and replayable archives, so the same room model can cover active race weekends, completed events, and upcoming sessions without pretending unavailable telemetry already exists.",
          ],
          bullets: [
            "Five analytical perspectives: strategy, telemetry, racecraft, history, and moderation.",
            "Conversation map, track dossier, and weather context accompany the live message stream.",
            "Clear data-quality labeling avoids inventing telemetry when providers are partial or offline.",
          ],
        },
        {
          title: "Data and Discussion Architecture",
          body: [
            "The backend ingests OpenF1 and calendar metadata, persists raw and normalized race events, and replays them through a race-state reducer plus a grounded discussion engine. Durable PostgreSQL records back messages and evidence, while Redis handles low-latency publication into browser streams.",
          ],
          bullets: [
            "Normalization, stable ordering, and deduplication happen before any discussion logic runs.",
            "Specialist messages are validated against supplied evidence keys and confidence rules.",
            "Replay coordination persists playback state, lap progress, and room activity for reliable recovery.",
          ],
        },
        {
          title: "Race Room Experience",
          bullets: [
            "Scrollable multi-agent conversation with reply relationships, corrections, and room summaries.",
            "Session catalog grouped by Grand Prix weekend, including live, completed, and upcoming events.",
            "Circuit intelligence panels with venue records, historical context, and official guide links.",
            "OpenF1 weather integration covering air and track temperature, rainfall, humidity, pressure, and wind.",
          ],
        },
        {
          title: "Operations and Deployment",
          body: [
            "Production deployment is routed through the portfolio domain so the browser always stays on chaitanyasingh.org/apex-arena while Vercel rewrites requests to the dedicated Apex Arena frontend. Server-side API proxying keeps backend infrastructure hostnames and proxy tokens out of the browser.",
          ],
          bullets: [
            "Verified CI pipeline runs backend tests, frontend checks, production builds, Docker builds, and vulnerability scans.",
            "Railway hosts the FastAPI backend, while the frontend uses a Next.js App Router deployment on Vercel.",
            "Recent-session reconciliation and provider-aware fallbacks keep rooms honest during live data gaps.",
          ],
        },
      ],
    },
  },
  {
    title: "Synaxis (MoneyMatters)",
    slug: "synaxis",
    description:
      "24-hour hackathon platform that combines personal finance management with AI-powered insurance policy analysis, coverage-gap detection, and scenario simulation.",
    status: "Completed",
    field: "Finance & Fintech",
    tags: ["Expo", "React Native", "TypeScript", "PostgreSQL", "AWS"],
    links: {
      github: "https://github.com/CSingh26/MoneyMatters",
    },
    details: {
      overview:
        "Synaxis, documented in the MoneyMatters repository, is a personal finance and insurance management platform built around two connected experiences: a full financial tracker and an AI-assisted policy analysis workspace. The Expo client is backed by five Express microservices, PostgreSQL via Prisma, Anthropic-powered AI workflows, and an AWS deployment model fronted by Nginx.",
      highlights: [
        "Built as a 24-hour hackathon project with an Expo mobile client and a 5-service backend routed through Nginx.",
        "Financial tracker supports CRUD flows for income, fixed and variable expenses, savings accounts, goals, and personal assets.",
        "Insurance workflow handles PDF uploads, AI-based policy parsing, gap analysis, and coverage review against tracked assets.",
        "Scenario simulator generates 12-month what-if projections comparing a status-quo path against a proposed event or decision.",
        "Security layers include JWT auth, refresh rotation, bcrypt hashing, AES-256-GCM field encryption, Helmet, and rate limiting.",
      ],
      stack: [
        "Expo SDK 54",
        "React Native",
        "React Navigation",
        "Node.js",
        "TypeScript",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Anthropic Claude Sonnet",
        "JWT",
        "Zod",
        "Expo Secure Store",
        "AsyncStorage",
        "React Native Gifted Charts",
        "Multer",
        "pdf-parse",
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
            "The app uses an Expo-based React Native frontend for iOS, Android, and web, while Nginx routes traffic across dedicated auth, finance, policy, AI, and dashboard services.",
            "A dashboard aggregator service pulls data from the other services in parallel so the client can render a unified financial and insurance overview without extra round-trips.",
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
            "Two-step authentication flow with account creation, password-strength validation, and demographic personalization.",
            "Hub screen with quick stats, theme toggle, profile badge, and navigation into finance and AI workflows.",
            "Financial tracker with searchable transactions, paginated records, savings accounts, goals, assets, and chart-driven summaries.",
            "Policy workspace with PDF uploads, coverage cards, exclusions, risk scoring, and expandable gap analysis.",
            "Scenario chat interface for what-if prompts such as job loss, major purchases, or policy changes.",
          ],
        },
        {
          title: "Backend Services & AI Agents",
          bullets: [
            "REST APIs cover auth, finance, policies, AI operations, and dashboard aggregation.",
            "AI agents include a policy parser, financial watchdog, orchestration layer, and a 12-month scenario simulator.",
            "Service-to-service communication uses Axios plus internal service authentication keys.",
            "Deployment notes in the README point to containerized backend services on AWS EC2 with PostgreSQL in AWS RDS.",
          ],
        },
        {
          title: "Security, Analytics & Visualization",
          bullets: [
            "JWT access and refresh tokens with bcrypt password hashing and secure client storage.",
            "AES-256-GCM field-level encryption for monetary values and Helmet-based security headers.",
            "Rate limiting, Zod validation, PDF type/size checks, and CORS configuration across services.",
            "Interactive line, bar, and pie charts plus progress bars and summary cards for finance reporting.",
          ],
        },
      ],
      contributors: [
        { name: "Shreyl Arya", github: "https://github.com/Sherylarya" },
        { name: "Harsh Bhanushali", github: "https://github.com/hbhanus2" },
      ],
    },
  },
  {
    title: "Hybrid Token-Efficient Routing Agent",
    slug: "hybrid-token-efficient-routing-agent",
    description:
      "AMD Developer Hackathon agent that solves provable tasks deterministically, accepts gated local-model answers, and escalates difficult work to cloud models.",
    status: "Completed",
    field: "AI & Intelligent Systems",
    tags: ["Python", "LLM Routing", "Qwen", "llama.cpp", "Fireworks API", "Docker"],
    links: {
      github: "https://github.com/aroramrinaal/hybrid-token-efficient-routing-agent",
    },
    details: {
      overview:
        "Built for Track 1 of the AMD Developer Hackathon ACT II, this agent routes natural-language tasks through a dependable escalation ladder. Conservative deterministic solvers answer only what they can prove, category-specific gates validate eligible local Qwen outputs, and cloud batching handles the remaining work while preserving a strict JSON output contract.",
      highlights: [
        "Uses deterministic solvers for zero-token answers when an independent proof path succeeds.",
        "Runs eligible tasks through a local Qwen 3.5 2B model with category-specific validation gates.",
        "Escalates rejected or ineligible work to configured cloud models instead of silently accepting weak answers.",
        "Supports eight task families: factual Q&A, math, logic, sentiment, summarization, entities, debugging, and code generation.",
        "Includes 282 passing regression tests and a 1,000-record synthetic evaluation dataset.",
      ],
      stack: [
        "Python 3.12",
        "Qwen 3.5 2B",
        "llama.cpp",
        "Fireworks API",
        "Docker",
        "unittest",
      ],
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
            "AST-aware debugging repairs and contract-aware code generation that abstain on ambiguous inputs.",
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
            "The design prioritizes accuracy before token minimization and never relies on hidden evaluation data.",
          ],
        },
      ],
      contributors: [
        { name: "Mrinaal Arora", github: "https://github.com/aroramrinaal" },
      ],
    },
  },
  {
    title: "CineJaal",
    slug: "cinejaal",
    description:
      "Interactive cultural archive for exploring the interconnected universe of Hindi cinema across films, artists, studios, music, and franchises.",
    status: "Live",
    field: "Data Science & Analytics",
    tags: ["Next.js", "TypeScript", "Graph Visualization", "Python", "Wikidata"],
    links: {
      github: "https://github.com/CSingh26/CineJaal",
      live: "https://cinejaal-hindi-cinema.vercel.app",
    },
    details: {
      overview:
        "CineJaal is a browser-based Hindi cinema archive connecting films, actors, directors, music directors, singers, production houses, and franchises. Its progressive force-directed canvas stays synchronized with a 1970–2026 timeline, supports shortest-path exploration, and pairs sourced relationship data with an original deterministic poster system.",
      highlights: [
        "Archives 500 real Hindi-language films released between 1970 and 2026.",
        "Connects 2,096 deduplicated entities through 4,953 sourced relationships.",
        "Combines a progressive force-directed canvas with a synchronized historical timeline.",
        "Supports shortest-path exploration between people, films, studios, and franchises.",
        "Runs from bundled JSON at runtime, avoiding upstream availability and latency dependencies.",
      ],
      stack: ["Next.js", "React", "TypeScript", "Python", "Wikidata", "IMDb datasets"],
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
            "The archive presents Hindi cinema as a connected network rather than a catalog of isolated titles. Visitors can move through a force-directed canvas while the synchronized timeline grounds each discovery in its release era.",
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
            "Wikidata supplies CC0 structured data while IMDb fields follow its non-commercial dataset terms.",
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
    title: "F1 Heritage Explorer",
    slug: "f1-heritage",
    description:
      "Interactive Formula 1 museum with a living timeline, searchable placards, driver comparisons, and generated 3D heritage rooms.",
    status: "Live",
    field: "Web & Full-Stack",
    tags: ["Next.js", "TypeScript", "3D", "Data Visualization", "Formula 1"],
    links: {
      github: "https://github.com/CSingh26/F1-WallOfFame",
      live: "https://f1-wall-of-fame.vercel.app/f1-heritage",
    },
    details: {
      overview:
        "F1 Heritage Explorer reframes more than seven decades of Formula 1 history as a digital museum. Visitors move through a chronological collection, search the archive, compare drivers and eras in a persistent dock, and enter generated 3D heritage rooms built for deeper exploration.",
      highlights: [
        "Museum-style timeline spanning Formula 1 history across teams, drivers, races, and defining moments.",
        "Searchable heritage placards designed for quick discovery without flattening the larger story.",
        "Persistent comparison dock for exploring careers, eras, and records side by side.",
        "Generated 3D heritage rooms add a spatial layer to the traditional archive experience.",
        "Documented data-source, asset-policy, and deployment practices support a production release.",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "3D Web", "Vercel"],
      facts: [
        { label: "Format", value: "Interactive digital museum" },
        { label: "Archive", value: "75+ years of Formula 1" },
        { label: "Modes", value: "Timeline, compare, search, rooms" },
        { label: "Status", value: "Live" },
      ],
    },
  },
  {
    title: "ReliScore",
    slug: "reli-score",
    description:
      "Cloud-native storage risk operations platform that predicts hard-drive failures 30 days ahead using SMART telemetry, ML scoring, and fleet-level analytics dashboards.",
    status: "Completed",
    field: "Cloud & Infrastructure",
    tags: ["Next.js", "NestJS", "FastAPI", "Postgres", "Machine Learning"],
    links: {
      github: "https://github.com/CSingh26/ReliScore",
    },
    details: {
      overview:
        "ReliScore is a monorepo platform for predictive storage failure monitoring. It combines a Next.js dashboard, a NestJS platform API, and a FastAPI model service to ingest telemetry, generate features, run scoring, and surface explainable risk insights per drive and across the fleet.",
      highlights: [
        "Monorepo architecture spanning apps/web, services/api, services/model, and ml/training pipelines.",
        "End-to-end scoring flow from daily telemetry ingestion to feature generation and batch predictions.",
        "Fleet overview, drive filters, and drilldowns with explainable top-reason insights.",
        "Docker Compose local stack with seeded demo data and one-command startup.",
        "Versioned model artifacts with metrics, model cards, and active-model switching.",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "NestJS",
        "FastAPI",
        "Python",
        "Prisma",
        "Postgres",
        "Docker",
      ],
    },
  },
  {
    title: "Grid Design Website",
    slug: "grid-design-website",
    description:
      "Next.js agency site with dedicated Home/About/Services/Contact pages, JSON-driven content blocks, and reusable sections for testimonials, services, and contact forms.",
    status: "Live",
    field: "Web & Full-Stack",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "https://github.com/CSingh26/Gridesign",
      live: "https://www.teamgridesign.com/",
    },
    details: {
      overview:
        "Production website for Team Grid Design built with Next.js App Router and TypeScript. The codebase organizes content into page-specific component folders, with JSON files in public/data powering services, about cards, contact info, and homepage highlights. The site includes testimonials, service inquiry forms, map/contact sections, custom assets, and motion-enhanced UI elements.",
      highlights: [
        "Modular page structure for Home, About, Services, and Contact with reusable UI components.",
        "JSON-driven content in public/data for rapid edits to services and page copy.",
        "Contact and service inquiry forms plus map/contact info blocks.",
        "Custom assets, fonts, and a loading experience for polished branding.",
        "Deployed and live at teamgridesign.com.",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "PostCSS"],
    },
  },
  {
    title: "CareerPath-AI",
    slug: "careerpath-ai",
    description:
      "Explainable career guidance product that turns transcripts and official course evidence into clear career-fit signals, strengths, gaps, and next steps.",
    status: "Completed",
    field: "AI & Intelligent Systems",
    tags: ["Next.js", "TypeScript", "OpenAI", "Explainable AI"],
    links: {
      github: "https://github.com/CSingh26/CarrerPath-AI",
    },
    details: {
      overview:
        "CareerPath AI is a transcript-to-guidance experience built as a single secure Next.js application. It extracts and validates academic records, enriches courses with official university evidence where available, infers skills, and produces deterministic, explainable career-domain fit scores with a clear account of strengths, gaps, and next steps.",
      highlights: [
        "Accepts PDF and image transcripts with server-side extraction and a human review step.",
        "Enriches courses from official university catalogs or syllabus sources using deterministic ranking and fallbacks.",
        "Combines transparent deterministic fit scoring with AI-generated narrative guidance.",
        "Surfaces evidence links, strengths, gaps, and next-step suggestions for every recommendation.",
        "Keeps OpenAI calls and orchestration server-side while leaving the V1 workflow session-local.",
      ],
      stack: ["Next.js", "React", "TypeScript", "OpenAI API", "Framer Motion", "Tailwind CSS"],
    },
  },
  {
    title: "quiz-app",
    slug: "quiz-app",
    description:
      "Full-stack quiz platform for instructors and students with room creation, test module uploads, timers, and live leaderboards backed by AWS S3 and MongoDB.",
    status: "Completed",
    field: "Web & Full-Stack",
    tags: ["Node.js", "Express.js", "MongoDB", "AWS"],
    links: {
      github: "https://github.com/CSingh26/quiz-app",
      live: "https://quizbee.tech",
    },
    details: {
      overview:
        "Quiz Room Application built for classroom-style assessments. Instructors can create and manage rooms, upload test modules, and track leaderboards; students join active rooms, attempt quizzes, and view rankings. Backend services run on Node.js/Express with Prisma ORM over MongoDB, JWT authentication, bcrypt hashing, multer-s3 uploads, and node-cron for scheduled tasks. Infrastructure uses AWS (EC2, ALB, S3, Route 53, ACM), while the frontend is hosted on Vercel.",
      highlights: [
        "Room lifecycle management with activation scheduling and leaderboard access.",
        "Test module uploads to AWS S3 via multer-s3.",
        "Prisma schema for quizzes, users, rooms, and results in MongoDB.",
        "JWT authentication with bcrypt password hashing.",
        "Scheduled jobs via node-cron for maintenance and updates.",
        "AWS infrastructure with SSL and domain routing plus Vercel frontend hosting.",
      ],
      stack: [
        "Node.js",
        "Express.js",
        "Prisma",
        "MongoDB",
        "AWS S3",
        "Next.js",
        "Tailwind CSS",
        "JWT",
      ],
    },
  },
  {
    title: "HedgeFundAIAgent",
    slug: "hedgefund-ai-agent",
    description: "Agent workflow exploring hedge-fund style research, data ingestion, and signal summaries.",
    status: "Research",
    field: "Finance & Fintech",
    tags: ["Python", "Agents", "Finance", "LLM"],
    links: {
      github: "https://github.com/CSingh26/HedgeFundAIAgent",
    },
    details: {
      overview: "Agent workflow exploring hedge fund research routines, data ingestion, and signal summaries.",
      highlights: [
        "Ingests and normalizes market data for analysis.",
        "Agent prompts for research notes and insights.",
        "Outputs watchlists and signal summaries.",
      ],
      stack: ["Python", "LLMs", "Finance Data", "APIs"],
    },
  },
  {
    title: "AlgorithmVisualizer",
    slug: "algorithm-visualizer",
    description:
      "Interactive algorithm visualizer with a browser UI plus a Java app, showcasing animated sorting and pathfinding demos.",
    status: "Completed",
    field: "Developer Tools & Security",
    tags: ["JavaScript", "Visualization", "Java"],
    links: {
      github: "https://github.com/CSingh26/AlgorithmVisualizer",
    },
    details: {
      overview:
        "Algorithm Visualizer ships as both a web app and a standalone Java application to animate classic sorting algorithms and maze/pathfinding routines. The experience is designed around step-by-step visual simulations so learners can watch comparisons, swaps, and traversal decisions unfold.",
      highlights: [
        "Sorting algorithm animations with step-by-step transitions.",
        "Pathfinding and maze-solving visualizations.",
        "Separate web application and Java desktop builds.",
        "Web app launches by opening index.html in a browser.",
        "Java app runs after compiling the included source code.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "Java"],
    },
  },
  {
    title: "UsedCarPricePrediction",
    slug: "used-car-price-prediction",
    description:
      "Used-car price prediction pipeline with feature engineering, multiple regressors, and neural networks plus Keras Tuner hyperparameter search.",
    status: "Research",
    field: "Data Science & Analytics",
    tags: ["Python", "Regression", "XGBoost", "Keras"],
    links: {
      github: "https://github.com/CSingh26/UsedCarPricePrediction",
    },
    details: {
      overview:
        "Machine learning workflow to predict used-car prices from structured listings. The project preprocesses train/test CSVs, extracts engine features (horsepower, displacement), encodes categorical fields, and normalizes data. It evaluates Random Forest, XGBoost (with GridSearchCV), Decision Tree, and a Keras neural network, then exports multiple submission files.",
      highlights: [
        "Feature extraction from engine specs plus categorical encoding and normalization.",
        "Random Forest, XGBoost, Decision Tree, and neural network comparisons.",
        "Keras Tuner-based hyperparameter optimization.",
        "RMSE evaluation and multiple submission outputs.",
      ],
      stack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Keras", "Keras Tuner"],
    },
  },
  {
    title: "StockMarketPredictions",
    slug: "stock-market-predictions",
    description:
      "Stock prediction and analysis toolkit covering EDA, RSI calculation, time-series visualizations, and ML models for classification and regression.",
    status: "Research",
    field: "Finance & Fintech",
    tags: ["Python", "Time Series", "EDA", "ML"],
    links: {
      github: "https://github.com/CSingh26/Project-1-StockMarketPredictions",
    },
    details: {
      overview:
        "Python project for stock analysis and prediction. It runs exploratory data analysis, plots price trends, computes averages and RSI signals, and trains a Random Forest classifier for prediction tasks alongside linear regression for closing price forecasts. The workflow includes sample inference using OHLCV inputs and backtesting-style comparisons to validate model behavior.",
      highlights: [
        "Exploratory data analysis with price trends and RSI calculations.",
        "Random Forest classifier for single- and multi-stock prediction.",
        "Linear regression for closing price forecasts.",
        "Sample inference using open/high/low/volume inputs.",
        "Backtesting-style comparisons of predictions vs actuals.",
      ],
      stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    },
  },
  {
    title: "BreastCancerPrediction",
    slug: "breast-cancer-prediction",
    description:
      "Breast cancer diagnosis pipeline on the Wisconsin dataset with preprocessing, feature selection, and model comparisons evaluated with precision and recall.",
    status: "Research",
    field: "Data Science & Analytics",
    tags: ["Python", "Classification", "Scikit-learn"],
    links: {
      github: "https://github.com/CSingh26/Project-2-BreastCancerPrediction",
    },
    details: {
      overview:
        "ML workflow using the Breast Cancer Wisconsin (Diagnostic) dataset. It handles data cleaning, missing values, and outliers, explores feature selection and engineering, and trains multiple models including SVM and Random Forest. The pipeline evaluates models with accuracy, precision, recall, and F1 metrics to compare performance.",
      highlights: [
        "Data cleaning and preprocessing on the Wisconsin dataset.",
        "Feature selection and engineering experiments.",
        "Model training with SVM, Random Forest, and other classifiers.",
        "Evaluation with accuracy, precision, recall, and F1-score.",
        "Dataset sourced from Kaggle for reproducible experiments.",
      ],
      stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    },
  },
  {
    title: "SentimentAnalysis",
    slug: "sentiment-analysis",
    description:
      "Twitter sentiment analysis pipeline with text cleaning, EDA, MLP modeling, hyperparameter tuning, cross-validation, and interpretability.",
    status: "Research",
    field: "AI & Intelligent Systems",
    tags: ["Python", "NLP", "Keras", "EDA"],
    links: {
      github: "https://github.com/CSingh26/Project3-SentimentAnalysis",
    },
    details: {
      overview:
        "End-to-end sentiment classification on a Twitter dataset. The workflow includes data cleaning (lowercasing, URL/stopword removal), tokenization and lemmatization, EDA with sentiment counts and word clouds, and model training using a Multi-Layer Perceptron. It compares optimizers, performs hyperparameter tuning with Keras Tuner, applies cross-validation, and evaluates with confusion matrix, ROC-AUC, and precision-recall curves plus LIME-based interpretability.",
      highlights: [
        "Robust text preprocessing pipeline with tokenization and lemmatization.",
        "EDA visualizations including value counts, word frequency, and word clouds.",
        "MLP classifier experiments with RMSprop vs Adam optimizers.",
        "Hyperparameter tuning via Keras Tuner and cross-validation.",
        "Interpretability with LIME and evaluation metrics like ROC-AUC.",
        "Tweet dataset sourced from Kaggle with reproducible setup steps.",
      ],
      stack: ["Python", "Keras", "Scikit-learn", "NLTK", "Matplotlib", "LIME"],
    },
  },
  {
    title: "MovieGenreNLP",
    slug: "movie-genre-nlp",
    description:
      "Movie genre classifier with separate training and prediction scripts for running inference on plot summaries.",
    status: "Research",
    field: "AI & Intelligent Systems",
    tags: ["Python", "NLP", "Classification"],
    links: {
      github: "https://github.com/CSingh26/MovieGenreNLP",
    },
    details: {
      overview:
        "Lightweight NLP pipeline split into a training module and an inference script. The training code performs basic text cleaning and model building, while the prediction script loads the trained model to classify genres from movie descriptions.",
      highlights: [
        "Separate training and inference scripts for a clean workflow.",
        "Basic text cleaning before model training.",
        "Genre prediction from movie description text.",
      ],
      stack: ["Python", "NLP"],
    },
  },
  {
    title: "StudyOS",
    slug: "studyos",
    description:
      "iOS-only study organizer focused on offline-first planning with Canvas sync, iCal imports, focus sessions, and a privacy-first vault.",
    status: "Completed",
    field: "Mobile Applications",
    tags: ["Swift", "iOS", "SwiftData", "Canvas", "Offline First"],
    links: {
      github: "https://github.com/CSingh26/StudyOS",
    },
    details: {
      overview:
        "Offline-first iOS study organizer that syncs Canvas data, imports iCal schedules, and supports smart planning and focus tooling. It caches data with SwiftData, offers a demo mode, and keeps privacy controls like biometric app lock and local data export.",
      highlights: [
        "Canvas OAuth sync for courses, assignments, grades, and events.",
        "Offline-first cache with background refresh and demo mode.",
        "Smart planning with priority scoring and routine constraints.",
        "Focus sessions with Live Activities and widgets.",
        "Vault for files, scans (OCR), and global search.",
        "Share extension plus biometric app lock and data export.",
      ],
      stack: ["Swift", "iOS 17", "SwiftData", "Canvas API", "iCal", "WidgetKit", "CloudKit"],
    },
  },
  {
    title: "Habitum",
    slug: "habit-app",
    description:
      "Offline-first habit tracker for iOS and Android with schedules, streaks, journaling, analytics, and a companion system built with Expo Router.",
    status: "Completed",
    field: "Mobile Applications",
    tags: ["Expo", "React Native", "TypeScript", "SQLite", "Mobile"],
    links: {
      github: "https://github.com/CSingh26/habit-app",
    },
    details: {
      overview:
        "Production-quality habit tracker with SQLite persistence, a streak engine, reflective journaling, achievements, and a virtual companion experience. Designed for polished interactions and full offline capability without a backend.",
      highlights: [
        "Habit CRUD with schedules, targets, icons, and color palettes.",
        "Streak engine with heatmap visualizations, XP, and achievements.",
        "Journal with mood/energy sliders and habit-linked reflections.",
        "Challenge mode with invite codes, QR, leaderboards, and share cards.",
        "Local notifications, haptics, and accessible theming support.",
      ],
      stack: ["Expo", "React Native", "TypeScript", "expo-router", "SQLite", "Zod", "Jest"],
    },
  },
  {
    title: "PortfolioPilot",
    slug: "portfolio-pilot",
    description:
      "Quant portfolio optimizer and backtesting lab with a Next.js analytics dashboard and live market data integrations.",
    status: "Completed",
    field: "Finance & Fintech",
    tags: ["Python", "Quant", "Next.js", "Backtesting", "Finance"],
    links: {
      github: "https://github.com/CSingh26/PortfolioPilot",
    },
    details: {
      overview:
        "Portfolio optimization and backtesting workspace combining a Python quant engine with a Next.js dashboard. Includes multiple optimizers, vectorized backtests with costs, and live quote monitoring via Finnhub with Redis caching.",
      highlights: [
        "Mean-variance, risk parity, CVaR, and volatility targeting optimizers.",
        "Vectorized backtesting with turnover, costs, and rolling analytics.",
        "Fama-French factor regression plus FRED risk-free integration.",
        "Live quotes pipeline with Finnhub and Redis caching.",
        "Dashboard sections for optimizer runs, risk views, and run history.",
      ],
      stack: ["Python", "FastAPI", "Next.js", "TypeScript", "Redis", "Finnhub", "FRED"],
    },
  },
  {
    title: "Regulus",
    slug: "regulus",
    description:
      "Codebase intelligence platform with RAG, AST dependency graphs, blast-radius forecasting, and security scanning.",
    status: "Completed",
    field: "Developer Tools & Security",
    tags: ["Next.js", "FastAPI", "RAG", "Graph", "Security"],
    links: {
      github: "https://github.com/CSingh26/Regulus",
    },
    details: {
      overview:
        "Repo intelligence system that indexes codebases, builds AST dependency graphs, and powers a dashboard for architecture, ownership, hotspots, and security. Includes RAG explanations, diff summaries, and blast-radius forecasting.",
      highlights: [
        "AST dependency graphs with an interactive architecture map.",
        "RAG search with module explanations and citations.",
        "Diff summaries with risk heuristics and blast-radius scoring.",
        "Ownership and hotspot analytics using churn, LOC, and centrality.",
        "Security scanning via Semgrep, pip-audit, and npm audit.",
      ],
      stack: ["Next.js", "FastAPI", "Postgres", "pgvector", "Redis", "RQ", "Semgrep"],
    },
  },
  {
    title: "CreditLens",
    slug: "credit-lens",
    description:
      "Demo credit default risk scoring platform with explainability, fairness diagnostics, and an underwriter dashboard.",
    status: "Completed",
    field: "Finance & Fintech",
    tags: ["Next.js", "FastAPI", "Fairness", "ML", "Python"],
    links: {
      github: "https://github.com/CSingh26/CreditLens",
    },
    details: {
      overview:
        "Loan risk scoring demo featuring a FastAPI model service, a Next.js underwriter dashboard, and explainability plus fairness reporting. Trains on the UCI credit default dataset and serves model metrics, cards, and applicant scoring.",
      highlights: [
        "Training pipeline with logistic regression and random forest models.",
        "Probability calibration and metrics dashboards.",
        "Fairness report and model card endpoints.",
        "Underwriter UI for applicants, monitoring, and model details.",
        "Docker and Makefile helpers plus one-command run script.",
      ],
      stack: ["Python", "FastAPI", "Next.js", "TypeScript", "SQLite", "UCI Dataset"],
    },
  },
  {
    title: "FraudPulse",
    slug: "fraud-pulse",
    description:
      "Real-time fraud detection platform with a Next.js analyst dashboard, API/worker pipeline, and ML scoring service.",
    status: "Completed",
    field: "Finance & Fintech",
    tags: ["Next.js", "Express", "FastAPI", "Postgres", "Redis"],
    links: {
      github: "https://github.com/CSingh26/FraudPulse",
    },
    details: {
      overview:
        "Production-ready monorepo for fraud detection with transaction ingestion, background scoring workers, a FastAPI model service, and a Next.js analyst dashboard. Includes simulator tooling, metrics, and alert workflows.",
      highlights: [
        "Express + Prisma API for transactions and alerts with BullMQ workers.",
        "FastAPI ML service for scoring, training, and metadata.",
        "Next.js dashboard for alerts, metrics, and investigations.",
        "Docker compose infra for Postgres, Redis, and Adminer.",
        "Simulator to stream synthetic transactions for testing.",
      ],
      stack: ["Next.js", "TypeScript", "Express", "Prisma", "BullMQ", "FastAPI", "Postgres", "Redis"],
    },
  },
]
