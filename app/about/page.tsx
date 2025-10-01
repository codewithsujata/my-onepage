"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Logo Section */}
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

      {/* About Content */}
      <div className="flex flex-col items-center justify-center px-8 py-20">
        <div className="max-w-5xl w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-12 text-center">
            About Us 🐾
          </h1>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-800">
            <p>
              Welcome to <span className="font-semibold text-orange-600">Dog World</span>!  
              We are passionate about dogs and dedicated to building a place where 
              dog lovers can come together. Our mission is to provide resources, 
              training tips, and adoption guidance to help every pup find a 
              loving home.  
            </p>

            <p>
              Whether you’re a first-time pet parent or an experienced trainer, 
              we share knowledge, real stories, and advice to make your journey 
              with dogs joyful and rewarding.  
            </p>

            <p className="font-medium text-orange-700">
              Because every dog deserves love, care, and happiness. ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
