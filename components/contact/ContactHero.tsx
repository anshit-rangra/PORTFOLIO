"use client";

import { useEffect, useState } from "react";

const ContactHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full pt-24 sm:pt-32 pb-14 sm:pb-20 px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-500/8 rounded-full blur-[150px] animate-pulse delay-1000" />

      {/* Breadcrumb */}
      <div
        className={`flex items-center gap-2 mb-8 transition-all duration-700 ${
          mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <a href="/" className="text-[#666] text-sm font-mono hover:text-red-500 transition-colors">
          Home
        </a>
        <span className="text-[#444] text-sm">/</span>
        <span className="text-red-500 text-sm font-mono">Contact</span>
      </div>

      {/* Heading */}
      <div
        className={`transition-all duration-700 delay-200 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9]">
          <span className="text-white/90 block">Let&apos;s</span>
          <span className="hero-name-gradient block">Talk.</span>
        </h1>
      </div>

      <p
        className={`text-[#666] text-lg font-mono mt-6 max-w-2xl transition-all duration-700 delay-400 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Got a project idea, a collaboration opportunity, or just want to say hi?
        I&apos;m always open to meaningful conversations.
      </p>
    </section>
  );
};

export default ContactHero;
