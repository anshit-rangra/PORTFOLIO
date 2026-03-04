const Footer = () => {
  return (
    <footer className="relative w-full border-t border-[#ffffff0a] backdrop-blur-xl">
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-px bg-linear-to-r from-transparent via-red-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-28 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/zodiac.svg"
                alt="Logo"
                className="w-10 h-10"
              />
              <h2 className="text-2xl font-black tracking-tight text-white/90">
                ANSHIT{" "}
                <span className="hero-name-gradient">RANGRA</span>
              </h2>
            </div>
            <p className="text-[#666] text-sm font-mono max-w-xs leading-relaxed">
              Building scalable applications at the intersection of{" "}
              <span className="text-[#a7a7a7]">Web2</span> &amp;{" "}
              <span className="text-violet-400">Web3</span>.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#555]">
                Navigate
              </h3>
              <ul className="flex flex-col gap-2">
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-[#a7a7a7] text-sm font-mono hover:text-red-500 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#555]">
                Connect
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  { label: "GitHub", href: "https://github.com" },
                  { label: "LinkedIn", href: "https://linkedin.com" },
                  { label: "Twitter / X", href: "https://x.com" },
                  { label: "Email", href: "mailto:hello@anshit.dev" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a7a7a7] text-sm font-mono hover:text-red-500 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social icons row */}
          <div className="flex flex-col gap-3 items-end">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#555]">
              Socials
            </h3>
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-[#222] flex items-center justify-center text-[#666] hover:text-white hover:border-[#444] hover:bg-white/5 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-[#222] flex items-center justify-center text-[#666] hover:text-white hover:border-[#444] hover:bg-white/5 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-[#222] flex items-center justify-center text-[#666] hover:text-white hover:border-[#444] hover:bg-white/5 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@anshit.dev"
                className="w-10 h-10 rounded-lg border border-[#222] flex items-center justify-center text-[#666] hover:text-white hover:border-[#444] hover:bg-white/5 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#ffffff08] my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-xs font-mono">
            &copy; {new Date().getFullYear()} Anshit Rangra. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-[#555] text-xs font-mono">
              Designed &amp; built with{" "}
              <span className="text-red-500">&#10084;</span> by Anshit
            </span>
          </div>

          <p className="text-[#444] text-xs font-mono">
            Next.js &middot; Tailwind &middot; Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
