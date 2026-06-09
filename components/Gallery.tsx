"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ZoomIn, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/gallery_1.png",
    title: "Private Balcony",
    subtitle: "Mist & Mountain views",
    heightClass: "aspect-[3/4]",
  },
  {
    src: "/images/gallery_2.png",
    title: "Luxe Sanctuary Suite",
    subtitle: "Glass wall forest views",
    heightClass: "aspect-square",
  },
  {
    src: "/images/gallery_3.png",
    title: "Campfire Lounge",
    subtitle: "Dusk under star trails",
    heightClass: "aspect-[4/5]",
  },
  {
    src: "/images/gallery_4.png",
    title: "Culinary Heritage",
    subtitle: "Traditional Kerala breakfast",
    heightClass: "aspect-[4/3]",
  },
  {
    src: "/images/gallery_5.png",
    title: "Tea Gardens",
    subtitle: "Morning plantation path",
    heightClass: "aspect-[3/4]",
  },
  {
    src: "/images/gallery_6.png",
    title: "Wellness Deck",
    subtitle: "Forest canopy meditation",
    heightClass: "aspect-[4/3]",
  },
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-luxury-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-luxury-forest uppercase mb-4 block">
              Visual Narrative
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-charcoal leading-tight">
              Captured Moments of <br />
              <span className="italic font-normal text-luxury-forest">Misty Hill Land</span>
            </h2>
          </div>
          <div>
            <span className="text-xs tracking-widest text-luxury-charcoal/50 uppercase font-medium flex items-center gap-1.5 border-b border-luxury-beige pb-2">
              <Sparkles className="w-3.5 h-3.5 text-luxury-forest" />
              Click images to expand
            </span>
          </div>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              onClick={() => openLightbox(idx)}
              className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-white mb-6"
            >
              <div className={`relative ${image.heightClass} w-full overflow-hidden`}>
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Elegant overlay on hover */}
                <div className="absolute inset-0 bg-luxury-charcoal/0 group-hover:bg-luxury-charcoal/50 transition-colors duration-500 flex flex-col justify-end p-6 md:p-8" />
                
                {/* Info showing up on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {image.title}
                  </h3>
                  <p className="text-xs text-white/85 tracking-wider mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 uppercase">
                    {image.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Component */}
        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={galleryImages.map((img) => ({ src: img.src }))}
          />
        )}
      </div>
    </section>
  );
}
