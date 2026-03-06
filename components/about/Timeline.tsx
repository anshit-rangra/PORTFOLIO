"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2023",
    title: "The Spark — Started Coding",
    description:
      "Wrote my first line of code and got hooked. Dove headfirst into programming, spending every free hour learning Python, Tkinter and VS Code.",
    tags: ["Python", "Tkinter", "VS Code"],
    icon: "🌱",
    color: "#34D399",
  },
  {
    year: "2024",
    title: "Intro To the WEB",
    description:
      "Discovering the world of Web. Learned HTML, CSS, and JavaScript. Built my first static websites and simple interactive pages. The web was my playground.",
    tags: ["HTML", "CSS", "Javascript"],
    icon: "🌐",
    color: "#61DAFB",
  },
  {
    year: "2024",
    title: "Going Full Stack",
    description:
      "Taking interest. Learned MERN Stack to build complete applications from scratch. The full picture started to form.",
    tags: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    icon: "🔧",
    color: "#F59E0B",
  },
  {
    year: "2025",
    title: "AI, System Design & Beyond",
    description:
      "Diving into AI/ML with LangChain, RAG pipelines, and vector databases. Learning system design, microservices, and Docker to build at scale.",
    tags: ["LangChain", "Docker", "System Design", "AI"],
    icon: "🧠",
    color: "#F43F5E",
  },
  
  {
    year: "2025",
    title: "Entered Web3 & Blockchain",
    description:
      "Fell down the blockchain rabbit hole. Started writing smart contracts in Solidity, built dApps, and explored the decentralized future.",
    tags: ["Solidity", "Ethers.js", "Hardhat", "Web3"],
    icon: "⛓️",
    color: "#A78BFA",
  },
  {
    year: "2026-now",
    title: "Solana & Rust",
    description:
      "Expanded to the Solana ecosystem. Picked up Rust, learned Anchor framework, and started building high-performance on-chain programs.",
    tags: ["Rust", "Solana", "Anchor"],
    icon: "🦀",
    color: "#9945FF",
  },
  
];

const Timeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

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

      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-red-500/5 rounded-full blur-[180px]" />

      {/* Heading */}
      <div ref={headingRef} className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 mb-10 sm:mb-12 md:mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-linear-to-r from-red-500 to-transparent" />
          <span className="text-red-500 text-sm font-mono uppercase tracking-widest">
            The Journey
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
          <span className="text-white/90">My </span>
          <span className="hero-name-gradient">Timeline</span>
        </h2>
        <p className="text-[#888] text-sm sm:text-lg font-mono mt-4 max-w-xl">
          How I got here — from zero to building full-stack & Web3 applications.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#ffffff15] to-transparent hidden lg:block" />

        <div className="flex flex-col gap-16 lg:gap-20">
          {timelineData.map((item, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Content card */}
              <div
                className={`flex-1 ${i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}
              >
                <div
                  className="group inline-block rounded-2xl border border-[#ffffff08] bg-[#0a0a0a]/80 backdrop-blur-md p-5 sm:p-6 md:p-8 transition-all duration-500 hover:border-[#ffffff18] cursor-default max-w-lg w-full"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 40px ${item.color}15, 0 0 80px ${item.color}08`;
                    e.currentTarget.style.borderColor = `${item.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#ffffff08";
                  }}
                >
                  {/* Year badge */}
                  <span
                    className="inline-block text-xs font-mono tracking-wider uppercase px-3 py-1 rounded-full mb-4"
                    style={{
                      color: item.color,
                      background: `${item.color}12`,
                      border: `1px solid ${item.color}25`,
                    }}
                  >
                    {item.year}
                  </span>

                  <h3 className="text-xl font-bold text-white/90 mb-3 group-hover:text-white transition-colors">
                    <span className="mr-2">{item.icon}</span>
                    {item.title}
                  </h3>

                  <p className="text-[#888] text-sm font-mono leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "lg:justify-end" : ""}`}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-[#ffffff06] text-[#a7a7a7] border border-[#ffffff0a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center dot (desktop) */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 items-center justify-center"
                style={{ borderColor: item.color, background: `${item.color}20` }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
              </div>

              {/* Spacer for the other side */}
              <div className="hidden lg:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
