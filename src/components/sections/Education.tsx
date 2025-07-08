import { SectionTitle } from "@/components/shared/SectionTitle";
import { education } from "@/lib/constants";
import { professionalEducation } from "@/lib/constants";
import Image from "next/image";

export const Education = () => {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Education"
          subtitle="My academic background"
          centered={true}
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-8">
          {/* --------------Academic Qualification--------------- */}
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8">
              <Image
                src={edu.institutionImage}
                alt={edu.institution}
                width={60}
                height={60}
              />
              <div className="pl-6">
                <h3 className="text-xl font-bold text-foreground">
                  {edu.institution}
                </h3>
                <p className="text-muted-foreground">{edu.degree}</p>
                <p className="text-sm text-muted-foreground/80 mt-1">
                  {edu.duration}
                </p>
              </div>
            </div>
          ))}
          {/* --------------Professional Qualification--------------- */}
          {professionalEducation.map((edu, index) => (
            <div key={index} className="relative pl-8">
              <Image
                src={edu.institutionImage}
                alt={edu.institution}
                width={60}
                height={60}
              />
              <div className="pl-6">
                <h3 className="text-xl font-bold text-foreground">
                  {edu.institution}
                </h3>
                <p className="text-muted-foreground">{edu.degree}</p>
                <p className="text-sm text-muted-foreground/80 mt-1">
                  {edu.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
