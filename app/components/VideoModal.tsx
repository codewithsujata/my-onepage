
"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.src = `${videoUrl}?autoplay=1&mute=1`;
    }
  }, [isOpen, videoUrl]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-[90%] max-w-3xl lg:max-w-4xl h-[300px] md:h-[450px] lg:h-[550px] bg-black rounded-xl shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition"
        >
          ✕
        </button>
        <iframe
          ref={videoRef}
          className="w-full h-full rounded-xl"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>,
    document.body
  );
}
