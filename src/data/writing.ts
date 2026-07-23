export type Citation = {
  label: string
  href: string
}

export type ArticleFigure = {
  src: string
  alt: string
  caption: string
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
  figures?: ArticleFigure[]
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
  apexRepo: {
    label: "Singh, Chaitanya. Apex Arena. GitHub, 2026.",
    href: "https://github.com/CSingh26/Apex-Arena",
  },
  hybridRepo: {
    label: "Arora, Mrinaal. Hybrid Token-Efficient Routing Agent. GitHub, 2026.",
    href: "https://github.com/aroramrinaal/hybrid-token-efficient-routing-agent",
  },
  openF1: {
    label: "OpenF1. “The Free and Open-Source Formula 1 API.” OpenF1, 2026.",
    href: "https://openf1.org/",
  },
}

export const writing: Writing[] = [
  {
    title: "ML in Finance: A Decision System, Not a Forecasting Contest",
    slug: "ml-finance-decision-system",
    description: "Why financial ML must be designed around decisions, uncertainty, and controls—not a single accuracy score.",
    tags: ["ML", "Finance", "Risk"], readingTime: "8 min read", date: "Jan 7, 2026",
    hero: "/writing/finance-research.jpg", architecture: "/writing/finance-flow.gif", visualAlt: "Financial market display",
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
    hero: "/writing/finance-research.jpg", architecture: "/writing/finance-flow.gif", visualAlt: "Financial market display",
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
    hero: "/writing/finance-research.jpg", architecture: "/writing/finance-flow.gif", visualAlt: "Financial market display",
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
    hero: "/writing/medical-research.jpg", architecture: "/writing/agent-flow.gif", visualAlt: "Medical research environment",
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
    hero: "/writing/finance-research.jpg", architecture: "/writing/agent-flow.gif", visualAlt: "Financial market display",
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
    hero: "/writing/medical-research.jpg", architecture: "/writing/agent-flow.gif", visualAlt: "Medical research environment",
    content: [
      "An agent can produce a fluent final answer while taking unsafe intermediate actions. That is why evaluation must observe the loop: what it retrieved, which tools it selected, whether it respected authority boundaries, how it handled conflicting evidence, and whether it escalated when required.",
      "I would build scenario suites around operational failures rather than only happy paths: a missing patient field, a stale market data snapshot, a malicious instruction embedded in a document, a tool timeout, and a task that exceeds the agent’s permission. The expected outcome may be a useful draft, a safe abstention, or a clear handoff—not always completion.",
      "The NIST framework gives this work a vocabulary. Governance establishes ownership and risk tolerance; mapping identifies affected people and dependencies; measurement collects repeatable evidence; management acts on findings (Tabassi). The model’s benchmark score is one input to that larger system.",
      "For high-stakes medicine and finance, I prefer releases that increase authority gradually. Begin with read-only research, then proposal generation, then carefully bounded actions. Each expansion should be earned with evidence from the prior stage."
    ], citations: [sources.nist, sources.trism, sources.fda],
  },
  {
    title: "Apex Arena: Building Evidence-Linked Race Rooms",
    slug: "apex-arena-race-rooms",
    description: "How Apex Arena turns live Formula racing data into a bounded, evidence-linked conversation between five specialist agents.",
    tags: ["Apex Arena", "Formula Racing", "Agentic AI"], readingTime: "11 min read", date: "May 6, 2026",
    hero: "/writing/apex-arena.jpg", architecture: "/writing/apex-flow.gif", visualAlt: "Apex Arena landing experience",
    content: [
      "Apex Arena is not a token-optimization product. It is a Formula racing fan experience designed around an editorial premise: a race is more useful when strategy, telemetry, racecraft, and championship history can disagree in public while showing the evidence behind each grounded claim. The repository describes five specialist voices—Mira Vale, Theo Voss, Lena Cross, Arjun Reyes, and Nova—each with a narrow analytical lens and explicit confidence rules (Singh).",
      "The product’s core unit is the Race Room. A room binds a session conversation, a timeline of key moments, a circuit dossier, and current conditions into one navigable surface. This makes the UX more than a timing screen: a visitor can move from a claim about tyre life or track position to the trigger, source metrics, and data-quality note that supported it.",
      "The data path is deliberately explicit. OpenF1 REST and live feeds supply timing, telemetry, race-control, and weather signals; Jolpica supplies season-calendar context. The FastAPI backend normalizes, orders, deduplicates, and stores those events in PostgreSQL while Redis carries event-stream state toward the replay and discussion engine (Singh; OpenF1).",
      "That ordering work is not glamorous, but it is central to the credibility of a live-data product. A statement about a lap or a pit stop is only meaningful if the underlying event is stable, time-aware, and traceable. Apex Arena therefore preserves raw provider events before normalization and labels partial, missing, or unavailable data instead of completing the story with invented telemetry.",
      "On the presentation layer, Next.js App Router, React, and TypeScript provide the Race Room experience. Server-Sent Events keep the room current without treating every interaction as a full-page refresh, while the evidence drawer, playback controls, and conversation map make the system’s reasoning inspectable rather than theatrical.",
      "This architecture is also intentionally resilient. Weather is a panel, not a single point of failure; provider interruptions and future sessions produce clear fallback states. The same principle extends to the agents: their conclusions narrow when the available evidence narrows. The implementation is a practical example of an AI interface that makes uncertainty part of the product language rather than a footnote."
    ], citations: [sources.apexRepo, sources.openF1, sources.nist], figures: [
      { src: "/writing/apex-race-rooms.jpg", alt: "Apex Arena Race Rooms catalog", caption: "Apex Arena Race Rooms catalog from the project repository." },
      { src: "/writing/apex-room-intelligence.jpg", alt: "Apex Arena circuit and weather intelligence", caption: "Circuit dossier and OpenF1 weather context from the project repository." },
    ],
  },
  {
    title: "Hybrid Token-Efficient Routing: Spend Tokens Only When a Proof Fails",
    slug: "hybrid-token-efficient-routing",
    description: "A separate project: a Python routing agent that uses deterministic solvers first, then gated local inference, then a cloud fallback.",
    tags: ["Hybrid Routing", "Token Efficiency", "Python"], readingTime: "12 min read", date: "Jun 3, 2026",
    hero: "/writing/hybrid-token-frontier.png", architecture: "/writing/hybrid-token-frontier.gif", visualAlt: "Token and accuracy frontier chart from the hybrid routing project",
    content: [
      "The Hybrid Token-Efficient Routing Agent is a separate Python project built for the AMD Developer Hackathon ACT II. Its operating principle is conservative: use zero tokens when a deterministic solver can prove an answer; use a local model only when a category-specific gate validates the output; and send the remaining work to a cloud model when quality needs that escalation (Arora).",
      "The routing pipeline starts with JSON-schema validation and an ordered task classifier. It then asks a more important question than ‘which model is best?’: is there a deterministic proof path? For arithmetic, logic, constrained summarization, named entities, sentiment, factual extraction, and selected code tasks, a specialized solver either produces a validated answer or abstains.",
      "Abstention is a feature, not a failure. The repository’s deterministic solvers are designed to decline ambiguous inputs instead of creating the false confidence that a cheap route is correct. That policy protects the next tier: a failed proof does not become a silent answer; it becomes an explicit reason to consider local or cloud inference.",
      "The local tier packages a pinned llama.cpp runtime with a Qwen3.5-2B model inside Docker. It is useful only when the category is eligible and its output passes category-specific validation. This keeps a local model from being treated as a universal replacement for a larger model merely because it is cheaper or available offline (Arora).",
      "Cloud routing is the final quality path, with runtime configuration for the Fireworks endpoint and allowed models rather than hidden provider assumptions. Batching, retries, validators, and a crash-safe output writer protect the evaluator contract: the system must always emit a valid results JSON array even when an upstream provider fails.",
      "The project includes a synthetic 1,000-question development dataset, 282 passing tests reported by the repository, and diagnostic tooling that records the resolving tier without changing submission output. The accuracy/token frontier shown below is therefore not a decorative chart: it is project data used to examine the trade-off that the router is explicitly built to control."
    ], citations: [sources.hybridRepo, sources.lora, sources.nist], figures: [
      { src: "/writing/hybrid-token-frontier.png", alt: "Experiment token and accuracy frontier", caption: "Token-versus-accuracy frontier generated by the hybrid routing project from its experiment data." },
    ],
  },
  {
    title: "Completing Apex Arena: Shipping the Live Data and Replay Stack",
    slug: "apex-arena-completion",
    description: "Apex Arena is complete: a production Formula racing experience with resilient data handling, replayable race rooms, and a verified delivery path.",
    tags: ["Apex Arena", "Live Data", "Full Stack"], readingTime: "12 min read", date: "Jul 22, 2026",
    hero: "/writing/apex-arena.jpg", architecture: "/writing/apex-flow.gif", visualAlt: "Apex Arena landing experience",
    content: [
      "Apex Arena is complete as a production-oriented Formula racing experience, not a hybrid-token routing system. Its final form joins a Next.js frontend with a FastAPI backend, asynchronous SQLAlchemy and PostgreSQL for durable event history, Redis for event-stream state, and provider clients for OpenF1 and Jolpica data (Singh).",
      "The operational centre is the race-state and replay engine. It receives normalized provider events, maintains snapshots, and presents a stable sequence for both live rooms and archived sessions. That lets a visitor replay a weekend with the same discussion model used during a current session, rather than switching between an unstructured article and a disconnected live dashboard.",
      "Five agents bring separate perspectives to the same evidence: strategy looks at pit windows and traffic; telemetry looks at lap and sector deltas; racecraft looks at track position and incidents; history looks at championship context; and the room host moderates confidence and evidence quality. The point is not to impersonate certainty but to make different analytical lenses inspectable.",
      "The delivery stack reflects the same discipline. The frontend is deployed through Vercel under the portfolio’s /apex-arena path; it proxies browser-facing API calls to a Railway backend. Neon PostgreSQL and Upstash Redis provide the storage and stream layers described in the deployment documentation. Infrastructure hostnames remain off the public browser surface (Singh).",
      "Release discipline mattered as much as the interface. The v1.0.0 pipeline requires backend and frontend checks, test suites, production builds, Docker builds, and critical-vulnerability scans before publishing versioned multi-platform container images. Reproducible releases and rollback tags make a live-data project easier to operate when a provider changes or an integration regresses.",
      "The main lesson from completing Apex Arena is that compelling agentic UI depends on data integrity. Interfaces feel intelligent when they can distinguish a source fact from an inference, show the scope of incomplete data, and remain useful when one provider is late. That is the standard I wanted the project to meet."
    ], citations: [sources.apexRepo, sources.openF1, sources.nist], figures: [
      { src: "/writing/apex-room-intelligence.jpg", alt: "Apex Arena race room intelligence view", caption: "Apex Arena combines the discussion surface with circuit and weather context." },
    ],
  },
  {
    title: "Fine-Tuning Starts With a Data Contract",
    slug: "fine-tuning-data-contract",
    description: "Before choosing LoRA or full tuning, define the task, data lineage, quality thresholds, and non-goals.",
    tags: ["Fine-Tuning", "Data", "LLMs"], readingTime: "8 min read", date: "May 20, 2026",
    hero: "/writing/model-research.jpg", architecture: "/writing/tuning-flow.gif", visualAlt: "Computer hardware used for machine learning research",
    content: [
      "Fine-tuning is often presented as a switch: bring data, train a model, get a specialist. In practice, the highest-leverage work happens before training. A data contract should state the intended task, eligible source material, annotation rules, exclusions, ownership, retention, evaluation set, and the behavior the system must not learn.",
      "A model can only be adapted safely when the desired behavior is observable. For a support assistant, that may mean correct routing, grounded answers, and appropriate escalation—not merely a more confident tone. The evaluation set should include difficult examples, out-of-scope requests, and examples where the model is expected to abstain.",
      "Parameter-efficient methods make iteration cheaper, but they do not repair a vague target. LoRA freezes the pre-trained weights and learns low-rank updates; the method reduces the training footprint while preserving a base model (Hu et al.). The data contract is what decides whether those updates encode useful specialization or noise.",
      "I would treat data quality as an engineering deliverable: version it, sample it manually, document transformation steps, and protect the held-out test set from prompt and training leakage. The model choice comes after that foundation."
    ], citations: [sources.lora, sources.adapters, sources.nist],
  },
  {
    title: "Choosing Full Fine-Tuning, Adapters, or LoRA",
    slug: "choosing-tuning-method",
    description: "A decision guide for selecting an adaptation strategy based on task shift, cost, inference constraints, and operational needs.",
    tags: ["Fine-Tuning", "LoRA", "PEFT"], readingTime: "8 min read", date: "Jun 17, 2026",
    hero: "/writing/model-research.jpg", architecture: "/writing/tuning-flow.gif", visualAlt: "Computer hardware used for machine learning research",
    content: [
      "There is no universally best adaptation method. Full fine-tuning offers maximum flexibility but requires storing and serving a full model variant. Adapters add compact task modules. LoRA represents updates through low-rank matrices and can avoid added inference latency relative to adapter layers in the original formulation (Hu et al.).",
      "My choice would begin with the task shift. If the base model already follows the desired instruction style and the missing knowledge can be retrieved, retrieval and prompt design may be enough. If behavior must become consistent across a narrow domain, parameter-efficient tuning is often a pragmatic first experiment. Full tuning is a later option when the evidence shows that smaller adaptations cannot meet the target.",
      "Houlsby et al. showed that adapter modules can support many tasks while keeping shared base parameters fixed, which is operationally attractive when a team needs several specializations. LoRA+ further illustrates that even within one method, training dynamics and hyperparameters deserve empirical attention rather than default acceptance (Hayou, Ghosh, and Yu).",
      "The real decision table includes data sensitivity, deployment topology, rollback needs, evaluation cost, and who will own the model after release. A method is production-ready only when the organization can reproduce, assess, and retire it."
    ], citations: [sources.lora, sources.adapters, sources.loraPlus],
  },
  {
    title: "Fine-Tuning Is a Lifecycle, Not a Training Run",
    slug: "fine-tuning-lifecycle",
    description: "How to operate an adapted model with evaluation gates, versioning, monitoring, and a disciplined rollback path.",
    tags: ["Fine-Tuning", "MLOps", "Governance"], readingTime: "8 min read", date: "Jul 8, 2026",
    hero: "/writing/model-research.jpg", architecture: "/writing/tuning-flow.gif", visualAlt: "Computer hardware used for machine learning research",
    content: [
      "A fine-tuned model is a new production artifact, not a finished experiment. It needs a versioned base model, a versioned dataset, a declared training recipe, immutable evaluation results, and a rollback target. Without that chain, a surprising output cannot be traced back to a controllable change.",
      "Before release, I would evaluate both capability and safety. Capability tests measure the specialized task. Safety tests measure policy compliance, privacy behavior, robustness to adversarial inputs, and behavior outside the training distribution. A held-out set must remain truly held out; otherwise it becomes an optimistic echo of the training data.",
      "After release, monitor outcome quality, disagreement with reviewers, drift in request mix, latency, and cost. The NIST AI RMF treats risk management as continuous across the lifecycle, which is the right mental model for an adapted system that may encounter new data and incentives (Tabassi).",
      "The final lesson is that fine-tuning should earn its complexity. When the task changes, revisit the data contract and the evaluation suite first. A smaller adapter update, an improved retrieval system, or a clearer workflow may be safer than another uncontrolled training run."
    ], citations: [sources.nist, sources.lora, sources.loraPlus],
  },
]

export const additionalResearch: Record<string, string[]> = {
  "ml-finance-decision-system": [
    "A useful implementation artifact is a decision inventory. For every model-assisted action, it identifies the decision owner, the input snapshot, the prediction horizon, the downstream action, and the error that matters most. This prevents a team from mixing a fraud-ranking model, a credit policy, and a trading signal into one vague definition of ‘performance.’",
    "The monitoring plan should be designed before the model is released. I would track input availability, distribution shift, calibration, threshold crossing rates, reviewer overrides, and the time taken to resolve exceptions. A prediction score is only one sensor in a larger operating system; the surrounding data and people determine whether it remains useful."
  ],
  "credit-models-need-reasons": [
    "Explanations should be tested with their intended audience. A technically accurate feature-attribution graphic may still fail an applicant if it does not map to a clear, actionable reason. I prefer reason codes that are stable across nearby inputs, match the documented policy, and can be challenged or corrected through a defined process.",
    "Fairness review is not a one-time model-selection step. Cohort performance can change when applications, underwriting rules, or economic conditions change. Comparing calibration, approval rates, and error types over time gives reviewers a more useful signal than publishing one aggregate fairness number at launch."
  ],
  "backtesting-past-not-promise": [
    "The strongest backtest documentation exposes the assumptions that would most change the result. I would state the price source, asset universe, corporate-action handling, rebalancing calendar, execution convention, and all costs. That record allows another researcher to reproduce the simulation and tells an investment committee what deserves sensitivity analysis.",
    "Regime analysis matters because markets are not identically distributed samples. A strategy should be inspected across quiet and volatile periods, different liquidity conditions, and changing rate environments. If its thesis depends on one market structure persisting unchanged, the operational response should be smaller exposure and earlier review—not a more confident chart."
  ],
  "agentic-ai-medicine-boundaries": [
    "Clinical usefulness also depends on workflow fit. A reliable chart-summary agent can save time only if the summary is linked to the original record, arrives at the right moment, and clearly distinguishes patient facts from generated synthesis. The safest interaction is often an editable draft that reduces clerical burden while preserving the clinician’s authority.",
    "Evaluation must include representative clinical settings and real handoff conditions. I would measure source coverage, omission rate, citation quality, review time, and the rate at which clinicians correct a proposal. These measures are more informative than generic fluency because they reveal whether the system increases or decreases the work required for safe care."
  ],
  "financial-agents-propose-verify-approve": [
    "Approval is strongest when it is informed rather than ceremonial. The reviewer should see the exact proposed action, authoritative source records, policy checks that passed or failed, and the smallest set of choices needed to decide. A generic ‘confirm’ button does not establish informed accountability for an action involving money or customer access.",
    "The audit record should be replayable. That means retaining the request, retrieved sources, tool parameters, policy version, approval event, and execution result in a durable form. The record is what enables incident review, customer support, and model improvement without depending on a model to recreate its own prior reasoning."
  ],
  "evaluating-agents-whole-loop": [
    "I separate task success from safe behavior in the scorecard. An agent that completes a task by using an unauthorized tool or accepting a malicious instruction has not passed. Scenario tests should therefore assert intermediate tool choices, data boundaries, and escalation behaviour as first-class outcomes.",
    "Human evaluation remains necessary for cases where the right answer depends on nuance, but it should be structured. Reviewers need written rubrics, blinded comparisons where practical, and a route to mark unsafe or unsupported behavior. Those annotations become a valuable regression set for the next release rather than a pile of anecdotes."
  ],
  "fine-tuning-data-contract": [
    "The contract should also describe representation. Which languages, institutions, customer segments, or document formats are present—and which are missing? A training corpus can be legally collected and still be unfit for a broad deployment if it systematically underrepresents the situations the product will face.",
    "Before spending on training, run a baseline evaluation with the unadapted model and a retrieval-assisted alternative. This prevents fine-tuning from becoming a default answer to a knowledge problem. If the baseline already meets the quality floor, the simpler system may be easier to update, explain, and retire."
  ],
  "choosing-tuning-method": [
    "The choice should be informed by a controlled experiment rather than lore. Fix the evaluation set and decoding policy, compare the base model, a prompt or retrieval baseline, and one parameter-efficient method, then record quality, latency, memory footprint, and operational complexity. A smaller method that meets the target is usually the easier system to own.",
    "Serving topology changes the answer. A platform with many tenants may value compact adapters that can be loaded selectively; an application with one narrowly defined model may accept a merged LoRA deployment; a highly specialized system may justify a full model variant. The decision is architectural as well as statistical."
  ],
  "fine-tuning-lifecycle": [
    "A release gate should include a comparison with the last approved version, not only an absolute score. Regressions can hide inside averages: a new adapter may improve general helpfulness while weakening a critical refusal behavior or an important minority task. Version-to-version slices make those changes visible before customers encounter them.",
    "Rollback needs to be rehearsed. Keep the previous base, adapter, prompt configuration, and evaluation evidence accessible; define who can disable the new model; and verify that the application fails safely if an artifact cannot be loaded. A model lifecycle is mature when retirement is as deliberate as deployment."
  ]
}
