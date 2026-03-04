"use client";

import dynamic from "next/dynamic";
// import ContactHero from "./ContactHero";
import Socials from "./Socials"

// const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });
// const Socials = dynamic(() => import("./Socials"), { ssr: false });

const ContactPage = () => {
  return (
    <main>
      {/* <ContactHero /> */}
      {/* <ContactForm /> */}
      <Socials />
    </main>
  );
};

export default ContactPage;
