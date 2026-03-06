"use client";

import { useEffect, useState } from "react";

const ProjectsHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-14 md:pb-20 px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-violet-500/8 rounded-full blur-[150px] animate-pulse delay-1000" />

      {/* Breadcrumb */}
      <div
        className={`flex items-center gap-2 mb-8 transition-all duration-700 ${
          mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <a href="/" className="text-[#888] text-sm font-mono hover:text-red-500 transition-colors">
          Home
        </a>
        <span className="text-[#999] text-sm">/</span>
        <span className="text-red-500 text-sm font-mono">Projects</span>
      </div>

      {/* Heading */}
      <div
        className={`transition-all duration-700 delay-200 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9]">
          <span className="text-white/90 block">My</span>
          <span className="hero-name-gradient block">Projects.</span>
        </h1>
      </div>

      <p
        className={`text-[#888] text-base sm:text-lg font-mono mt-4 sm:mt-6 max-w-2xl transition-all duration-700 delay-400 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        A collection of things I&apos;ve built — from full-stack apps to Web3 dApps,
        AI experiments, and everything in between.
      </p>

      {/* Filter hint */}
      <div
        className={`flex items-center gap-3 mt-8 transition-all duration-700 delay-500 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </div>
        <span className="text-green-400 text-sm font-mono">
          Actively building new projects
        </span>
      </div>
    </section>
  );
};

export default ProjectsHero;
