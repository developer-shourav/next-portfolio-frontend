import { Skeleton } from "@/components/ui/skeleton";

export function SkillsSkeleton() {
  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <Skeleton className="h-6 w-32 mb-2" />
          <Skeleton className="h-4 w-48" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all"
            >
              <Skeleton className="w-16 h-16 rounded-md" />
              <Skeleton className="mt-2 h-4 w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
