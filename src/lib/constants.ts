import { SkillsData, Project, Experience, Education } from './types';


export const skills: SkillsData = {
  core: [
    { name: 'React.js', level: 95, icon: 'react' },
    { name: 'Next.js', level: 90, icon: 'nextjs' },
    { name: 'JavaScript', level: 95, icon: 'javascript' },
    { name: 'TypeScript', level: 85, icon: 'typescript' },
    { name: 'HTML5', level: 98, icon: 'html' },
    { name: 'CSS3', level: 95, icon: 'css' },
    { name: 'Tailwind CSS', level: 90, icon: 'tailwind' },
  ],
  advanced: [
    { name: 'Node.js', level: 80, icon: 'nodejs' },
    { name: 'Express.js', level: 75, icon: 'express' },
    { name: 'MongoDB', level: 70, icon: 'mongodb' },
    { name: 'Redux', level: 85, icon: 'redux' },
    { name: 'Zustand', level: 80, icon: 'zustand' },
    { name: 'TanStack Query', level: 75, icon: 'reactquery' },
    { name: 'Firebase', level: 70, icon: 'firebase' },
    { name: 'Git', level: 85, icon: 'git' },
  ],
};

export const projects: Project[] = [
  {
    id: "1",
    title: 'CarSure',
    description: 'A full-stack car shop web application with custom authentication and role-based dashboards.',
    technologies: ['React.js', 'Redux', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: '/projects/carsure.jpg',
    links: {
      live: 'https://carsure.example.com',
      frontend: 'https://github.com/developer-raj/carsure-frontend',
      backend: 'https://github.com/developer-raj/carsure-backend',
    },
  },
  {
    id: "2",
    title: 'Dancing Guru',
    description: 'A full-stack website for buying and selling dance courses with role-based login system.',
    technologies: ['React', 'Firebase', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: '/projects/dancing-guru.jpg',
    links: {
      live: 'https://dancing-guru.example.com',
      frontend: 'https://github.com/developer-raj/dancing-guru-frontend',
      backend: 'https://github.com/developer-raj/dancing-guru-backend',
    },
  },
  {
    id: "3",
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn'],
    image: '/projects/portfolio.jpg',
    links: {
      live: 'https://shourav.example.com',
      code: 'https://github.com/developer-raj/portfolio',
    },
  },
];

export const experience: Experience[] = [
  {
    company: 'Bigmod Technologies',
    position: 'MERN Stack Developer',
    duration: 'Jun 2024 - Present',
    responsibilities: [
      'Developed and maintained complex frontend using React.js and Next.js',
      'Collaborated with backend teams for seamless integration',
      'Implemented secure authentication and authorization systems',
    ],
  },
  {
    company: 'Shothik AI',
    position: 'Frontend Developer',
    duration: 'Oct 2024 - Jan 2025',
    responsibilities: [
      'Developed complex frontend features with AI integrations',
      'Designed OCR, paraphrasing, and proofreading functionalities',
      'Built pixel-perfect, responsive layouts',
    ],
  },
];

export const education: Education[] = [
  {
    institution: 'National University Bangladesh',
    degree: 'B.B.A(Hon\'s) in Management',
    duration: '2020 - 2024',
  },
  {
    institution: 'Programming Hero',
    degree: 'Complete Web Development Course',
    duration: '2023',
  },
];