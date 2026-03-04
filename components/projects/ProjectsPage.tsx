"use client";

import dynamic from "next/dynamic";
import ProjectsHero from "./ProjectsHero";

const ProjectsGrid = dynamic(() => import("./ProjectsGrid"), { ssr: false });

const ProjectsPage = () => {
  return (
    <main>
      <ProjectsHero />
      <ProjectsGrid />
    </main>
  );
};

export default ProjectsPage;
