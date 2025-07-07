import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

export const ResumeDownload = () => {
  return (
    <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
      {/* Container with max-width and centered content */}
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Content wrapper with subtle animation-ready classes */}
        <div className="transition-all duration-300 ease-in-out">
          {/* Heading section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Explore My Professional Journey
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download my complete resume to see my full work history,
              education, and skills in detail.
            </p>
          </div>

          {/* Button group with hover effects */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* View Resume Button */}
            <Button
              asChild
              variant="outline"
              className="group relative px-8 py-6 border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md"
            >
              <a
                href="./Shourav_Rajbongshi-Front-End_Developer-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-3 font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Eye className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                <span>View Resume</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500/0 group-hover:bg-blue-500/50 transition-all duration-300"></span>
              </a>
            </Button>

            {/* Download Resume Button (Primary) */}
            <Button
              asChild
              className="group relative px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-blue-500/30 dark:shadow-blue-600/20 transition-all"
            >
              <a
                href="./Shourav_Rajbongshi-Front-End_Developer-resume.pdf"
                download
                className="gap-3 font-medium text-white"
              >
                <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                <span>Download Resume</span>
                <span className="absolute inset-0 rounded-md bg-white/0 group-hover:bg-white/10 transition-all duration-300"></span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
