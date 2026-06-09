"use client";

import { Home, Mountain, Flame, ChefHat, Wifi, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: Home,
      title: "Spacious Elegant Villas",
      tag: "Private Villa",
      description: "Carefully curated architectural spaces offering luxurious privacy, generous living areas, and cozy corners.",
    },
    {
      icon: Mountain,
      title: "Stunning Views & Fresh Air",
      tag: "Mountain Views",
      description: "Wake up to mist rolling over the green Wayanad valley, directly visible from your private bedroom or balcony.",
    },
    {
      icon: Flame,
      title: "Bonfire Nights Under the Stars",
      tag: "Bonfire Nights",
      description: "Gather around a warm, crackling fire under a clear night sky. Indulge in stories, laughter, and stargazing.",
    },
    {
      icon: ChefHat,
      title: "Homely Meals On Request",
      tag: "Homely Meals",
      description: "Savor the authentic taste of Wayanad with custom prepared traditional Kerala cuisine made from fresh, local ingredients.",
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      tag: "Fast WiFi",
      description: "Stay seamlessly connected with high-speed internet, smart workspace areas, and modern high-end comforts.",
    },
    {
      icon: Shield,
      title: "Privacy & Safety Our Priority",
      tag: "Safe & Secure",
      description: "Enjoy complete peace of mind with 24/7 security, high-end guest privacy protocols, and secure resort compounds.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="features" className="py-24 md:py-32 bg-white relative">
      {/* Decorative subtle background detail */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-luxury-forest uppercase mb-4 block">
            Thoughtfully Curated For You
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-charcoal leading-tight">
            Tailored Comfort in <br />
            <span className="italic font-normal text-luxury-forest">Every Detail</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-beige mx-auto mt-6" />
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group bg-luxury-bg/30 hover:bg-white border border-luxury-beige/40 hover:border-luxury-forest/20 p-8 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Outlined Icon Circle */}
                <div className="w-14 h-14 rounded-full border border-luxury-forest/10 group-hover:border-luxury-forest/30 flex items-center justify-center text-luxury-forest bg-white mb-6 transition-colors duration-500">
                  <Icon className="w-6 h-6 stroke-[1.25] group-hover:scale-110 transition-transform duration-500" />
                </div>

                <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-forest font-semibold mb-2 block">
                  {feature.tag}
                </span>

                <h3 className="font-playfair text-xl font-bold text-luxury-charcoal group-hover:text-luxury-forest transition-colors duration-300 mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm text-luxury-charcoal/70 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
