"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Chapter1_Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col overflow-hidden border-b border-gray-200">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-8 w-full pt-28 pb-24 relative z-20 flex-1 flex flex-col justify-center border-x border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight mb-8 text-gray-900 leading-[1.1]">
            Automating Compliance for Ambitious Aerospace Missions.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-900/70 mb-10 max-w-lg font-light leading-relaxed">
            Vesper bridges engineering and compliance into a single system that coordinates work across teams, accelerates missions, and manages the entire lifecycle of regulatory requirements.
          </p>
          
          <div className="flex items-start">
            <button className="px-8 py-3.5 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors rounded-none shadow-lg">
              Book a Demo
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
