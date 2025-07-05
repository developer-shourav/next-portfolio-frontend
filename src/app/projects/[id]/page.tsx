import { notFound } from 'next/navigation';
import { projects } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === Number(params.id));
  
  if (!project) {
    return notFound();
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {project.title}
            </h1>
            
            <p className="text-lg text-muted-foreground">
              {project.description}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {project.links.live && (
                <Button asChild>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              
              {project.links.frontend && (
                <Button asChild variant="outline">
                  <a href={project.links.frontend} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Frontend Code
                  </a>
                </Button>
              )}
              
              {project.links.backend && (
                <Button asChild variant="outline">
                  <a href={project.links.backend} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Backend Code
                  </a>
                </Button>
              )}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-muted overflow-hidden">
              <div className="h-80 bg-gray-200 flex items-center justify-center text-gray-400">
                Project Screenshot
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-lg border border-border bg-muted aspect-square flex items-center justify-center text-muted-foreground text-sm">
                  Screenshot {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}