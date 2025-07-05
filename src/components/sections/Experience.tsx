import { SectionTitle } from '@/components/shared/SectionTitle';
import { experience } from '@/lib/constants';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey"
          centered={true}
        />
        
        <div className="mt-12 max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8">
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-chart-5 border-4 border-card" />
              <div className="pl-6">
                <h3 className="text-xl font-bold text-foreground">
                  {exp.position}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="font-medium text-primary">{exp.company}</span>
                  <span className="text-sm text-muted-foreground">
                    {exp.duration}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-chart-5 mr-2 mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};