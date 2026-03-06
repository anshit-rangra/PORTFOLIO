import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://anshit.dynv6.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anshit Rangra — Full Stack Developer & Web3 Developer | Portfolio",
    template: "%s | Anshit Rangra",
  },
  description:
    "Anshit Rangra is a Full Stack Developer and Web3 Developer from India, specializing in React, Next.js, Node.js, Solidity, Solana, Rust, and AI/ML. Explore projects, skills, and experience.",
  keywords: [
    "anshit rangra",
    "Anshit Rangra",
    "Anshit Rangra portfolio",
    "Anshit Rangra developer",
    "Full Stack Developer",
    "Web3 Developer",
    "Blockchain Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Solidity Developer",
    "Solana Developer",
    "Rust Developer",
    "MERN Stack Developer",
    "AI Developer",
    "LangChain",
    "India developer",
    "freelance developer India",
    "portfolio website",
    "anshit rangra web developer",
    "anshit rangra full stack",
    "software engineer portfolio",
  ],
  authors: [{ name: "Anshit Rangra", url: siteUrl }],
  creator: "Anshit Rangra",
  publisher: "Anshit Rangra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Anshit Rangra — Portfolio",
    title: "Anshit Rangra — Full Stack Developer & Web3 Developer",
    description:
      "Full Stack & Web3 Developer from India. Building scalable applications with React, Next.js, Node.js, Solidity, Solana, and AI. 2+ years of experience shipping production apps.",
    images: [
      {
        url: "/app.png",
        width: 1200,
        height: 630,
        alt: "Anshit Rangra — Full Stack & Web3 Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshit Rangra — Full Stack Developer & Web3 Developer",
    description:
      "Full Stack & Web3 Developer from India. React, Next.js, Node.js, Solidity, Solana, Rust, AI/ML.",
    creator: "@Anshit_Rangra",
    images: ["/app.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  verification: {
    google: "WZxbMOUI4o4VO9Q0ATaV9xfewqiquJ7Dpw98zE54xYM",
  },
  icons: {
    icon: "/zodiac.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Anshit Rangra",
    alternateName: "Anshit Rangra Portfolio",
    url: siteUrl,
    image: `${siteUrl}/app.png`,
    jobTitle: "Full Stack Developer & Web3 Developer",
    description:
      "Full Stack Developer and Web3 Developer from India specializing in React, Next.js, Node.js, Solidity, Solana, Rust, and AI/ML.",
    sameAs: [
      siteUrl,
      "https://github.com/anshit-rangra",
      "https://www.linkedin.com/in/anshit-rangra/",
      "https://x.com/Anshit_Rangra",
      "https://www.instagram.com/anshit.rangra/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Solidity",
      "Solana",
      "Rust",
      "Web3",
      "Blockchain",
      "AI",
      "Machine Learning",
      "LangChain",
      "Docker",
      "AWS",
      "MongoDB",
      "PostgreSQL",
      "System Design",
      "Microservices",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    email: "anshitrangra@proton.me",
    mainEntityOfPage: {
      "@type": "ProfilePage",
      "@id": siteUrl,
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Anshit Rangra Portfolio",
    url: siteUrl,
    description:
      "Portfolio of Anshit Rangra — Full Stack Developer & Web3 Developer",
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Anshit Rangra",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Preconnect to external image CDNs to reduce latency */}
        <link rel="preconnect" href="https://ik.imagekit.io" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://i.pinimg.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Fixed full-screen background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          className="fixed inset-0 w-full h-full object-cover -z-10"
        >
          <source src="https://ik.imagekit.io/4ytu59yld/PORTFOLIO/bg.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay to ensure readability */}
        <div className="fixed inset-0 bg-black/40 -z-10" />

        <SmoothScroll>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
