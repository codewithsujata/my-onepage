"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSectionProps {
  loading: boolean;
}

export default function HeroSection({ loading }: HeroSectionProps) {
  const [showFirst, setShowFirst] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Switch content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => setShowFirst((prev) => !prev), 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <main
      className={`pt-[80px] min-h-screen flex flex-col items-center justify-center py-10 ${
        loading ? "fixed inset-0 z-50 bg-white" : ""
      }`}
    >
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md transition-opacity duration-300 ${
          menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-full flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-orange-400 to-yellow-400 shadow-lg">
              <img
                src="/logo.jpg"
                alt="Logo"
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

      {/* Full-screen Top-to-Bottom Menu */}
    <AnimatePresence>
  {menuOpen && (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Logo at top */}
      <div className="w-full flex justify-center py-6 border-b border-gray-200 flex-none">
        <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-orange-400 to-yellow-400 shadow-lg">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-full w-full rounded-full object-cover border-2 border-white shadow-inner"
          />
        </div>
      </div>

      {/* Centered Navigation Links */}
      <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
        {["Home", "About", "Contact", "Gallery"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-3xl font-bold text-gray-800 hover:text-orange-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Close Button at top-right */}
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


      {/* Content Section */}
      <div className="w-[70%] max-w-7xl mx-auto flex items-center justify-between gap-10 flex-wrap">
        <AnimatePresence mode="wait">
          {!loading && showFirst && (
            <motion.div
              key="first"
              className="flex flex-wrap w-full items-center justify-between gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                key="img1"
                className="flex-1 flex justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Image
                  src="/1.jpg"
                  alt="Playful Dog"
                  width={550}
                  height={550}
                  className="object-contain"
                  priority
                />
              </motion.div>
              <motion.div
                key="text1"
                className="flex-1 max-w-xl flex flex-col justify-center"
              >
                <motion.h2 className="text-[6rem] md:text-[8rem] font-extrabold leading-none space-y-2">
                  <motion.span
                    className="block"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Loyal
                  </motion.span>
                  <motion.span
                    className="block text-orange-500"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  >
                    Companion
                  </motion.span>
                </motion.h2>
                <motion.p
                  className="text-gray-400 text-lg leading-relaxed mt-6"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  Dogs bring joy, companionship, and love into our lives. Whether you&apos;re
                  looking for a playful puppy or a loyal adult dog, every pup is ready to bring a
                  smile to your face.
                </motion.p>
              </motion.div>
            </motion.div>
          )}

          {!loading && !showFirst && (
            <motion.div
              key="second"
              className="flex flex-wrap w-full items-center justify-between gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                key="img2"
                className="flex-1 flex justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Image
                  src="/2.jpg"
                  alt="Cute Dog"
                  width={550}
                  height={550}
                  className="object-contain"
                  priority
                />
              </motion.div>
              <motion.div
                key="text2"
                className="flex-1 max-w-xl flex flex-col justify-center"
              >
                <motion.h2 className="text-[6rem] md:text-[8rem] font-extrabold leading-none space-y-2">
                  <motion.span
                    className="block"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Playful
                  </motion.span>
                  <motion.span
                    className="block text-orange-500"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  >
                    Pup
                  </motion.span>
                </motion.h2>
                <motion.p
                  className="text-gray-400 text-lg leading-relaxed mt-6"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  Looking for a furry friend to join your family? Our dogs are not just pets, they&apos;re
                  family. They are always ready for a game of fetch or a relaxing cuddle after a long day.
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
