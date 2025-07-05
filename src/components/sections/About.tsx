
import { Download } from 'lucide-react';
import Link from 'next/link';
import { SectionTitle } from '../shared/SectionTitle';
import Image from 'next/image';
import DeveloperAboutImg from "../../../public/img/developer-img/Developer_shourav_about_img.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
          centered={true}
        />
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">
              Dedicated Front-end Developer with 2+ years of experience
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I am Shourav Rajbongshi, a passionate Front-End Developer specializing in React, Next.js, 
                and modern JavaScript frameworks. With expertise in building responsive, high-performance 
                web applications, I bring creativity and technical excellence to every project.
              </p>
              
              <p>
                My journey in web development started with a fascination for creating interactive experiences 
                on the web. Over the years, I have honed my skills in both frontend and backend technologies, 
                allowing me to deliver full-stack solutions when needed.
              </p>
              
              <p>
                I thrive in collaborative environments and enjoy solving complex problems with elegant solutions. 
                My approach combines technical expertise with a keen eye for design and user experience.
              </p>
            </div>
            
            <div className="mt-8">
              <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                <Download className="w-5 h-5" />
                Download Resume
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl transform rotate-6 -z-10" />
              <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full aspect-square flex items-center justify-center text-gray-400">
                <Image src={DeveloperAboutImg} alt='Shourav Rajbongshi About Image' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;