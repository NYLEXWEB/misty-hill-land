"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/hero/file_0000000062ac72078d899052a7e2774e.png",
  "/hero/file_0000000070187207b11c1f96e4e3c8f2.png",
  "/hero/file_00000000ae387207bce7e2cfb1fe9901.png",
  "/hero/file_00000000b4647207ad5425980cc369a5.png",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // 6 seconds for an elegant, slow transition

    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image Carousel (Ken Burns Effect) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt="Misty Hill Land Villa Stays Wayanad"
              fill
              priority
              quality={95}
              className="object-cover object-center filter brightness-[0.85] contrast-[1.02]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Elegant Gradient Overlays */}
        {/* Dark vignette gradient for luxury feel and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-luxury-charcoal/20 to-luxury-charcoal/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/40 via-transparent to-transparent z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full pt-20">
        {/* Left Side Info */}
        <div className="lg:col-span-8 text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2.5 mb-6"
          >
            <span className="w-10 h-[1.5px] bg-luxury-beige" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.35em] text-luxury-beige uppercase">
              Wayanad • Kerala
            </span>
          </motion.div>

          <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.15] mb-6 max-w-3xl overflow-hidden">
            {/* Split line reveal */}
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="block"
            >
              Your Private Escape
            </motion.span>
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="block text-luxury-beige italic font-normal font-playfair"
            >
              In The Hills
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/80 text-base md:text-lg max-w-xl font-normal leading-relaxed tracking-wide mb-10"
          >
            Experience luxury, tranquility and breathtaking mountain views in our exclusive villa stay surrounded by nature.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <a
              href="https://wa.me/919000000000?text=Hi,%20I'm%20interested%20in%20booking%20a%20stay%20at%20Misty%20Hill%20Land!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-luxury-forest text-white px-8 py-4.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-luxury-forest/90 transition-all duration-300 shadow-lg"
            >
              Book Your Stay
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => handleScrollTo("about")}
              className="flex items-center justify-center gap-2.5 border border-white/30 text-white px-8 py-4.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Explore The Property
            </button>
          </motion.div>
        </div>

        {/* Right Side - Floating Review Card */}
        <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-2xl max-w-[280px] shadow-2xl flex flex-col items-center text-center text-white"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-luxury-gold stroke-luxury-gold" />
                ))}
              </div>
              <span className="font-playfair text-3xl font-bold text-white mb-1">
                4.9 Rating
              </span>
              <span className="text-xs uppercase tracking-widest text-white/70 font-semibold mb-4">
                On Airbnb Luxe
              </span>
              <div className="w-full h-[1px] bg-white/20 mb-4" />
              <span className="text-sm font-medium text-white/90">
                100+ Happy Guests
              </span>
              <p className="text-[10px] text-white/60 mt-1 italic">
                \"An absolute paradise in Kerala\"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <button
          onClick={() => handleScrollTo("trust-bar")}
          className="flex flex-col items-center gap-2 group focus:outline-none"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-white/60 group-hover:text-white transition-colors duration-300">
            Scroll To Discover
          </span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center p-1 group-hover:border-white transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
