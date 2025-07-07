import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  MousePointerClick,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DeveloperImg from "../../../public/img/developer-img/Shourav-Rajbongshi-Profile-image.jpg";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900/20">
      {/*--------------- Decorative elements ---------------*/}
      {/*--------------- Decorative elements - Added z-index-0 ---------------*/}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000 z-0" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-4000 z-0" />

      {/*--------------- Grid pattern background - Added z-0 ---------------*/}
      <div className="absolute inset-0 bg-grid-white/10 dark:bg-grid-gray-800/10 bg-[size:40px_40px] z-0" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {" "}
        {/*--------------- Added relative z-10 ---------------*/}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/*--------------- Profile content ---------------*/}
          <div className="flex-1 order-2 md:order-1 text-center md:text-left relative z-10">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                  Available for new projects
                </span>
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="block">Shourav</span>
              <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Rajbongshi
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
              Front-End & Full Stack Developer
            </h2>

            <p className="text-lg max-w-2xl mx-auto md:mx-0 text-gray-600 dark:text-gray-400 mb-8">
              Crafting exceptional web experiences with React, Next.js, and
              modern web technologies. Passionate about creating clean,
              efficient, and user-friendly applications.
            </p>

            {/*--------------- Tech stack badges ---------------*/}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
               <span className="skill-item">TypeScript</span>
              <span className="skill-item">React</span>
              <span className="skill-item">Next.js</span>
              <span className="skill-item">Tailwind CSS</span>
              <span className="skill-item">Node.js</span>
              <span className="skill-item">MongoDB</span>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10 relative z-10">
              <Button
                asChild
                size="lg"
                className="group shadow-lg relative z-10"
              >
                <Link
                  href="#projects"
                  className="flex items-center gap-2 relative z-10"
                >
                  <span>View My Work</span>
                  <MousePointerClick className="w-4 h-4 group-hover:animate-bounce" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="shadow-lg relative z-10"
              >
                <Link href="#contact" className="relative z-10">
                  Contact Me
                </Link>
              </Button>
            </div>

            <div className="flex justify-center md:justify-start gap-6 relative z-10">
              <Link
                href="https://github.com/developer-raj"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-all hover:shadow-lg hover:-translate-y-1 relative z-10"
                aria-label="GitHub profile"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/developer-raj"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-all hover:shadow-lg hover:-translate-y-1 relative z-10"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:developer@gmail.com"
                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-all hover:shadow-lg hover:-translate-y-1 relative z-10"
                aria-label="Send email"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
          {/*--------------- Profile image ---------------*/}
          <div className="flex-1 order-1 md:order-2 flex justify-center relative z-10">
            <div className="relative w-[320px] h-[400px] md:w-[360px] md:h-[460px]">
              {/*--------------- Image frame ---------------*/}
              <div className="absolute top-0 left-0 w-full h-full border-3 border-blue-600 dark:border-indigo-500 rounded-lg transform rotate-3"></div>
              <div className="absolute top-0 left-0 w-full h-full border-3 border-white dark:border-gray-800 rounded-lg transform -rotate-1 shadow-2xl overflow-hidden">
                <Image
                  src={DeveloperImg}
                  alt="Shourav Rajbongshi - Front-End & Full Stack Developer"
                  layout="fill"
                  sizes="500px"
                  objectFit="cover"
                  priority
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/*--------------- Decorative badge ---------------*/}
              <div className="absolute -bottom-6 -right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    2+ Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*--------------- Scroll indicator ---------------*/}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <ChevronDown className="w-6 h-6" />
            <span className="text-sm mt-1">Scroll down</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
