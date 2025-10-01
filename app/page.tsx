"use client";

import { useEffect, useState, useRef } from "react";
import HeroSection from "./components/HeroSection";
import VideoModal from "./components/VideoModal";
import VideoSection from "./components/VideoSection";
import HistorySection from "./components/HistorySection";
import TrainingSection from "./components/TrainingSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const heroRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  const sections = [heroRef, section2Ref, section3Ref, section4Ref, section5Ref];
  const images = ["/s1.jpg", "/s2.jpg", "/s3.jpg", "/s4.jpg"];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      // Disable scroll while loading
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scroll after loading
      document.body.style.overflow = 'auto';
      // Force scroll to top once loading finishes
      window.scrollTo(0, 0); // This will make sure the page is scrolled to the top
    }

    return () => {
      document.body.style.overflow = 'auto'; // Clean up in case component is unmounted
    };
  }, [loading]);

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      {/* Wavy Loader */}
      {loading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <div className="flex space-x-3">
            <span className="w-4 h-4 bg-orange-500 rounded-full animate-wavy" style={{ animationDelay: '0s' }}></span>
            <span className="w-4 h-4 bg-orange-500 rounded-full animate-wavy" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-4 h-4 bg-orange-500 rounded-full animate-wavy" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex flex-col transition-all duration-1000 ${loading ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}
      >
        <div ref={heroRef}><HeroSection loading={loading} /></div>
        <div ref={section2Ref}><VideoSection onOpen={() => setIsOpen(true)} /></div>
        <div ref={section3Ref}><HistorySection images={images} /></div>
        <div ref={section4Ref}><TrainingSection /></div>
        <div ref={section5Ref}><ContactSection /></div>
      </div>

      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoUrl="https://www.youtube.com/embed/_rDAbxZ8jLI"
      />
    </div>
  );
}
