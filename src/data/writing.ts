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
]
