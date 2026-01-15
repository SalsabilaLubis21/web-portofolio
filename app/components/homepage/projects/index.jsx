import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section id="projects" className="relative z-50 my-12 lg:my-24">
      {/* Blur decoration */}
      <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 blur-3xl opacity-30" />

      {/* Title */}
      <div className="flex items-center justify-center lg:justify-start relative">
        <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
          PROJECTS
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]" />
      </div>

      {/* STICKY AREA */}
      <div className="pt-24 pb-[50vh]">
        <div className="relative flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="sticky w-full mx-auto max-w-3xl"
              style={{
                top: "120px",
                zIndex: index + 1,
              }}
            >
              <div className="box-border flex items-center justify-center rounded-xl border border-violet-500/20 bg-[#0f0b2a] shadow-[0_0_30px_0_rgba(0,0,0,0.35)] transition-all duration-500">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
