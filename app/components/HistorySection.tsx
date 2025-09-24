"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface HistorySectionProps {
  images: string[];
}

export default function HistorySection({ images }: HistorySectionProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section className="w-full py-20 bg-white mt-40 mb-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-8xl font-bold text-gray-900 mb-6 leading-tight">
            History<br />& <span className="text-orange-500">Family</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Pembroke Welsh Corgis have been around since 1107 AD in some way, shape, or form.
            They certainly didn’t look how they look today, but there are historical records
            describing a short-legged dog used for driving cattle in Wales.
          </p>
        </div>
        <div className="md:w-1/2 relative flex items-center justify-center w-full h-64 md:h-96 overflow-hidden rounded-xl">
          <AnimatePresence initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.6 }}
              className="absolute w-full h-full"
            >
              <Image
                src={images[activeIndex]}
                alt={`Corgi ${activeIndex + 1}`}
                className="object-cover w-full h-full"
                fill
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full border-2 cursor-pointer transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-orange-500 border-orange-500 ring-2 ring-orange-400"
                    : "bg-white border-gray-400 hover:border-orange-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
