"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
  icon: string;
  category: string;
  github?: string;
  live?: string;
  status: "live" | "building" | "completed";
}

const projects: Project[] = [
  {
    title: "DeFi Dashboard",
    description:
      "A real-time decentralized finance dashboard that tracks token prices, LP positions, and wallet analytics across multiple chains.",
    tags: ["React", "Ethers.js", "Node.js", "WebSocket"],
    color: "#9945FF",
    icon: "📊",
    category: "Web3",
    github: "https://github.com",
    live: "https://example.com",
    status: "live",
  },
  {
    title: "AI Chat Platform",
    description:
      "An intelligent chatbot platform powered by LangChain and RAG pipelines, with conversation memory and document analysis capabilities.",
    tags: ["Next.js", "LangChain", "Vector DB", "OpenAI"],
    color: "#F43F5E",
    icon: "🧠",
    category: "AI",
    github: "https://github.com",
    status: "building",
  },
  {
    title: "NFT Marketplace",
    description:
      "A full-featured NFT marketplace on Solana with minting, listing, bidding, and royalty enforcement built using Anchor framework.",
    tags: ["Solana", "Rust", "Anchor", "React"],
    color: "#14F195",
    icon: "🎨",
    category: "Web3",
    github: "https://github.com",
    status: "completed",
  },
  {
    title: "Real-time Collaboration Tool",
    description:
      "A Google Docs-style collaborative editor with real-time cursors, presence indicators, and conflict-free editing using CRDTs.",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
    color: "#3B82F6",
    icon: "📝",
    category: "Full Stack",
    github: "https://github.com",
    live: "https://example.com",
    status: "live",
  },
  {
    title: "Microservices E-Commerce",
    description:
      "A scalable e-commerce backend built with microservices architecture — separate services for auth, products, orders, and payments.",
    tags: ["Node.js", "Docker", "MongoDB", "Redis", "RabbitMQ"],
    color: "#F59E0B",
    icon: "🛒",
    category: "Backend",
    github: "https://github.com",
    status: "completed",
  },
  {
    title: "Chess Engine",
    description:
      "A browser-based chess game with an AI opponent using minimax algorithm with alpha-beta pruning. Includes move validation and game history.",
    tags: ["TypeScript", "React", "Algorithm", "Canvas"],
    color: "#10B981",
    icon: "♟️",
    category: "Full Stack",
    github: "https://github.com",
    live: "https://example.com",
    status: "live",
  },
  {
    title: "Portfolio Website",
    description:
      "This very website you're browsing — built with Next.js, GSAP animations, and a dark theme inspired by modern design systems.",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Three.js"],
    color: "#EF4444",
    icon: "🌐",
    category: "Frontend",
    github: "https://github.com",
    live: "https://anshit.dev",
    status: "live",
  },
  {
    title: "Blockchain Voting System",
    description:
      "A transparent on-chain voting dApp built on Ethereum. Votes are immutable, verifiable, and completely decentralized.",
    tags: ["Solidity", "Hardhat", "Ethers.js", "React"],
    color: "#8B5CF6",
    icon: "🗳️",
    category: "Web3",
    github: "https://github.com",
    status: "completed",
  },
];

const categories = ["All", "Web3", "AI", "Full Stack", "Backend", "Frontend"];

const statusConfig = {
  live: { label: "Live", color: "#10B981", dot: true },
  building: { label: "Building", color: "#F59E0B", dot: true },
  completed: { label: "Completed", color: "#3B82F6", dot: false },
};

const ProjectsGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        grid.children,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef.current!);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section ref={sectionRef} className="relative pb-32 overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[150px]" />

      {/* Filter bar */}
      <div className="px-10 md:px-20 lg:px-28 mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-mono transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-red-500/10 border-red-500/30 text-red-500"
                  : "bg-[#0a0a0a]/60 border-[#ffffff08] text-[#666] hover:border-[#ffffff18] hover:text-[#a7a7a7]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div
        ref={gridRef}
        className="px-10 md:px-20 lg:px-28 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredProjects.map((project, i) => {
          const status = statusConfig[project.status];
          return (
            <div
              key={`${project.title}-${i}`}
              className="group relative rounded-2xl border border-[#ffffff08] bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-[#ffffff18] cursor-default"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 50px ${project.color}12, 0 0 100px ${project.color}06`;
                e.currentTarget.style.borderColor = `${project.color}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#ffffff08";
              }}
            >
              {/* Top accent line */}
              <div
                className="h-0.5 w-full transition-all duration-500 group-hover:h-0.75"
                style={{
                  background: `linear-gradient(90deg, ${project.color}60, ${project.color}20, transparent)`,
                }}
              />

              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 20% 0%, ${project.color}08, transparent 60%)`,
                }}
              />

              <div className="relative p-8">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-500 inline-block">
                      {project.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <span
                        className="text-xs font-mono uppercase tracking-wider"
                        style={{ color: `${project.color}` }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Status */}
                  <span
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono shrink-0"
                    style={{
                      color: status.color,
                      background: `${status.color}12`,
                      border: `1px solid ${status.color}25`,
                    }}
                  >
                    {status.dot && (
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: status.color }}
                      />
                    )}
                    {status.label}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#888] text-sm font-mono leading-relaxed mb-6 group-hover:text-[#aaa] transition-colors">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[#ffffff06] text-[#777] border border-[#ffffff08] group-hover:text-[#999] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#555] hover:text-white transition-colors duration-300 text-sm font-mono"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#555] hover:text-red-500 transition-colors duration-300 text-sm font-mono"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* More coming badge */}
      <div className="px-10 md:px-20 lg:px-28 mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-[#ffffff08] bg-[#0a0a0a]/60 backdrop-blur-md">
          <span className="text-xl">🚧</span>
          <span className="text-[#666] text-sm font-mono">
            More projects are always in the pipeline — stay tuned.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
