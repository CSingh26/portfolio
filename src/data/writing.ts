export type Citation = {
  label: string
  href: string
}

export type Writing = {
  title: string
  slug: string
  description: string
  tags: string[]
  readingTime: string
  date: string
  hero: string
  architecture: string
  visualAlt: string
  content: string[]
  citations: Citation[]
}

const sources = {
  financeSurvey: {
    label: "Ozbayoglu, Murat, et al. “Deep Learning for Financial Applications: A Survey.” arXiv, 2020.",
    href: "https://arxiv.org/abs/2002.05786",
  },
  finrl: {
    label: "Liu, Xiao-Yang, et al. “FinRL: A Deep Reinforcement Learning Library for Automated Stock Trading.” arXiv, 2020.",
    href: "https://arxiv.org/abs/2011.09607",
  },
  xaiCredit: {
    label: "Schmitt, Marc. “Explainable Automated Machine Learning for Credit Decisions.” arXiv, 2024.",
    href: "https://arxiv.org/abs/2402.03806",
  },
  agenticReview: {
    label: "Liu, Yilun, et al. “AI Agents: Evolution, Architecture, and Real-World Applications.” arXiv, 2025.",
    href: "https://arxiv.org/abs/2503.12687",
  },
  trism: {
    label: "Agarwal, Shivam, et al. “TRiSM for Agentic AI.” arXiv, 2025.",
    href: "https://arxiv.org/abs/2506.04133",
  },
  fda: {
    label: "U.S. Food and Drug Administration. “Artificial Intelligence/Machine Learning-Based Software as a Medical Device Action Plan.” 2021.",
    href: "https://www.fda.gov/media/145022/download",
  },
  nist: {
    label: "Tabassi, Elham. Artificial Intelligence Risk Management Framework (AI RMF 1.0). National Institute of Standards and Technology, 2023.",
    href: "https://doi.org/10.6028/NIST.AI.100-1",
  },
  lora: {
    label: "Hu, Edward J., et al. “LoRA: Low-Rank Adaptation of Large Language Models.” arXiv, 2021.",
    href: "https://arxiv.org/abs/2106.09685",
  },
  adapters: {
    label: "Houlsby, Neil, et al. “Parameter-Efficient Transfer Learning for NLP.” arXiv, 2019.",
    href: "https://arxiv.org/abs/1902.00751",
  },
  loraPlus: {
    label: "Hayou, Soufiane, Nikhil Ghosh, and Bin Yu. “LoRA+: Efficient Low Rank Adaptation of Large Models.” arXiv, 2024.",
    href: "https://arxiv.org/abs/2402.12354",
  },
}

export const writing: Writing[] = [
  {
    title: "ML in Finance: A Decision System, Not a Forecasting Contest",
    slug: "ml-finance-decision-system",
    description: "Why financial ML must be designed around decisions, uncertainty, and controls—not a single accuracy score.",
    tags: ["ML", "Finance", "Risk"], readingTime: "8 min read", date: "Jan 7, 2026",
    hero: "/writing/ml-finance.png", architecture: "/writing/finance-flow.gif", visualAlt: "Neural network and financial chart illustration",
    content: [
      "Machine learning in finance is most useful when it improves a bounded decision: whether to investigate a transaction, how to route an order, or which cases deserve a reviewer’s attention. Treating it as a contest to predict tomorrow’s price confuses an interesting model output with a deployable system. The finance literature spans trading, credit, portfolio allocation, fraud, and derivatives, each with different labels, latency limits, and costs of error (Ozbayoglu et al.).",
      "I start with the decision and write down the asymmetry. A false negative in fraud can be expensive; a false positive can frustrate a legitimate customer. A model threshold is therefore a policy choice, not merely a mathematical setting. It should be paired with abstention rules, a human route for uncertain cases, and an evidence trail that explains the inputs available at decision time.",
      "The practical discipline is temporal. Features must be point-in-time correct, splits must respect chronology, and back-tests must include costs, delays, and turnover. FinRL’s emphasis on a complete reinforcement-learning pipeline is a useful reminder that environment design, constraints, and evaluation can matter as much as the learner itself (Liu et al.).",
      "My takeaway is simple: finance teams should fund monitoring and governance alongside model development. A modest model with stable inputs, clear escalation paths, and drift checks can be more valuable than a clever model whose performance cannot be audited after market conditions change."
    ], citations: [sources.financeSurvey, sources.finrl, sources.nist],
  },
  {
    title: "Credit Models Need Reasons, Not Just Rankings",
    slug: "credit-models-need-reasons",
    description: "A practical framework for pairing predictive credit models with explanation, fairness review, and human judgment.",
    tags: ["Credit Risk", "Explainability", "ML"], readingTime: "7 min read", date: "Jan 28, 2026",
    hero: "/writing/ml-finance.png", architecture: "/writing/finance-flow.gif", visualAlt: "Financial analytics illustration",
    content: [
      "Credit scoring turns a model score into a consequential decision about access and price. That makes explanation a system requirement. An explanation should help an applicant, reviewer, and auditor understand the operational reason for a decision; it is not a decorative chart added after deployment.",
      "A useful pattern separates three questions: does the model discriminate between outcomes, is it well calibrated for the population being served, and can its important drivers be reviewed for plausibility and disparate impact? Schmitt’s work on explainable AutoML for credit decisions highlights the value of pairing automated modelling with interpretable methods such as SHAP rather than treating automation as a substitute for accountability (Schmitt).",
      "I would also preserve adverse-action-ready feature definitions, version every model and threshold, and test stability by cohort and time period. Proxy variables deserve particular scrutiny. A model may improve an aggregate metric while shifting errors toward a group that had less representation in the data.",
      "The goal is not to ban complex methods. It is to ensure that a model’s increased complexity earns its place: it must improve a decision enough to justify the additional validation, explanation, and monitoring burden."
    ], citations: [sources.xaiCredit, sources.financeSurvey, sources.nist],
  },
  {
    title: "Backtesting Is an Argument About the Past",
    slug: "backtesting-past-not-promise",
    description: "How leakage, costs, and regime change turn a promising financial backtest into a fragile production strategy.",
    tags: ["Quant", "Evaluation", "ML"], readingTime: "8 min read", date: "Feb 18, 2026",
    hero: "/writing/ml-finance.png", architecture: "/writing/finance-flow.gif", visualAlt: "Market time-series and model illustration",
    content: [
      "A backtest is evidence about a historical simulation, not proof that a strategy will make money. This distinction keeps financial ML honest. Historical prices contain survivorship bias, changing constituents, revised data, and information that may not have been available when a decision would actually have been made.",
      "The first defence is a walk-forward design: train only on data available before the evaluation period, then advance the window. The second is friction: include spreads, fees, market impact, execution delay, borrow constraints, and turnover. A strategy that survives only before those assumptions are added is not yet a strategy.",
      "Reinforcement learning makes the issue more visible because it can exploit weaknesses in a simulated environment. FinRL frames trading as an environment with states, actions, rewards, and constraints; those components should be designed to reflect the decision process rather than to reward a convenient proxy (Liu et al.).",
      "I would report a distribution of outcomes across regimes rather than a single headline return. Drawdowns, capacity, concentration, and sensitivity to small parameter changes tell a more credible story. The output should be a decision memo: what was tested, what could invalidate it, and what limits will apply if it moves into a paper-trading phase."
    ], citations: [sources.finrl, sources.financeSurvey, sources.nist],
  },
  {
    title: "Agentic AI in Medicine: Autonomy Must Stop at the Right Boundary",
    slug: "agentic-ai-medicine-boundaries",
    description: "A safety-first view of agentic workflows for clinical support, where tools, approvals, and audit trails define usefulness.",
    tags: ["Agentic AI", "Healthcare", "Safety"], readingTime: "9 min read", date: "Mar 4, 2026",
    hero: "/writing/agentic-ai.png", architecture: "/writing/agent-flow.gif", visualAlt: "Secure agent architecture illustration",
    content: [
      "Agentic AI is not simply a chatbot with a longer prompt. It is a system that plans, invokes tools, retains task state, and adapts its next action to observations. In medicine, that capability is attractive for tasks such as assembling a chart summary, locating evidence, or coordinating administrative steps—but it also makes the action boundary the central design question.",
      "For a clinical workflow, I would give an agent narrow, typed tools and a reviewable task plan. It may retrieve a policy, draft a summary, or prepare a proposed order set; it should not silently commit a high-stakes action. Agent architecture research describes planning, memory, tool use, and multi-agent coordination as distinct capabilities, which makes those boundaries possible to test (Liu et al.).",
      "The FDA’s AI/ML software action plan calls for lifecycle oversight, good machine-learning practices, transparency, and real-world performance monitoring. Those ideas remain useful beyond regulated device software: performance must be monitored in context, and change must be controlled rather than assumed benign (U.S. Food and Drug Administration).",
      "A helpful rule is to make the agent’s authority smaller than its apparent intelligence. A clinician should be able to see the sources, edit the draft, reject the proposal, and understand what was not checked. That is how an assistant becomes operationally trustworthy."
    ], citations: [sources.agenticReview, sources.fda, sources.nist],
  },
  {
    title: "A Safer Pattern for Financial Agents: Propose, Verify, Approve, Execute",
    slug: "financial-agents-propose-verify-approve",
    description: "Why financial agents should be built as controlled workflows with segregated duties and explicit approval gates.",
    tags: ["Agentic AI", "Finance", "Governance"], readingTime: "8 min read", date: "Mar 25, 2026",
    hero: "/writing/agentic-ai.png", architecture: "/writing/agent-flow.gif", visualAlt: "Agent workflow architecture",
    content: [
      "Financial workflows reward speed, but they also demand controls. The safest agent pattern is deliberately procedural: propose an action, verify it against authoritative data and policy, request the right approval, then execute through a least-privilege tool. The design makes the agent valuable without granting it unchecked discretion.",
      "Segregation of duties matters here. A research agent can prepare an investment memo; a compliance agent can identify missing disclosures; an execution service can enforce amount and account limits. None should be able to both invent and execute a transfer. TRiSM research on agentic systems foregrounds trust, risk, and security management precisely because autonomous coordination expands the attack surface (Agarwal et al.).",
      "Every tool call should be attributable to a task, user, policy version, and source snapshot. Retrieval should prefer approved documents; untrusted text must never be treated as a tool instruction. For money movement, include confirmation of beneficiary, amount, currency, and purpose as structured fields—not prose inferred by a model.",
      "NIST’s Govern, Map, Measure, and Manage functions offer a practical operating rhythm: map the decision and harms, measure model and system behavior, and manage residual risk continuously (Tabassi). In my view, that rhythm is more valuable than a dramatic demo because it survives contact with real operations."
    ], citations: [sources.trism, sources.nist, sources.agenticReview],
  },
  {
    title: "Evaluating Agents Means Testing the Whole Loop",
    slug: "evaluating-agents-whole-loop",
    description: "A test strategy for agentic systems that measures tool use, abstention, recovery, and reviewer experience—not only final answers.",
    tags: ["Agentic AI", "Evaluation", "Reliability"], readingTime: "8 min read", date: "Apr 15, 2026",
    hero: "/writing/agentic-ai.png", architecture: "/writing/agent-flow.gif", visualAlt: "Multi-step agent process illustration",
    content: [
      "An agent can produce a fluent final answer while taking unsafe intermediate actions. That is why evaluation must observe the loop: what it retrieved, which tools it selected, whether it respected authority boundaries, how it handled conflicting evidence, and whether it escalated when required.",
      "I would build scenario suites around operational failures rather than only happy paths: a missing patient field, a stale market data snapshot, a malicious instruction embedded in a document, a tool timeout, and a task that exceeds the agent’s permission. The expected outcome may be a useful draft, a safe abstention, or a clear handoff—not always completion.",
      "The NIST framework gives this work a vocabulary. Governance establishes ownership and risk tolerance; mapping identifies affected people and dependencies; measurement collects repeatable evidence; management acts on findings (Tabassi). The model’s benchmark score is one input to that larger system.",
      "For high-stakes medicine and finance, I prefer releases that increase authority gradually. Begin with read-only research, then proposal generation, then carefully bounded actions. Each expansion should be earned with evidence from the prior stage."
    ], citations: [sources.nist, sources.trism, sources.fda],
  },
  {
    title: "Apex Arena: Designing the Hybrid Token Optimization Problem",
    slug: "apex-arena-hybrid-token-design",
    description: "The first design note from Apex Arena: framing hybrid token allocation as a constrained, explainable optimization problem.",
    tags: ["Apex Arena", "Optimization", "Tokens"], readingTime: "7 min read", date: "May 6, 2026",
    hero: "/writing/apex-arena-home.jpg", architecture: "/writing/apex-flow.gif", visualAlt: "Apex Arena application interface",
    content: [
      "Apex Arena began with a simple constraint: token budgets are finite, while the quality of a multi-stage AI experience depends on where context is spent. I framed the work as hybrid token optimization—combining deterministic rules for safety and budget ceilings with adaptive allocation for tasks whose complexity is only visible at runtime.",
      "The design separates fixed context, retrieved evidence, tool traces, and generated reasoning. This makes costs visible. Instead of asking a model to ‘use fewer tokens,’ the system assigns a budget to each component, measures actual use, and chooses whether to compress, retrieve, defer, or escalate.",
      "The trade-off is intentionally explicit: lower context can reduce cost and latency but may weaken evidence coverage; more context can increase relevance but also duplicate or dilute useful information. The optimizer is therefore constrained by task success, quality checks, and operational limits—not only a raw token target.",
      "This framing borrows from parameter-efficient adaptation: retain a strong shared base, then allocate small, task-specific increments where they produce value. LoRA demonstrates the underlying intuition at the model layer—small, structured updates can be effective when the large base remains stable (Hu et al.)."
    ], citations: [sources.lora, sources.adapters, sources.nist],
  },
]
