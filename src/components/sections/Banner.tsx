import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import DeveloperImg from "../../../public/img/developer-img/developer-shourav-profile-image.png"

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 dark:from-indigo-900/20 dark:to-purple-900/20 -z-10" />
      <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-20 h-20 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
          
          <div className="relative z-10">
            <div className="w-60 h-60 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-white dark:border-gray-900 shadow-lg overflow-hidden">
              {/* Profile image placeholder */}
              <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-full flex items-center justify-center text-gray-400">
               <Image src={DeveloperImg} alt='Shourav Rajbongshi image'/>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Shourav <span className="text-gradient">Rajbongshi</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Front-End & Full Stack Developer
            </h2>
            
            <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
              Building exceptional web experiences with React, Next.js, and modern web technologies.
              Passionate about creating clean, efficient, and user-friendly applications.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            
            <div className="flex justify-center gap-6">
              <Link href="https://github.com/developer-raj" target="_blank" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/developer-raj" target="_blank" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:developer@gmail.com" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;