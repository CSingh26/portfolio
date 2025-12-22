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
    title: "Learning by Shipping: Why Small Projects Matter",
    slug: "learning-by-shipping",
    description:
      "Small projects taught me speed, iteration, and the habit of finishing. Shipping them keeps my learning honest and builds momentum.",
    tags: ["Learning", "Shipping", "Projects"],
    readingTime: "5 min read",
    date: "Aug 2025",
    content: [
      "I used to think only big projects were worth showing. The truth is the small builds taught me faster, because each one forced a specific problem to the surface: a messy API, a shaky data cleaning step, or a UI decision that made things worse.",
      "Shipping small projects made me honest. When something breaks, there is nowhere to hide. Either I understand it or I do not. It also gave me the habit of finishing, which is rarer than it should be.",
      "Those small wins stack. Each ship made the next one easier to start. I keep them visible not as trophies, but as proof that progress comes from stacked steps, not skipped ones.",
    ],
  },
  {
    title: "From Coursework to Real Systems",
    slug: "coursework-to-real-systems",
    description:
      "Coursework built foundations, but real systems demanded ownership. That shift changed how I design, debug, and measure success.",
    tags: ["Systems", "Ownership", "Engineering"],
    readingTime: "6 min read",
    date: "Sep 2025",
    content: [
      "Coursework gave me fundamentals, but real systems gave me responsibility. In class, inputs are clean and success is defined for you. In production, ambiguity is the default.",
      "When I started deploying apps, the questions changed. Auth failures, performance bottlenecks, and bad data pipelines were no longer theoretical. I had to ask what breaks first, how I observe it, and how I recover.",
      "That shift made me think holistically. Logging, monitoring, and defensive design stopped being extras. Ownership made me a better engineer, even in academic projects.",
    ],
  },
  {
    title: "Why FinTech Keeps Pulling Me In",
    slug: "why-fintech-keeps-pulling-me-in",
    description:
      "FinTech sits where data, systems, and human behavior collide. The impact is real, and the engineering bar is high.",
    tags: ["FinTech", "Systems", "Data"],
    readingTime: "5 min read",
    date: "Oct 2025",
    content: [
      "FinTech sits right where data, systems, and human behavior collide. Small technical choices can change pricing, risk, or fraud outcomes, and that scale of impact keeps me locked in.",
      "The domain demands rigor. Models need to be explainable, systems reliable, and errors expensive enough to hurt. It pushes me toward correctness and clarity over cleverness.",
      "I also like the interdisciplinary thinking. You cannot treat it as just code or just data. You have to understand incentives and constraints, and that makes the work feel meaningful.",
    ],
  },
  {
    title: "What AI Projects Taught Me About Uncertainty",
    slug: "ai-projects-taught-me-uncertainty",
    description:
      "AI work made me comfortable with ambiguity and more disciplined about evaluation. Accuracy is only part of the story.",
    tags: ["AI", "ML", "Uncertainty"],
    readingTime: "6 min read",
    date: "Nov 2025",
    content: [
      "AI projects taught me that uncertainty is the real problem, not a bug. Models rarely give clean answers. They give probabilities, and those probabilities need context.",
      "Early on I chased accuracy. Now I care more about where the model fails and why. Most issues come from data, assumptions, or features, not the algorithm.",
      "Building AI made me more disciplined about evaluation and more honest about communicating uncertainty. It shaped how I design pipelines and how I talk about results.",
    ],
  },
  {
    title: "Systems Thinking Changed How I Write Code",
    slug: "systems-thinking-changed-how-i-code",
    description:
      "Learning networking, concurrency, and deployment pushed me to think about reliability, failure modes, and downstream effects.",
    tags: ["Systems", "Reliability", "Engineering"],
    readingTime: "5 min read",
    date: "Dec 2025",
    content: [
      "Learning networking, concurrency, and deployment changed how I write even simple code. I stopped thinking only about my laptop and started thinking about environments, latency, and failure.",
      "That mindset pushed me toward clearer interfaces, better error handling, and fewer surprises downstream. It also made debugging easier because I trace flows instead of guessing.",
      "Systems thinking makes my code more intentional. Even small tools feel sturdier when they are built with the bigger picture in mind.",
    ],
  },
  {
    title: "Explainability Is a Design Habit",
    slug: "explainability-is-a-design-habit",
    description:
      "If I cannot explain a system simply, I probably do not understand it well enough. Clarity is a quality check.",
    tags: ["Explainability", "Design", "Clarity"],
    readingTime: "4 min read",
    date: "Jan 2026",
    content: [
      "Explainability is not just for AI models. If I cannot explain a system, I probably do not understand it well enough.",
      "Clear explanations surface flaws early. That is why I optimize for clarity in docs, abstractions, and how I present work.",
      "In teams, explainability builds trust. It makes systems easier to extend, debug, and maintain, and it keeps me honest about what I actually know.",
    ],
  },
  {
    title: "Building in Public as a Learning Strategy",
    slug: "building-in-public-as-learning",
    description:
      "Sharing unfinished work created accountability and feedback loops that sped up my learning and made progress visible.",
    tags: ["Learning", "Community", "Process"],
    readingTime: "4 min read",
    date: "Feb 2026",
    content: [
      "Sharing unfinished work felt uncomfortable at first. Building in public forced me to be accountable and to clean up the edges of my work.",
      "Feedback loops helped me notice gaps I would have missed alone. Even small questions made me rethink assumptions and improve clarity.",
      "It reframed learning as a process, not a performance. Progress became visible, and that keeps me moving.",
    ],
  },
  {
    title: "How Projects Shape Career Direction",
    slug: "projects-shape-career-direction",
    description:
      "Projects act like experiments that reveal what I want to build next. Patterns show up when you keep shipping.",
    tags: ["Career", "Projects", "Direction"],
    readingTime: "5 min read",
    date: "Mar 2026",
    content: [
      "I did not pick my interests first and then build projects. It happened the other way around.",
      "Each project was an experiment that tested both the idea and my own fit. Some work energized me, some did not, and that signal is valuable.",
      "Over time patterns show up. Projects are not just resume lines for me; they are conversations with my future self about the work I want to do.",
    ],
  },
]
