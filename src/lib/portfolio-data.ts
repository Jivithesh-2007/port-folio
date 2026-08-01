import certRedHat from "@/assets/certs/redhat-rh124.png.asset.json";
import certDcPython from "@/assets/certs/datacamp-python-fundamentals.png.asset.json";
import certDcGit from "@/assets/certs/datacamp-git-fundamentals.png.asset.json";
import certCiscoAi from "@/assets/certs/cisco-modern-ai.png.asset.json";
import certCiscoJs from "@/assets/certs/cisco-js-essentials.png.asset.json";
import certOpenCv from "@/assets/certs/opencv-bootcamp.png.asset.json";
import certHelsinki from "@/assets/certs/elements-of-ai.png.asset.json";
import certIbmData from "@/assets/certs/ibm-intro-data-concepts.png.asset.json";
import achRobofest from "@/assets/certs/robofest-gujarat.png.asset.json";
import { assetUrl } from "@/lib/asset-url";

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "timeline", label: "Timeline" },
  { id: "leetcode", label: "LeetCode" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", handle: "Jivithesh-2007", href: "https://github.com/Jivithesh-2007/" },
  { label: "LinkedIn", handle: "in/jivithesh", href: "https://www.linkedin.com/in/jivithesh/" },
  { label: "LeetCode", handle: "30aYsYXBXU", href: "https://leetcode.com/u/30aYsYXBXU/" },
  { label: "Email", handle: "jivithesh448@gmail.com", href: "mailto:jivithesh448@gmail.com" },
];

export const STATS = [
  { value: "9.38", label: "CGPA — B.Tech CSE" },
  { value: "3", label: "Internships completed" },
  { value: "10+", label: "Engineering projects" },
  { value: "46", label: "Verified credentials" },
];

/** Horizontal running skill rows — grouped so each marquee row reads coherently. */
export const SKILL_ROWS: { direction: "left" | "right"; items: string[] }[] = [
  {
    direction: "left",
    items: ["Python", "Java", "C", "MySQL", "JavaScript", "SQL Queries", "OOP", "DSA"],
  },
  {
    direction: "right",
    items: [
      "Frontend Development",
      "HTML5",
      "CSS3",
      "React.js",
      "Responsive UI",
      "Backend Development",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    direction: "left",
    items: [
      "Machine Learning",
      "Computer Vision",
      "OpenCV",
      "Data Science",
      "NumPy",
      "Pandas",
      "Git",
      "GitHub",
      "Linux",
      "Docker",
      "VS Code",
      "Postman",
    ],
  },
];

export const SKILL_GROUPS = [
  {
    code: "01",
    title: "Languages & Databases",
    summary: "Core programming foundation with strong problem-solving practice.",
    items: ["Python", "Java", "C", "MySQL", "JavaScript (ES6+)"],
  },
  {
    code: "02",
    title: "Frontend Engineering",
    summary: "Accessible, responsive interfaces built component-first.",
    items: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    code: "03",
    title: "Backend & APIs",
    summary: "Server logic, data modelling and integration workflows.",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "MySQL Schemas"],
  },
  {
    code: "04",
    title: "AI, ML & Data (Basics)",
    summary: "Applied fundamentals across models, vision and datasets.",
    items: ["Machine Learning", "Computer Vision", "OpenCV", "Data Science", "NumPy & Pandas"],
  },
  {
    code: "05",
    title: "Tools & Platforms",
    summary: "Everyday engineering workflow and delivery tooling.",
    items: ["Git", "GitHub", "Linux", "Docker", "VS Code", "Postman"],
  },
];

export const TOOLBELT = [
  "Git",
  "GitHub",
  "Linux",
  "Docker",
  "MySQL Workbench",
  "VS Code",
  "Postman",
  "Jupyter",
  "OpenCV",
  "Vite",
  "npm",
  "Figma",
];

export type Achievement = {
  code: string;
  title: string;
  org: string;
  date: string;
  result: string;
  detail: string;
  tags: string[];
  image?: string;
  highlights: string[];
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    code: "A_01",
    title: "Aurelion 24-Hour Hackathon",
    org: "Karunya University — IEEE Computer Society & KITS ACM Student Chapter",
    date: "Feb 2026",
    result: "Top 12 Finalist",
    detail:
      "Secured a place in the top 12 teams of the 24-Hour Aurelion Hackathon, held as part of the 3-Day AI Innovation Bootcamp powered by ElevenLabs and co-sponsored by featherless.ai.",
    tags: ["AI Innovation", "Hackathon", "24 Hours", "Team Build"],
    highlights: [
      "Top 12 of the 24-Hour Aurelion Hackathon leaderboard.",
      "Part of the 3-Day AI Innovation Bootcamp at Karunya University.",
      "Powered by ElevenLabs, co-sponsored by featherless.ai.",
      "Organised by the IEEE Computer Society and KITS ACM Student Chapter.",
    ],
  },
  {
    code: "A_02",
    title: "RoboFest Gujarat 5.0 Competition",
    org: "Gujarat Council on Science & Technology (GUJCOST), DST — Government of Gujarat",
    date: "Dec 2025",
    result: "Round 2 Winner",
    detail:
      "Advanced as a Round 2 (Level-II Proof of Concept) winner at Senior Level in the category Autonomous Underwater Vehicle Robot, held at the International Automobile Centre of Excellence, Gandhinagar.",
    tags: ["Autonomous Robotics", "AUV", "Proof of Concept", "Senior Level"],
    image: assetUrl(achRobofest.url),
    highlights: [
      "Round 2 (Level-II Proof of Concept) winner at Senior Level.",
      "Category: Autonomous Underwater Vehicle Robot.",
      "Held at the International Automobile Centre of Excellence, Gandhinagar (28–30 Dec 2025).",
      "Organised by GUJCOST, Dept. of Science & Technology, Government of Gujarat.",
      "Team of four, mentored by Dr. S. Jeba Priya, Karunya University.",
    ],
  },
];


export type Project = {
  spec: string;
  category: "FULLSTACK" | "AI & ROBOTICS" | "AI & ALGORITHMIC" | "FRONTEND";
  title: string;
  tagline: string;
  description: string;
  overview: string;
  highlights: string[];
  role: string;
  status: string;
  stack: string[];
  extra: number;
  extraStack: string[];
};

export const PROJECTS: Project[] = [
  {
    spec: "SPEC_01",
    category: "FULLSTACK",
    title: "SERPOracle – AI-Powered SEO Intelligence",
    tagline: "AI-powered SEO analytics & competitor intelligence platform",
    description:
      "AI-powered SEO analytics platform for rank tracking, keyword monitoring and competitor intelligence.",
    overview:
      "SERPOracle is an AI-powered SEO analytics platform that helps users analyse search engine rankings, monitor keyword performance, track competitors and generate actionable optimisation insights using AI-driven data analysis. It enables businesses to improve online visibility and make data-driven SEO decisions.",
    highlights: [
      "Tracks keyword rankings and search trends over time with historical comparisons.",
      "Competitor performance monitoring across shared keyword sets.",
      "AI-generated optimisation recommendations from ranking and content signals.",
      "Dashboard-first reporting so non-technical teams can act on the data.",
    ],
    role: "Full-stack design, data pipeline and AI integration",
    status: "Active build",
    stack: ["React", "Node.js", "AI APIs"],
    extra: 4,
    extraStack: ["Express.js", "REST APIs", "Charting", "MySQL"],
  },
  {
    spec: "SPEC_02",
    category: "AI & ALGORITHMIC",
    title: "EchoVerge – AI Mental Wellness & Emotion Analysis",
    tagline: "NLP emotion detection with personalised wellness insights",
    description:
      "AI emotion analysis platform that reads emotion from text and returns personalised wellness insights.",
    overview:
      "EchoVerge is an AI-based emotion analysis and mental wellness platform that detects emotions from user text using Natural Language Processing and provides personalised insights, mood tracking and supportive recommendations to promote emotional well-being.",
    highlights: [
      "NLP pipeline that classifies emotion signals from free-form user text.",
      "Mood tracking timeline that surfaces patterns across entries.",
      "Personalised, supportive recommendations tuned to detected emotion.",
      "Machine learning refinements to raise detection accuracy and engagement.",
    ],
    role: "NLP modelling and full-stack implementation",
    status: "Active build",
    stack: ["Python", "NLP", "Machine Learning"],
    extra: 3,
    extraStack: ["Scikit-learn", "React", "REST APIs"],
  },
  {
    spec: "SPEC_03",
    category: "AI & ROBOTICS",
    title: "NIVIBOT – Autonomous Underwater Robot",
    tagline: "Autonomous navigation and obstacle avoidance underwater",
    description:
      "Autonomous underwater robotic system capable of intelligent navigation and obstacle avoidance.",
    overview:
      "NIVIBOT is an autonomous underwater vehicle prototype built for the RoboFest Gujarat 5.0 competition. It combines sensor-driven decision logic with machine learning classification to navigate, hold depth and avoid obstacles without operator input.",
    highlights: [
      "Decision-tree based navigation logic driven by live sensor input.",
      "Obstacle detection and avoidance routines tuned in test runs.",
      "Advanced to Round 2 / Level-II Proof of Concept at Senior Level.",
      "Built and tested as a four-member engineering team.",
    ],
    role: "Control logic and ML classification",
    status: "Competition prototype",
    stack: ["Python", "Machine Learning", "Decision Trees"],
    extra: 5,
    extraStack: ["OpenCV", "Sensor Fusion", "Arduino", "NumPy", "Embedded C"],
  },
  {
    spec: "SPEC_04",
    category: "FULLSTACK",
    title: "BackBenchers – EdTech Quiz Platform",
    tagline: "Gamified learning for classroom-scale quizzes",
    description:
      "Innovative web-based quiz platform transforming traditional learning into a gamified experience.",
    overview:
      "BackBenchers turns revision into a game. Students move through timed question sets with instant feedback, streaks and score progression, while the structure keeps content easy for educators to extend.",
    highlights: [
      "Timed question flow with instant scoring and feedback.",
      "Gamified streaks and progression to keep learners engaged.",
      "Content structure designed for quick topic authoring.",
      "Fully responsive layout for phone-first classroom use.",
    ],
    role: "Frontend architecture and interaction design",
    status: "Shipped",
    stack: ["HTML5", "CSS3", "JavaScript"],
    extra: 3,
    extraStack: ["LocalStorage", "Responsive UI", "Animations"],
  },
  {
    spec: "SPEC_05",
    category: "AI & ALGORITHMIC",
    title: "Personalized Recommendation Engine",
    tagline: "Real-time preference matching, Netflix-style",
    description:
      "Recommendation engine inspired by Netflix and Amazon calculating real-time preference matches.",
    overview:
      "A recommendation engine that scores catalogue items against a live user preference profile, ranking results in real time as the user interacts — an applied study of the logic behind Netflix and Amazon style discovery.",
    highlights: [
      "Weighted similarity scoring across multiple item attributes.",
      "Real-time re-ranking as preferences shift during a session.",
      "Transparent match percentages surfaced in the UI.",
      "Zero-dependency implementation in vanilla ES6+.",
    ],
    role: "Algorithm design and interface",
    status: "Shipped",
    stack: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    extra: 3,
    extraStack: ["Similarity Scoring", "DOM APIs", "State Handling"],
  },
  {
    spec: "SPEC_06",
    category: "FULLSTACK",
    title: "AI-Powered Education Platform",
    tagline: "Personalised learning plans generated from goals",
    description:
      "Full-stack AI-education platform generating personalized learning plans based on goals and skills.",
    overview:
      "A full-stack platform that takes a learner's goals, current skill level and available time, then generates a structured study plan with milestones and resource suggestions.",
    highlights: [
      "Goal and skill intake that shapes the generated plan.",
      "Milestone breakdown with pacing across weeks.",
      "Express API layer separating generation logic from the UI.",
      "Persisted plans so learners can resume progress.",
    ],
    role: "Backend logic and API integration",
    status: "Shipped",
    stack: ["Node.js", "Express.js", "HTML5"],
    extra: 4,
    extraStack: ["REST APIs", "MySQL", "Auth", "CSS3"],
  },
  {
    spec: "SPEC_07",
    category: "FRONTEND",
    title: "YouTube Clone – UI Replication",
    tagline: "Pixel-accurate layout study",
    description:
      "Front-end UI replication of the YouTube homepage focusing on pixel-perfect alignment.",
    overview:
      "A disciplined layout exercise rebuilding the YouTube homepage from scratch — grid behaviour, sidebar states and card density — to sharpen precision with pure CSS.",
    highlights: [
      "Responsive video grid matching original breakpoints.",
      "Collapsible sidebar and header interaction states.",
      "Flexbox and grid composition without frameworks.",
      "Attention to spacing, typography scale and hover states.",
    ],
    role: "Frontend implementation",
    status: "Shipped",
    stack: ["HTML5", "CSS3", "Flexbox"],
    extra: 2,
    extraStack: ["CSS Grid", "Responsive Design"],
  },
  {
    spec: "SPEC_08",
    category: "AI & ALGORITHMIC",
    title: "AI Neural Core – Deep Learning",
    tagline: "Neural network fundamentals, built from the ground up",
    description:
      "Advanced machine learning implementation exploring neural networks and deep learning architectures.",
    overview:
      "An exploration of neural network internals — layer composition, activation behaviour and training dynamics — implemented and benchmarked to build intuition beyond library abstractions.",
    highlights: [
      "Layered architectures trained on classification datasets.",
      "Activation and optimiser comparisons with logged metrics.",
      "Vectorised computation with NumPy for speed.",
      "Reusable training loop structure for further experiments.",
    ],
    role: "Model implementation and evaluation",
    status: "Research build",
    stack: ["Python", "TensorFlow", "NumPy"],
    extra: 3,
    extraStack: ["Keras", "Matplotlib", "Pandas"],
  },
  {
    spec: "SPEC_09",
    category: "FULLSTACK",
    title: "Amazon Clone – E-Commerce Platform",
    tagline: "Cart-to-checkout commerce flow",
    description: "Full-stack e-commerce application replicating Amazon's core functionality.",
    overview:
      "A full-stack commerce build covering catalogue browsing, cart state, and checkout flow with a React frontend against an Express API.",
    highlights: [
      "Product catalogue with search and category filtering.",
      "Persistent cart state and quantity handling.",
      "Express API endpoints for products and orders.",
      "Componentised React UI with reusable primitives.",
    ],
    role: "Full-stack development",
    status: "Shipped",
    stack: ["React", "Node.js", "Express"],
    extra: 3,
    extraStack: ["REST APIs", "MySQL", "Responsive UI"],
  },
  {
    spec: "SPEC_10",
    category: "FRONTEND",
    title: "Quiz Master – Interactive Quiz Application",
    tagline: "Dynamic question generation with analytics",
    description: "Interactive quiz platform with dynamic question generation, scoring, and analytics.",
    overview:
      "A React quiz application with dynamically generated question sets, live scoring and a post-attempt analytics view highlighting weak areas.",
    highlights: [
      "Dynamic question generation across topic pools.",
      "Redux-managed attempt state and scoring.",
      "Post-quiz analytics summarising accuracy by topic.",
      "Keyboard-friendly, accessible interaction model.",
    ],
    role: "Frontend architecture",
    status: "Shipped",
    stack: ["React", "Redux", "HTML5"],
    extra: 3,
    extraStack: ["Chart Rendering", "CSS3", "Component Design"],
  },
];

export type TimelineEntry = {
  kind: "WORK" | "EDUCATION";
  period: string;
  role: string;
  org: string;
  location: string;
  summary: string;
  points: string[];
};

export const TIMELINE: TimelineEntry[] = [
  {
    kind: "WORK",
    period: "Nov 2025 – Jan 2026",
    role: "Internship Trainee",
    org: "Codec Technologies India",
    location: "Coimbatore, TN (Remote)",
    summary:
      "Serving as a Full Stack Development Intern focusing on real-world web application development.",
    points: [
      "Gaining hands-on experience with HTML, CSS, JavaScript, React.js, Node.js, and databases.",
      "Enhancing skills in frontend design, backend logic, API integration, and project deployment.",
      "Collaborating with a dynamic team in a startup environment to deliver innovative solutions.",
    ],
  },
  {
    kind: "WORK",
    period: "Sep 2025 – Oct 2025",
    role: "Internship Trainee",
    org: "CODTECH IT SOLUTIONS",
    location: "Coimbatore, TN (Remote)",
    summary:
      "Developed engaging front-end interfaces using HTML, CSS, and JavaScript to enhance user experience.",
    points: [
      "Assisted in building backend logic and integrating APIs to support application functionality.",
      "Gained hands-on experience with project structure, version control, and deployment processes.",
      "Collaborated with team members to understand and implement real-world software workflows.",
    ],
  },
  {
    kind: "WORK",
    period: "2025 – Present",
    role: "Trainee",
    org: "IT Training Hub – Karunya University",
    location: "Coimbatore, Tamil Nadu",
    summary:
      "Enrolled in the IT Training Hub program at Karunya University.",
    points: [
      "Developing industry-relevant technical skills through structured training and hands-on lab sessions.",
      "Working on real-world problem statements with guidance from experienced faculty and mentors.",
    ],
  },
  {
    kind: "EDUCATION",
    period: "Jun 2025 – Jun 2029",
    role: "B.Tech – Computer Science & Engineering",
    org: "Karunya University",
    location: "Coimbatore, Tamil Nadu",
    summary:
      "Undergraduate student in Computer Science and Engineering, driven by a passion for software development and emerging technologies.",
    points: [
      "Academic Performance: Outstanding CGPA of 9.38.",
      "Proactively learning full-stack paradigms, software logic flow, and system programming.",
    ],
  },
];

export type Certification = {
  issuer: string;
  title: string;
  date: string;
  id?: string;
  group: "AI & GenAI" | "Python & Data Science" | "DataCamp" | "Google & Cloud" | "Git & Frontend";
  image?: string;
};

const CERT_IMAGES: Record<string, string> = {
  "RED HAT|Red Hat System Administration": assetUrl(certRedHat.url),
  "DATACAMP|Python Programming Fundamentals": assetUrl(certDcPython.url),
  "DATACAMP|Git Fundamentals": assetUrl(certDcGit.url),
  "CISCO|Introduction To Modern AI": assetUrl(certCiscoAi.url),
  "CISCO|Javascript Essentials 1": assetUrl(certCiscoJs.url),
  "OPENCV UNIVERSITY|OpenCV Bootcamp": assetUrl(certOpenCv.url),
  "UNIVERSITY OF HELSINKI|Introduction to Artificial Intelligence": assetUrl(certHelsinki.url),
  "IBM SKILLSBUILD|Introduction to Data Concepts": assetUrl(certIbmData.url),
};

const CERTIFICATION_LIST: Certification[] = [
  { issuer: "IBM SKILLSBUILD", title: "Introduction to Data Concepts", date: "JUL 2026", id: "ALM-COURSE_4058922", group: "Python & Data Science" },
  { issuer: "EDUTA.ORG", title: "Claude AI for Beginners: A Simple Guide to Getting Started", date: "JUN 2026", group: "AI & GenAI" },
  { issuer: "IBM", title: "Web Development Basics", date: "MAY 2026", group: "Git & Frontend" },
  { issuer: "ANTHROPIC", title: "Claude 101", date: "MAY 2026", group: "AI & GenAI" },
  { issuer: "GOOGLE", title: "Google Cloud Digital Leader", date: "MAY 2026", id: "f9a12b30f3e34ab4811be974b497f8b7", group: "Google & Cloud" },
  { issuer: "CAREER CRAFT ACADEMY", title: "Cyberops", date: "MAR 2026", group: "Git & Frontend" },
  { issuer: "RED HAT", title: "Red Hat System Administration", date: "MAR 2026", group: "Git & Frontend" },
  { issuer: "DATACAMP", title: "Python Toolbox", date: "JAN 2026", group: "DataCamp" },
  { issuer: "DATACAMP", title: "Data Types in Python", date: "JAN 2026", group: "DataCamp" },
  { issuer: "DATACAMP", title: "Intermediate Python for Developers", date: "JAN 2026", group: "DataCamp" },
  { issuer: "DATACAMP", title: "Python Programming Fundamentals", date: "JAN 2026", group: "DataCamp" },
  { issuer: "DATACAMP", title: "Introduction to Python for Developers", date: "JAN 2026", group: "DataCamp" },
  { issuer: "DATACAMP", title: "Git Fundamentals", date: "JAN 2026", group: "DataCamp" },
  { issuer: "DATACAMP", title: "Advanced Git", date: "JAN 2026", group: "DataCamp" },
  { issuer: "DATACAMP", title: "Introduction to GitHub Concepts", date: "JAN 2026", group: "DataCamp" },
  { issuer: "DATACAMP", title: "Intermediate Git", date: "JAN 2026", group: "DataCamp" },
  { issuer: "DATACAMP", title: "Introduction to Git", date: "JAN 2026", group: "DataCamp" },
  { issuer: "MATLAB@UCL", title: "MATLAB Onramp", date: "JAN 2026", group: "Python & Data Science" },
  { issuer: "GOVERNMENT OF GUJARAT", title: "RoboFest Gujarat 5.0 – Ideation & Proof of Concept", date: "DEC 2025", group: "AI & GenAI" },
  { issuer: "SIMPLILEARN", title: "Python For Beginners", date: "JAN 2026", group: "Python & Data Science" },
  { issuer: "GOOGLE", title: "Gemini Certified Student", date: "DEC 2025", group: "Google & Cloud" },
  { issuer: "SIMPLILEARN", title: "Introduction To Generative AI Studio", date: "DEC 2025", group: "AI & GenAI" },
  { issuer: "SIMPLILEARN", title: "Introduction to Prompt Engineering with GitHub Copilot", date: "DEC 2025", group: "AI & GenAI" },
  { issuer: "IEEE COMPUTER SOCIETY", title: "MindSync", date: "SEP 2025", group: "AI & GenAI" },
  { issuer: "CISCO", title: "Introduction To Modern AI", date: "NOV 2025", group: "AI & GenAI" },
  { issuer: "CISCO", title: "Python Essentials 1", date: "NOV 2025", group: "Python & Data Science" },
  { issuer: "CISCO", title: "Javascript Essentials 1", date: "NOV 2025", group: "Git & Frontend" },
  { issuer: "MICROSOFT", title: "Introduction To Prompt Engineering Using Copilot", date: "OCT 2025", group: "AI & GenAI" },
  { issuer: "GOOGLE CLOUD SKILLS BOOST", title: "Introduction To Generative AI Studio", date: "OCT 2025", group: "Google & Cloud" },
  { issuer: "CODTECH IT SOLUTIONS", title: "Internship On C Programming", date: "OCT 2025", group: "Git & Frontend" },
  { issuer: "GOOGLE CLOUD SKILLS BOOST", title: "Gemini Art Forge", date: "OCT 2025", group: "Google & Cloud" },
  { issuer: "CSE KARUNYA", title: "Digital Campus 2.0 Hacksprint", date: "OCT 2025", id: "G-K_Hacks_2025_1352", group: "Git & Frontend" },
  { issuer: "HACKERRANK", title: "CSS Basics", date: "OCT 2025", group: "Git & Frontend" },
  { issuer: "MICROSOFT", title: "Introduction to Copilot for Startups", date: "OCT 2025", group: "AI & GenAI" },
  { issuer: "GOOGLE CLOUD SKILLS BOOST", title: "Introduction To Generative AI", date: "OCT 2025", group: "Google & Cloud" },
  { issuer: "SIMPLILEARN", title: "C Programming Basics", date: "OCT 2025", group: "Git & Frontend" },
  { issuer: "OPENCV UNIVERSITY", title: "OpenCV Bootcamp", date: "OCT 2025", group: "Python & Data Science" },
  { issuer: "OPENCV UNIVERSITY", title: "Python For Beginners", date: "OCT 2025", group: "Python & Data Science" },
  { issuer: "INTEL", title: "AI APPRECIATE", date: "OCT 2025", group: "AI & GenAI" },
  { issuer: "INTEL", title: "AI AWARE", date: "OCT 2025", group: "AI & GenAI" },
  { issuer: "CISCO", title: "CSS Essentials", date: "SEP 2025", group: "Git & Frontend" },
  { issuer: "CISCO", title: "HTML Essentials", date: "SEP 2025", group: "Git & Frontend" },
  { issuer: "UNIVERSITY OF HELSINKI", title: "Introduction to Artificial Intelligence", date: "AUG 2025", group: "AI & GenAI" },
  { issuer: "KAGGLE", title: "Python", date: "AUG 2025", group: "Python & Data Science" },
  { issuer: "KAGGLE", title: "Intro To Programming", date: "AUG 2025", group: "Python & Data Science" },
  { issuer: "KAGGLE", title: "Intro To Machine Learning", date: "AUG 2025", group: "Python & Data Science" },
  { issuer: "ORACLE", title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", date: "AUG 2025", group: "Google & Cloud" },
];

/** Certificates with a scan attached float to the front of the grid. */
export const CERTIFICATIONS: Certification[] = CERTIFICATION_LIST.map((c) => {
  const image = CERT_IMAGES[`${c.issuer}|${c.title}`];
  return image ? { ...c, image } : c;
});

export const FEATURED_CERTIFICATIONS = CERTIFICATIONS.filter((c) => c.image);
export const OTHER_CERTIFICATIONS = CERTIFICATIONS.filter((c) => !c.image);
