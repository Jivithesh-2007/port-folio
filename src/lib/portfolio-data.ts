export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "timeline", label: "Timeline" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { value: "9.32", label: "CGPA — B.Tech CSE" },
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
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    code: "A_01",
    title: "Aurelion 24-Hour Hackathon",
    org: "Karunya Deemed University — IEEE Computer Society & KITS ACM Student Chapter",
    date: "Feb 2026",
    result: "Top 12 Finalist",
    detail:
      "Secured a place in the top 12 teams of the 24-Hour Aurelion Hackathon, held as part of the 3-Day AI Innovation Bootcamp powered by ElevenLabs and co-sponsored by featherless.ai.",
    tags: ["AI Innovation", "Hackathon", "24 Hours", "Team Build"],
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
  },
];


export type Project = {
  spec: string;
  category: "FULLSTACK" | "AI & ROBOTICS" | "AI & ALGORITHMIC" | "FRONTEND";
  title: string;
  description: string;
  stack: string[];
  extra: number;
};

export const PROJECTS: Project[] = [
  {
    spec: "SPEC_01",
    category: "AI & ROBOTICS",
    title: "NIVIBOT – Autonomous Underwater Robot",
    description:
      "Autonomous underwater robotic system capable of intelligent navigation and obstacle avoidance.",
    stack: ["Python", "Machine Learning", "Decision Trees"],
    extra: 5,
  },
  {
    spec: "SPEC_02",
    category: "FULLSTACK",
    title: "BackBenchers – EdTech Quiz Platform",
    description:
      "Innovative web-based quiz platform transforming traditional learning into a gamified experience.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    extra: 3,
  },
  {
    spec: "SPEC_03",
    category: "AI & ALGORITHMIC",
    title: "Personalized Recommendation Engine",
    description:
      "Recommendation engine inspired by Netflix and Amazon calculating real-time preference matches.",
    stack: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    extra: 3,
  },
  {
    spec: "SPEC_04",
    category: "FULLSTACK",
    title: "AI-Powered Education Platform",
    description:
      "Full-stack AI-education platform generating personalized learning plans based on goals and skills.",
    stack: ["Node.js", "Express.js", "HTML5"],
    extra: 4,
  },
  {
    spec: "SPEC_05",
    category: "FRONTEND",
    title: "YouTube Clone – UI Replication",
    description:
      "Front-end UI replication of the YouTube homepage focusing on pixel-perfect alignment.",
    stack: ["HTML5", "CSS3", "Flexbox"],
    extra: 2,
  },
  {
    spec: "SPEC_06",
    category: "AI & ALGORITHMIC",
    title: "AI Neural Core – Deep Learning",
    description:
      "Advanced machine learning implementation exploring neural networks and deep learning architectures.",
    stack: ["Python", "TensorFlow", "NumPy"],
    extra: 3,
  },
  {
    spec: "SPEC_07",
    category: "FULLSTACK",
    title: "Amazon Clone – E-Commerce Platform",
    description: "Full-stack e-commerce application replicating Amazon's core functionality.",
    stack: ["React", "Node.js", "Express"],
    extra: 3,
  },
  {
    spec: "SPEC_08",
    category: "FRONTEND",
    title: "Quiz Master – Interactive Quiz Application",
    description: "Interactive quiz platform with dynamic question generation, scoring, and analytics.",
    stack: ["React", "Redux", "HTML5"],
    extra: 3,
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
      "Enrolled in the IT Training Hub program at Karunya Institute of Technology and Sciences.",
    points: [
      "Developing industry-relevant technical skills through structured training and hands-on lab sessions.",
      "Working on real-world problem statements with guidance from experienced faculty and mentors.",
    ],
  },
  {
    kind: "EDUCATION",
    period: "Jun 2025 – Jun 2029",
    role: "B.Tech – Computer Science & Engineering",
    org: "Karunya Institute of Technology and Sciences",
    location: "Coimbatore, Tamil Nadu",
    summary:
      "Undergraduate student in Computer Science and Engineering, driven by a passion for software development and emerging technologies.",
    points: [
      "Academic Performance: Outstanding CGPA of 9.32.",
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
};

export const CERTIFICATIONS: Certification[] = [
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
