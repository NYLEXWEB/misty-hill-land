"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function TrustBar() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      end: 500,
      suffix: "+",
      label: "Happy Guests",
    },
    {
      end: 4.9,
      decimals: 1,
      suffix: "★",
      label: "Average Rating",
    },
    {
      end: 100,
      suffix: "%",
      label: "Private Stay",
    },
    {
      end: 24,
      suffix: "/7",
      label: "Concierge Support",
    },
  ];

  return (
    <section
      id="trust-bar"
      ref={ref}
      className="relative z-20 py-10 md:py-14 bg-white border-y border-luxury-beige/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-luxury-beige/60">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center ${
                idx > 1 ? "pt-6 lg:pt-0" : idx === 1 ? "pt-0 lg:pt-0" : ""
              }`}
            >
              <span className="font-playfair text-4xl md:text-5xl font-bold text-luxury-forest tracking-tight mb-2">
                {inView ? (
                  <CountUp
                    end={stat.end}
                    decimals={stat.decimals || 0}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </span>
              <span className="text-xs md:text-sm uppercase tracking-widest text-luxury-charcoal/70 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
