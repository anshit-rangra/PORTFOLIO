"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  icon: string;
  color: string;
  bg: string;
}

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const row1Skills: Skill[] = [
  {
    name: "HTML",
    color: "#E34F26",
    bg: "#E34F2615",
    icon: `${CDN}/html5/html5-original.png`,
  },
  {
    name: "CSS",
    color: "#1572B6",
    bg: "#1572B615",
    icon: `${CDN}/css3/css3-original.png`,
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    bg: "#F7DF1E15",
    icon: `${CDN}/javascript/javascript-original.png`,
  },
  {
    name: "React",
    color: "#61DAFB",
    bg: "#61DAFB15",
    icon: `${CDN}/react/react-original.png`,
  },
  {
    name: "Next.js",
    color: "#ffffff",
    bg: "#ffffff10",
    icon: `${CDN}/nextjs/nextjs-original.png`,
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    bg: "#3178C615",
    icon: `${CDN}/typescript/typescript-original.png`,
  },
  {
    name: "Three.js",
    color: "#ffffff",
    bg: "#ffffff10",
    icon: `${CDN}/threejs/threejs-original.png`,
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    bg: "#06B6D415",
    icon: `${CDN}/tailwindcss/tailwindcss-original.png`,
  },
  {
    name: "Node.js",
    color: "#339933",
    bg: "#33993315",
    icon: `${CDN}/nodejs/nodejs-original.png`,
  },
  {
    name: "Express.js",
    color: "#ffffff",
    bg: "#ffffff08",
    icon: `${CDN}/express/express-original.png`,
  },
  {
    name: "Socket.io",
    color: "#010101",
    bg: "#ffffff10",
    icon: `${CDN}/socketio/socketio-original.png`,
  },
  {
    name: "LangChain",
    color: "#1C3C3C",
    bg: "#1C3C3C20",
    icon: "https://cdn.worldvectorlogo.com/logos/langchain.svg",
  },
  {
    name: "DSA",
    color: "#FF6B6B",
    bg: "#FF6B6B15",
    icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/128/external-algorithm-computer-programming-flaticons-flat-flat-icons.png",
  },
  {
    name: "System Design",
    color: "#A78BFA",
    bg: "#A78BFA15",
    icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/128/external-architecture-computer-programming-flaticons-flat-flat-icons.png",
  },
  {
    name: "Microservices",
    color: "#06B6D4",
    bg: "#06B6D415",
    icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/128/external-microservice-microservices-flaticons-flat-flat-icons.png",
  },
  {
    name: "Chess",
    color: "#769656",
    bg: "#76965620",
    icon: "https://img.icons8.com/fluency/128/chess.png",
  },
];

const row2Skills: Skill[] = [
  {
    name: "MongoDB",
    color: "#47A248",
    bg: "#47A24815",
    icon: `${CDN}/mongodb/mongodb-original.png`,
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    bg: "#FFCA2815",
    icon: `${CDN}/firebase/firebase-original.png`,
  },
  {
    name: "PostgreSQL",
    color: "#4169E1",
    bg: "#4169E115",
    icon: `${CDN}/postgresql/postgresql-original.png`,
  },
  {
    name: "Vector DB",
    color: "#8B5CF6",
    bg: "#8B5CF615",
    icon: "https://img.icons8.com/fluency/128/database.png",
  },
  {
    name: "RAG",
    color: "#10B981",
    bg: "#10B98115",
    icon: "https://img.icons8.com/fluency/128/artificial-intelligence.png",
  },
  {
    name: "Docker",
    color: "#2496ED",
    bg: "#2496ED15",
    icon: `${CDN}/docker/docker-original.png`,
  },
  {
    name: "Git",
    color: "#F05032",
    bg: "#F0503215",
    icon: `${CDN}/git/git-original.png`,
  },
  {
    name: "AWS",
    color: "#FF9900",
    bg: "#FF990015",
    icon: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.png`,
  },
  {
    name: "Linux",
    color: "#FCC624",
    bg: "#FCC62415",
    icon: `${CDN}/linux/linux-original.png`,
  },
  {
    name: "Blockchain",
    color: "#F7931A",
    bg: "#F7931A15",
    icon: "https://img.icons8.com/fluency/128/blockchain-new-logo.png",
  },
  {
    name: "Ethers.js",
    color: "#6B7FF0",
    bg: "#6B7FF015",
    icon: "https://img.icons8.com/color/128/ethereum.png",
  },
  {
    name: "Solidity",
    color: "#636363",
    bg: "#ffffff10",
    icon: `${CDN}/solidity/solidity-original.png`,
  },
  {
    name: "Solana",
    color: "#9945FF",
    bg: "#9945FF15",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.png?v=040",
  },
  {
    name: "Web3.js",
    color: "#F16822",
    bg: "#F1682215",
    icon: "https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png",
  },
  {
    name: "Rust",
    color: "#CE422B",
    bg: "#CE422B15",
    icon: `${CDN}/rust/rust-original.png`,
  },
  {
    name: "Redis",
    color: "#DC382D",
    bg: "#DC382D15",
    icon: `${CDN}/redis/redis-original.png`,
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div
    className="skill-tile group relative flex items-center gap-5 px-8 py-6 rounded-2xl border border-[#ffffff08] bg-[#0e0e0e]/70 backdrop-blur-md hover:border-[#ffffff18] transition-all duration-400 cursor-default shrink-0"
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = `0 4px 30px ${skill.color}20, 0 0 60px ${skill.color}08`;
      e.currentTarget.style.borderColor = `${skill.color}30`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.borderColor = "#ffffff08";
    }}
  >
    {/* Glow on hover */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: `radial-gradient(circle at 30% 50%, ${skill.color}08, transparent 70%)`,
      }}
    />

    {/* Icon — now using <img> for PNG URLs */}
    <div
      className="relative w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
      style={{
        background: skill.bg,
        border: `1px solid ${skill.color}20`,
      }}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        width={32}
        height={32}
        className="w-8 h-8 object-contain"
        loading="lazy"
      />
    </div>

    {/* Name */}
    <span className="relative text-lg font-semibold text-[#c0c0c0] group-hover:text-white transition-colors duration-300 whitespace-nowrap">
      {skill.name}
    </span>
  </div>
);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!section || !heading || !row1 || !row2) return;

    // Measure one "set" width (half the row, since we duplicate)
    const row1SetWidth = row1.scrollWidth / 2;
    const row2SetWidth = row2.scrollWidth / 2;

    // Constant speed (px per second)
    const speed = 50;

    // Track positions
    let x1 = 0;
    let x2 = -row2SetWidth;

    // Infinite marquee via GSAP ticker — constant speed, no scroll interaction
    const animate = (_: number, deltaTime: number) => {
      const dt = deltaTime / 1000;

      // Row 1: moves LEFT
      x1 -= speed * dt;
      if (x1 <= -row1SetWidth) x1 += row1SetWidth;

      // Row 2: moves RIGHT
      x2 += speed * dt;
      if (x2 >= 0) x2 -= row2SetWidth;

      gsap.set(row1, { x: x1 });
      gsap.set(row2, { x: x2 });
    };

    gsap.ticker.add(animate);

    const ctx = gsap.context(() => {
      // Heading animation
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
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Fade-in tiles
      const allTiles = section.querySelectorAll(".skill-tile");
      gsap.fromTo(
        allTiles,
        { opacity: 0, y: 40, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => {
      ctx.revert();
      gsap.ticker.remove(animate);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-red-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-[180px]" />

      {/* Heading */}
      <div ref={headingRef} className="px-10 md:px-20 lg:px-28 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-linear-to-r from-red-500 to-transparent" />
          <span className="text-red-500 text-sm font-mono uppercase tracking-widest">
            What I Work With
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight">
          <span className="text-white/90">My </span>
          <span className="hero-name-gradient">Skills</span>
        </h2>
        <p className="text-[#666] text-lg font-mono mt-4 max-w-xl">
          Technologies and tools I use to bring ideas to life.
        </p>
      </div>

      {/* Row 1 — auto-scrolls LEFT, infinite */}
      <div className="mb-8">
        <div ref={row1Ref} className="flex gap-6 w-max">
          {[...row1Skills, ...row1Skills].map((skill, i) => (
            <SkillCard key={`r1-${i}`} skill={skill} />
          ))}
        </div>
      </div>

      {/* Row 2 — auto-scrolls RIGHT, infinite */}
      <div>
        <div ref={row2Ref} className="flex gap-6 w-max">
          {[...row2Skills, ...row2Skills].map((skill, i) => (
            <SkillCard key={`r2-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
