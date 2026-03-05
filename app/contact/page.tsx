import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Anshit Rangra — Hire a Full Stack & Web3 Developer",
  description:
    "Get in touch with Anshit Rangra for freelance projects, full-time opportunities, collaborations, or mentorship. Full Stack & Web3 Developer available for hire.",
  alternates: {
    canonical: "https://anshitrangra.dev/contact",
  },
  openGraph: {
    title: "Contact Anshit Rangra — Hire a Full Stack & Web3 Developer",
    description:
      "Open for freelance, full-time roles, and collaborations. Let's build something great together.",
    url: "https://anshitrangra.dev/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}
