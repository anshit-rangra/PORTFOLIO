"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Gear {
  name: string;
  specs: string;
  emoji: string;
  color: string;
  tag: string;
}

const gears: Gear[] = [
  {
    name: "HP 15s Laptop",
    specs: "Ryzen 5 5500U • 8GB DDR4 3200MHz",
    emoji: "💻",
    color: "#60A5FA",
    tag: "Daily Driver",
  },
  {
    name: "HP Wireless Mouse",
    specs: "Smooth & reliable — gets the job done",
    emoji: "🖱️",
    color: "#34D399",
    tag: "Precision",
  },
  {
    name: "Lapcare EERS",
    specs: "Wireless headphones for incredible focus sessions",
    emoji: "🎧",
    color: "#A78BFA",
    tag: "Focus Mode",
  },
  {
    name: "Moto G64",
    specs: "My go-to device for testing & on-the-go",
    emoji: "📱",
    color: "#F472B6",
    tag: "Mobile",
  },
];

const GearSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;
    const badge = badgeRef.current;
    if (!section || !heading || !cards || !badge) return;

    const ctx = gsap.context(() => {
      // Heading
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

      // Cards stagger
      gsap.fromTo(
        cards.children,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Badge
      gsap.fromTo(
        badge,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: badge,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-[180px]" />

      {/* Heading */}
      <div ref={headingRef} className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 mb-8 sm:mb-10 md:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-linear-to-r from-red-500 to-transparent" />
          <span className="text-red-500 text-sm font-mono uppercase tracking-widest">
            My Setup
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
          <span className="text-white/90">My </span>
          <span className="hero-name-gradient">Gears</span>
        </h2>
        <p className="text-[#888] text-sm sm:text-lg font-mono mt-4 max-w-xl">
          The tools I use every day to turn ideas into reality.
        </p>
      </div>

      {/* Gear cards grid */}
      <div
        ref={cardsRef}
        className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
      >
        {gears.map((gear, i) => (
          <div
            key={i}
            className="group relative rounded-2xl border border-[#ffffff08] bg-[#0a0a0a]/80 backdrop-blur-md p-5 sm:p-6 md:p-8 transition-all duration-500 hover:border-[#ffffff18] cursor-default"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 4px 40px ${gear.color}15, 0 0 80px ${gear.color}08`;
              e.currentTarget.style.borderColor = `${gear.color}30`;
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
                background: `radial-gradient(circle at 50% 0%, ${gear.color}10, transparent 70%)`,
              }}
            />

            {/* Tag */}
            <span
              className="relative inline-block text-xs font-mono tracking-wider uppercase px-3 py-1 rounded-full mb-6"
              style={{
                color: gear.color,
                background: `${gear.color}12`,
                border: `1px solid ${gear.color}20`,
              }}
            >
              {gear.tag}
            </span>

            {/* Emoji */}
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
              {gear.emoji}
            </div>

            {/* Name */}
            <h3 className="relative text-lg sm:text-xl font-bold text-white/90 mb-2 group-hover:text-white transition-colors duration-300">
              {gear.name}
            </h3>

            {/* Specs */}
            <p className="relative text-sm text-[#888] font-mono leading-relaxed group-hover:text-[#ccc] transition-colors duration-300">
              {gear.specs}
            </p>
          </div>
        ))}
      </div>

      {/* Duration badge */}
      <div ref={badgeRef} className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 mt-8 sm:mt-10 md:mt-16">
        <div className="inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-8 py-4 sm:py-5 rounded-2xl border border-[#ffffff08] bg-[#0a0a0a]/60 backdrop-blur-md">
          <span className="text-3xl">⏱️</span>
          <div>
            <p className="text-white/90 font-bold text-lg">
              2.5+ Years & Counting
            </p>
            <p className="text-[#888] text-sm font-mono">
              Same setup, same hunger. No excuses — just consistent output.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GearSection;
