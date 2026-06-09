"use client";

import { MessageSquare, Phone, MapPin, Mail, ArrowUp } from "lucide-react";

// Inline Instagram SVG for version safety
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-luxury-forest text-luxury-beige pt-20 pb-10 border-t border-luxury-beige/10 relative">
      {/* Scroll to top button */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
        <button
          onClick={() => handleScrollTo("home")}
          className="w-12 h-12 rounded-full bg-white text-luxury-forest border border-luxury-beige flex items-center justify-center hover:bg-luxury-beige transition-colors duration-300 shadow-md cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-11 flex items-center justify-center text-luxury-beige">
              <svg viewBox="0 0 100 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="96" height="136" rx="48" stroke="currentColor" strokeWidth="4" />
                <path d="M50 35 L62 55 L56 55 L65 72 L53 72 L53 85 L47 85 L47 72 L35 72 L44 55 L38 55 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-lg font-bold tracking-widest text-white">
                MISTY HILL LAND
              </span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-luxury-beige/60 font-semibold">
                Villa Stays • Wayanad
              </span>
            </div>
          </div>
          <p className="text-sm text-luxury-beige/70 leading-relaxed font-light mb-6">
            A premium private sanctuary nestled in the mist-laden peaks of Wayanad, Kerala. Unwind in tranquility, surrounded by cardamoms and coffee.
          </p>
          <span className="italic text-xs font-light text-luxury-beige/50">
            \"Where Nature Meets Comfort\"
          </span>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-3 lg:col-start-6 flex flex-col">
          <h4 className="font-playfair text-base font-bold text-white tracking-wider mb-6">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-3.5">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Accommodation", id: "features" },
              { name: "Experiences", id: "experiences" },
              { name: "Gallery", id: "gallery" },
              { name: "Reviews", id: "reviews" },
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.id)}
                className="text-sm text-luxury-beige/70 hover:text-white transition-colors duration-300 text-left cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div className="lg:col-span-3 flex flex-col">
          <h4 className="font-playfair text-base font-bold text-white tracking-wider mb-6">
            Contact Concierge
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 text-sm text-luxury-beige/70">
              <MapPin className="w-4.5 h-4.5 text-luxury-beige/50 shrink-0 mt-0.5" />
              <span>Wayanad, Kerala, India</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-luxury-beige/70">
              <Phone className="w-4.5 h-4.5 text-luxury-beige/50 shrink-0" />
              <a href="tel:+919846012345" className="hover:text-white transition-colors">
                +91 98460 12345
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-luxury-beige/70">
              <Mail className="w-4.5 h-4.5 text-luxury-beige/50 shrink-0" />
              <a href="mailto:stay@mistyhillland.com" className="hover:text-white transition-colors">
                stay@mistyhillland.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Socials */}
        <div className="lg:col-span-2 flex flex-col">
          <h4 className="font-playfair text-base font-bold text-white tracking-wider mb-6">
            Connect
          </h4>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/mistyhillland"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-luxury-beige/20 flex items-center justify-center text-luxury-beige/70 hover:text-white hover:border-white transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919846012345"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-luxury-beige/20 flex items-center justify-center text-luxury-beige/70 hover:text-white hover:border-white transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
          <span className="text-[10px] text-luxury-beige/55 mt-4 tracking-widest uppercase font-semibold">
            @mistyhillland
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-full h-[1px] bg-luxury-beige/10 mb-8" />
        
        {/* Copyright and signature */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-luxury-beige/40 gap-4">
          <span>
            © {new Date().getFullYear()} Misty Hill Land Villa Stays. All rights reserved.
          </span>
          <span className="tracking-wide">
            Designed for luxury by <span className="text-luxury-beige/60 font-medium">Antigravity Design Co.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
