"use client";

import dynamic from "next/dynamic";
import AboutHero from "./AboutHero";

const Timeline = dynamic(() => import("./Timeline"), { ssr: false });
const Philosophy = dynamic(() => import("./Philosophy"), { ssr: false });
const TechDNA = dynamic(() => import("./TechDNA"), { ssr: false });

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <Timeline />
      <Philosophy />
      <TechDNA />
    </main>
  );
};

export default AboutPage;
