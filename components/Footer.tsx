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
    <footer className="bg-luxury-forest text-luxury-beige pt-8 pb-3 border-t border-luxury-beige/10 relative">
      {/* Scroll to top button */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
        <button
          onClick={() => handleScrollTo("home")}
          className="w-9 h-9 rounded-full bg-white text-luxury-forest border border-luxury-beige flex items-center justify-center hover:bg-luxury-beige transition-colors duration-300 shadow-md cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-4">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-1.5">
            <div className="w-6 h-8.5 flex items-center justify-center text-luxury-beige">
              <svg viewBox="0 0 100 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="96" height="136" rx="48" stroke="currentColor" strokeWidth="4" />
                <path d="M50 35 L62 55 L56 55 L65 72 L53 72 L53 85 L47 85 L47 72 L35 72 L44 55 L38 55 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-sm font-bold tracking-widest text-white">
                MISTY HILL LAND
              </span>
              <span className="text-[7.5px] uppercase tracking-[0.25em] text-luxury-beige/50 font-semibold">
                Villa Stays • Wayanad
              </span>
            </div>
          </div>
          <span className="italic text-[10px] font-light text-luxury-beige/40">
            \"Where Nature Meets Comfort\"
          </span>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col justify-center">
          <h4 className="font-playfair text-xs font-bold text-white tracking-wider mb-2">
            Quick Links
          </h4>
          <nav className="grid grid-cols-2 gap-x-4 gap-y-1.5">
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
                className="text-[11px] text-luxury-beige/65 hover:text-white transition-colors duration-300 text-left cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div className="flex flex-col justify-center">
          <h4 className="font-playfair text-xs font-bold text-white tracking-wider mb-2">
            Contact
          </h4>
          <div className="flex flex-col gap-1.5 text-[11px] text-luxury-beige/65">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-luxury-beige/40 shrink-0" />
              <span>Wayanad, Kerala, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-luxury-beige/40 shrink-0" />
              <a href="tel:+919846012345" className="hover:text-white transition-colors">
                +91 98460 12345
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-luxury-beige/40 shrink-0" />
              <a href="mailto:stay@mistyhillland.com" className="hover:text-white transition-colors text-[10px] sm:text-[11px]">
                stay@mistyhillland.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Map */}
        <div className="flex flex-col justify-center">
          <h4 className="font-playfair text-xs font-bold text-white tracking-wider mb-2">
            Our Location
          </h4>
          <div className="w-full h-24 rounded-lg overflow-hidden border border-luxury-beige/15 shadow-inner relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250157.65935965682!2d75.9228834444583!3d11.603370335017265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60c2c1161d9a3%3A0xc3b98c3652de44cc!2sWayanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1717900000000!5m2!1sen!2sin"
              className="w-full h-full border-0 filter grayscale invert-[0.9] sepia-[0.25] brightness-[0.9] contrast-[1.15] opacity-75 hover:opacity-100 transition-all duration-300"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Misty Hill Land Location Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-full h-[1px] bg-luxury-beige/10 mb-4" />
        
        {/* Copyright and signature */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[10px] text-luxury-beige/40 gap-2">
          <div className="flex items-center gap-4">
            <span>
              © {new Date().getFullYear()} Misty Hill Land Villa Stays. All rights reserved.
            </span>
            <span className="hidden md:inline text-luxury-beige/20">|</span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/mistyhill.land?igsh=MXBuY3k0ZWV0dGNhMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 rounded-full border border-luxury-beige/20 flex items-center justify-center text-luxury-beige/60 hover:text-white hover:border-white transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-2.5 h-2.5" />
              </a>
              <a
                href="https://wa.me/919846012345"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 rounded-full border border-luxury-beige/20 flex items-center justify-center text-luxury-beige/60 hover:text-white hover:border-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-2.5 h-2.5" />
              </a>
              <span className="text-[9px] text-luxury-beige/50 lowercase">@mistyhill.land</span>
            </div>
          </div>
          <span className="tracking-wide">
            By <span className="text-luxury-beige/60 font-medium">Nylex</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
