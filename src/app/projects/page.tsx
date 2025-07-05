import { ProjectCard } from '@/components/shared/ProjectCard';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { projects } from '@/lib/constants';

export default function ProjectsPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="All Projects"
          subtitle="My complete portfolio"
          centered={true}
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}