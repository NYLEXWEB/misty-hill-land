"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to image translate Y
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Image Wrapper */}
      <motion.div
        style={{ y }}
        className="absolute top-[-15%] left-0 w-full h-[130%] z-0"
      >
        <Image
          src="/images/parallax_scenic.png"
          alt="Sunrise over Wayanad mountains"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.7] contrast-[1.05]"
        />
      </motion.div>

      {/* Elegant Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-bg/30 via-transparent to-luxury-bg/30 z-10" />
      <div className="absolute inset-0 bg-luxury-charcoal/30 z-10" />

      {/* Centered Overlay Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-xs md:text-sm font-semibold tracking-[0.4em] text-luxury-beige uppercase mb-6">
            A Morning Ritual
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-wide drop-shadow-md">
            Wake Up To The Beauty <br />
            <span className="italic font-normal text-luxury-beige">Of Wayanad</span>
          </h2>
          <div className="w-16 h-[1px] bg-white/40 mb-6" />
          <p className="text-white/80 text-sm md:text-base max-w-md font-light tracking-wider leading-relaxed">
            Witness the morning clouds rest below you, and the sun filter through centuries-old trees.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
