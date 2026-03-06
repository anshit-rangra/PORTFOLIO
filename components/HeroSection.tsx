"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const placeholderImages = [
  {
    id: 1,
    image: "https://ik.imagekit.io/4ytu59yld/PORTFOLIO/3.jpeg?updatedAt=1772696891307",
    label: "Anshit",
    rotation: "-3deg",
  },
  {
    id: 2,
    image: "https://ik.imagekit.io/4ytu59yld/PORTFOLIO/1.jpg?updatedAt=1772696731040",
    label: "Ansh",
    rotation: "2deg",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dle5ioc63/image/upload/v1772697627/2_uotovr.jpg",
    label: "Anshu",
    rotation: "-1deg",
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
    <section className="relative w-full min-h-[calc(100vh-88px)] lg:h-[calc(100vh-88px)] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 py-16 sm:py-20 lg:py-0 overflow-hidden gap-8 sm:gap-12 lg:gap-0">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-red-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-violet-500/10 rounded-full blur-[150px] delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 lg:w-150 h-96 lg:h-150 bg-blue-500/5 rounded-full blur-[200px]" />

      {/* Left Content */}
      <div
        className={`relative z-10 flex flex-col gap-4 sm:gap-6 w-full lg:max-w-[55%] text-center lg:text-left transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Status Badge */}
        <div
          className={`flex items-center gap-2 w-fit mx-auto lg:mx-0 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-green-400 text-xs sm:text-sm font-mono tracking-wider uppercase">
            Available for work
          </span>
        </div>

        {/* Name */}
        <div className="space-y-0">
          <h1
            className={`hero-name text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-none font-black tracking-tight transition-all duration-700 delay-300 ${
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
          className={`flex items-center gap-3 justify-center lg:justify-start transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="h-0.5 w-8 sm:w-12 bg-linear-to-r from-red-500 to-transparent hidden sm:block" />
          <h2 className="text-base sm:text-xl md:text-2xl font-mono text-[#a7a7a7]">
            <span className="text-red-500">Full Stack</span> Developer{" "}
            <span className="text-[#999]">+</span>{" "}
            <span className="text-violet-400">Web3</span> Developer
          </h2>
        </div>

        {/* About */}
        <p
          className={`text-[#8a8a8a] text-sm sm:text-base lg:text-lg leading-relaxed max-w-md sm:max-w-lg lg:max-w-130 mx-auto lg:mx-0 font-light transition-all duration-700 delay-700 ${
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
          className={`flex items-center gap-6 sm:gap-8 mt-2 justify-center lg:justify-start transition-all duration-700 delay-900 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold text-white hero-name-gradient">
              20+
            </span>
            <span className="text-[10px] sm:text-xs text-[#888] font-mono uppercase tracking-wider">
              Projects
            </span>
          </div>
          <div className="w-px h-8 sm:h-10 bg-[#333]" />
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold text-white hero-name-gradient">
              2+
            </span>
            <span className="text-[10px] sm:text-xs text-[#888] font-mono uppercase tracking-wider">
              Years Exp
            </span>
          </div>
          <div className="w-px h-8 sm:h-10 bg-[#333]" />
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold text-white hero-name-gradient">
              ∞
            </span>
            <span className="text-[10px] sm:text-xs text-[#888] font-mono uppercase tracking-wider">
              Curiosity
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex items-center gap-3 sm:gap-4 mt-4 justify-center lg:justify-start flex-wrap transition-all duration-700 delay-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/projects"
            className="hero-cta-primary group relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-mono text-xs sm:text-sm tracking-wider uppercase overflow-hidden inline-flex"
          >
            <span className="relative z-10 text-white flex items-center gap-2">
              View Projects
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>

          <a
            href="https://drive.google.com/file/d/15loURQStraXyIloUASpXflzLfn_KbAq9/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-secondary px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-mono text-xs sm:text-sm tracking-wider uppercase text-[#a7a7a7] hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
        </div>
      </div>

      {/* Right Side - Image Gallery with Cool Transitions */}
      <div
        className={`relative z-10 flex items-center justify-center w-full sm:w-[80%] md:w-[60%] lg:w-[40%] h-80 sm:h-100 md:h-112.5 lg:h-full transition-all duration-1000 delay-500 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {/* Orbiting ring */}
        <div className="absolute w-56 sm:w-72 md:w-80 lg:w-105 h-56 sm:h-72 md:h-80 lg:h-105 rounded-full border border-[#ffffff08] hero-orbit" />
        <div className="absolute w-64 sm:w-80 md:w-96 lg:w-130 h-64 sm:h-80 md:h-96 lg:h-130 rounded-full border border-[#ffffff05] hero-orbit-reverse" />

        {/* Main Image Card Stack */}
        <div className="relative w-48 sm:w-60 md:w-70 lg:w-[320px] h-60 sm:h-72 md:h-80 lg:h-100 perspective-distant">
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
                {/* Image */}
                <img
                  src={img.image}
                  alt={isActive ? `Anshit Rangra — photo ${index + 1}` : `Anshit Rangra — photo ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={isActive ? "eager" : "lazy"}
                  fetchPriority={isActive ? "high" : "low"}
                  decoding="async"
                />

                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/60 to-transparent">
                  <p className="text-white/80 text-sm font-mono">
                    {img.label}
                  </p>
                </div>

                {/* Glow border */}
                <div className="absolute inset-0 rounded-2xl border border-white/10" />
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
                aria-label={`View photo ${index + 1}`}
                aria-pressed={index === activeIndex}
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
          className={`absolute -left-2 sm:-left-8 top-8 sm:top-16 w-10 sm:w-16 h-10 sm:h-16 rounded-xl overflow-hidden border border-white/10 shadow-2xl hero-float-1 hidden sm:block transition-all duration-1000 delay-700 ${
            mounted ? "opacity-70 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
        <img src={placeholderImages[(activeIndex + 1) % placeholderImages.length].image} alt="" aria-hidden="true" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        </div>

        <div
          className={`absolute -right-1 sm:-right-4 top-16 sm:top-24 w-8 sm:w-14 h-8 sm:h-14 rounded-lg overflow-hidden border border-white/10 shadow-2xl hero-float-2 hidden sm:block transition-all duration-1000 delay-900 ${
            mounted ? "opacity-50 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img src={placeholderImages[(activeIndex + 2) % placeholderImages.length].image} alt="" aria-hidden="true" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        </div>

        <div
          className={`absolute left-1 sm:left-4 bottom-12 sm:bottom-20 w-8 sm:w-12 h-8 sm:h-12 rounded-lg overflow-hidden border border-white/10 shadow-2xl hero-float-3 hidden sm:block transition-all duration-1000 delay-1100 ${
            mounted ? "opacity-40 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img src={placeholderImages[(activeIndex + 3) % placeholderImages.length].image} alt="" aria-hidden="true" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden lg:flex">
        <span className="text-[#999] text-xs font-mono tracking-widest uppercase">
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
