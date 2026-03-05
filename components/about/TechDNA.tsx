"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Frontend",
    color: "#61DAFB",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Backend",
    color: "#339933",
    skills: ["Node.js", "Express.js", "Socket.io", "REST APIs", "SSR"],
  },
  {
    title: "Databases",
    color: "#4169E1",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "Vector DB"],
  },
  {
    title: "Web3 / Blockchain",
    color: "#9945FF",
    skills: ["Solidity", "Ethers.js", "Web3.js", "Solana", "Rust", "Anchor"],
  },
  {
    title: "AI / ML",
    color: "#F43F5E",
    skills: ["LangChain", "RAG", "Vector Embeddings", "OpenAI API"],
  },
  {
    title: "DevOps & Tools",
    color: "#FF9900",
    skills: ["Docker", "Git", "AWS", "Linux", "Microservices", "System Design"],
  },
];

const TechDNA = () => {
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
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-[180px]" />

      {/* Heading */}
      <div ref={headingRef} className="px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 mb-10 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-linear-to-r from-red-500 to-transparent" />
          <span className="text-red-500 text-sm font-mono uppercase tracking-widest">
            Tech Stack
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
          <span className="text-white/90">My </span>
          <span className="hero-name-gradient">Tech DNA</span>
        </h2>
        <p className="text-[#666] text-lg font-mono mt-4 max-w-xl">
          Organized by domain — everything I work with on a daily basis.
        </p>
      </div>

      {/* Category grid */}
      <div
        ref={gridRef}
        className="px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            className="group relative rounded-2xl border border-[#ffffff08] bg-[#0a0a0a]/80 backdrop-blur-md p-8 transition-all duration-500 hover:border-[#ffffff18] cursor-default"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 4px 40px ${cat.color}15, 0 0 80px ${cat.color}08`;
              e.currentTarget.style.borderColor = `${cat.color}30`;
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
                background: `radial-gradient(circle at 50% 0%, ${cat.color}10, transparent 70%)`,
              }}
            />

            {/* Category header */}
            <div className="relative flex items-center gap-3 mb-6">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}60` }}
              />
              <h3 className="text-lg font-bold text-white/90">{cat.title}</h3>
            </div>

            {/* Skills */}
            <div className="relative flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl text-sm font-mono transition-all duration-300 bg-[#ffffff06] text-[#a7a7a7] border border-[#ffffff08] hover:text-white hover:bg-[#ffffff10] hover:border-[#ffffff20]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechDNA;
