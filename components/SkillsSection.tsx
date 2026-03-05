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
    icon: `https://i.pinimg.com/736x/c5/73/ff/c573ff5552d6da9a1d28ec4e27cd1445.jpg`,
  },
  {
    name: "CSS",
    color: "#1572B6",
    bg: "#1572B615",
    icon: `https://i.pinimg.com/736x/ee/b3/5d/eeb35df1a6739f4cea43ed1cba70bc25.jpg`,
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    bg: "#F7DF1E15",
    icon: `https://i.pinimg.com/736x/03/d4/71/03d471c6a43c17a3496228b5b43512e6.jpg`,
  },
  {
    name: "React",
    color: "#61DAFB",
    bg: "#61DAFB15",
    icon: `https://i.pinimg.com/736x/2b/ee/11/2bee11a830bacc5ae9006df56b20c33a.jpg`,
  },
  {
    name: "Next.js",
    color: "#ffffff",
    bg: "#ffffff10",
    icon: `https://i.pinimg.com/1200x/93/8a/55/938a551e5b56fe9fd818e47b456e9f50.jpg`,
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    bg: "#3178C615",
    icon: `https://i.pinimg.com/736x/8c/0a/b3/8c0ab3baec0ebc6cfbad22cbe206d0cd.jpg`,
  },
  {
    name: "Three.js",
    color: "#ffffff",
    bg: "#ffffff10",
    icon: `https://i.pinimg.com/736x/f4/ee/a8/f4eea82ee72c6496638f6d177fc6abce.jpg`,
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    bg: "#06B6D415",
    icon: `https://i.pinimg.com/1200x/08/a3/2f/08a32fc73758025add069aefdde61b80.jpg`,
  },
  {
    name: "Node.js",
    color: "#339933",
    bg: "#33993315",
    icon: `https://i.pinimg.com/736x/f3/4a/02/f34a0218dd2e38726c52ac763df55fa7.jpg`,
  },
  {
    name: "Express.js",
    color: "#ffffff",
    bg: "#ffffff08",
    icon: `https://i.pinimg.com/736x/40/e9/7a/40e97aae3a908371bbd98e3fa4cc845c.jpg`,
  },
  {
    name: "Socket.io",
    color: "#010101",
    bg: "#ffffff10",
    icon: `https://i.pinimg.com/736x/fa/af/fd/faaffddc9459701c9cbf230e519aa38b.jpg`,
  },
  {
    name: "LangChain",
    color: "#1C3C3C",
    bg: "#1C3C3C20",
    icon: "https://i.pinimg.com/736x/19/5e/30/195e305b756e5053831c78106161e357.jpg",
  },
  {
    name: "DSA",
    color: "#FF6B6B",
    bg: "#FF6B6B15",
    icon: "https://i.pinimg.com/1200x/f9/87/76/f98776538003e06d0d04fe746a11839e.jpg",
  },
  {
    name: "System Design",
    color: "#A78BFA",
    bg: "#A78BFA15",
    icon: "https://i.pinimg.com/736x/a7/f9/67/a7f967fe5ab1e5ba7109041b13f3e840.jpg",
  },
  {
    name: "Microservices",
    color: "#06B6D4",
    bg: "#06B6D415",
    icon: "https://i.pinimg.com/1200x/d8/b7/7f/d8b77f47527f389c6763e71deb4e3191.jpg",
  },
  {
    name: "Chess",
    color: "#769656",
    bg: "#76965620",
    icon: "https://i.pinimg.com/1200x/e5/c6/e6/e5c6e6f6f07cfca562b6965cfbfbc0e3.jpg",
  },
];

const row2Skills: Skill[] = [
  {
    name: "MongoDB",
    color: "#47A248",
    bg: "#47A24815",
    icon: `https://i.pinimg.com/736x/91/23/7f/91237f1eca767ef74d722ca534f9281a.jpg`,
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    bg: "#FFCA2815",
    icon: `https://i.pinimg.com/736x/13/89/4f/13894f0a8b5d0c4b0a0119f0b3b9d984.jpg`,
  },
  {
    name: "PostgreSQL",
    color: "#4169E1",
    bg: "#4169E115",
    icon: `https://i.pinimg.com/1200x/3c/a9/4a/3ca94a7ab1ec99f374e0ad6d080c2d9e.jpg`,
  },
  {
    name: "Vector DB",
    color: "#8B5CF6",
    bg: "#8B5CF615",
    icon: "https://i.pinimg.com/736x/6c/96/fc/6c96fcd49711e0345865b5241cf59b58.jpg",
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
    icon: `https://i.pinimg.com/736x/5b/46/6b/5b466b71e1cc4b9cf6ff3361c0e976c3.jpg`,
  },
  {
    name: "Git",
    color: "#F05032",
    bg: "#F0503215",
    icon: `https://i.pinimg.com/1200x/a9/5a/ad/a95aadde4325065401dc6942ea5dad90.jpg`,
  },
  {
    name: "AWS",
    color: "#FF9900",
    bg: "#FF990015",
    icon: `https://i.pinimg.com/736x/01/9f/56/019f566e983729bb2f4f02f89f95310e.jpg`,
  },
  {
    name: "Linux",
    color: "#FCC624",
    bg: "#FCC62415",
    icon: `https://i.pinimg.com/736x/c7/b8/11/c7b8113247fecd83bd9b5ed5bd3f34d5.jpg`,
  },
  {
    name: "Blockchain",
    color: "#F7931A",
    bg: "#F7931A15",
    icon: "https://i.pinimg.com/736x/71/55/fa/7155faf420e01ac4b265c14b6f12f63b.jpg",
  },
  {
    name: "Ethers.js",
    color: "#6B7FF0",
    bg: "#6B7FF015",
    icon: "https://i.pinimg.com/1200x/97/ef/9b/97ef9b7cee78f3fa74025c24da78d691.jpg",
  },
  {
    name: "Solidity",
    color: "#636363",
    bg: "#ffffff10",
    icon: `https://i.pinimg.com/736x/de/8f/dc/de8fdca95b45706afed5e61806c5ae64.jpg`,
  },
  {
    name: "Solana",
    color: "#9945FF",
    bg: "#9945FF15",
    icon: "https://i.pinimg.com/736x/e5/ab/b4/e5abb4300d2acdd8cbe8611c95d543b2.jpg",
  },
  {
    name: "Web3.js",
    color: "#F16822",
    bg: "#F1682215",
    icon: "https://i.pinimg.com/1200x/9f/26/ee/9f26eeb873d8ac7811af6c50a6fde744.jpg",
  },
  {
    name: "Rust",
    color: "#CE422B",
    bg: "#CE422B15",
    icon: `https://i.pinimg.com/1200x/ed/51/63/ed5163798559b4ef69ebebe218c78975.jpg`,
  },
  {
    name: "Redis",
    color: "#DC382D",
    bg: "#DC382D15",
    icon: `https://i.pinimg.com/736x/96/1b/cb/961bcbe1b3f045020cbb692bc5e5468d.jpg`,
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
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-red-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-[180px]" />

      {/* Heading */}
      <div ref={headingRef} className="px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 mb-10 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-linear-to-r from-red-500 to-transparent" />
          <span className="text-red-500 text-sm font-mono uppercase tracking-widest">
            What I Work With
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
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
