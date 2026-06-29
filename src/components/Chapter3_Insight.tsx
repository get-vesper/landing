"use client";

import { motion } from "framer-motion";

export default function Chapter3_Insight() {
  return (
    <section className="py-32 md:py-48 relative bg-vesper-base border-t border-vesper-border">
      <div className="max-w-4xl mx-auto px-8 w-full text-center flex flex-col items-center">
        
        <div className="text-xs font-mono tracking-widest text-vesper-accent mb-12 uppercase">
          02 / The Insight
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-12 text-vesper-text tracking-tight leading-[1.1]">
            Compliance is not an audit. <br className="hidden md:block" />
            <span className="text-vesper-text-muted">It is an operational workflow.</span>
          </h2>
          
          <div className="h-px w-12 bg-vesper-text mx-auto mb-10" />
          
          <p className="text-lg md:text-xl text-vesper-text-muted font-normal leading-relaxed max-w-2xl mx-auto">
            Instead of treating compliance as a post-engineering check, Vesper embeds regulatory logic directly into the engineering pipeline. When compliance is operationalized, teams move faster, and missions launch on time.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
