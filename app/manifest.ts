import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anshit Rangra — Full Stack & Web3 Developer",
    short_name: "Anshit Rangra",
    description:
      "Portfolio of Anshit Rangra — Full Stack Developer & Web3 Developer from India.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#f20707",
    icons: [
      {
        src: "/zodiac.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
