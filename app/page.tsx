"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaBone, FaHome, FaBriefcaseMedical, FaPaw } from "react-icons/fa";
import { GiSlippers, GiRabbitHead, GiDogBowl, GiRibbonMedal, GiScissors } from "react-icons/gi";
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}
function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
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
        ></iframe>
      </div>
    </div>,
    document.body
  );
}
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showFirst, setShowFirst] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDot, setActiveDot] = useState<number>(0);
  const facebookRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const sections = [heroRef, section2Ref, section3Ref, section4Ref, section5Ref];
  const handleDotClick = (index: number) => {
    setActiveDot(index);
    const targetSection = sections[index].current;
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    switch (index) {
      case 0:
        animateIcon(facebookRef);
        break;
      case 1:
        animateIcon(instagramRef);
        break;
      case 2:
        animateIcon(whatsappRef);
        break;
      default:
        break;
    }
  };

  const animateIcon = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    ref.current.classList.add("scale-125", "text-orange-500");
    setTimeout(() => {
      ref.current?.classList.remove("scale-125", "text-orange-500");
    }, 600);
  };
  // ✅ Highlight correct dot while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      sections.forEach((ref, idx) => {
        const sec = ref.current;
        if (sec) {
          const top = sec.offsetTop;
          const bottom = top + sec.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveDot(idx);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const images = ["/s1.jpg", "/s2.jpg", "/s3.jpg", "/s4.jpg"];
  const [activeIndex, setActiveIndex] = useState(0);
  const slideWidth = 500; 
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {loading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <div className="flex gap-2">
            <span className="w-4 h-4 bg-orange-500 rounded-full animate-wave delay-0"></span>
            <span className="w-4 h-4 bg-orange-500 rounded-full animate-wave delay-150"></span>
            <span className="w-4 h-4 bg-orange-500 rounded-full animate-wave delay-300"></span>
          </div>
        </div>
      )}
      <div
        className={`flex flex-col transition-all duration-1000 ${
          loading ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-6">
          <div className="flex items-center gap-2">
            <Image src="/1.jpg" alt="Welsh Corgi" width={48} height={48} />
            <div>
              <h1 className="text-xl font-bold">Paws & Tails</h1>
              <p className="text-sm text-gray-500 -mt-1">
                Your Trusted Pet Partners
              </p>
            </div>
          </div>
          <FiMenu
            className="text-3xl cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        </header>
        {/* Hero Section */}
        <main ref={heroRef} className="min-h-screen flex items-start justify-center py-10">
          <div className="w-[70%] mx-auto flex items-center justify-between gap-10 flex-wrap">
            {showFirst && !loading && (
              <>
                <motion.div
                  className="flex-1 flex justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}>
                  <Image
                    src="/1.jpg"
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
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
                      Companion
                    </motion.span>
                  </motion.h2>
                  <motion.p
                    className="text-gray-400 text-lg leading-relaxed mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
                    Doggs bringg joy, companionship, and love into our lives.
                    Whether you&apos;re looking for a playful puppy or a loyal adult dog, every pup is ready to bring a smile to your face.
                  </motion.p>
                </motion.div>
              </>
            )}

            {!showFirst && !loading && (
              <>
                <motion.div
                  className="flex-1 flex justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}>
                  <Image
                    src="/2.jpg"
                    alt="Cute Dog"
                    width={550}
                    height={550}
                    className="object-contain"
                    priority/>
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
                    Looking for a furry friend to join your family? Our dogs are not just pets, they&apos;re family. They are always ready for a game of fetch or a relaxing cuddle after a long day.
                  </motion.p>
                </motion.div>
              </>
            )}
          </div>
        </main>
        {/* Video Section */}
        <section ref={section2Ref} className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-8xl font-bold text-gray-900 mb-6 leading-tight">
                Woof!
                <br />
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
                onClick={() => setIsOpen(true)}
                className="absolute cursor-pointer inset-0 m-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl hover:bg-orange-600 transition">
                ▶
              </button>
            </div>
          </div>
        </section>

        {/* Section 3 */}
       <section ref={section3Ref} className="w-full py-20 bg-white mt-40 mb-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-8xl font-bold text-gray-900 mb-6 leading-tight">
            History
            <br />
            & <span className="text-orange-500">Family</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Pembroke Welsh Corgis have been around since 1107 AD in some way, shape, or form.
            They certainly didn’t look how they look today, but there are historical records
            describing a short-legged dog used for driving cattle in Wales.
          </p>
        </div>
        {/* Right side slider */}
        <div className="md:w-1/2 relative flex items-center justify-center w-full h-64 md:h-96 overflow-hidden rounded-xl">
          {/* Animated Image */}
          <AnimatePresence initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ x: "100%" }} 
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}    
              transition={{ type: "tween", duration: 0.6 }}
              className="absolute w-full h-full">
              <Image
                src={images[activeIndex]}
                alt={`Corgi ${activeIndex + 1}`}
                className="object-cover w-full h-full"
                fill
              />
            </motion.div>
          </AnimatePresence>

          {/* Vertical Dots */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full border-2 cursor-pointer transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-orange-500 border-orange-500 ring-2 ring-orange-400" // active dot with rounded border (ring)
                    : "bg-white border-gray-400 hover:border-orange-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
        {/* Section 4 */}
        <section ref={section4Ref} className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
              {/* Left Content */}
              <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-8xl font-bold text-gray-900 mb-6 leading-tight">
               Food. Love.
                <br />
                <span className="text-orange-500">Trainings</span>
              </h1>
          <hr className="w-12 border-t border-gray-300 mb-6 mx-auto md:mx-0" />
            <p className="text-gray-500 leading-relaxed">
            High energy combined with lots of smarts lends itself to disaster when the dog is not properly cared for. 
            It’s imperative that Corgis receive appropriate amounts of{" "}
            <span className="font-semibold text-gray-700">exercise, special food, bath, care and brain activities.</span>{" "}
            Be caring and responsible.
            </p>
        </div>

    {/* Right Content */}
    <div className="md:w-1/2 flex flex-col items-center">
      {/* Circle with Icons */}
      <div className="relative w-[32rem] h-[32rem] rounded-full border border-gray-200 flex items-center justify-center">
        {/* Center Content */}
        <div className="text-center max-w-xs">
          <h3 className="text-2xl font-semibold text-gray-900">How to Train?</h3>
          <p className="text-gray-500 text-base mt-2 px-4">
            Fitness is not for Corgi, so please do not them get lazy right away! Exercise and play!
          </p>
          <button className="mt-6 text-base font-semibold text-gray-900 hover:text-orange-500">
            LEARN MORE →
          </button>
        </div>

        {/* 8 Big Icons placed above the circle */}
        {[...Array(8).keys()].map((index) => {
          const rotationDegree = (360 / 8) * index;
          const IconComponents = [
            FaBone,
            GiDogBowl,
            FaHome,
            GiRabbitHead,
            FaBriefcaseMedical,
            GiScissors,
            GiSlippers,
            FaPaw
          ];
          const Icon = IconComponents[index];
          return (
            <div
              key={index}
              className="absolute transform transition-transform duration-300"
              style={{
                transform: `rotate(${rotationDegree}deg) translate(13rem) translateY(-8rem) rotate(-${rotationDegree}deg)`
              }}
            >
           <div className="cursor-pointer group relative w-23 h-23 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110">
  <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100 z-0"></div>
  <Icon className="relative z-10 text-6xl text-orange-500 group-hover:text-white transition-colors duration-300" />
</div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>


        {/* Section 5 */}
      <section ref={section5Ref} className="w-full py-20 bg-white mt-40 mb-40">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
    {/* Left Content */}
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-8xl font-bold text-gray-900 mb-6 leading-tight">
        Decided ?
        <br />
        <span className="text-orange-500">Contact Us</span>
      </h1>
      <hr className="w-12 border-t border-gray-300 mb-6 mx-auto md:mx-0" />
      <p className="text-gray-500 leading-relaxed">
        High energy combined with lots of smarts lends itself to disaster when the dog is not properly cared for.
        It’s imperative that Corgis receive appropriate amounts of{" "}
        <span className="font-semibold text-gray-700">
          exercise, special food, bath, care and brain activities.
        </span>{" "}
        Be caring and responsible.
      </p>
    </div>

    {/* Right Content - Simple Professional Form */}
    <div className="md:w-1/2 w-full">
      <form className="flex flex-col gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            placeholder="Write your message..."
            rows={4}
            className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2 resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
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

      {/* Right Side Dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
        {[0, 1, 2, 3, 4].map((dot, idx) => (
          <div
            key={idx}
            className="relative w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => handleDotClick(idx)}
          >
            <span
              className={`absolute w-6 h-6 rounded-full border-2 border-orange-500 transition-all duration-500 ${
                activeDot === idx
                  ? "opacity-100 scale-110 animate-ping-slow"
                  : "opacity-0 scale-100"
              }`}
            ></span>

            <span
              className={`w-2.5 h-2.5 rounded-full z-10 transition-colors duration-300 ${
                activeDot === idx ? "bg-orange-500" : "bg-black hover:bg-gray-700"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Left Social Media Icons */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6 z-50">
        <div ref={facebookRef}>
          <FaFacebookF className="text-4xl text-yellow-500 transition-all duration-300" />
        </div>
        <div ref={instagramRef}>
          <FaInstagram className="text-4xl text-yellow-500 transition-all duration-300" />
        </div>
        <div ref={whatsappRef}>
          <FaWhatsapp className="text-4xl text-yellow-500 transition-all duration-300" />
        </div>
      </div>

      <style jsx>{`
        @keyframes ping-slow {
          0% { transform: scale(0.9); opacity: 0.7; }
          50% { transform: scale(1.2); opacity: 0.3; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        .animate-ping-slow { animation: ping-slow 1s ease-out infinite; }

        @keyframes wave {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-12px); }
        }
        .animate-wave { animation: wave 1s infinite ease-in-out; }
        .delay-0 { animation-delay: 0s; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoUrl="https://www.youtube.com/embed/_rDAbxZ8jLI"
      />
    </div>
  );
}
