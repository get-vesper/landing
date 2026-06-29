"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Chapter4_Introduce() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-32 md:py-48 relative border-t border-vesper-border bg-vesper-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col items-center">
        
        <div className="text-xs font-mono tracking-widest text-vesper-accent mb-12 uppercase text-center">
          03 / The Infrastructure
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-12 text-vesper-text tracking-tight text-center max-w-4xl leading-[1.1]">
          Built for the organizations <br className="hidden md:block" />
          that build the future.
        </h2>
        
        <p className="text-lg md:text-xl text-vesper-text-muted font-normal leading-relaxed text-center max-w-2xl mb-24">
          Vesper is not a project management tool. It is a purpose-built operational 
          infrastructure layer that understands the deep technical context of your mission and 
          automatically structures the regulatory requirements needed to achieve it.
        </p>

        {/* Visual Chorus: The Infrastructure Layer */}
        {mounted && (
          <div className="w-full max-w-5xl h-[400px] md:h-[600px] border border-vesper-border bg-vesper-surface flex items-center justify-center relative p-8">
            {/* Incoming telemetry / specs */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-8 -translate-x-1/2 md:-translate-x-full pr-0 md:pr-8">
              {[1, 2, 3].map((i) => (
                <div key={`in-${i}`} className="flex items-center gap-4">
                  <div className="hidden md:block text-xs font-mono text-vesper-text-muted w-16 text-right">INPUT.0{i}</div>
                  <motion.div 
                    className="w-16 md:w-32 h-px bg-vesper-border relative overflow-hidden"
                  >
                    <motion.div 
                      className="absolute left-0 top-0 h-full w-8 bg-vesper-accent"
                      animate={{ x: ["-100%", "400%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Core Processing Container */}
            <div className="w-64 h-64 md:w-96 md:h-96 border border-vesper-border bg-vesper-base p-6 md:p-8 flex flex-col justify-between relative z-10">
              <div className="text-xs font-mono text-vesper-text-muted">SYSTEM.CORE</div>
              
              <div className="flex-1 flex items-center justify-center relative">
                 <motion.div 
                    className="w-24 h-24 md:w-32 md:h-32 border border-vesper-text rotate-45 flex items-center justify-center bg-vesper-surface relative z-10"
                    animate={{ rotate: [45, 45, 135, 135] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                 >
                   <div className="w-12 h-12 md:w-16 md:h-16 border border-vesper-border bg-vesper-base -rotate-45 flex items-center justify-center">
                     <motion.div 
                       className="w-2 h-2 bg-vesper-text"
                       animate={{ scale: [1, 1.5, 1] }}
                       transition={{ duration: 2, repeat: Infinity }}
                     />
                   </div>
                 </motion.div>
                 
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <motion.div 
                      className="w-48 h-48 md:w-64 md:h-64 border border-vesper-border rounded-full"
                      animate={{ scale: [0.8, 1.1, 0.8], opacity: [0, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   />
                 </div>
              </div>

              <div className="text-xs font-mono text-vesper-text-muted text-right">PROCESSING</div>
            </div>

            {/* Outgoing structured data */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-12 translate-x-1/2 md:translate-x-full pl-0 md:pl-8">
              {[1, 2].map((i) => (
                <div key={`out-${i}`} className="flex items-center gap-4">
                  <motion.div 
                    className="w-16 md:w-32 h-px bg-vesper-border relative overflow-hidden"
                  >
                    <motion.div 
                      className="absolute left-0 top-0 h-full w-12 bg-vesper-text"
                      animate={{ x: ["-100%", "300%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.7 }}
                    />
                  </motion.div>
                  <div className="w-12 h-16 md:w-16 md:h-20 border border-vesper-text bg-vesper-base flex flex-col justify-end p-2">
                    <div className="w-full h-px bg-vesper-border mb-1" />
                    <div className="w-2/3 h-px bg-vesper-border mb-1" />
                    <div className="w-full h-px bg-vesper-border" />
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        )}

      </div>
    </section>
  );
}
