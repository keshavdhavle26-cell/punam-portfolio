export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  architecture?: {
    nodes: string[];
  };
  overview?: string;
  whatILearned?: string;
  isHero?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string; badge?: string }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  code?: string;
  verifyUrl?: string;
  filePath: string;
  category: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  department: string;
  location: string;
  duration: string;
  dates: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  score: string;
}
