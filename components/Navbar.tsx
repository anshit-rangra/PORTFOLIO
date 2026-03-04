"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const Navbar = () => {
  const [visible, setVisible] = useState(true)
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl p-5 flex items-center justify-between pl-25 pr-25 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >

                <div className=" w-48 flex justify-center ">
                    <img src="/zodiac.svg" alt="Zodiac Logo" className="hover:cursor-pointer" width={60} />
                </div>

        <ul className="flex justify-around font-mono text-2xl bg-[#2b28314f] w-[30vw]  pt-3 pb-3 rounded-xl border-l-amber-50 border-l-[0.1px]">

        <Link href={"/"}>
            <li className="cursor-pointer nav-elem">
                <span> Home </span>
                <span> Home </span>
            </li>
            </Link>

            
            <Link href={"/about"}>

            <li className="cursor-pointer nav-elem">
                <span> About </span>
                <span> About </span>
            </li>
            </Link>

            <Link href={"/projects"}>
            <li className="cursor-pointer nav-elem">
                <span> Projects </span>
                <span> Projects </span>
            </li>
            </Link>

            <Link href={"/contact"}>
            <li className="cursor-pointer nav-elem">
                <span> Contact </span>
                <span> Contact </span>
            </li>
            </Link>

        </ul>

        <h1 className="text-3xl font-thin font-mono hover:cursor-pointer text-[#a7a7a7]">Anshit Rangra</h1>

    </nav>
  )
}

export default Navbar