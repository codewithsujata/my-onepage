"use client";

import Image from "next/image";

interface VideoSectionProps {
  onOpen: () => void;
}

export default function VideoSection({ onOpen }: VideoSectionProps) {
  return (
    <section id="section2" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-8xl font-bold text-gray-900 mb-6 leading-tight">
            Woof!<br />
            <span className="text-orange-500">Corgi Is!</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Originally bred to herd cattle, sheep, and horses, the Pembroke Welsh Corgi is an{" "}
            <span className="font-semibold">active and intelligent dog breed</span>. Easy to train and eager to learn, Pembrokes are great with children and other pets, and you can find them in four different coat colors.
          </p>
        </div>
        <div className="md:w-1/2 relative w-full h-64 md:h-96">
          <Image src="/3.jpg" alt="Corgi" className="rounded-xl object-cover w-full h-full" fill />
          <button
            onClick={onOpen}
            className="absolute cursor-pointer inset-0 m-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl hover:bg-orange-600 transition">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
