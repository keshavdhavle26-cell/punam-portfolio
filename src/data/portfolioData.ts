import { Project, SkillCategory, Certificate, ExperienceItem, EducationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Punam Keshav Dhavle',
  shortName: 'Punam',
  role: 'B.Tech. AI & ML Student | Cybersecurity Enthusiast | Full-Stack Developer',
  location: 'Pune, Maharashtra, India',
  email: 'keshavdhavle26@gmail.com',
  phone: '+91-9309130230',
  linkedin: 'https://www.linkedin.com/in/punam-dhavle-458193380',
  github: 'https://github.com/keshavdhavle26-cell',
  cyberGuardianRepo: 'https://github.com/keshavdhavle26-cell/cyberguardian-ai',
  careerPredictorLive: 'https://my-site-856sp93p-punamdhavle.wix-vibe.com',
  heroTagline: 'HELLO, I\'M PUNAM',
  heroHeadline: 'Building Intelligent. Building Secure.',
  heroHighlight: 'AI/ML × Cybersecurity',
  heroSubtitle: 'Third-year B.Tech. Artificial Intelligence & Machine Learning student building practical solutions across cybersecurity, full-stack development, computer vision, OCR, and AI/ML.',
};

export const QUICK_STATS = [
  { label: 'B.Tech AIML', value: 'Third Year' },
  { label: '9.11', value: 'Second Year SGPA' },
  { label: 'Cybersecurity', value: 'Focus Area' },
  { label: 'Full-Stack', value: 'Development' },
];

export const ABOUT_TEXT = `I'm a third-year B.Tech. Artificial Intelligence & Machine Learning student based in Pune with a strong interest in cybersecurity and practical software development.

I enjoy building systems that combine intelligent technologies, security, and modern web development.

My current work includes CyberGuardian AI, a cybersecurity operations platform, along with projects involving web development, intelligent decision systems, OCR, and ANPR workflows.

I am continuously improving my skills through hands-on projects, cybersecurity labs, and industry experience.`;

export const TIMELINE_ITEMS = [
  { year: '2021', title: 'Diploma in Computer Engineering', subtitle: 'A. Puranmal Lahoti Govt. Poly, Latur' },
  { year: '2025', title: 'Started B.Tech. AIML', subtitle: 'Zeal College of Engineering, Pune' },
  { year: '2026', title: 'Cybersecurity + Full-Stack Projects', subtitle: 'CyberGuardian AI & Practical Labs' },
  { year: 'CURRENT', title: 'Third Year B.Tech. AIML', subtitle: 'Active Projects & Opportunities' },
];

export const PROJECTS: Project[] = [
  {
    id: 'cyberguardian-ai',
    number: '01',
    isHero: true,
    title: 'CyberGuardian AI',
    subtitle: 'AI-Powered Cybersecurity Operations Platform',
    tech: ['React.js', 'FastAPI', 'Python', 'SQLModel', 'JWT', 'REST API'],
    description: 'CyberGuardian AI is a full-stack cybersecurity operations platform focused on security monitoring, log analysis, incident management, threat intelligence, and security operations.',
    features: [
      'User Registration & Role-based Access Control',
      'Secure Password Hashing (Bcrypt)',
      'JWT Authentication & Refresh Token Handling',
      'Protected API Endpoints & Session Management',
      'User Profile & Security Credentials Management',
      'Interactive Security Dashboard & Real-time Metrics',
      'Log Analyzer for Automated Log Parsing',
      'Incident Reports & Case Tracking',
      'Threat Intelligence Feed & Indicator Lookups',
      'AI Security Copilot Interface',
    ],
    githubUrl: 'https://github.com/keshavdhavle26-cell/cyberguardian-ai',
    architecture: {
      nodes: ['React Frontend', 'FastAPI REST API', 'Authentication / Services', 'SQLModel / Database'],
    },
    overview: 'CyberGuardian AI bridges full-stack engineering with security operations center (SOC) workflows. It provides security analysts with streamlined log parsing, threat intelligence query pipelines, and incident ticketing, designed to support future automated threat detection and SOC operations.',
    whatILearned: 'Gained hands-on mastery over building secure FastAPI backends, implementing robust JWT authentication flows, designing relational databases with SQLModel, connecting interactive React dashboards with REST APIs, and modeling SOC analyst workflows.',
  },
  {
    id: 'career-predictor',
    number: '02',
    title: 'Career Predictor',
    subtitle: 'Career Recommendation Web Application',
    tech: ['HTML', 'CSS', 'JavaScript', 'Logic Engines'],
    description: 'A web application designed to help students explore potential career paths based on their inputs using a logic-based recommendation approach.',
    liveUrl: 'https://my-site-856sp93p-punamdhavle.wix-vibe.com',
    overview: 'Built to guide secondary and higher-education students through career option mapping using multi-criteria assessment input.',
    whatILearned: 'Enhanced skills in decision-tree algorithm implementation, user-centric input UI design, and responsive layout styling.',
  },
  {
    id: 'password-strength-checker',
    number: '03',
    title: 'Password Strength Checker',
    subtitle: 'Security Rules Evaluation Utility',
    tech: ['Python', 'Web Development', 'Security Metrics'],
    description: 'Application designed to evaluate password strength using security rules including length, character variety, and complexity.',
    overview: 'Performs real-time entropy calculation and character diversity checks to provide clear, actionable feedback to end users on password resilience against brute-force attacks.',
    whatILearned: 'Deepened understanding of credential security rules, entropy calculation algorithms, and client-side real-time validation.',
  },
  {
    id: 'redstore',
    number: '04',
    title: 'RedStore',
    subtitle: 'Sports E-Commerce Website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'Sports shopping website focused on product presentation, usability, and user experience.',
    overview: 'Interactive front-end storefront with product filtering, dynamic cart management, and modern responsive e-commerce UI design.',
    whatILearned: 'Mastered DOM manipulation, CSS Grid/Flexbox layouts, cross-browser compatibility, and client-side state management.',
  },
  {
    id: 'metal-detector-arduino',
    number: '05',
    title: 'Metal Detector using Arduino',
    subtitle: 'Hardware & Circuit Engineering Project',
    tech: ['Arduino', 'Sensors', 'Basic Electronics', 'C++'],
    description: 'Hardware-based metal detection project using Arduino and sensors, applying basic electronics and circuit design concepts.',
    overview: 'Engineered an inductive sensing circuit with audio-visual alerts controlled via an Arduino microcontroller.',
    whatILearned: 'Practical experience with microcontrollers, analog/digital sensor signal processing, breadboard prototyping, and C++ embedded scripting.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'PROGRAMMING',
    skills: [
      { name: 'Python' },
      { name: 'C' },
      { name: 'C++' },
      { name: 'JavaScript' },
    ],
  },
  {
    title: 'WEB DEVELOPMENT',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React.js' },
    ],
  },
  {
    title: 'BACKEND & APIs',
    skills: [
      { name: 'FastAPI' },
      { name: 'REST APIs' },
      { name: 'Node.js' },
      { name: 'npm' },
    ],
  },
  {
    title: 'CYBERSECURITY',
    skills: [
      { name: 'Linux Fundamentals' },
      { name: 'Networking Fundamentals' },
      { name: 'Web Security Fundamentals' },
      { name: 'JWT Authentication' },
      { name: 'TryHackMe' },
    ],
  },
  {
    title: 'DATABASE',
    skills: [
      { name: 'SQLModel' },
    ],
  },
  {
    title: 'AI / COMPUTER VISION',
    skills: [
      { name: 'OCR' },
      { name: 'ANPR' },
      { name: 'AI/ML Fundamentals' },
    ],
  },
  {
    title: 'TOOLS',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'PlateScan OCR Curator' },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'VisionEdge AI Labs Pvt. Ltd.',
    position: 'Student Intern',
    department: 'Development Team',
    location: 'Pune, India',
    duration: '2 Months',
    dates: '15 July – 15 September',
    responsibilities: [
      'Studied the Automatic Number Plate Recognition (ANPR) workflow and OCR technology in detail.',
      'Performed OCR dataset cleaning, validation, and quality checking to improve model input accuracy.',
      'Verified vehicle number-plate images and annotations using PlateScan OCR Curator tool.',
      'Developed UI components for a cybersecurity project and contributed to login authentication and frontend-backend integration.',
      'Troubleshot backend port conflicts, CORS permission issues, and frontend-backend integration problems using VS Code, Node.js, and npm.',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech. in Artificial Intelligence & Machine Learning',
    institution: 'Zeal College of Engineering and Research',
    location: 'Pune',
    period: '2025 – Present',
    status: 'Third Year',
    score: 'Second Year SGPA: 9.11',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'A. Puranmal Lahoti Government Polytechnic',
    location: 'Latur',
    period: '2021 – 2025',
    status: 'Completed',
    score: '84.69%',
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cisco-cybersecurity',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '09 Jan 2026',
    filePath: '/certificates/cybersecurity.pdf',
    category: 'Cybersecurity',
    description: 'Foundational concepts of network security, threat landscape, cryptography basics, and defense strategies.',
  },
  {
    id: 'cisco-data-science',
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    date: '13 Jan 2026',
    filePath: '/certificates/data-science.pdf',
    category: 'Data Science & AI',
    description: 'Principles of data analytics, data collection, statistical reasoning, and data pipeline fundamentals.',
  },
  {
    id: 'cisco-modern-ai',
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    date: '13 Jan 2026',
    filePath: '/certificates/modern-ai.pdf',
    category: 'Artificial Intelligence',
    description: 'Overview of modern AI algorithms, machine learning paradigms, neural networks, and industrial applications.',
  },
  {
    id: 'simplilearn-cybersecurity-basics',
    title: 'Cyber Security Basics',
    issuer: 'Simplilearn SkillUp',
    date: '27 Jan 2026',
    code: '9766954',
    filePath: '/certificates/cyber-security-basics.pdf',
    category: 'Cybersecurity',
    description: 'Core concepts of information security, vulnerability identification, ethical hacking principles, and web security.',
  },
  {
    id: 'simplilearn-generative-ai',
    title: 'Introduction to Generative AI Studio',
    issuer: 'Simplilearn SkillUp (Google Cloud)',
    date: '27 Jan 2026',
    code: '9766282',
    filePath: '/certificates/generative-ai.pdf',
    category: 'Generative AI',
    description: 'Practical training on Google Cloud Generative AI Studio, prompt engineering, and LLM application prototyping.',
  },
  {
    id: 'simplilearn-android-development',
    title: 'Android App Development for Beginners',
    issuer: 'Simplilearn SkillUp',
    date: '28 Jan 2026',
    code: '9771044',
    filePath: '/certificates/android-development.pdf',
    category: 'Mobile Development',
    description: 'Fundamentals of mobile architecture, UI layout design, activity lifecycles, and mobile application building.',
  },
  {
    id: 'coursera-wordpress',
    title: 'Build a Free Website with WordPress',
    issuer: 'Coursera Project Network',
    date: '30 Jan 2026',
    code: 'RPO396OHN877',
    verifyUrl: 'https://coursera.org/verify/RPO396OHN877',
    filePath: '/certificates/wordpress.pdf',
    category: 'Web Development',
    description: 'Hands-on project on content management systems, theme customization, plugin integration, and site deployment.',
  },
  {
    id: 'educadd-web-development',
    title: 'Certified Course in Web Development',
    issuer: 'EduCADD Latur',
    date: '22 July 2023',
    filePath: '/certificates/web-development.pdf',
    category: 'Web Development',
    description: 'Comprehensive Web Development program covering HTML5, CSS3, JavaScript, UI design, and responsive design.',
  },
  {
    id: 'outskill-genai-mastermind',
    title: 'Generative AI Mastermind',
    issuer: 'Outskill',
    date: '2026',
    filePath: '/certificates/generative-ai-mastermind.pdf',
    category: 'Generative AI',
    description: 'Advanced workflows in generative AI, prompt architecture, AI tool integration, and practical developer workflows.',
  },
];

export const CYBERSECURITY_HIGHLIGHTS = {
  heading: 'CYBERSECURITY',
  subheading: 'Learning by building and practicing.',
  description: 'Completed hands-on TryHackMe labs covering Linux, networking, and web security fundamentals.',
  skills: [
    'Linux System Administration',
    'Networking Fundamentals',
    'Web Security Fundamentals',
    'System Navigation & Privilege Concepts',
    'Basic Penetration Testing Concepts',
    'Security Fundamentals & Hardening',
  ],
  terminalCommands: [
    { command: 'whoami', output: 'punam@cyberguardian-soc' },
    { command: 'focus', output: 'Cybersecurity Operations & AI Engineering' },
    { command: 'learning', output: 'Continuous Hands-on Labs & Threat Intelligence' },
    { command: 'building', output: 'CyberGuardian AI — Operations Platform' },
    { command: 'status', output: 'READY FOR INTERNSHIPS & SOC / DEV ROLES' },
  ],
};
