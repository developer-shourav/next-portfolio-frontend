// src/lib/data/skills.ts
export interface Skill {
  name: string;
  iconUrl: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  width?: number;
  height?: number;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: 'HTML5',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    category: 'frontend',
    width: 60,
    height: 60
  },
  {
    name: 'CSS3',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    category: 'frontend',
    width: 60,
    height: 60
  },
  {
    name: 'JavaScript',
    iconUrl: 'https://img.icons8.com/color/100/null/javascript--v1.png',
    category: 'frontend',
    width: 60,
    height: 60
  },
  {
    name: 'TypeScript',
    iconUrl: 'https://img.icons8.com/color/100/null/typescript.png',
    category: 'frontend',
    width: 60,
    height: 60
  },
  {
    name: 'Bootstrap',
    iconUrl: 'https://img.icons8.com/color/100/null/bootstrap.png',
    category: 'frontend',
    width: 60,
    height: 60
  },
  {
    name: 'Tailwind CSS',
    iconUrl: '/img/skill-icon/tailwind.png',
    category: 'frontend',
    width: 60,
    height: 40
  },
  {
    name: 'Daisy UI',
    iconUrl: 'https://i.ibb.co/MPVRmFv/daisyui.png',
    category: 'frontend',
    width: 100,
    height: 40
  },
  {
    name: 'React',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    category: 'frontend',
    width: 60,
    height: 60
  },
  {
    name: 'Vite',
    iconUrl: '/img/skill-icon/vite.png',
    category: 'frontend',
    width: 60,
    height: 60
  },
  {
    name: 'React Router',
    iconUrl: 'https://i.ibb.co/kJ7bMDx/react-route.png',
    category: 'frontend',
    width: 60,
    height: 60
  },
  {
    name: 'Redux',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    category: 'frontend',
    width: 60,
    height: 60
  },
  {
    name: 'Zustand',
    iconUrl: '/img/skill-icon/zustand.png',
    category: 'frontend',
    width: 70,
    height: 60
  },
  {
    name: 'Next.js',
    iconUrl: '/img/skill-icon/NextJs.png',
    category: 'frontend',
    width: 60,
    height: 60
  },
  {
    name: 'TanStack Query',
    iconUrl: '/img/skill-icon/TanStackQuery.png',
    category: 'frontend',
    width: 60,
    height: 60
  },

  // Backend
  {
    name: 'Node.js',
    iconUrl: 'https://img.icons8.com/fluency/144/null/node-js.png',
    category: 'backend',
    width: 60,
    height: 60
  },
  {
    name: 'Express.js',
    iconUrl: 'https://i.ibb.co/DRCBB60/express.png',
    category: 'backend',
    width: 60,
    height: 60
  },
  {
    name: 'MongoDB',
    iconUrl: 'https://img.icons8.com/color/144/null/mongodb.png',
    category: 'backend',
    width: 60,
    height: 60
  },
  {
    name: 'Mongoose',
    iconUrl: '/img/skill-icon/mongoose.png',
    category: 'backend',
    width: 90,
    height: 60
  },
  {
    name: 'Joi Validation',
    iconUrl: '/img/skill-icon/joi.png',
    category: 'backend',
    width: 60,
    height: 65
  },
  {
    name: 'Zod Validation',
    iconUrl: '/img/skill-icon/zod.png',
    category: 'backend',
    width: 60,
    height: 55
  },

  // Tools
  {
    name: 'Git',
    iconUrl: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    category: 'tools',
    width: 60,
    height: 60
  },
  {
    name: 'GitHub',
    iconUrl: 'https://i.ibb.co/3Nmd776/github-original-wordmark.png',
    category: 'tools',
    width: 60,
    height: 60
  },
  {
    name: 'VS Code',
    iconUrl: 'https://img.icons8.com/color/144/null/visual-studio-code-2019.png',
    category: 'tools',
    width: 60,
    height: 60
  },
  {
    name: 'Postman',
    iconUrl: '/img/skill-icon/postman.png',
    category: 'tools',
    width: 60,
    height: 60
  },
  {
    name: 'npm',
    iconUrl: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg',
    category: 'tools',
    width: 50,
    height: 50
  },
  {
    name: 'Yarn',
    iconUrl: '/img/skill-icon/yarn-full.png',
    category: 'tools',
    width: 100,
    height: 50
  },
  {
    name: 'Vercel',
    iconUrl: 'https://i.ibb.co/TYH7xdd/vercel.png',
    category: 'tools',
    width: 60,
    height: 60
  },
  {
    name: 'Netlify',
    iconUrl: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/null/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png',
    category: 'tools',
    width: 60,
    height: 60
  },
  {
    name: 'Heroku',
    iconUrl: 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg',
    category: 'tools',
    width: 60,
    height: 55
  },

  // Design
  {
    name: 'Photoshop',
    iconUrl: 'https://img.icons8.com/color/100/null/adobe-photoshop--v1.png',
    category: 'design',
    width: 60,
    height: 60
  },
  {
    name: 'Figma',
    iconUrl: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
    category: 'design',
    width: 50,
    height: 50
  },
  {
    name: 'Canva',
    iconUrl: 'https://img.icons8.com/fluency/144/null/canva.png',
    category: 'design',
    width: 60,
    height: 60
  },
  {
    name: 'Markdown',
    iconUrl: 'https://i.ibb.co/1z7FSvN/makdown.png',
    category: 'tools',
    width: 60,
    height: 70
  }
];