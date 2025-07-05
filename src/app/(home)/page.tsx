import About from "@/components/sections/About";
import Banner from "@/components/sections/Banner";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import { ResumeDownload } from "@/components/sections/ResumeDownload";
import { Skills } from "@/components/sections/Skills.client";



export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <ResumeDownload />
      <Experience />
      <Education />
      <Skills/>
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}