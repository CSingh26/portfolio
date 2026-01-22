export type ProjectStatus = "Live" | "In Progress" | "Completed" | "Research"

export type ProjectDetail = {
  overview: string
  highlights: string[]
  stack: string[]
}

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
  details?: ProjectDetail
}

export const projects: Project[] = [
  {
    title: "Grid Design Website",
    slug: "grid-design-website",
    description:
      "Next.js agency site with dedicated Home/About/Services/Contact pages, JSON-driven content blocks, and reusable sections for testimonials, services, and contact forms.",
    status: "Live",
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
      "FastAPI backend that ingests a student profile (courses, GPA trend, projects, certifications) and returns top role recommendations with model scores using a serialized ML model.",
    status: "In Progress",
    tags: ["Python", "FastAPI", "ML", "LightGBM"],
    links: {
      github: "https://github.com/CSingh26/CarrerPath-AI",
    },
    details: {
      overview:
        "CareerPath-AI is an in-progress recommendation service built around a FastAPI API. It accepts a StudentProfile schema (courses, GPA trend, projects, certifications, extracurriculars), converts it into feature vectors (counts plus GPA mean and slope), and scores roles using a joblib-loaded model stored at data/models/careerpath_lgb.pkl. The API exposes a health check and a /api/recommend-role endpoint that returns the top three roles with probability scores.",
      highlights: [
        "Pydantic schemas define StudentProfile inputs and RoleRecommendation outputs.",
        "Feature engineering computes counts, GPA mean, and GPA trend slope.",
        "Model loader uses joblib with label-aware probability mapping.",
        "FastAPI router exposes /api/health and /api/recommend-role endpoints.",
        "ML toolchain includes LightGBM, CatBoost, transformers, and SHAP for experimentation.",
      ],
      stack: ["Python", "FastAPI", "Pydantic", "LightGBM", "Scikit-learn", "Joblib"],
    },
  },
  {
    title: "quiz-app",
    slug: "quiz-app",
    description:
      "Full-stack quiz platform for instructors and students with room creation, test module uploads, timers, and live leaderboards backed by AWS S3 and MongoDB.",
    status: "Completed",
    tags: ["Node.js", "Express.js", "MongoDB", "AWS"],
    links: {
      github: "https://github.com/CSingh26/quiz-app",
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
    status: "In Progress",
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
