"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    name: "GitHub",
    handle: "@anshit-rangra",
    url: "https://github.com/anshit-rangra",
    color: "#ffffff",
    description: "Open source code & contributions",
    svg: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Anshit Rangra",
    url: "https://www.linkedin.com/in/anshit-rangra/",
    color: "#0A66C2",
    description: "Professional network & updates",
    svg: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    handle: "@anshit_rangra",
    url: "https://x.com/Anshit_Rangra",
    color: "#ffffff",
    description: "Tech thoughts & hot takes",
    svg: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "anshitrangra@proton.me",
    url: "mailto:anshitrangra@proton.me",
    color: "#EA4335",
    description: "Direct line for serious inquiries",
    svg: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "anshit.rangra",
    url: "https://www.instagram.com/anshit.rangra/",
    color: "#E4405F",
    description: "Chill Vibes & Behind-the-Scenes",
    svg: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110.001-2.881 1.44 1.44 0 010 2.881z" />
      </svg>
    ),
  },
];

const Socials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const grid = gridRef.current;
    if (!section || !heading || !grid) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        grid.children,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-red-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[180px]" />

      {/* Heading */}
      <div ref={headingRef} className="px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 mb-10 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-linear-to-r from-red-500 to-transparent" />
          <span className="text-red-500 text-sm font-mono uppercase tracking-widest">
            Or Find Me Here
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
          <span className="text-white/90">My </span>
          <span className="hero-name-gradient">Socials</span>
        </h2>
        <p className="text-[#888] text-lg font-mono mt-4 max-w-xl">
          Follow along the journey — I share learnings, projects, and occasional hot takes.
        </p>
      </div>

      {/* Social cards */}
      <div
        ref={gridRef}
        className="px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-[#ffffff08] bg-[#0a0a0a]/80 backdrop-blur-md p-8 transition-all duration-500 hover:border-[#ffffff18] hover:-translate-y-2 block"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 8px 40px ${s.color}15, 0 0 80px ${s.color}08`;
              e.currentTarget.style.borderColor = `${s.color}30`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#ffffff08";
            }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${s.color}10, transparent 70%)`,
              }}
            />

            {/* Icon */}
            <div
              className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
              style={{
                color: s.color,
                background: `${s.color}10`,
                border: `1px solid ${s.color}20`,
              }}
            >
              {s.svg}
            </div>

            {/* Name */}
            <h3 className="relative text-lg font-bold text-white/90 mb-1 group-hover:text-white transition-colors">
              {s.name}
            </h3>

            {/* Handle */}
            <p
              className="relative text-sm font-mono mb-3"
              style={{ color: s.color === "#ffffff" ? "#a7a7a7" : s.color }}
            >
              {s.handle}
            </p>

            {/* Description */}
            <p className="relative text-xs text-[#888] font-mono leading-relaxed group-hover:text-[#ccc] transition-colors">
              {s.description}
            </p>

            {/* Arrow */}
            <div className="relative mt-5 flex items-center gap-2 text-[#999] group-hover:text-red-500 transition-all duration-300">
              <span className="text-xs font-mono uppercase tracking-wider">Visit</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Socials;
