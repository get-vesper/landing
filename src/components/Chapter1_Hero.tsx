"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Chapter1_Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-vesper-base">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Side: Editorial Typography */}
        <div className="lg:col-span-5 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-medium tracking-tight mb-8 text-vesper-text leading-[1.1]">
              Bringing order to <br className="hidden md:block" />
              aerospace complexity.
            </h1>
            
            <p className="text-lg text-vesper-text-muted font-normal leading-relaxed mb-12 max-w-md">
              Vesper is the operational infrastructure layer connecting engineering systems, business operations, and regulatory agencies into one cohesive workflow.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="px-8 py-3.5 bg-vesper-text text-vesper-surface text-sm font-medium hover:bg-black transition-colors w-full sm:w-auto">
                Request Access
              </button>
              <button className="px-8 py-3.5 bg-transparent text-vesper-text text-sm font-medium border border-vesper-border hover:bg-black/5 transition-colors w-full sm:w-auto">
                Explore Platform
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Abstract Visual Motif - "Complexity becoming organized" */}
        <div className="lg:col-span-7 h-[500px] lg:h-[700px] relative w-full flex items-center justify-center">
          {mounted && (
            <div className="relative w-full h-full">
              {/* Abstract Nodes/Lines connecting */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`v-${i}`}
                  className="absolute bg-vesper-border"
                  initial={{ 
                    x: Math.random() * 400 - 200, 
                    y: Math.random() * 400 - 200, 
                    opacity: 0,
                    width: 1,
                    height: Math.random() * 100 + 20,
                    rotate: Math.random() * 360
                  }}
                  animate={{ 
                    x: (i % 4) * 120 - 180, 
                    y: Math.floor(i / 4) * 120 - 120, 
                    opacity: 1,
                    width: 1,
                    height: 80,
                    rotate: 0
                  }}
                  transition={{ 
                    duration: 2.5, 
                    delay: 0.2 + (i * 0.05),
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  style={{ top: '50%', left: '50%' }}
                />
              ))}

              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`h-${i}`}
                  className="absolute bg-vesper-border"
                  initial={{ 
                    x: Math.random() * 400 - 200, 
                    y: Math.random() * 400 - 200, 
                    opacity: 0,
                    height: 1,
                    width: Math.random() * 100 + 20,
                    rotate: Math.random() * 360
                  }}
                  animate={{ 
                    x: (i % 2) * 240 - 120, 
                    y: Math.floor(i / 2) * 120 - 120, 
                    opacity: 1,
                    height: 1,
                    width: 200,
                    rotate: 0
                  }}
                  transition={{ 
                    duration: 2.5, 
                    delay: 0.5 + (i * 0.05),
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  style={{ top: '50%', left: '50%' }}
                />
              ))}

              {/* Accent Nodes indicating synchronization */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`node-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-vesper-accent"
                  initial={{ 
                    scale: 0,
                    opacity: 0,
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                  }}
                  animate={{ 
                    scale: [0, 1.2, 1],
                    opacity: 1,
                    x: (i % 2) * 240 - 120, 
                    y: Math.floor(i / 2) * 240 - 120,
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: 1.5 + (i * 0.2),
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  style={{ top: '50%', left: '50%', marginLeft: -4, marginTop: -4 }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
