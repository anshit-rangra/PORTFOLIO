"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const philosophies = [
  {
    quote: "If he can do it, why can't I?",
    description:
      "Seeing someone succeed doesn't make me jealous — it fuels me. Every achievement by someone else is proof that it's possible.",
    icon: "🔥",
    color: "#F43F5E",
  },
  {
    quote: "Consistency beats talent.",
    description:
      "I don't believe in overnight success. I believe in showing up every single day, writing code, solving problems, and getting 1% better.",
    icon: "📈",
    color: "#10B981",
  },
  {
    quote: "Build in public. Fail in public.",
    description:
      "I share what I learn, what I build, and even where I struggle. Ego slows you down — transparency accelerates growth.",
    icon: "🌍",
    color: "#3B82F6",
  },
  {
    quote: "Teach to truly learn.",
    description:
      "The best way to master anything is to explain it to someone else. Teaching forces clarity, and clarity is the ultimate skill.",
    icon: "🎓",
    color: "#F59E0B",
  },
  {
    quote: "Ship fast, iterate faster.",
    description:
      "Done is better than perfect. I'd rather ship a working MVP today and improve it tomorrow than wait months for perfection.",
    icon: "🚀",
    color: "#8B5CF6",
  },
  {
    quote: "The grind is the shortcut.",
    description:
      "There's no hack, no shortcut, no secret. The people who win are the ones who refuse to quit. That's the only strategy I follow.",
    icon: "💎",
    color: "#06B6D4",
  },
];

const Philosophy = () => {
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
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
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
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-[180px]" />

      {/* Heading */}
      <div ref={headingRef} className="px-10 md:px-20 lg:px-28 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-linear-to-r from-red-500 to-transparent" />
          <span className="text-red-500 text-sm font-mono uppercase tracking-widest">
            What Drives Me
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight">
          <span className="text-white/90">My </span>
          <span className="hero-name-gradient">Philosophy</span>
        </h2>
        <p className="text-[#666] text-lg font-mono mt-4 max-w-xl">
          Core beliefs that shape how I work, learn, and grow every day.
        </p>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="px-10 md:px-20 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {philosophies.map((p, i) => (
          <div
            key={i}
            className="group relative rounded-2xl border border-[#ffffff08] bg-[#0a0a0a]/80 backdrop-blur-md p-8 transition-all duration-500 hover:border-[#ffffff18] cursor-default"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 4px 40px ${p.color}15, 0 0 80px ${p.color}08`;
              e.currentTarget.style.borderColor = `${p.color}30`;
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
                background: `radial-gradient(circle at 50% 0%, ${p.color}10, transparent 70%)`,
              }}
            />

            {/* Icon */}
            <span className="relative text-4xl block mb-5 group-hover:scale-110 transition-transform duration-500">
              {p.icon}
            </span>

            {/* Quote */}
            <h3 className="relative text-lg font-bold text-white/90 mb-3 group-hover:text-white transition-colors leading-snug">
              &ldquo;{p.quote}&rdquo;
            </h3>

            {/* Description */}
            <p className="relative text-sm text-[#888] font-mono leading-relaxed group-hover:text-[#aaa] transition-colors">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;
