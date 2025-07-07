import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 bg-gray-100">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Project Image
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{project.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
        <Link href={`/projects/${project.id}`} className="mt-2 inline-block text-sm font-medium">
          View Details →
        </Link>
      </div>
    </div>
  );
}