"use client";

import { motion } from "framer-motion";

export default function Chapter8_Closing() {
  return (
    <section className="py-32 md:py-48 relative border-t border-vesper-border bg-vesper-surface">
      <div className="max-w-4xl mx-auto px-8 text-center flex flex-col items-center">
        
        <div className="w-12 h-12 border-[1.5px] border-vesper-text flex items-center justify-center mb-12">
          <div className="w-4 h-4 bg-vesper-text" />
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-16 text-vesper-text tracking-tight leading-[1.1]">
          Ready to automate your <br className="hidden md:block" />
          compliance workflow?
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-vesper-text text-vesper-surface text-sm font-medium hover:bg-black transition-colors w-full sm:w-auto">
            Book a Demo
          </button>
          <button className="px-8 py-4 bg-transparent text-vesper-text text-sm font-medium border border-vesper-border hover:bg-black/5 transition-colors w-full sm:w-auto">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
}
