export type ProjectCategory =
  | 'All'
  | 'Full Stack'
  | 'Frontend'
  | 'Backend'
  | 'Mobile'
  | 'AI'
  | 'Academic'
  | 'Utility';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  summary: string;
  problem?: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  screenshots: string[];
  role: string;
  highlights: string[];
  featured?: boolean;
  badge?: 'Professional' | 'Academic' | 'Personal';
}

export interface SubRole {
  title: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  subRoles?: SubRole[];
  techStack?: string[];
  responsibilities: string[];
  achievements?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  description: string;
  imageUrl?: string;
  verificationUrl?: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  highlights: string[];
}
