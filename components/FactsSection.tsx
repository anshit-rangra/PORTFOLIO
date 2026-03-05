"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Fact {
  emoji: string;
  title: string;
  description: string;
  gradient: string;
  image: string;
}

const facts: Fact[] = [
    {
    emoji: "🦇",
    title: "Be Batman",
    description:
      "I love the batman mindset — always learning, always improving, and never letting setbacks define you. If Batman can do it without superpowers, so can I.",
    gradient: "from-blue-500/20 to-black/10",
    image:
      "https://images.unsplash.com/photo-1715316110001-c2374d87e753?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    emoji: "♟️",
    title: "Chess Addict",
    description:
      "I play chess almost every day. It sharpens my strategic thinking and patience — two things that make me a better developer.",
    gradient: "from-emerald-500/20 to-emerald-900/10",
    image:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=80",
  },
  {
    emoji: "🥊",
    title: "Boxing & Discipline",
    description:
      "Boxing taught me discipline, grit, and how to stay calm under pressure — skills I carry into every coding sprint.",
    gradient: "from-red-500/20 to-red-900/10",
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80",
  },
  {
    emoji: "🎓",
    title: "Love to Teach",
    description:
      "Teaching others is the best way to master something. I love breaking down complex concepts into simple, digestible pieces.",
    gradient: "from-blue-500/20 to-blue-900/10",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    emoji: "🔥",
    title: "If He Can, Why Can't I?",
    description:
      "My core mindset — seeing someone succeed doesn't make me jealous, it makes me hungry. If they figured it out, so can I.",
    gradient: "from-orange-500/20 to-orange-900/10",
    image:
      "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=600&q=80",
  },
  {
    emoji: "🌙",
    title: "Night Owl Coder",
    description:
      "My best code is written when the world sleeps. Late nights, lo-fi beats, and laser focus — that's my flow state.",
    gradient: "from-violet-500/20 to-violet-900/10",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
  },
  {
    emoji: "🧩",
    title: "Problem Solver",
    description:
      "I don't just write code — I solve problems. Every bug is a puzzle, and every solution is a small victory.",
    gradient: "from-cyan-500/20 to-cyan-900/10",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80",
  },
  {
    emoji: "📚",
    title: "Always Learning",
    description:
      "Tech moves fast, so I move faster. From Web3 to AI — I'm always chasing the next thing to master.",
    gradient: "from-amber-500/20 to-amber-900/10",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80",
  },
  {
    emoji: "⚡",
    title: "Ship Fast, Iterate",
    description:
      "Done is better than perfect. I believe in shipping fast, getting feedback, and making it better every single day.",
    gradient: "from-yellow-500/20 to-yellow-900/10",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
];

const FactsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const track = trackRef.current;
    if (!section || !heading || !track) return;

    const setWidth = track.scrollWidth / 2;
    const speed = 40;
    let x = 0;

    const animate = (_: number, deltaTime: number) => {
      if (isPaused.current) return;
      const dt = deltaTime / 500;
      x -= speed * dt;
      if (x <= -setWidth) x += setWidth;
      gsap.set(track, { x });
    };

    gsap.ticker.add(animate);

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
            end: "top 50%",
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

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    isPaused.current = false;
  };

  const duplicatedFacts = [...facts, ...facts];

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-red-500/5 rounded-full blur-[180px]" />

      {/* Heading */}
      <div ref={headingRef} className="px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 mb-10 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-linear-to-r from-red-500 to-transparent" />
          <span className="text-red-500 text-sm font-mono uppercase tracking-widest">
            Beyond The Code
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
          <span className="text-white/90">Fun </span>
          <span className="hero-name-gradient">Facts</span>
        </h2>
        <p className="text-[#666] text-sm sm:text-lg font-mono mt-4 max-w-xl">
          A few things that define who I am outside the IDE.
        </p>
      </div>

      {/* Scrolling cards row */}
      <div className="relative">
        <div ref={trackRef} className="flex gap-6 w-max py-4 px-4">
          {duplicatedFacts.map((fact, i) => {
            const isHovered = hoveredIndex === i;
            const isBlurred = hoveredIndex !== null && hoveredIndex !== i;

            return (
              <div
                key={`fact-${i}`}
                className="fact-card relative shrink-0 rounded-2xl border border-[#ffffff08] overflow-hidden cursor-default transition-all duration-500 ease-out"
                style={{
                  width: isHovered ? "420px" : "280px",
                  minWidth: "280px",
                  height: isHovered ? "440px" : "340px",
                  filter: isBlurred ? "blur(4px) brightness(0.4)" : "none",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  zIndex: isHovered ? 10 : 1,
                }}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={fact.image}
                    alt={fact.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    style={{
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                    }}
                    loading="lazy"
                  />
                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: isHovered
                        ? "linear-gradient(to top, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.3) 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-7">
                  <span className="text-4xl mb-3">{fact.emoji}</span>
                  <h3
                    className="text-xl font-bold text-white mb-2 transition-all duration-500"
                    style={{
                      fontSize: isHovered ? "1.5rem" : "1.25rem",
                    }}
                  >
                    {fact.title}
                  </h3>
                  <p
                    className="text-[#999] text-sm leading-relaxed font-mono transition-all duration-500"
                    style={{
                      opacity: isHovered ? 1 : 0.7,
                      maxHeight: isHovered ? "200px" : "60px",
                      overflow: "hidden",
                    }}
                  >
                    {fact.description}
                  </p>
                </div>

                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
                  style={{
                    boxShadow: isHovered
                      ? "inset 0 0 0 1px rgba(242,7,7,0.3), 0 0 40px rgba(242,7,7,0.1)"
                      : "inset 0 0 0 1px rgba(255,255,255,0.03)",
                    opacity: 1,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
