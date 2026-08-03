"use client";

import { motion } from "framer-motion";

export default function Chapter4_Introduce() {
  return (
    <section className="relative w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 w-full py-32 border-x border-gray-200 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full text-center">
        
        <div className="text-xs font-mono tracking-widest text-vesper-accent mb-8 uppercase">
          02 / The Solution
        </div>
        
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-black tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Compliance grounds teams to a halt. <br className="hidden md:block" />
          <span className="text-gray-500">We built Vesper to propel them forward.</span>
        </motion.h2>

        </div>
      </div>
    </section>
  );
}
