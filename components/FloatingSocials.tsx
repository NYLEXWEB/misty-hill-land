"use client";

import { motion } from "framer-motion";

export default function FloatingSocials() {
  const whatsappUrl = "https://wa.me/919846012345?text=Hi,%20I'm%20interested%20in%20booking%20a%20stay%20at%20Misty%20Hill%20Land!";
  const instagramUrl = "https://www.instagram.com/mistyhill.land?igsh=MXBuY3k0ZWV0dGNhMg==";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 pointer-events-none">
      {/* Instagram Floating Button */}
      <motion.a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto w-12 h-12 md:w-13 md:h-13 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 relative group cursor-pointer"
        aria-label="Follow us on Instagram"
      >
        <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-14 bg-luxury-charcoal text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          Instagram
        </span>
      </motion.a>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.15, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto w-12 h-12 md:w-13 md:h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 relative group cursor-pointer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 fill-white">
          <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.473 1.332 4.988L2 22l5.176-1.359c1.47.8 3.129 1.223 4.824 1.223 5.506 0 9.988-4.482 9.988-9.988 0-5.506-4.482-9.988-9.988-9.988zm0 18.288c-1.494 0-2.965-.4-4.259-1.159l-.305-.182-3.165.83.847-3.059-.2-.318c-.829-1.318-1.265-2.841-1.265-4.412 0-4.57 3.718-8.288 8.288-8.288 4.57 0 8.288 3.718 8.288 8.288 0 4.571-3.718 8.289-8.288 8.289zm4.724-6.289c-.259-.13-1.535-.759-1.771-.847-.235-.088-.406-.13-.576.13-.17.259-.659.847-.806 1.018-.147.17-.294.188-.553.059-1.077-.538-1.847-.988-2.565-2.224-.188-.324.188-.306.538-1.012.059-.118.03-.224-.012-.306-.041-.082-.406-.976-.559-1.335-.147-.353-.294-.306-.406-.312h-.347c-.118 0-.312.041-.477.224-.165.182-.63.618-.63 1.506 0 .888.647 1.747.735 1.871.088.124 1.277 1.953 3.094 2.735.435.188 1.006.306 1.383.229.377-.076 1.371-.559 1.565-1.106.194-.547.194-1.018.135-1.106-.059-.088-.218-.147-.477-.276z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-14 bg-luxury-charcoal text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
