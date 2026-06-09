"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    num: "01",
    title: "Sunrise Viewpoints",
    tag: "High Peaks & Fog",
    description:
      "Venture to nearby viewpoints in the early morning. Watch the valley wake up as layers of mist slowly dissipate, revealing the golden glow of the sun hitting the Western Ghats.",
    image: "/images/gallery_1.png",
  },
  {
    num: "02",
    title: "Guided Nature Walks",
    tag: "Flora & Fauna",
    description:
      "Embark on a guided trekking path through bamboo woods, streams, and secret nature trails. Uncover local herbs, spices, and exotic bird species unique to the Wayanad region.",
    image: "/images/gallery_6.png",
  },
  {
    num: "03",
    title: "Plantation Visits",
    tag: "Cardamom & Tea",
    description:
      "Stroll through organic tea gardens and cardamom fields. Learn the delicate process of picking tea leaves and understand the history of agricultural estates in Kerala.",
    image: "/images/parallax_scenic.png",
  },
  {
    num: "04",
    title: "Campfire Evenings",
    tag: "Nights Under Stars",
    description:
      "Indulge in cozy campfire nights. Let the chill of the mountains fade away as you gather around a warm woodfire with close friends, sharing travel stories and stargazing.",
    image: "/images/gallery_3.png",
  },
  {
    num: "05",
    title: "Traditional Local Cuisine",
    tag: "Gourmet Kerala Dishes",
    description:
      "Savor authentic regional recipes made on request. Relish freshly prepared meals using ingredients sourced directly from village farms, served in traditional luxury style.",
    image: "/images/gallery_4.png",
  },
  {
    num: "06",
    title: "Relaxation Retreats",
    tag: "Wellness & Meditation",
    description:
      "Unwind on our minimalist wooden relaxation decks. Practice yoga, read in absolute solitude, or listen to the soothing background music of rustling leaves and birds chirping.",
    image: "/images/about_villa.png",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="max-w-3xl mb-24">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-luxury-forest uppercase mb-4 block">
            Curated Journeys
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-charcoal leading-tight">
            Curated Experiences for the <br />
            <span className="italic font-normal text-luxury-forest">Discerning Traveler</span>
          </h2>
          <p className="text-luxury-charcoal/60 text-sm md:text-base mt-6 max-w-lg font-light leading-relaxed">
            Enhance your stay with thoughtfully selected activities designed to connect you deeply with the local culture and breathtaking nature of Wayanad.
          </p>
        </div>

        {/* Editorial Alternating List */}
        <div className="flex flex-col gap-24 md:gap-32">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-lg border border-luxury-beige/40">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/20 to-transparent pointer-events-none" />
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Item Index */}
                  <span className="font-playfair text-xs tracking-widest text-luxury-forest font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-forest" />
                    {exp.num} / {experiences.length}
                  </span>

                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-luxury-charcoal mb-2">
                    {exp.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-bold mb-5 block">
                    {exp.tag}
                  </span>

                  <p className="text-sm md:text-base text-luxury-charcoal/70 leading-relaxed font-normal mb-6">
                    {exp.description}
                  </p>

                  <a
                    href="https://wa.me/919000000000?text=Hi,%20I'd%20like%20to%20add%20the%20following%20experiences%20to%20my%20stay:"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-luxury-forest uppercase group w-fit pb-1.5 border-b border-luxury-forest/20 hover:border-luxury-forest transition-colors duration-300"
                  >
                    Inquire details
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
