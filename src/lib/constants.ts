import { SkillsData, Project, Experience, Education, BlogPost } from './types';


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
    description:
      'A full-stack car shop platform with secure authentication, role-based dashboards, product filtering, SurjoPay payment integration, and responsive dark/light UI. Users can explore cars, place orders, and manage their profiles while admins can manage users, products, and orders.',
    technologies: [
      'React.js',
      'Redux Toolkit',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Tailwind CSS',
      'Shadcn UI',
      'Cloudinary',
      'SurjoPay',
    ],
    image: '/img/project/CarSure-Front.png',
    links: {
      live: 'https://car-sure.vercel.app/',
      frontend: 'https://github.com/developer-shourav/CarSure-Frontend',
      backend: 'https://github.com/developer-shourav/CarSure-Backend',
    },
  },
  {
    id: "2",
    title: 'Dancing Guru',
    description:
      'A full-stack dance course website featuring Firebase-based authentication, separate dashboards for students, instructors, and admins, real-time class management, and responsive UI with dark mode support.',
    technologies: [
      'React',
      'Firebase',
      'Tailwind CSS',
      'Daisy UI',
      'React Hook Form',
      'React Router',
      'Node.js',
      'Express',
      'MongoDB',
      'Swiper.js',
      'SweetAlert2',
    ],
    image: '/img/project/DancingGuru.png',
    links: {
      live: 'https://dancing-guru.web.app',
      frontend: 'https://github.com/developer-shourav/Dancing-Guru-Clint-Side',
      backend: 'https://github.com/developer-shourav/Dancing-Guru-Server',
    },
  },
  {
    id: "3",
    title: 'Queen Toy',
    description:
      'A toy e-commerce website focused on Disney toys, where users can add, manage, and sell their products. Includes protected routes, strong authentication (Email, Google, GitHub), and a clean responsive interface with dashboard functionality.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Firebase Auth',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    image: '/img/project/queenToy.png',
    links: {
      live: 'https://queen-toy.web.app',
      frontend: 'https://github.com/developer-shourav/Queen-Toy-Client',
      backend: 'https://github.com/developer-shourav/Queen-Toy-Server',
    },
  },
];


export const experience: Experience[] = [
  {
    companyImg: '/img/thirdCom.png',
    company: 'Bigmod Technologies',
    position: 'Full Stack Developer(MERN)',
    duration: 'Jun 2024 - Present',
    responsibilities: [
      'Built and maintained advanced frontends with React.js and Next.js',
      'Developed fast, scalable, and secure backends using Node.js',
      'Collaborated closely with backend teams for smooth API integration',

    ],

  },
  {
    companyImg: '/img/fourthCom.png',
    company: 'Shothik AI',
    position: 'Lead Frontend Developer',
    duration: 'Oct 2024 - Jan 2025',
    responsibilities: [
      'Developed complex frontend features with AI integrations',
      'Designed OCR, paraphrasing, and proofreading functionalities',
      'Built pixel-perfect, responsive layouts',
    ],
  },
  {
    companyImg: '/img/SecondCom.png',
    company: 'RedRose Academy',
    position: 'Frontend Developer(Next.js)',
    duration: 'Dec 2023 - Sep 2024',
    responsibilities: [
      'Developed a large-scale educational platform with robust architecture',
      'Built a real-time chat application and scalable backend services',
      'Engineered a complex online examination system with timed quizzes and secure submission',
      'Designed and implemented a dynamic news and content management system',
    ],

  },
  {
    companyImg: '/img/firstCom.png',
    company: 'IONIC Corporation',
    position: 'Frontend Developer(React.js)',
    duration: 'Sep 2023 - Dec 2023',
    responsibilities: [
      'Built ERP software using React.js',
      'Developed custom business websites',
      'Created tailored ERP modules (inventory, HR, sales, etc.)',
      'Delivered full-stack business solutions',
    ],

  },
];

export const education: Education[] = [
  {
    institutionImage: '/img/university.png',
    institution: 'National University Bangladesh',
    degree: 'B.B.A(Hon\'s) in Management',
    duration: '2020 - 2024',
  },
  {
    institutionImage: '/img/college.png',
    institution: 'Government Dohar Nawabgonj College',
    degree: 'HSC - in Business Study',
    duration: '2018 - 2020',
  },
  {
    institutionImage: '/img/school.png',
    institution: 'Nawabgonj Pilot Hight School',
    degree: 'SSC',
    duration: '2017 - 2018',
  },
];
export const professionalEducation: Education[] = [
  {
    institutionImage: '/img/pHero.jpeg',
    institution: 'Programming Hero',
    degree: 'Next Level Web development (L2)',
    duration: '2024',
  },
  {
    institutionImage: '/img/pHero.jpeg',
    institution: 'Programming Hero',
    degree: 'Complete Web Development',
    duration: '2023',
  },
  {
    institutionImage: '/img/ICT-Division.jpeg',
    institution: 'ICT  Division Bangladesh',
    degree: 'Digital literacy course for Youth',
    duration: '2022',
  },
];

export const blogPosts: BlogPost[] = [

  {
    id: "react-server-components-deepdive",
    title: "React Server Components: A Deep Dive",
    excerpt:
      "Understanding the architecture, benefits, and practical implementation of React Server Components in production applications.",
    date: "January 10, 2025",
    category: "React",
    content: `React Server Components represent a paradigm shift in React architecture. In this deep dive:

1. How RSCs differ from traditional components
2. The "zero bundle size" advantage
3. Data fetching patterns with RSCs
4. Combining client and server components effectively
5. Real-world performance benchmarks

We'll examine how major platforms like Vercel and Shopify are adopting this technology...`
  },
  {
    id: "nextjs-15-new-features",
    title: "Next.js 15: Breaking Down the New Features",
    excerpt:
      "Exploring the latest updates in Next.js 15 including partial prerendering, improved compiler, and enhanced developer experience.",
    date: "February 28, 2025",
    category: "Next.js",
    content: `Next.js 15 brings groundbreaking improvements:

• Partial Prerendering (PPR): Hybrid rendering at the route level
• Turbopack improvements: 40% faster local server startup
• Improved caching strategies
• New metadata handling patterns
• Experimental view transitions API

We'll analyze migration paths from previous versions and benchmark performance gains...`
  },
  {
    id: "webassembly-frontend",
    title: "WebAssembly for Frontend Developers",
    excerpt:
      "How WebAssembly is changing frontend development with near-native performance for compute-intensive tasks.",
    date: "March 15, 2025",
    category: "WebAssembly",
    content: `WebAssembly (Wasm) is no longer just for C++ developers. Frontend applications can leverage Wasm for:

1. Image/video processing
2. Physics simulations
3. Machine learning inference
4. Cryptography operations
5. Game development

This guide covers:
- Tools like wasm-pack and wasm-bindgen
- Rust for frontend development
- JavaScript interoperability
- Performance optimization techniques
- Security considerations...`
  },
  {
    id: "ai-assisted-development",
    title: "AI-Assisted Development: Productivity Patterns",
    excerpt:
      "Practical patterns for integrating AI tools like GitHub Copilot into your daily development workflow.",
    date: "April 5, 2025",
    category: "Development",
    content: `AI coding assistants are transforming developer productivity. Effective patterns include:

• The "pair programming" model with AI
• Context-aware prompting techniques
• Code review automation
• Test generation strategies
• Documentation automation

We'll analyze:
- Productivity metrics from real teams
- Common pitfalls to avoid
- Privacy and security considerations
- Customizing models for your codebase...`
  },
  {
    id: "monorepo-advanced",
    title: "Advanced Monorepo Techniques with Turborepo",
    excerpt:
      "Scaling large codebases with advanced Turborepo patterns including remote caching and distributed execution.",
    date: "May 20, 2025",
    category: "Tooling",
    content: `Modern monorepos require sophisticated tooling. This guide covers:

1. Remote caching strategies
2. Distributed task execution
3. Dependency graph optimization
4. Workspace isolation patterns
5. CI/CD pipeline integration

Case studies from:
- Enterprises with 1000+ packages
- Micro-frontend architectures
- Polyglot repositories
- Hybrid public/private package management...`
  },
  {
    id: "web3-frontend-patterns",
    title: "Modern Web3 Frontend Development Patterns",
    excerpt:
      "Building responsive, secure frontends for blockchain applications with modern frameworks.",
    date: "June 8, 2025",
    category: "Web3",
    content: `Web3 frontends present unique challenges. Modern solutions include:

• Wallet connection management
• Real-time blockchain data subscriptions
• Gas estimation UX patterns
• Smart contract interaction abstractions
• Security best practices

Frameworks covered:
- ethers.js v7
- wagmi v3
- RainbowKit
- Web3Modal
- SIWE (Sign-In with Ethereum)

We'll examine architectures from leading DeFi platforms...`
  },
  {
    id: "optimizing-nextjs-performance",
    title: "Optimizing Next.js Applications for Performance",
    excerpt:
      "Learn advanced techniques to improve your Next.js app loading times, including code splitting, image optimization, and server-side rendering strategies.",
    date: "May 15, 2024",
    category: "Next.js",
    content: `In this comprehensive guide, we'll explore various performance optimization techniques for Next.js applications. We'll cover:

1. Code splitting and dynamic imports
2. Image optimization with next/image
3. Static site generation vs server-side rendering
4. Caching strategies
5. Bundle analysis tools

Implementing these techniques can reduce your load times by up to 70%...`,
  },
  {
    id: "react-state-management",
    title: "State Management in React: A Comprehensive Guide",
    excerpt:
      "Comparing Redux, Context API, Zustand, and Jotai for state management in modern React applications.",
    date: "April 2, 2024",
    category: "React",
    content: `Choosing the right state management solution is crucial for React applications. Here's what you need to know:

- Redux: The battle-tested solution with middleware support
- Context API: Built-in but best for low-frequency updates
- Zustand: Minimalist and hooks-based
- Jotai: Atomic state model for fine-grained updates

We'll compare bundle sizes, learning curves, and performance characteristics...`,
  },
  {
    id: "accessible-web-apps",
    title: "Building Accessible Web Applications",
    excerpt:
      "Essential techniques for creating web apps that everyone can use, including ARIA attributes and keyboard navigation.",
    date: "March 10, 2024",
    category: "Accessibility",
    content: `Web accessibility is not optional - it's essential. This guide covers:

1. Semantic HTML structure
2. ARIA attributes and when to use them
3. Keyboard navigation patterns
4. Color contrast requirements
5. Screen reader testing tools

Following WCAG 2.1 guidelines can make your app usable by 20% more of the population...`,
  },


];

