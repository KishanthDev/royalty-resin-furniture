"use client";
import { CategoryScroll } from "./CategoryScroll";
import { motion } from "framer-motion";
export function Hero() {
  return (
    <section className="bg-black min-h-[100dvh] flex flex-col justify-end relative overflow-hidden">
      
      {/* ── BACKGROUND VIDEO ── */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover" 
        >
          {/* Replace this src with your actual video path */}
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* 1. Base Dark Gradient: Smooth transition from bottom up */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        
        {/* 2. Cinematic Vignette: Slightly darkens the corners to focus the eye on the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.25)_100%)] pointer-events-none" />
      </div>


     <div className="relative z-10 container mx-auto px-section-px pb-8 md:pb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        
        <h1 className="sr-only">
          Royalty Resin: Premium Furniture Interiors & Decors
        </h1>

        {/* LEFT: MINIMALIST TEXT BLOCK */}
        {/* Fades in and slides up slowly */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          className="flex flex-col gap-5 max-w-xl text-left drop-shadow-xl"
        >
          
          {/* Elegant Eyebrow */}
          <div className="flex items-center gap-4">
            {/* The line "draws" itself from 0 to 40px wide */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
              className="h-[1px] bg-primary/90" 
            />
            <p className="uppercase tracking-[0.4em] text-[10px] sm:text-xs text-white/90 font-medium">
              Royalty Resin • Interiors • Decors
            </p>
          </div>
          
          {/* Refined Paragraph */}
          <p className="text-sm md:text-base text-white/70 leading-loose font-light tracking-wide">
            Discover handcrafted furniture and artistic creations, seamlessly blending premium epoxy with the timeless beauty of natural wood.
          </p>
        </motion.div>

        {/* RIGHT: LUXURY SCROLL INDICATOR */}
        {/* Fades in after the main text is visible */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="hidden lg:flex flex-col items-center gap-4 text-white/50 mb-2"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] [writing-mode:vertical-lr] rotate-180 font-light">
            Scroll
          </span>
          
          {/* Continuous falling light animation on the vertical line */}
          <div className="relative w-[1px] h-16 bg-white/10 overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2, 
                ease: "linear",
                repeatDelay: 0.5 
              }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/80 to-transparent"
            />
          </div>
        </motion.div>

      </div>

      {/* ── BOTTOM CATEGORY BAR ── */}
      {/* Housed in a subtle frosted glass container to anchor the bottom of the screen */}
      <div className="relative z-10 w-full border-t border-white/10 backdrop-blur-sm py-4 sm:py-5">
        <div className="container mx-auto px-section-px">
          <CategoryScroll />
        </div>
      </div>

    </section>
  );
}