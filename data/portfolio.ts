import {
  Activity,
  BarChart3,
  BrainCircuit,
  Database,
  Factory,
  Gauge,
  GitBranch,
  LineChart,
  Plane,
  ShieldCheck,
  TrendingUp,
  Workflow
} from "lucide-react";

export const personal = {
  name: "BEL-KHSIRY YASSINE",
  role: "Data Analyst / Data Scientist / Business Analyst",
  location: "Marseille, France",
  education: "Master Data Science - Aix-Marseille Université",
  languages: ["Français", "Anglais", "Arabe"],
  github: "https://github.com/yassinebelkhsiry",
  email: "contact@yassine-bel-khsiry.fr",
  linkedin: "https://www.linkedin.com/in/yassine-bel-khsiry"
};

export const navItems = [
  { label: "Profil", href: "#apropos" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Expériences", href: "#experiences" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" }
];

export const heroKpis = [
  { label: "Disponibilité moteur simulée", value: "97,8 %", trend: "+4,6 pts" },
  { label: "Modèles ML comparés", value: "18", trend: "XGBoost, LSTM, RF" },
  { label: "Dashboards métier", value: "12", trend: "Power BI / Streamlit" },
  { label: "Données analysées", value: "2,4 M", trend: "lignes structurées" }
];

export const aboutStats = [
  { label: "Années d'études data", value: 5, suffix: "+" },
  { label: "Projets analytiques", value: 16, suffix: "" },
  { label: "Technologies maîtrisées", value: 24, suffix: "" },
  { label: "KPI industriels suivis", value: 42, suffix: "" }
];

export const skills = [
  { name: "Python", level: 94, icon: BrainCircuit, group: "Data Science" },
  { name: "SQL", level: 91, icon: Database, group: "Data Engineering" },
  { name: "Power BI", level: 88, icon: BarChart3, group: "BI" },
  { name: "Machine Learning", level: 90, icon: Activity, group: "IA" },
  { name: "Deep Learning", level: 82, icon: BrainCircuit, group: "IA" },
  { name: "NLP", level: 84, icon: Workflow, group: "IA générative" },
  { name: "TensorFlow", level: 78, icon: LineChart, group: "Framework" },
  { name: "PyTorch", level: 80, icon: BrainCircuit, group: "Framework" },
  { name: "Streamlit", level: 86, icon: Gauge, group: "Apps Data" },
  { name: "Tableau", level: 82, icon: BarChart3, group: "BI" },
  { name: "PostgreSQL", level: 85, icon: Database, group: "Base de données" },
  { name: "MySQL", level: 84, icon: Database, group: "Base de données" },
  { name: "Git", level: 83, icon: GitBranch, group: "Industrialisation" },
  { name: "Power Query", level: 87, icon: Workflow, group: "ETL" },
  { name: "Data Visualization", level: 92, icon: TrendingUp, group: "Analytics" },
  { name: "Business Intelligence", level: 90, icon: ShieldCheck, group: "Métier" }
];

export const projects = [
  {
    id: "aerospace",
    title: "Industrial Data Analysis - Aircraft Engine Monitoring",
    subtitle: "Maintenance prédictive aéronautique sur NASA CMAPSS",
    icon: Plane,
    accent: "#38BDF8",
    image:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1600&q=80",
    story:
      "Conception d'un cockpit analytique pour suivre l'état de santé de turbofan engines, détecter les dérives capteurs et prioriser les inspections avant dégradation critique.",
    impact:
      "Simulation d'une réduction de 18 % des alertes tardives et priorisation automatique des cycles moteurs à risque.",
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "LSTM", "Plotly", "Streamlit"],
    kpis: [
      { label: "ROC-AUC anomalie", value: "0,94" },
      { label: "RUL MAE", value: "12,7 cycles" },
      { label: "Capteurs surveillés", value: "21" }
    ]
  },
  {
    id: "worldcup",
    title: "FIFA World Cup Analytics (1930-2022)",
    subtitle: "Plateforme d'insights football et performance historique",
    icon: BarChart3,
    accent: "#34D399",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1600&q=80",
    story:
      "Analyse de l'évolution des buts, affluences, nations dominantes et écarts de performance entre les éditions 2018 et 2022.",
    impact:
      "Dashboard interactif permettant de comparer les tendances sportives par période, pays et phase de compétition.",
    tech: ["Python", "Power BI", "D3.js", "Recharts", "SQL", "Storytelling"],
    kpis: [
      { label: "Éditions couvertes", value: "22" },
      { label: "Matchs consolidés", value: "964" },
      { label: "Nations analysées", value: "80+" }
    ]
  },
  {
    id: "chatbot",
    title: "AI Chatbot - Assistant Universitaire",
    subtitle: "Chaîne NLP pour automatiser l'accès aux documents académiques",
    icon: BrainCircuit,
    accent: "#A78BFA",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    story:
      "Prototype d'assistant conversationnel capable de transformer des PDF institutionnels en base JSON exploitable, puis de répondre via modèles Qwen et LLaMA 3 ajustés avec LoRA.",
    impact:
      "Réduction du temps de recherche documentaire et génération de réponses contextualisées avec traçabilité des sources.",
    tech: ["Qwen", "LLaMA 3", "LoRA", "NLP", "Python", "PDF parsing", "JSON"],
    kpis: [
      { label: "Temps de réponse", value: "1,8 s" },
      { label: "Documents indexés", value: "420" },
      { label: "Exactitude QA", value: "87 %" }
    ]
  },
  {
    id: "fraud",
    title: "Fraud Detection & Credit Scoring",
    subtitle: "Risk analytics bancaire et scoring décisionnel",
    icon: ShieldCheck,
    accent: "#FBBF24",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    story:
      "Pipeline de feature engineering et modèles supervisés pour détecter les transactions suspectes, scorer le risque et expliquer les facteurs de décision.",
    impact:
      "Détection des profils à risque avec seuils pilotables pour limiter les faux positifs côté métier.",
    tech: ["XGBoost", "Logistic Regression", "SHAP", "SQL", "ROC-AUC", "Power BI"],
    kpis: [
      { label: "ROC-AUC", value: "0,96" },
      { label: "Faux positifs", value: "-22 %" },
      { label: "Variables créées", value: "36" }
    ]
  }
];

export const experiences = [
  {
    company: "Airbus Atlantic",
    role: "Projet analytics industriel",
    period: "Aéronautique & performance opérationnelle",
    icon: Plane,
    missions: [
      "Structuration d'indicateurs de suivi industriel et consolidation de données opérationnelles.",
      "Analyse des écarts, visualisation des tendances et priorisation des axes d'amélioration.",
      "Contribution à une culture KPI orientée fiabilité, qualité et décision rapide."
    ],
    tech: ["Power BI", "Python", "Excel avancé", "KPI industriels"],
    result: "Lecture plus rapide des signaux faibles et meilleure visibilité sur les dérives."
  },
  {
    company: "Société Générale",
    role: "Analytics bancaire & reporting",
    period: "Finance, risque et pilotage métier",
    icon: ShieldCheck,
    missions: [
      "Analyse de données métier pour le suivi d'activité et la préparation de reporting décisionnel.",
      "Nettoyage, contrôle qualité et interprétation d'indicateurs financiers.",
      "Construction de synthèses exploitables pour des profils non techniques."
    ],
    tech: ["SQL", "Excel", "Power Query", "Reporting"],
    result: "Amélioration de la lisibilité des performances et des points de contrôle."
  },
  {
    company: "Laboratoire MIPA",
    role: "Recherche appliquée Data Science",
    period: "Modélisation, expérimentation et IA",
    icon: Factory,
    missions: [
      "Expérimentation de modèles statistiques et machine learning sur jeux de données structurés.",
      "Documentation des résultats, comparaison méthodologique et validation des hypothèses.",
      "Préparation d'analyses reproductibles avec Python et notebooks."
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "Visualisation"],
    result: "Approche expérimentale plus robuste et analyses reproductibles."
  }
];

export const engineSeries = [
  { cycle: 20, temperature: 642, vibration: 0.21, rul: 154 },
  { cycle: 45, temperature: 648, vibration: 0.25, rul: 131 },
  { cycle: 70, temperature: 653, vibration: 0.31, rul: 104 },
  { cycle: 95, temperature: 661, vibration: 0.38, rul: 78 },
  { cycle: 120, temperature: 676, vibration: 0.49, rul: 51 },
  { cycle: 145, temperature: 691, vibration: 0.68, rul: 24 },
  { cycle: 170, temperature: 709, vibration: 0.86, rul: 8 }
];

export const worldCupSeries = [
  { year: "1930", goals: 70, attendance: 590 },
  { year: "1970", goals: 95, attendance: 1604 },
  { year: "1998", goals: 171, attendance: 2785 },
  { year: "2014", goals: 171, attendance: 3429 },
  { year: "2018", goals: 169, attendance: 3031 },
  { year: "2022", goals: 172, attendance: 3404 }
];

export const riskSeries = [
  { bucket: "A", score: 18, fraud: 0.3 },
  { bucket: "B", score: 31, fraud: 0.9 },
  { bucket: "C", score: 47, fraud: 2.4 },
  { bucket: "D", score: 64, fraud: 5.7 },
  { bucket: "E", score: 82, fraud: 11.6 }
];
