"use client";
import { Download } from "lucide-react";
const ResumeDownloadBtn = () => {
  return (
    <div className="mt-8">
      <a
       href="./Shourav_Rajbongshi-Full-Stack_Developer-resume.pdf"
       download
       className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/50">
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-purple-700 rounded group-hover:-mt-4 group-hover:-mr-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-lg group-hover:mb-12 group-hover:translate-x-0"></span>
        <span className="relative flex items-center gap-2 text-sm font-bold tracking-wider transition-all duration-300">
          <Download className="w-5 h-5" />
          Download Resume
        </span>
      </a>
    </div>
  );
};

export default ResumeDownloadBtn;
