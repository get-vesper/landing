"use client";

import { motion } from "framer-motion";

export default function Chapter7_Vision() {
  return (
    <section className="py-32 md:py-48 relative border-t border-vesper-border bg-vesper-base">
      <div className="max-w-4xl mx-auto px-8 w-full text-center flex flex-col items-center">
        
        <div className="text-xs font-mono tracking-widest text-vesper-accent mb-12 uppercase">
          06 / The Vision
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-12 text-vesper-text tracking-tight leading-[1.1]">
          The inevitable future of <br className="hidden md:block" />
          autonomous licensing.
        </h2>
        
        <div className="h-px w-12 bg-vesper-text mx-auto mb-10" />

        <p className="text-lg md:text-xl text-vesper-text-muted font-normal leading-relaxed max-w-2xl mx-auto">
          By treating compliance as deterministic code today, we are laying the 
          foundation for fully autonomous aerospace regulation tomorrow.
        </p>

      </div>
    </section>
  );
}
