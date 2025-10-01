"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Header Bar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md transition-opacity duration-300 ${
          menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-full flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-orange-400 to-yellow-400 shadow-lg">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={80}
                height={80}
                className="h-full w-full rounded-full object-cover border-2 border-white shadow-inner transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-2xl font-extrabold text-orange-500 tracking-widest select-none drop-shadow-md">
                Welsh
              </span>
              <span className="text-2xl font-extrabold text-gray-800 tracking-widest select-none drop-shadow-sm">
                Corgi
              </span>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="flex flex-col justify-between w-8 h-6 focus:outline-none cursor-pointer z-20"
            onClick={toggleMenu}
          >
            <span
              className={`block h-1 w-full bg-orange-500 rounded transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-1 w-full bg-orange-500 rounded transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-1 w-full bg-orange-500 rounded transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="w-full flex justify-center py-6 border-b border-gray-200 flex-none">
              <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-orange-400 to-yellow-400 shadow-lg">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="h-full w-full rounded-full object-cover border-2 border-white shadow-inner"
                />
              </div>
            </div>

            <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Gallery", href: "/gallery" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-bold text-gray-800 hover:text-orange-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="absolute top-6 right-6">
              <button
                className="text-4xl font-bold text-gray-800 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
