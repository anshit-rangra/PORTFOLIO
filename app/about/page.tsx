import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Anshit Rangra — Full Stack Developer & Web3 Developer",
  description:
    "Learn about Anshit Rangra — a Full Stack Developer and Web3 Developer from India with 2+ years of experience in React, Next.js, Node.js, Solidity, Solana, Rust, AI, and System Design. Discover my journey, philosophy, and tech stack.",
  alternates: {
    canonical: "https://anshitrangra.dev/about",
  },
  openGraph: {
    title: "About Anshit Rangra — Full Stack & Web3 Developer",
    description:
      "2+ years building scalable apps. Expert in React, Next.js, Node.js, Web3, Solana, Rust, and AI.",
    url: "https://anshitrangra.dev/about",
  },
};

export default function About() {
  return <AboutPage />;
}
