"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSectionProps {
  loading: boolean;
}

export default function HeroSection({ loading }: HeroSectionProps) {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowFirst((prev) => !prev), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex items-start justify-center py-10">
      <div className="w-[70%] mx-auto flex items-center justify-between gap-10 flex-wrap">
        <AnimatePresence mode="wait">
          {showFirst && !loading ? (
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
              <motion.div key="text1" className="flex-1 max-w-xl flex flex-col justify-center">
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
                  Doggs bringg joy, companionship, and love into our lives. Whether you&apos;re
                  looking for a playful puppy or a loyal adult dog, every pup is ready to bring a
                  smile to your face.
                </motion.p>
              </motion.div>
            </motion.div>
          ) : !loading ? (
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
              <motion.div key="text2" className="flex-1 max-w-xl flex flex-col justify-center">
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
          ) : null}
        </AnimatePresence>
      </div>
    </main>
  );
}
