"use client";

import { MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function BookingCTA() {
  return (
    <section id="booking-cta" className="py-28 md:py-36 bg-white relative overflow-hidden">
      {/* Delicate background shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-luxury-beige/30 pointer-events-none -z-10" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-luxury-beige/20 pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* SVG Luxury Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <svg viewBox="0 0 100 30" className="w-24 h-8 text-luxury-gold fill-none" stroke="currentColor" strokeWidth="1">
            <path d="M10,15 C30,5 30,25 50,15 C70,5 70,25 90,15" />
            <circle cx="50" cy="15" r="3" fill="currentColor" />
            <path d="M50,5 L50,25" />
          </svg>
        </motion.div>

        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs md:text-sm font-semibold tracking-[0.35em] text-luxury-forest uppercase mb-4 block"
        >
          Reserve Your Sanctuary
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-luxury-charcoal mb-6 leading-tight"
        >
          Ready For Your <br />
          <span className="italic font-normal text-luxury-forest">Perfect Getaway?</span>
        </motion.h2>

        {/* Short info */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-luxury-charcoal/70 text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed mb-12"
        >
          Connect with our personal hospitality concierge to check villa availability, receive custom group pricing, and plan your perfect Wayanad escape.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-6 mb-10 max-w-md mx-auto"
        >
          <a
            href="https://wa.me/919000000000?text=Hi,%20I'm%20interested%20in%20booking%20a%20stay%20at%20Misty%20Hill%20Land!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-luxury-forest text-white px-8 py-4.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-luxury-forest/95 hover:shadow-lg transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 fill-white/10" />
            Book On WhatsApp
          </a>

          <a
            href="tel:+919000000000"
            className="flex items-center justify-center gap-2 border border-luxury-forest/30 text-luxury-forest px-8 py-4.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-luxury-beige/20 hover:border-luxury-forest transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Call Concierge
          </a>
        </motion.div>

        {/* Small trust banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-xs text-luxury-charcoal"
        >
          <ShieldCheck className="w-4 h-4 text-luxury-forest" />
          <span>Direct booking • No hidden charges • 100% Privacy</span>
        </motion.div>
      </div>
    </section>
  );
}
