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

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {loading && <div className="fixed inset-0 bg-white flex items-center justify-center z-50">Loading...</div>}

      <div className={`flex flex-col transition-all duration-1000 ${loading ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}>
        <div ref={heroRef}><HeroSection loading={loading} /></div>
        <div ref={section2Ref}><VideoSection onOpen={() => setIsOpen(true)} /></div>
        <div ref={section3Ref}><HistorySection images={images} /></div>
        <div ref={section4Ref}><TrainingSection /></div>
        <div ref={section5Ref}><ContactSection /></div>
      </div>

      <VideoModal isOpen={isOpen} onClose={() => setIsOpen(false)} videoUrl="https://www.youtube.com/embed/_rDAbxZ8jLI" />
    </div>
  );
}
