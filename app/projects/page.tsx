import type { Metadata } from "next";
import ProjectsPage from "@/components/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects by Anshit Rangra — Full Stack & Web3 Apps",
  description:
    "Explore 20+ projects by Anshit Rangra — including DeFi platforms, AI chatbots, real-time multiplayer games, 3D web experiences, and blockchain dApps. Built with React, Next.js, Node.js, Solidity, and more.",
  alternates: {
    canonical: "https://anshitrangra.dev/projects",
  },
  openGraph: {
    title: "Projects by Anshit Rangra — Full Stack & Web3 Apps",
    description:
      "20+ projects: DeFi apps, AI chatbots, multiplayer games, 3D experiences, and blockchain dApps.",
    url: "https://anshitrangra.dev/projects",
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
