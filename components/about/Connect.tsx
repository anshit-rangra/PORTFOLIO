"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    name: "GitHub",
    handle: "@anshit",
    url: "https://github.com",
    icon: "🐙",
    color: "#ffffff",
    description: "Where I push code and break things",
  },
  {
    name: "LinkedIn",
    handle: "Anshit Rangra",
    url: "https://linkedin.com",
    icon: "💼",
    color: "#0A66C2",
    description: "Professional network & career updates",
  },
  {
    name: "Twitter / X",
    handle: "@anshit",
    url: "https://x.com",
    icon: "𝕏",
    color: "#ffffff",
    description: "Thoughts on tech, Web3, and building",
  },
  {
    name: "Email",
    handle: "hello@anshit.dev",
    url: "mailto:hello@anshit.dev",
    icon: "📧",
    color: "#F43F5E",
    description: "For serious inquiries & collaborations",
  },
];

const Connect = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;
    if (!section || !heading || !cards) return;

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
        cards.children,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards,
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
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-red-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[180px]" />

      {/* Heading */}
      <div ref={headingRef} className="px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 mb-10 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-linear-to-r from-red-500 to-transparent" />
          <span className="text-red-500 text-sm font-mono uppercase tracking-widest">
            Get In Touch
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
          <span className="text-white/90">Let&apos;s </span>
          <span className="hero-name-gradient">Connect</span>
        </h2>
        <p className="text-[#666] text-lg font-mono mt-4 max-w-xl">
          Always open to interesting conversations, collaborations, and new opportunities.
        </p>
      </div>

      {/* Social cards */}
      <div
        ref={cardsRef}
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
            <span className="relative text-4xl block mb-5 group-hover:scale-110 transition-transform duration-500">
              {s.icon}
            </span>

            {/* Name */}
            <h3 className="relative text-lg font-bold text-white/90 mb-1 group-hover:text-white transition-colors">
              {s.name}
            </h3>

            {/* Handle */}
            <p className="relative text-sm font-mono mb-3" style={{ color: s.color === "#ffffff" ? "#a7a7a7" : s.color }}>
              {s.handle}
            </p>

            {/* Description */}
            <p className="relative text-xs text-[#666] font-mono leading-relaxed group-hover:text-[#888] transition-colors">
              {s.description}
            </p>

            {/* Arrow */}
            <div className="relative mt-5 flex items-center gap-2 text-[#555] group-hover:text-red-500 transition-all duration-300">
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

      {/* CTA */}
      <div className="px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 mt-12 sm:mt-20 text-center">
        <p className="text-[#555] text-lg font-mono mb-6">
          Prefer a direct conversation?
        </p>
        <a
          href="mailto:hello@anshit.dev"
          className="hero-cta-primary relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold text-lg tracking-wide"
        >
          <span className="relative z-10">Say Hello 👋</span>
        </a>
      </div>
    </section>
  );
};

export default Connect;
