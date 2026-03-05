import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import FactsSection from "@/components/FactsSection";
import GearSection from "@/components/GearSection";

export const metadata: Metadata = {
  title: "Anshit Rangra — Full Stack Developer & Web3 Developer | Portfolio",
  description:
    "Anshit Rangra is a Full Stack Developer and Web3 Developer from India. Explore my skills in React, Next.js, Node.js, Solidity, Solana, Rust, AI/ML, and 30+ technologies. 20+ projects built.",
  alternates: {
    canonical: "https://anshitrangra.dev",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <FactsSection />
      <GearSection />
    </main>
  );
}
