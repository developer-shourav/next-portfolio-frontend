import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export const ResumeDownload = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-chart-1/10 to-chart-5/10 dark:from-chart-1/5 dark:to-chart-5/5">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Want to know more about my professional journey?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Download my complete resume to see my full work history, education, and skills in detail.
        </p>
        <Button asChild>
          <a href="/resume.pdf" download className="gap-2">
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
};