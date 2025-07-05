import { SectionTitle } from "@/components/shared/SectionTitle";
import { skills } from "@/lib/data";

import Image from "next/image";
import Link from "next/link";

interface SkillsProps {
  searchParams?: {
    category?: "all" | "frontend" | "backend" | "tools" | "design";
  };
}

export const Skills = ({ searchParams }: SkillsProps) => {
  const activeCategory = searchParams?.category || "all";

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" },
    { id: "design", name: "Design" },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="My Skills"
          subtitle="Technologies I work with"
          centered={true}
        />

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`?category=${category.id}`}
              scroll={false}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/50"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all"
            >
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src={skill.iconUrl}
                  alt={skill.name}
                  width={skill.width || 60}
                  height={skill.height || 60}
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-sm font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
