"use client";

import { motion } from "framer-motion";

export default function Chapter8_Closing() {
  return (
    <section className="py-32 md:py-48 relative border-t border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto px-8 text-center flex flex-col items-center">
        
        <div className="w-12 h-12 border-[1.5px] border-vesper-accent flex items-center justify-center mb-12">
          <div className="w-4 h-4 bg-vesper-accent" />
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-16 text-black tracking-tight leading-[1.1]">
          Ready to automate your <br className="hidden md:block" />
          compliance workflow?
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-vesper-text text-white text-sm font-medium hover:bg-gray-800 transition-colors rounded-none w-full sm:w-auto shadow-md">
            Book a Demo
          </button>
        </div>

      </div>
    </section>
  );
}
