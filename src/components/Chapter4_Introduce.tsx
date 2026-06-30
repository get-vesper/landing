"use client";

import { motion } from "framer-motion";

export default function Chapter4_Introduce() {
  return (
    <section className="py-32 relative bg-vesper-base border-t border-vesper-border flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8 w-full text-center">
        
        <div className="text-xs font-mono tracking-widest text-vesper-accent mb-8 uppercase">
          02 / The Solution
        </div>
        
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-vesper-text tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Compliance grounds teams to a halt. <br className="hidden md:block" />
          <span className="text-vesper-text-muted">We built Vesper to propel them forward.</span>
        </motion.h2>

      </div>
    </section>
  );
}
