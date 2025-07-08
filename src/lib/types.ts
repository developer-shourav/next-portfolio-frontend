
declare module 'next' {
  export interface PageProps {
    params: Record<string, string>;
    searchParams?: Record<string, string | string[] | undefined>;
  }
}

export interface ProjectPageProps {
  project: Project;
}


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
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: {
    live?: string;
    frontend?: string;
    backend?: string;
    code?: string;
  };
}

export interface Experience {
  companyImg: string;
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  institutionImage: string;
  institution: string;
  degree: string;
  duration: string;
}

export interface SkillsData {
  core: Skill[];
  advanced: Skill[];
}