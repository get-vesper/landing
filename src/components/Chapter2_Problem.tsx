"use client";

import { motion } from "framer-motion";

export default function Chapter2_Problem() {
  return (
    <section className="py-32 md:py-48 relative border-t border-vesper-border bg-vesper-base">
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row items-start md:items-start gap-16 md:gap-24">
        
        {/* Subtle numbering / chapter indicator */}
        <div className="md:w-1/4 pt-2">
          <span className="text-xs font-mono tracking-widest text-vesper-text-muted uppercase">
            01 / The Problem
          </span>
        </div>

        {/* Editorial Typography */}
        <div className="md:w-3/4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-10 text-vesper-text tracking-tight leading-[1.2]">
              Compliance is treated as paperwork. <br className="hidden md:block" />
              It is actually an operations problem.
            </h2>
            <div className="h-px w-12 bg-vesper-text mb-10" />
            <p className="text-lg text-vesper-text-muted font-normal leading-relaxed">
              Engineering owns the specs. Legal owns the filings. Compliance owns the deadlines. 
              Because these teams exist in separate systems, the translation between them introduces 
              massive operational drag and unacceptable mission risk.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
