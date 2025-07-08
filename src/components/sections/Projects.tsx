
import { projects } from '@/lib/constants';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '../shared/SectionTitle';
import { ProjectCard } from '../shared/ProjectCard';

const Projects = () => {
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <section id="projects" className="section-padding ">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Featured Projects"
          subtitle="My recent work"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild>
            <Link href="/projects" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;