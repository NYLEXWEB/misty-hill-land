"use client";

import Image from "next/image";
import { Users, Trees, Mountain, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-luxury-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Image with Luxury Decorative Border */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Elegant decorative background box */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-luxury-forest/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-luxury-forest/30 -z-10" />

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/about_villa.png"
                alt="Misty Hill Land Villa Exterior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Blur accent overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Small floating badge */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-luxury-beige">
              <span className="block font-playfair text-xl font-bold text-luxury-forest">Wayanad, Kerala</span>
              <span className="text-[9px] uppercase tracking-widest text-luxury-charcoal/60 font-semibold">Location of Serenity</span>
            </div>
          </motion.div>

          {/* Right Column: Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-luxury-forest uppercase mb-4">
              Premium Villa Stays
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-charcoal leading-tight mb-8">
              Where Nature <br />
              <span className="italic font-normal text-luxury-forest">Meets Comfort</span>
            </h2>

            <p className="text-luxury-charcoal/80 text-base md:text-lg leading-relaxed mb-8 font-normal">
              Escape to the lush green heights of Wayanad. Misty Hill Land is a carefully curated private villa retreat designed for those seeking peace, luxury, and raw nature. Surrounded by misty hills and organic tea gardens, this is your perfect home away from home.
            </p>

            {/* Poster Details: Getaway Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4 p-5 bg-white rounded-xl border border-luxury-beige/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-luxury-forest/5 flex items-center justify-center text-luxury-forest shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-luxury-charcoal">Families</h4>
                  <p className="text-xs text-luxury-charcoal/60 mt-0.5">Memories Together. A safe, secure and joyful environment for all generations.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white rounded-xl border border-luxury-beige/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-luxury-forest/5 flex items-center justify-center text-luxury-forest shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-luxury-charcoal">Friends</h4>
                  <p className="text-xs text-luxury-charcoal/60 mt-0.5">Fun & Adventure. Relax, bond, and experience local excursions together.</p>
                </div>
              </div>
            </div>

            {/* Core Highlights */}
            <div className="flex flex-col gap-4 border-t border-luxury-beige/60 pt-8">
              <div className="flex items-center gap-3">
                <Mountain className="w-5 h-5 text-luxury-forest shrink-0" />
                <span className="text-sm font-medium text-luxury-charcoal/90">Panoramic view of pristine mist-covered Wayanad mountains</span>
              </div>
              <div className="flex items-center gap-3">
                <Trees className="w-5 h-5 text-luxury-forest shrink-0" />
                <span className="text-sm font-medium text-luxury-charcoal/90">Surrounded by private organic cardamom and tea estates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
