"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Integrate with GSAP ScrollTrigger if active
    // We will handle ScrollTrigger synchronization here to ensure GSAP animations align perfectly
    const resizeHandler = () => {
      lenis.resize();
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return null;
}
