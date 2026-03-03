"use client";

import { useState, useEffect, useCallback } from "react";

const placeholderImages = [
  {
    id: 1,
    gradient: "from-violet-600 via-purple-500 to-indigo-600",
    label: "Your Photo 1",
    rotation: "-3deg",
  },
  {
    id: 2,
    gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
    label: "Your Photo 2",
    rotation: "2deg",
  },
  {
    id: 3,
    gradient: "from-cyan-500 via-teal-400 to-emerald-500",
    label: "Your Photo 3",
    rotation: "-1deg",
  },
  {
    id: 4,
    gradient: "from-amber-500 via-orange-500 to-red-500",
    label: "Your Photo 4",
    rotation: "3deg",
  },
  {
    id: 5,
    gradient: "from-blue-600 via-indigo-500 to-violet-500",
    label: "Your Photo 5",
    rotation: "-2deg",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleImage = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % placeholderImages.length);
      setIsAnimating(false);
    }, 600);
  }, []);

  useEffect(() => {
    const interval = setInterval(cycleImage, 3000);
    return () => clearInterval(interval);
  }, [cycleImage]);

  return (
    <section className="relative w-full h-[calc(100vh-88px)] flex items-center justify-between px-10 md:px-20 lg:px-28 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-[150px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/5 rounded-full blur-[200px]" />

      {/* Left Content */}
      <div
        className={`relative z-10 flex flex-col gap-6 max-w-[55%] transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Status Badge */}
        <div
          className={`flex items-center gap-2 w-fit transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-green-400 text-sm font-mono tracking-wider uppercase">
            Available for work
          </span>
        </div>

        {/* Name */}
        <div className="space-y-0">
          <h1
            className={`hero-name text-[5.5rem] leading-none font-black tracking-tight transition-all duration-700 delay-300 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-white/90 block">ANSHIT</span>
            <span className="hero-name-gradient block">RANGRA</span>
          </h1>
        </div>

        {/* Designation */}
        <div
          className={`flex items-center gap-3 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="h-0.5 w-12 bg-linear-to-r from-red-500 to-transparent" />
          <h2 className="text-xl md:text-2xl font-mono text-[#a7a7a7]">
            <span className="text-red-500">Full Stack</span> Developer{" "}
            <span className="text-[#555]">+</span>{" "}
            <span className="text-violet-400">Web3</span> Developer
          </h2>
        </div>

        {/* About */}
        <p
          className={`text-[#8a8a8a] text-lg leading-relaxed max-w-130 font-light transition-all duration-700 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          I love building{" "}
          <span className="text-white/80 font-normal">scalable applications</span>{" "}
          that push boundaries. Passionate about solving complex problems and turning
          ideas into{" "}
          <span className="text-white/80 font-normal">
            elegant, real-world solutions
          </span>
          . Always exploring the edge of what&apos;s possible in tech.
        </p>

        {/* Stats / Quick Info */}
        <div
          className={`flex items-center gap-8 mt-2 transition-all duration-700 delay-900 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white hero-name-gradient">
              20+
            </span>
            <span className="text-xs text-[#666] font-mono uppercase tracking-wider">
              Projects
            </span>
          </div>
          <div className="w-px h-10 bg-[#333]" />
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white hero-name-gradient">
              2+
            </span>
            <span className="text-xs text-[#666] font-mono uppercase tracking-wider">
              Years Exp
            </span>
          </div>
          <div className="w-px h-10 bg-[#333]" />
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white hero-name-gradient">
              ∞
            </span>
            <span className="text-xs text-[#666] font-mono uppercase tracking-wider">
              Curiosity
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex items-center gap-4 mt-4 transition-all duration-700 delay-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="hero-cta-primary group relative px-8 py-3.5 rounded-lg font-mono text-sm tracking-wider uppercase overflow-hidden">
            <span className="relative z-10 text-white flex items-center gap-2">
              View Projects
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>

          <button className="hero-cta-secondary px-8 py-3.5 rounded-lg font-mono text-sm tracking-wider uppercase text-[#a7a7a7] hover:text-white transition-colors duration-300">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </span>
          </button>
        </div>
      </div>

      {/* Right Side - Image Gallery with Cool Transitions */}
      <div
        className={`relative z-10 flex items-center justify-center w-[40%] h-full transition-all duration-1000 delay-500 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {/* Orbiting ring */}
        <div className="absolute w-105 h-105 rounded-full border border-[#ffffff08] hero-orbit" />
        <div className="absolute w-130 h-130 rounded-full border border-[#ffffff05] hero-orbit-reverse" />

        {/* Main Image Card Stack */}
        <div className="relative w-[320px] h-100 perspective-distant">
          {placeholderImages.map((img, index) => {
            const offset = (index - activeIndex + placeholderImages.length) % placeholderImages.length;
            const isActive = offset === 0;
            const isNext = offset === 1;
            const isPrev = offset === placeholderImages.length - 1;

            return (
              <div
                key={img.id}
                className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer
                  ${isActive ? "hero-card-active" : ""}
                  ${isNext ? "hero-card-next" : ""}
                  ${isPrev ? "hero-card-prev" : ""}
                  ${!isActive && !isNext && !isPrev ? "hero-card-hidden" : ""}
                  ${isAnimating && isActive ? "hero-card-exit" : ""}
                `}
                style={{
                  zIndex: isActive ? 30 : isNext ? 20 : isPrev ? 20 : 10,
                }}
                onClick={cycleImage}
              >
                {/* Placeholder Image */}
                <div
                  className={`w-full h-full bg-linear-to-br ${img.gradient} flex items-center justify-center relative`}
                >
                  {/* Person silhouette placeholder */}
                  <svg
                    className="w-40 h-40 text-white/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>

                  {/* Overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/60 to-transparent">
                    <p className="text-white/60 text-xs font-mono">
                      {img.label}
                    </p>
                    <p className="text-white/30 text-[10px] font-mono mt-1">
                      Replace with your image
                    </p>
                  </div>

                  {/* Glow border */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10" />
                </div>
              </div>
            );
          })}

          {/* Image counter */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {placeholderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveIndex(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "w-8 bg-red-500"
                    : "w-3 bg-[#333] hover:bg-[#555]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating small thumbnails */}
        <div
          className={`absolute -left-8 top-16 w-16 h-16 rounded-xl overflow-hidden border border-white/10 shadow-2xl hero-float-1 transition-all duration-1000 delay-700 ${
            mounted ? "opacity-70 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className={`w-full h-full bg-linear-to-br ${placeholderImages[(activeIndex + 1) % placeholderImages.length].gradient}`} />
        </div>

        <div
          className={`absolute -right-4 top-24 w-14 h-14 rounded-lg overflow-hidden border border-white/10 shadow-2xl hero-float-2 transition-all duration-1000 delay-900 ${
            mounted ? "opacity-50 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className={`w-full h-full bg-linear-to-br ${placeholderImages[(activeIndex + 2) % placeholderImages.length].gradient}`} />
        </div>

        <div
          className={`absolute left-4 bottom-20 w-12 h-12 rounded-lg overflow-hidden border border-white/10 shadow-2xl hero-float-3 transition-all duration-1000 delay-1100 ${
            mounted ? "opacity-40 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className={`w-full h-full bg-linear-to-br ${placeholderImages[(activeIndex + 3) % placeholderImages.length].gradient}`} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[#555] text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-[#333] flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-red-500 hero-scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
