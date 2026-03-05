"use client";

import { useEffect, useRef, useState } from "react";

const AboutHero = () => {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[90vh] flex items-center px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 py-20 lg:py-0 overflow-hidden"
    >
      {/* Decorative blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/8 rounded-full blur-[150px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-125 h-125 bg-blue-500/5 rounded-full blur-[200px]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full">
        {/* Left — Text */}
        <div className="flex-1 flex flex-col gap-6 sm:gap-8 text-center lg:text-left">
          {/* Breadcrumb */}
          <div
            className={`flex items-center gap-2 justify-center lg:justify-start transition-all duration-700 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <a href="/" className="text-[#888] text-sm font-mono hover:text-red-500 transition-colors">
              Home
            </a>
            <span className="text-[#999] text-sm">/</span>
            <span className="text-red-500 text-sm font-mono">About</span>
          </div>

          {/* Heading */}
          <div
            className={`space-y-2 transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9]">
              <span className="text-white/90 block">I&apos;m</span>
              <span className="hero-name-gradient block">Anshit.</span>
            </h1>
          </div>

          {/* Bio */}
          <div
            className={`max-w-lg mx-auto lg:mx-0 space-y-4 transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#a7a7a7] text-lg leading-relaxed">
              A <span className="text-white font-semibold">Full Stack Developer</span> and{" "}
              <span className="text-violet-400 font-semibold">Web3 enthusiast</span> who
              believes in building things that matter. From crafting pixel-perfect UIs to
              architecting scalable backends — I love the entire spectrum.
            </p>
            <p className="text-[#888] text-base font-mono leading-relaxed">
              Based in India 🇮🇳 · Building since 2.5+ years · Always shipping.
            </p>
          </div>

          {/* Quick stats */}
          <div
            className={`flex gap-6 sm:gap-8 mt-2 justify-center lg:justify-start transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { value: "2.5+", label: "Years Coding" },
              { value: "30+", label: "Technologies" },
              { value: "∞", label: "Curiosity" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-black text-white/90">{stat.value}</span>
                <span className="text-xs font-mono text-[#888] uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Visual card */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-12 rotate-3"
          }`}
        >
          {/* Main card */}
          <div className="relative w-72 sm:w-80 md:w-96 lg:w-[420px] h-96 sm:h-[440px] md:h-[520px] lg:h-[580px] rounded-3xl border border-[#ffffff0a] bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden group">
            {/* Gradient top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 via-orange-500 to-red-500" />

            {/* Photo placeholder */}
            <div className="w-full h-60 sm:h-72 md:h-[360px] lg:h-[420px] bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-red-500/10 via-transparent to-violet-500/10" />
                <img
                src="https://ik.imagekit.io/4ytu59yld/PORTFOLIO/1.jpg?updatedAt=1772696731040"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              {/* Floating badges */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-mono">
                ● Online
              </div>
            </div>

            {/* Info */}
            <div className="p-6 space-y-3">
              <div>
                <h3 className="text-xl font-bold text-white/90">Anshit Rangra</h3>
                <p className="text-red-500 text-sm font-mono">Full Stack + Web3 Developer</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Rust", "Solana"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[#ffffff08] text-[#a7a7a7] border border-[#ffffff0a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[#999] text-xs font-mono uppercase tracking-widest">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border border-[#333] flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-red-500 rounded-full hero-scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
