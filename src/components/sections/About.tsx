import { SectionTitle } from "../shared/SectionTitle";
import Image from "next/image";
import DeveloperAboutImg from "../../../public/img/developer-img/Shourav-Rajbongshi-web-developer-about-image.jpg";
import ResumeDownloadBtn from "../shared/CustomButton/ResumeDownloadBtn";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
          centered={true}
        />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-10">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">
              Dedicated Front-End Developer with 2+ years of experience
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I am Shourav Rajbongshi, a passionate Front-End Developer
                specializing in React, Next.js, and modern JavaScript
                frameworks. With expertise in building responsive,
                high-performance web applications, I bring creativity and
                technical excellence to every project.
              </p>

              <p>
                My journey in web development started with a fascination for
                creating interactive experiences on the web. Over the years, I
                have honed my skills in both frontend and backend technologies,
                allowing me to deliver full-stack solutions when needed.
              </p>

              <p>
                I thrive in collaborative environments and enjoy solving complex
                problems with elegant solutions. My approach combines technical
                expertise with a keen eye for design and user experience.
              </p>
            </div>

            <ResumeDownloadBtn />
          </div>

          <div className="order-1 md:order-2 relative lg:p-4">
            <Image
              sizes="450px"
              src={DeveloperAboutImg}
              className="rounded-2xl"
              alt="Shourav-Rajbongshi-web-developer-about-image.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
