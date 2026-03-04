"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const info = infoRef.current;
    if (!section || !form || !info) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        info.children,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        form,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd POST to an API here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const inputClasses =
    "w-full bg-[#0a0a0a]/80 border border-[#ffffff10] rounded-xl px-5 py-4 text-white/90 font-mono text-sm placeholder-[#444] focus:outline-none focus:border-red-500/40 focus:ring-1 focus:ring-red-500/20 transition-all duration-300";

  return (
    <section ref={sectionRef} className="relative pb-32 overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-red-500/5 rounded-full blur-[150px]" />

      <div className="px-10 md:px-20 lg:px-28 flex flex-col lg:flex-row gap-16">
        {/* Left — Info */}
        <div ref={infoRef} className="flex-1 flex flex-col gap-8 max-w-md">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-12 bg-linear-to-r from-red-500 to-transparent" />
              <span className="text-red-500 text-sm font-mono uppercase tracking-widest">
                Reach Out
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              <span className="text-white/90">Send a </span>
              <span className="hero-name-gradient">Message</span>
            </h2>
            <p className="text-[#666] text-sm font-mono leading-relaxed">
              Whether it&apos;s a project idea, freelance opportunity, or just a
              friendly hello — fill out the form and I&apos;ll get back to you
              as soon as possible.
            </p>
          </div>

          {/* Quick info cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: "📍",
                label: "Location",
                value: "India 🇮🇳",
              },
              {
                icon: "⏰",
                label: "Response Time",
                value: "Usually within 24 hours",
              },
              {
                icon: "💼",
                label: "Open For",
                value: "Freelance, Full-time & Collaborations",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border border-[#ffffff08] bg-[#0a0a0a]/60"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs font-mono text-[#555] uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm text-[#a7a7a7] font-mono">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-5 max-w-lg"
        >
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={`${inputClasses} appearance-none cursor-pointer`}
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="freelance">Freelance Project</option>
            <option value="fulltime">Full-time Opportunity</option>
            <option value="collaboration">Collaboration</option>
            <option value="mentorship">Mentorship</option>
            <option value="other">Just Saying Hi</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={`${inputClasses} resize-none`}
          />

          <button
            type="submit"
            className="hero-cta-primary relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-base tracking-wide w-full sm:w-auto"
          >
            <span className="relative z-10">
              {submitted ? "Message Sent! ✅" : "Send Message 🚀"}
            </span>
          </button>

          <p className="text-[#444] text-xs font-mono">
            Your information is safe — I don&apos;t spam or share data.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
