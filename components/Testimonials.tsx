"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Anjali & Vikram Sen",
    location: "Bangalore",
    image: "/images/guest_3.png",
    rating: 5,
    quote:
      "Misty Hill Land is absolute paradise. Waking up to the fog resting on the hills while enjoying hot traditional Kerala breakfast was magical. The privacy and level of care from the staff is unmatched. We will definitely return next year.",
  },
  {
    name: "Priyesh Mehta",
    location: "Mumbai",
    image: "/images/guest_2.png",
    rating: 5,
    quote:
      "We stayed here for a friends getaway and it was exceptional. The villa design is beautiful, minimalist but very comfortable. The bonfire night under the starry sky was the highlight of our trip. Truly feels like a five-star stay.",
  },
  {
    name: "Dr. Sarah D'Souza",
    location: "Cochin",
    image: "/images/guest_1.png",
    rating: 5,
    quote:
      "The ultimate mountain escape. If you want absolute silence, scenic valley views, and clean, fresh mountain air, this is the place. It's incredibly secure, family-friendly, and feels like a luxury retreat in every detail.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000); // Auto-slide every 7 seconds
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-luxury-bg border-y border-luxury-beige/55 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-luxury-forest uppercase mb-4 block">
            Guest Testimonies
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-charcoal">
            Stories from <span className="italic font-normal text-luxury-forest">Our Guestbook</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-beige mx-auto mt-6" />
        </div>

        {/* Testimonial Container */}
        <div className="relative min-h-[360px] flex flex-col justify-center items-center">
          <div className="absolute top-0 text-luxury-beige/50 -translate-y-4">
            <Quote className="w-16 h-16 stroke-[1]" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full text-center flex flex-col items-center z-10"
            >
              {/* Star Rating */}
              <div className="flex gap-1.5 justify-center mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-luxury-gold stroke-luxury-gold" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-playfair text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-luxury-charcoal/90 max-w-4xl mb-10 px-4 md:px-8">
                \"{testimonials[activeIndex].quote}\"
              </p>

              {/* Guest Profile Details */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-luxury-beige shadow-sm">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="block font-playfair text-base font-bold text-luxury-charcoal">
                    {testimonials[activeIndex].name}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-luxury-charcoal/60 font-semibold">
                    {testimonials[activeIndex].location}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-[-40px] md:bottom-auto md:left-0 md:right-0 md:top-1/2 md:-translate-y-1/2 flex justify-between w-full md:px-4 pointer-events-none mt-8 md:mt-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-luxury-forest/10 hover:border-luxury-forest/35 bg-white flex items-center justify-center text-luxury-forest hover:bg-luxury-beige/25 transition-all duration-300 pointer-events-auto cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-luxury-forest/10 hover:border-luxury-forest/35 bg-white flex items-center justify-center text-luxury-forest hover:bg-luxury-beige/25 transition-all duration-300 pointer-events-auto cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-2.5 justify-center mt-12 md:mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex ? "w-8 bg-luxury-forest" : "w-2 bg-luxury-beige"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
