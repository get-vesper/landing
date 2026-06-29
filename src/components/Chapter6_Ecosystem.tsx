"use client";

import { motion } from "framer-motion";

export default function Chapter6_Ecosystem() {
  return (
    <section className="py-32 md:py-48 relative border-t border-vesper-border bg-vesper-base">
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col items-center">
        
        <div className="text-xs font-mono tracking-widest text-vesper-accent mb-12 uppercase text-center">
          05 / The Ecosystem
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-12 text-vesper-text tracking-tight text-center max-w-4xl leading-[1.1]">
          Infrastructure, not an island.
        </h2>
        
        <p className="text-lg md:text-xl text-vesper-text-muted font-normal leading-relaxed text-center max-w-2xl mx-auto mb-24">
          Vesper doesn't force your engineering team to leave their tools. It integrates directly with your existing technical and business stack, extracting parameters without adding friction.
        </p>

        {/* Clean, editorial diagram */}
        <div className="w-full max-w-5xl border border-vesper-border p-8 md:p-16 flex flex-col md:flex-row justify-between items-center relative bg-vesper-surface">
          
          <div className="flex flex-col gap-6 w-full md:w-1/4 mb-12 md:mb-0 relative z-10 bg-vesper-surface">
            <div className="text-xs font-mono text-vesper-text-muted border-b border-vesper-border pb-3 uppercase tracking-widest">Engineering Stack</div>
            <div className="text-base text-vesper-text font-medium">Jira / Linear</div>
            <div className="text-base text-vesper-text font-medium">CAD / PLM</div>
            <div className="text-base text-vesper-text font-medium">Internal Docs</div>
          </div>

          <div className="p-8 border-[1.5px] border-vesper-text flex items-center justify-center bg-vesper-surface z-10 w-full md:w-1/4 text-center">
            <span className="font-display font-semibold tracking-tight text-vesper-text text-xl">Vesper</span>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-1/4 text-left md:text-right mt-12 md:mt-0 relative z-10 bg-vesper-surface">
            <div className="text-xs font-mono text-vesper-text-muted border-b border-vesper-border pb-3 uppercase tracking-widest">Regulatory Agencies</div>
            <div className="text-base text-vesper-text font-medium">FCC Databases</div>
            <div className="text-base text-vesper-text font-medium">ITU Filings</div>
            <div className="text-base text-vesper-text font-medium">NOAA Submissions</div>
          </div>

          {/* Connection Lines (Desktop only) */}
          <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-vesper-border hidden md:block z-0" />
          
          <motion.div 
            className="absolute top-1/2 left-1/4 w-1/4 h-px bg-vesper-accent hidden md:block z-0"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/4 w-1/4 h-px bg-vesper-accent hidden md:block z-0"
            initial={{ scaleX: 0, originX: 1 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          />

        </div>

      </div>
    </section>
  );
}
