"use client"

const Navbar = () => {
  return (
    <nav className=" w-full z-50   backdrop-blur-2xl p-5 flex items-center justify-between pl-25 pr-25">

                <div className=" w-48 flex justify-center ">
                    <img src="/zodiac.svg" alt="Zodiac Logo" className="hover:cursor-pointer" width={60} />
                </div>

        <ul className="flex justify-around font-mono text-2xl bg-[#2b28314f] w-[30vw]  pt-3 pb-3 rounded-xl border-l-amber-50 border-l-[0.1px]">

            <li className="cursor-pointer nav-elem">
                <span> Home </span>
                <span> Home </span>
            </li>

            <li className="cursor-pointer nav-elem">
                <span> About </span>
                <span> About </span>
            </li>

            <li className="cursor-pointer nav-elem">
                <span> Projects </span>
                <span> Projects </span>
            </li>

            <li className="cursor-pointer nav-elem">
                <span> Contact </span>
                <span> Contact </span>
            </li>

        </ul>

        <h1 className="text-3xl font-thin font-mono hover:cursor-pointer">Anshit Rangra</h1>

    </nav>
  )
}

export default Navbar