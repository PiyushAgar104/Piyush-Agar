export const PROFILE = {
  name: "Piyush Agar",
  role: "AI/ML Developer · Data Analyst · Full-Stack Builder",
  description:
    "Building intelligent applications, data-driven experiences and digital products that solve real-world problems.",
  education: "B.Tech — Artificial Intelligence & Data Science",
  university: "Poornima University, Jaipur",
  intro:
    "I'm Piyush Agar, an AI/ML developer and data analyst who builds practical digital solutions at the intersection of artificial intelligence, data and software engineering. I enjoy transforming complex problems into useful applications through machine learning, data-driven insights and thoughtful full-stack development.",
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Analytics",
    "Full-Stack Development",
    "Computer Vision",
  ],
  linkedin: "https://linkedin.com/in/piyush-agar-509573283/",
  github: "https://github.com/PiyushAgar104/",
};

export const PROJECTS = [
  {
    id: 1,
    index: "01",
    title: "Social Media Analysis AI",
    subtitle: "AI-powered social media intelligence platform",
    description:
      "An AI-powered social media intelligence platform focused on social sentiment, misinformation detection, trend analysis, and early warning insights.",
    tags: ["Sentiment Analysis", "Misinformation Detection", "Trend Analysis", "Early Warning"],
    image: "/assets/projects/social-media-analysis-ai.jpg",
    live: "https://social-media-analysis-ai.vercel.app/",
    github: "https://github.com/PiyushAgar104/Social-Media-Analysis.git",
  },
  {
    id: 2,
    index: "02",
    title: "DataLens AI",
    subtitle: "AI-assisted data analysis experience",
    description:
      "An AI-assisted data analysis experience designed to make datasets easier to explore and understand through visual insights.",
    tags: ["Data Analysis", "Visual Insights", "AI Assistant"],
    image: "/assets/projects/data-lens-ai.jpg",
    live: "https://data-lens-ai-project.vercel.app/",
    github: null,
  },
  {
    id: 3,
    index: "03",
    title: "GOD'S EYE",
    subtitle: "AI-powered suspicious-activity monitoring prototype",
    description:
      "An AI-powered suspicious-activity monitoring prototype designed around computer vision, visual evidence, and human verification.",
    tags: ["Computer Vision", "Visual Evidence", "Human Verification"],
    image: "/assets/projects/gods-eye.jpg",
    live: "https://godseye-system.vercel.app/",
    github: null,
  },
];

export const SERVICES = [
  {
    id: "ai-ml",
    code: "A",
    title: "AI & Machine Learning",
    short: "AI applications, ML models, predictive analytics, and intelligent automation.",
    price: "₹3,000+",
    estimate: "Indicative delivery: 1–3 weeks depending on scope",
    overview:
      "From idea to a working intelligent system — I design and build AI applications, train and evaluate ML models, and wire up predictive analytics and automation that fit your product.",
    deliverables: [
      "AI application development",
      "ML model building & evaluation",
      "Predictive analytics",
      "Intelligent automation workflows",
    ],
    projects: ["Social Media Analysis AI", "DataLens AI"],
  },
  {
    id: "fullstack",
    code: "B",
    title: "Full-Stack Development",
    short: "Responsive websites, React interfaces, Node.js applications, REST APIs, and database integration.",
    price: "₹2,500+",
    estimate: "Indicative delivery: 1–4 weeks depending on scope",
    overview:
      "Complete product builds end to end — responsive websites and React interfaces on the front, Node.js applications, REST APIs and database integration behind them.",
    deliverables: [
      "Responsive websites",
      "React interfaces",
      "Node.js applications",
      "REST APIs",
      "Database integration",
    ],
    projects: ["Social Media Analysis AI", "DataLens AI", "GOD'S EYE"],
  },
  {
    id: "cv",
    code: "C",
    title: "Computer Vision",
    short: "OpenCV applications, image processing, object detection integrations, and real-time vision prototypes.",
    price: "₹3,000+",
    estimate: "Indicative delivery: 2–4 weeks depending on scope",
    overview:
      "Vision systems that see and act — OpenCV applications, image processing pipelines, object detection integrations and real-time vision prototypes built for your use case.",
    deliverables: [
      "OpenCV applications",
      "Image processing pipelines",
      "Object detection integrations",
      "Real-time vision prototypes",
    ],
    projects: ["GOD'S EYE"],
  },
  {
    id: "uiux",
    code: "D",
    title: "UI/UX & Frontend Design",
    short: "Modern website interfaces, responsive frontend implementation, polished layouts, and interactive animations.",
    price: "₹1,500+",
    estimate: "Indicative delivery: 1–2 weeks depending on scope",
    overview:
      "Interfaces that feel considered — modern website design, responsive frontend implementation, polished layouts and interactive animations with attention to detail.",
    deliverables: [
      "Modern website interfaces",
      "Responsive frontend implementation",
      "Polished layouts",
      "Interactive animations",
    ],
    projects: ["DataLens AI"],
  },
];

export const SKILLS = [
  {
    id: "programming",
    label: "Programming",
    items: [
      { label: "Python", icon: "python" },
      { label: "Java", icon: "java" },
      { label: "JavaScript", icon: "javascript" },
      { label: "SQL", icon: "sql" },
    ],
  },
  {
    id: "aiml",
    label: "AI & Machine Learning",
    items: [
      { label: "Machine Learning", icon: "brain" },
      { label: "Data Analysis", icon: "chart" },
      { label: "Pandas", icon: "pandas" },
      { label: "NumPy", icon: "numpy" },
      { label: "scikit-learn", icon: "sklearn" },
    ],
  },
  {
    id: "cv",
    label: "Computer Vision",
    items: [
      { label: "OpenCV", icon: "opencv" },
      { label: "YOLO", icon: "yolo" },
      { label: "Image / Video Processing", icon: "film" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { label: "React", icon: "react" },
      { label: "HTML", icon: "html" },
      { label: "CSS", icon: "css" },
      { label: "Responsive UI", icon: "mobile" },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    items: [
      { label: "Node.js", icon: "node" },
      { label: "Express.js", icon: "express" },
      { label: "REST APIs", icon: "api" },
      { label: "FastAPI", icon: "fastapi" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    items: [
      { label: "MongoDB", icon: "mongo" },
      { label: "MySQL", icon: "mysql" },
      { label: "Firebase", icon: "firebase" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Deployment",
    items: [
      { label: "Git", icon: "git" },
      { label: "GitHub", icon: "github" },
      { label: "Vercel", icon: "vercel" },
      { label: "Docker", icon: "docker" },
    ],
  },
];

export const EXPERIENCE = [
  {
    id: "1",
    label: "2026",
    title: "Campus Ambassador — IIT Roorkee E'CELL",
    description: "Campus Ambassador for IIT Roorkee E-CELL for the 2026 cohort.",
  },
  {
    id: "2",
    label: "Campus",
    title: "PU-INCENT — Event Management",
    description: "Involvement in PU-INCENT and campus event management activities.",
  },
  {
    id: "3",
    label: "Build",
    title: "Hackathons & Project Development",
    description: "Hands-on project development through hackathon participation.",
  },
  {
    id: "4",
    label: "Community",
    title: "Open Source & Developer Community",
    description: "Open-source contribution and developer community participation.",
  },
];

export const BUDGETS = ["Under ₹5,000", "₹5,000 – ₹15,000", "₹15,000 – ₹30,000", "₹30,000+"];
