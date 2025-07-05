export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface ProjectLink {
  live?: string;
  frontend?: string;
  backend?: string;
  code?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: ProjectLink;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface SkillsData {
  core: Skill[];
  advanced: Skill[];
}