"use client";
import { useRef } from 'react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { experience } from '@/lib/constants';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export const Experience = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="experience" className="section-padding bg-background py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Work Journey"
          subtitle="Professional milestones & achievements"
          centered={true}
        />

        <div 
          ref={containerRef}
          className="relative mt-16 max-w-4xl mx-auto"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-chart-5/20 via-chart-5/50 to-chart-5/20 transform md:-translate-x-1/2" />

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-10 md:pl-0 group"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-chart-5 border-4 border-background z-10 transform md:left-1/2 md:-translate-x-1/2 group-hover:scale-110 transition-transform" />
                
                {/* Card container */}
                <div className={`bg-card rounded-2xl border border-border overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-chart-5/50
                  ${index % 2 === 0 ? 'md:pr-8 md:mr-[50%]' : 'md:pl-8 md:ml-[50%]'}`}>
                  
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Company logo */}
                      <div className="bg-foreground/5 border border-border rounded-lg p-2 flex-shrink-0">
                        <Image
                          src={exp.companyImg} 
                          alt={exp.company} 
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-chart-5 transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="font-medium text-primary">{exp.company}</span>
                          <span className="text-sm bg-foreground/5 px-2 py-1 rounded-full text-muted-foreground">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2.5 pl-1">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg 
                            className="w-5 h-5 text-chart-5 mr-2 mt-0.5 flex-shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Animated highlight bar */}
                  <div className="h-1 w-0 bg-gradient-to-r from-chart-5 to-chart-3 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};