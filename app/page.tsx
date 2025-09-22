"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const [loading, setLoading] = useState(true);
  const [showFirst, setShowFirst] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle hero content every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <div className="flex gap-2">
            <span className="w-4 h-4 bg-orange-500 rounded-full animate-wave delay-0"></span>
            <span className="w-4 h-4 bg-orange-500 rounded-full animate-wave delay-150"></span>
            <span className="w-4 h-4 bg-orange-500 rounded-full animate-wave delay-300"></span>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div
        className={`flex flex-col transition-all duration-1000 ${
          loading ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-6">
          <div className="flex items-center gap-2">
            <Image src="/1.webp" alt="Welsh Corgi" width={48} height={48} />
            <div>
              <h1 className="text-xl font-bold">Paws & Tails</h1>
              <p className="text-sm text-gray-500 -mt-1">Your Trusted Pet Partners</p>
            </div>
          </div>
          <FiMenu
            className="text-3xl cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        </header>

        {/* Hero Section (always 100vh) */}
        <main className="h-screen flex items-center justify-center">
          <div className="w-[70%] mx-auto flex items-center justify-between gap-10 flex-wrap">
            {/* First Content Block */}
            {showFirst && !loading && (
              <>
                <motion.div
                  className="flex-1 flex justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <Image
                    src="/1.webp"
                    alt="Playful Dog"
                    width={550}
                    height={550}
                    className="object-contain"
                    priority
                  />
                </motion.div>

                <motion.div className="flex-1 max-w-xl flex flex-col justify-center">
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
                    Dogs bring joy, companionship, and love into our lives. Whether
                    you're looking for a playful puppy or a loyal adult dog, every
                    pup is ready to bring a smile to your face.
                  </motion.p>
                </motion.div>
              </>
            )}

            {/* Second Content Block */}
            {!showFirst && !loading && (
              <>
                <motion.div
                  className="flex-1 flex justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
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

                <motion.div className="flex-1 max-w-xl flex flex-col justify-center">
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
                    Looking for a furry friend to join your family? Our dogs are
                    not just pets, they’re family. They are always ready for a game
                    of fetch or a relaxing cuddle after a long day.
                  </motion.p>
                </motion.div>
              </>
            )}
          </div>
        </main>

        {/* New Section */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
            {/* Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Woof! <span className="text-orange-500">Corgi</span> Is!
              </h1>
              <p className="text-gray-500 text-lg">
                Originally bred to herd cattle, sheep, and horses, the Pembroke
                Welsh Corgi is an{" "}
                <span className="font-semibold">active and intelligent dog breed</span>.  
                Easy to train and eager to learn, Pembrokes are great with children and other pets, and you can find them in four different coat colors.
              </p>
            </div>

            {/* Image + Play Button */}
            <div className="md:w-1/2 relative w-full h-64 md:h-96">
              <Image
                src="/3.jpg"
                alt="Corgi"
                className="rounded-xl object-cover w-full h-full"
                fill
              />
              <button
                onClick={() => setIsOpen(true)}
                className="absolute inset-0 m-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl hover:bg-orange-600 transition"
              >
                ▶
              </button>
            </div>
          </div>

          {/* Video Modal */}
          {isOpen && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn">
              <div className="relative w-[90%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-xl shadow-xl overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-12 right-0 text-white text-4xl hover:text-orange-500 transition"
                >
                  ✕
                </button>

                {/* Video */}
                <video
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/corgi-video.mp4" type="video/mp4" />
                  <source src="/corgi-video.webm" type="video/webm" />
                  <source src="/corgi-video.ogv" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </section>

        {/* Sidebar */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-500 ${
            sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className={`fixed left-0 top-0 w-[25%] bg-white shadow-lg h-full flex flex-col items-center py-10 px-6 transition-all duration-500 transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <FiX
              className="text-4xl absolute top-6 right-6 cursor-pointer"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              className="flex flex-col items-center space-y-8 text-xl font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.1 }}>Home</motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>About</motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>Contact</motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>Gallery</motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6 z-50">
        <FaFacebookF className="text-4xl text-yellow-500 hover:text-yellow-600 transition-all duration-300 transform hover:scale-125" />
        <FaInstagram className="text-4xl text-yellow-500 hover:text-yellow-600 transition-all duration-300 transform hover:scale-125" />
        <FaWhatsapp className="text-4xl text-yellow-500 hover:text-yellow-600 transition-all duration-300 transform hover:scale-125" />
      </div>

      {/* Tailwind custom animations */}
      <style jsx>{`
        @keyframes wave {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-12px); }
        }
        .animate-wave { animation: wave 1s infinite ease-in-out; }
        .delay-0 { animation-delay: 0s; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
}
