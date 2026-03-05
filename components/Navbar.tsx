"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY.current && currentY > 80) {
        setVisible(false) // scrolling down
      } else {
        setVisible(true) // scrolling up
      }
      lastScrollY.current = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl p-4 sm:p-5 flex items-center justify-between px-5 sm:px-10 md:px-16 lg:px-25 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="w-12 sm:w-14 lg:w-16 flex justify-center shrink-0">
          <img src="/zodiac.svg" alt="Anshit Rangra Logo" className="hover:cursor-pointer w-10 sm:w-12 lg:w-15" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-around font-mono text-lg lg:text-2xl bg-[#2b28314f] w-auto gap-6 lg:gap-8 px-6 lg:px-8 pt-3 pb-3 rounded-xl border-l-amber-50 border-l-[0.1px]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="cursor-pointer nav-elem flex flex-col overflow-hidden max-h-8">
                <span>{link.name}</span>
                <span aria-hidden="true">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop name */}
        <p className="hidden md:block text-xl lg:text-3xl font-thin font-mono text-[#a7a7a7] shrink-0">
          Anshit Rangra
        </p>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`text-4xl sm:text-5xl font-black text-white/90 hover:text-red-500 transition-all duration-500 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: mobileOpen ? `${150 + i * 80}ms` : "0ms" }}
          >
            {link.name}
          </Link>
        ))}
        <div
          className={`mt-4 transition-all duration-500 ${
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: mobileOpen ? "500ms" : "0ms" }}
        >
          <p className="text-[#888] text-sm font-mono">Anshit Rangra</p>
        </div>
      </div>
    </>
  )
}

export default Navbar