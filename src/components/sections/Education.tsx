import { SectionTitle } from "@/components/shared/SectionTitle";
import { education, professionalEducation } from "@/lib/constants";
import Image from "next/image";
import { GraduationCap, Briefcase } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionTitle
          title="Education"
          subtitle="Academic and professional qualifications"
          centered={true}
        />

        <div className="mt-12">
          {/* Academic Qualifications */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <GraduationCap size={20} className="text-primary" />
              <h2 className="text-xl font-semibold text-foreground">
                Academic Qualifications
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-muted-foreground/15 p-5 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-muted rounded-md p-2 flex-shrink-0 border border-muted-foreground/10">
                      <Image
                        src={edu.institutionImage}
                        alt={edu.institution}
                        width={48}
                        height={48}
                        className="rounded-sm object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 className="text-base font-medium text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full whitespace-nowrap">
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Qualifications */}
          <div>
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <Briefcase size={20} className="text-primary" />
              <h2 className="text-xl font-semibold text-foreground">
                Professional Qualifications
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {professionalEducation.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-muted-foreground/15 p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-muted rounded-md p-1.5 flex-shrink-0 border border-muted-foreground/10">
                      <Image
                        src={edu.institutionImage}
                        alt={edu.institution}
                        width={40}
                        height={40}
                        className="rounded-sm object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">
                      {edu.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
