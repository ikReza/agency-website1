"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = ["home", "team", "service", "projects", "testimonials"];

export const Hamburger = ({ isOpen, handleMenu }) => (
  <button
    className="flex lg:hidden flex-col items-center justify-center"
    onClick={handleMenu}
  >
    <span
      className={`h-0.5 w-6 bg-black rounded-sm block  ${
        isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
      } transition-all duration-300`}
    ></span>
    <span
      className={`h-0.5 w-6 bg-black rounded-sm block my-0.5 ${
        isOpen ? "opacity-0" : "opacity-100"
      } transition-all duration-300`}
    ></span>
    <span
      className={`h-0.5 w-6 bg-black rounded-sm block  ${
        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
      } transition-all duration-300`}
    ></span>
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let pathname = usePathname();
  pathname = pathname.slice(1);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`w-full px-4 md:px-8 lg:px-16 flex flex-wrap items-center justify-between py-6 ${
        pathname === "" ? "bg-green-100" : "bg-[whitesmoke]"
      }`}
    >
      <p className="flex items-start text-lg lg:text-xl font-bold tracking-wide">
        Design<span className="uppercase text-[tomato]">Agency</span>
      </p>
      <nav className="max-lg:hidden text-base font-medium flex items-center justify-center gap-5">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={`/${link === "home" ? "" : link}`}
            className={`p-2 capitalize ${
              pathname == (link === "home" ? "" : link)
                ? "underline decoration-green-600 underline-offset-4"
                : ""
            }`}
          >
            {link}
          </Link>
        ))}
        <button className="p-2 px-6 border border-green-600 hover:border-green-700 rounded-[0.625rem]">
          Login
        </button>
        <button className="p-2 px-4 bg-green-600 hover:bg-green-700 rounded-[0.625rem] text-white">
          Register
        </button>
      </nav>
      <Hamburger isOpen={isOpen} handleMenu={handleMenu} />

      {/* For small screen */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1 }}
          className="min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 z-30 py-20 bg-black/90 rounded-lg text-white backdrop-blur-sm"
        >
          <nav className="flex flex-col items-center justify-center">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={`/${link === "home" ? "" : link}`}
                onClick={handleMenu}
                className={`p-2 capitalize ${
                  pathname == (link === "home" ? "" : link)
                    ? "underline decoration-green-600 underline-offset-4"
                    : ""
                }`}
              >
                {link}
              </Link>
            ))}
            <div className="flex gap-x-8 mt-4">
              <button className="p-2 px-6 border border-green-600 hover:border-green-700 rounded-[0.625rem]">
                Login
              </button>
              <button className="p-2 px-4 bg-green-600 hover:bg-green-700 rounded-[0.625rem] text-white">
                Register
              </button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
