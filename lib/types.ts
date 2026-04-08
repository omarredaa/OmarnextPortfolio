export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveDemo: string;
  github: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: "frontend" | "backend" | "database";
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  photo: string;
  about: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}
