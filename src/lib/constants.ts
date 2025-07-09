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
    content: `React Server Components(RSCs) mark a significant evolution in how React applications can be structured.Unlike traditional client components, RSCs are rendered on the server and sent as serialized HTML to the browser, offering improved performance and better user experience.

One of the key advantages of RSCs is the reduction of client- side JavaScript bundle size, often referred to as the "zero bundle size" model.This allows applications to load faster, especially on low - powered devices.

RSCs also streamline data fetching by co - locating it with components on the server.This removes the need for complex client - side logic or redundant API calls.

The true power of RSCs emerges when used in conjunction with client components.Developers can create hybrid UIs where only the interactive parts are hydrated on the client, while the rest stays server - rendered.

Companies like Vercel and Shopify are already leveraging RSCs in production environments, reporting significant performance gains and simpler architecture.`
  },

  {
    id: "nextjs-15-new-features",
    title: "Next.js 15: Breaking Down the New Features",
    excerpt:
      "Exploring the latest updates in Next.js 15 including partial prerendering, improved compiler, and enhanced developer experience.",
    date: "February 28, 2025",
    category: "Next.js",
    content: `Next.js 15 introduces several impactful updates aimed at improving both performance and developer experience.One of the standout features is Partial Prerendering(PPR), which enables hybrid rendering at the route level.This means developers can mix static and dynamic content more seamlessly within the same route.

Another major improvement is in the tooling, with enhancements to Turbopack delivering up to 40 % faster local development server startup.This speeds up the feedback loop and makes large projects more manageable.

Caching strategies have also been refined to better leverage server infrastructure and browser capabilities.This results in faster page loads and reduced redundant computation.

      Next.js 15 provides a new metadata handling API that makes managing page metadata more flexible and easier to configure across layouts.

The release also ships with an experimental view transitions API, offering smoother navigational transitions that feel more like native apps.Migration guides and performance benchmarks show significant improvements across common use cases.`
  },

  {
    id: "webassembly-frontend",
    title: "WebAssembly for Frontend Developers",
    excerpt:
      "How WebAssembly is changing frontend development with near-native performance for compute-intensive tasks.",
    date: "March 15, 2025",
    category: "WebAssembly",
    content: `WebAssembly(Wasm) is revolutionizing frontend development by bringing near - native performance to the browser.This enables developers to handle compute - heavy tasks like image and video processing, physics simulations, and real - time machine learning directly within web applications.

Frontend developers are increasingly adopting Rust as the preferred language for compiling to Wasm due to its performance and tooling support.Tools like wasm - pack and wasm - bindgen make it easier to bridge the gap between JavaScript and WebAssembly modules.

Integration with JavaScript is seamless, allowing Wasm modules to be used alongside existing React or Vue codebases.This opens the door to offloading performance - intensive logic without rewriting the entire application.

Security and performance optimization remain important considerations when working with WebAssembly.Careful use of memory and strict isolation help mitigate risks while maintaining performance benefits.

As WebAssembly becomes more standardized and widely supported, it's becoming an essential skill for modern frontend engineers seeking performance without compromising usability.`
  },

  {
    id: "ai-assisted-development",
    title: "AI-Assisted Development: Productivity Patterns",
    excerpt:
      "Practical patterns for integrating AI tools like GitHub Copilot into your daily development workflow.",
    date: "April 5, 2025",
    category: "Development",
    content: `AI tools like GitHub Copilot have significantly altered how developers approach coding tasks.By functioning like a pair programming partner, these tools can help generate code snippets, suggest logic improvements, and even write boilerplate code with high accuracy.

Effective use of AI in development workflows requires context - aware prompting.This means framing instructions and comments in a way that leads to accurate and relevant code suggestions from the model.

AI tools can also assist with code reviews by detecting inconsistencies, suggesting optimizations, and highlighting potential bugs, saving time during pull request evaluations.

Test generation is another strong suit of AI - powered development.With well - commented code, tools can generate unit tests that follow established conventions, reducing the overhead of manual testing.

While productivity gains are measurable, developers must also be cautious of over - reliance on AI.Privacy, security, and model biases are important considerations, especially when working on proprietary or sensitive codebases.`
  },

  {
    id: "monorepo-advanced",
    title: "Advanced Monorepo Techniques with Turborepo",
    excerpt:
      "Scaling large codebases with advanced Turborepo patterns including remote caching and distributed execution.",
    date: "May 20, 2025",
    category: "Tooling",
    content: `Managing large - scale codebases often demands a monorepo strategy, and Turborepo has emerged as a popular choice for handling these complexities.It enables scalable project structures where multiple packages can coexist and share dependencies efficiently.

Remote caching in Turborepo ensures that builds and test results are reused across machines and teams, dramatically reducing CI / CD times and improving productivity in collaborative environments.

Distributed execution is another key feature, allowing tasks to be executed in parallel across multiple workers.This reduces build bottlenecks and speeds up testing pipelines significantly.

The dependency graph optimization in Turborepo prevents unnecessary work by understanding how packages are connected and only re - running tasks when changes affect them directly.

Many large companies use Turborepo to manage thousands of packages across micro - frontends and polyglot repositories.Its support for both JavaScript and non - JavaScript tools makes it a flexible choice for diverse teams.`
  },

  {
    id: "web3-frontend-patterns",
    title: "Modern Web3 Frontend Development Patterns",
    excerpt:
      "Building responsive, secure frontends for blockchain applications with modern frameworks.",
    date: "June 8, 2025",
    category: "Web3",
    content: `Developing frontends for blockchain applications introduces new architectural challenges that require specialized patterns.User onboarding, especially around wallet connection and account management, is critical for a smooth experience.

Modern libraries like ethers.js and wagmi simplify smart contract interactions while abstracting away lower - level blockchain communication.These tools provide a stable foundation for building responsive and real - time blockchain frontends.

  Real - time data syncing is essential for keeping users informed about balances, transaction statuses, and market data.Subscriptions to blockchain events play a vital role here.

Security is a primary concern in Web3.Developers must handle wallet connections securely, validate inputs rigorously, and use well - audited contracts and libraries to prevent exploits.

Leading DeFi platforms offer examples of how to design flexible and secure interfaces using tools like RainbowKit and Web3Modal, combined with patterns like Sign - In with Ethereum(SIWE) for identity.
 ` },

  {
    id: "optimizing-nextjs-performance",
    title: "Optimizing Next.js Applications for Performance",
    excerpt:
      "Learn advanced techniques to improve your Next.js app loading times, including code splitting, image optimization, and server-side rendering strategies.",
    date: "May 15, 2024",
    category: "Next.js",
    content: `Optimizing performance in Next.js involves a combination of smart architectural choices and leveraging built-in features. Code splitting and dynamic imports reduce the initial bundle size by loading only the necessary components when needed.

Next.js offers built-in support for image optimization through the next/image component. This ensures that images are served in modern formats and correctly sized for different viewports, enhancing perceived performance.

Choosing between static site generation (SSG) and server-side rendering (SSR) depends on the content and interaction model. While SSG is great for speed, SSR offers better flexibility for dynamic content.

Implementing strategic caching can drastically improve both load times and backend efficiency. Caching pages, API responses, and assets ensures minimal re-rendering and recomputation.

Bundle analysis tools like next build --analyze help identify large modules and eliminate unnecessary dependencies. When used consistently, these techniques can improve load times by over 70%.`
  },

  {
    id: "react-state-management",
    title: "State Management in React: A Comprehensive Guide",
    excerpt:
      "Comparing Redux, Context API, Zustand, and Jotai for state management in modern React applications.",
    date: "April 2, 2024",
    category: "React",
    content: `Managing state efficiently is a fundamental part of building robust React applications.Redux remains a go - to solution for large apps, offering powerful middleware support and a clear data flow architecture.

The built -in Context API is ideal for passing global state like themes or user preferences but isn't optimized for frequent updates due to unnecessary re-renders.

Zustand offers a lightweight, hook - based solution with minimal boilerplate, making it a popular choice for modern React projects that prioritize simplicity.

Jotai introduces an atomic state model, which allows for fine - grained updates and better control over component re - renders.It's especially useful in apps that require highly dynamic interactions.

Each tool has trade - offs in terms of performance, learning curve, and bundle size.Developers should evaluate these based on project scale, team familiarity, and specific requirements.`
  },

  {
    id: "accessible-web-apps",
    title: "Building Accessible Web Applications",
    excerpt:
      "Essential techniques for creating web apps that everyone can use, including ARIA attributes and keyboard navigation.",
    date: "March 10, 2024",
    category: "Accessibility",
    content: `Creating accessible web applications ensures that users of all abilities can navigate and interact with your product.Semantic HTML provides the foundation for accessibility by giving meaning to page elements.

ARIA attributes enhance screen reader support when custom components are used, making complex interfaces easier to navigate.However, they should only be used when semantic elements are not sufficient.

Keyboard navigation is essential for users who cannot rely on a mouse.Ensuring focus management and visible indicators are properly implemented is key for usability.

Color contrast and font readability affect users with visual impairments.Following WCAG guidelines helps improve inclusivity and user comfort.

Testing with screen readers and accessibility tools like Lighthouse or axe DevTools can identify issues early in the development process.Accessibility should be treated as a core requirement, not an afterthought.
  `}

];

