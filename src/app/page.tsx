import React from 'react';
import { Button } from '@/components/ui/button'; 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, Code, LayoutDashboard,  Sparkles } from 'lucide-react'; 
const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-inter antialiased">
      {/* Navigation Bar (Simple for one-page, could be sticky) */}
      <nav className="p-4 flex justify-between items-center bg-gray-900 shadow-lg fixed w-full z-50">
        <div className="text-2xl font-bold text-blue-400">Shourav Rajbongshi</div>
        <div className="space-x-4 hidden md:flex">
          <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
        </div>
        {/* Mobile menu toggle could be added here */}
      </nav>

      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center text-center pt-16">
          <div className="max-w-4xl space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
              Hi, I am Shourav Rajbongshi
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-medium">
              A Passionate <span className="text-blue-300">Web Developer</span>
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Specializing in <span className="font-semibold text-green-400">Frontend Development</span> and the robust <span className="font-semibold text-yellow-400">MERN Stack</span>, I build modern, responsive, and high-performance web applications.
            </p>
            <div className="flex justify-center space-x-4 pt-6">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                View My Work
              </Button>
              <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-900 px-6 py-3 rounded-full text-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                Get In Touch
              </Button>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-gray-700" />

        {/* About Section */}
        <section id="about" className="py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              Hello! I am Shourav Rajbongshi, a dedicated Web Developer with a strong passion for crafting intuitive and dynamic user experiences. My journey in web development began with a fascination for how interactive applications come to life on the internet.
            </p>
            <p>
              I thrive on bringing ideas from concept to reality, focusing on clean code, modern design principles, and efficient solutions. Whether its building a pixel-perfect user interface or designing scalable backend APIs, I am committed to delivering high-quality results.
            </p>
            <p>
              My expertise primarily lies in Frontend Development, where I enjoy working with cutting-edge technologies to create engaging and responsive web applications. Additionally, I possess a solid understanding and hands-on experience with the MERN (MongoDB, Express.js, React, Node.js) stack, enabling me to build full-stack solutions.
            </p>
            <p>
              I am always eager to learn new technologies and improve my craft. Lets build something amazing together!
            </p>
          </div>
        </section>

        <Separator className="my-16 bg-gray-700" />

        {/* Skills Section */}
        <section id="skills" className="py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Frontend Card */}
            <Card className="bg-gray-800 border-gray-700 text-gray-100 p-6 rounded-lg shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="flex flex-col items-center">
                <LayoutDashboard size={48} className="text-blue-400 mb-4" />
                <CardTitle className="text-2xl font-bold mb-2">Frontend Development</CardTitle>
                <CardDescription className="text-gray-400 text-center">Crafting beautiful and interactive user interfaces.</CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><span className="font-semibold text-white">Languages:</span> HTML5, CSS3, JavaScript (ES6+)</li>
                  <li><span className="font-semibold text-white">Frameworks/Libraries:</span> React.js, Next.js, Redux, Tailwind CSS, Shadcn UI</li>
                  <li><span className="font-semibold text-white">Tools:</span> npm, yarn, Webpack, Vite</li>
                  <li><span className="font-semibold text-white">Concepts:</span> Responsive Design, UI/UX Principles, Performance Optimization</li>
                </ul>
              </CardContent>
            </Card>

            {/* MERN Stack Card */}
            <Card className="bg-gray-800 border-gray-700 text-gray-100 p-6 rounded-lg shadow-xl hover:shadow-green-500/30 transform hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="flex flex-col items-center">
                <Code size={48} className="text-green-400 mb-4" />
                <CardTitle className="text-2xl font-bold mb-2">MERN Stack Development</CardTitle>
                <CardDescription className="text-gray-400 text-center">Building robust full-stack applications.</CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><span className="font-semibold text-white">MongoDB:</span> NoSQL database for flexible data storage</li>
                  <li><span className="font-semibold text-white">Express.js:</span> Backend web framework for Node.js</li>
                  <li><span className="font-semibold text-white">React.js:</span> Frontend library for user interfaces</li>
                  <li><span className="font-semibold text-white">Node.js:</span> JavaScript runtime for server-side development</li>
                  <li><span className="font-semibold text-white">API Development:</span> RESTful APIs</li>
                </ul>
              </CardContent>
            </Card>

            {/* Other Skills Card */}
            <Card className="bg-gray-800 border-gray-700 text-gray-100 p-6 rounded-lg shadow-xl hover:shadow-purple-500/30 transform hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="flex flex-col items-center">
                <Sparkles size={48} className="text-purple-400 mb-4" />
                <CardTitle className="text-2xl font-bold mb-2">Other Technologies</CardTitle>
                <CardDescription className="text-gray-400 text-center">Additional tools and concepts I work with.</CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><span className="font-semibold text-white">Version Control:</span> Git, GitHub</li>
                  <li><span className="font-semibold text-white">Deployment:</span> Vercel, Netlify</li>
                  <li><span className="font-semibold text-white">Databases:</span> Basic SQL (PostgreSQL, MySQL)</li>
                  <li><span className="font-semibold text-white">Design:</span> Figma (basic), responsive design principles</li>
                  <li><span className="font-semibold text-white">Methodologies:</span> Agile, Scrum</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16 bg-gray-700" />

        {/* Projects Section (Placeholder) */}
        <section id="projects" className="py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-12">My Projects</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-300">
            <p className="mb-4">
              This section will showcase some of my best work. Stay tuned for exciting projects!
            </p>
            <p>
              In the meantime, you can check out my GitHub for more.
            </p>
            <Button variant="outline" className="mt-8 text-blue-400 border-blue-400 hover:bg-blue-900 px-6 py-3 rounded-full text-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Github className="mr-2" /> View GitHub
            </Button>
          </div>
        </section>

        <Separator className="my-16 bg-gray-700" />

        {/* Contact Section */}
        <section id="contact" className="py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-lg text-gray-300 space-y-6">
            <p>
              Have a project in mind or just want to say hello? Feel free to reach out! I am always open to new opportunities and collaborations.
            </p>
            <div className="flex justify-center space-x-6 pt-6">
              <a href="mailto:developer.shourav1@gmail.com" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <Mail size={32} className="mr-2" /> developer.shourav1@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/developer-shourav/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <Linkedin size={32} className="mr-2" /> LinkedIn
              </a>
              <a href="https://github.com/developer-shourav" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <Github size={32} className="mr-2" /> GitHub
              </a>
            </div>
           
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 p-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Shourav Rajbongshi. All rights reserved.</p>
    
      </footer>

      {/* Basic CSS for animations (can be moved to global CSS if preferred) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
