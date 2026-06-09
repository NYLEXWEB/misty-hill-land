"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Accommodation", href: "#features" },
    { name: "Experiences", href: "#experiences" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
  ];

  // Helper to handle smooth scroll to anchor
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-luxury-bg/90 backdrop-blur-md shadow-md py-4 border-b border-luxury-beige/40"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-14 flex items-center justify-center">
              {/* Luxury Badge Logo */}
              <svg
                viewBox="0 0 100 140"
                className={`w-full h-full transition-colors duration-300 ${
                  isScrolled ? "text-luxury-forest" : "text-white"
                }`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="96"
                  height="136"
                  rx="48"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  d="M50 20 C60 35, 75 45, 80 60 C85 75, 80 90, 50 120 C20 90, 15 75, 20 60 C25 45, 40 35, 50 20 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="2 2"
                />
                {/* Pine Trees */}
                <path
                  d="M50 35 L62 55 L56 55 L65 72 L53 72 L53 85 L47 85 L47 72 L35 72 L44 55 L38 55 Z"
                  fill="currentColor"
                />
                {/* Hills line */}
                <path
                  d="M25 90 Q38 80 50 90 T75 90"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-playfair text-lg md:text-xl font-bold tracking-[0.15em] transition-colors duration-300 ${
                  isScrolled ? "text-luxury-charcoal" : "text-white"
                }`}
              >
                MISTY HILL LAND
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.3em] font-semibold transition-colors duration-300 ${
                  isScrolled ? "text-luxury-forest" : "text-luxury-beige"
                }`}
              >
                Villa Stays • Wayanad
              </span>
            </div>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-medium tracking-wider uppercase transition-all duration-300 relative py-1 hover:opacity-100 group ${
                  isScrolled
                    ? "text-luxury-charcoal/80 hover:text-luxury-forest"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-luxury-forest" : "bg-white"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/919000000000?text=Hi,%20I'm%20interested%20in%20booking%20a%20stay%20at%20Misty%20Hill%20Land!"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                isScrolled
                  ? "bg-luxury-forest text-white hover:bg-luxury-forest/90"
                  : "bg-white text-luxury-forest hover:bg-luxury-beige"
              }`}
            >
              Book Your Stay
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled || isMobileMenuOpen ? "text-luxury-charcoal" : "text-white"} size={26} />
            ) : (
              <Menu className={isScrolled ? "text-luxury-charcoal" : "text-white"} size={26} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-luxury-bg flex flex-col justify-between pt-32 pb-16 px-8 lg:hidden"
          >
            {/* Background design accents */}
            <div className="absolute top-20 right-10 opacity-5 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-64 h-64 text-luxury-forest fill-none" stroke="currentColor" strokeWidth="1">
                <circle cx="50" cy="50" r="45" />
              </svg>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-playfair text-3xl font-semibold text-luxury-charcoal hover:text-luxury-forest transition-colors duration-300 flex items-center justify-between"
                >
                  {link.name}
                  <ArrowRight className="w-6 h-6 opacity-30 hover:opacity-100" />
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col gap-4"
            >
              <a
                href="https://wa.me/919000000000?text=Hi,%20I'm%20interested%20in%20booking%20a%20stay%20at%20Misty%20Hill%20Land!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-luxury-forest text-white py-4 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-luxury-forest/90 transition-colors duration-300"
              >
                Book on WhatsApp
              </a>
              <a
                href="tel:+919000000000"
                className="w-full flex items-center justify-center gap-2 border border-luxury-forest/20 text-luxury-forest py-4 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-luxury-beige/30 transition-colors duration-300"
              >
                Call Concierge
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
