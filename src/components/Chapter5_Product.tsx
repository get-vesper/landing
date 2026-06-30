"use client";

import { motion } from "framer-motion";

export default function Chapter5_Product() {
  return (
    <section className="py-24 md:py-32 relative bg-vesper-base border-t border-vesper-border">
      <div className="max-w-7xl mx-auto px-8 w-full">
        
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono tracking-widest text-vesper-accent mb-6 uppercase">
              03 / Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-vesper-text tracking-tight leading-[1.1]">
              Built to automate.
            </h2>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-vesper-border border border-vesper-border">
          
          {/* Feature 1 - Large spanning card */}
          <div className="md:col-span-8 bg-vesper-base p-10 md:p-16 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-vesper-accent/5 rounded-bl-full transform translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:scale-150" />
            <div className="w-12 h-12 border border-vesper-text flex items-center justify-center mb-16 relative z-10 transition-transform group-hover:-translate-y-2">
              <div className="w-4 h-4 bg-vesper-text" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-medium text-vesper-text mb-4">Mission-tailored compliance roadmap generation</h3>
              <p className="text-lg text-vesper-text-muted font-normal leading-relaxed max-w-xl">
                Automatically identifies which regulatory agencies and licensing pathways apply to your specific mission, generating precise roadmaps without manual research.
              </p>
            </div>
          </div>

          {/* Feature 2 - Small card */}
          <div className="md:col-span-4 bg-vesper-base p-10 md:p-16 flex flex-col justify-between group">
            <div className="w-12 h-12 border border-vesper-text flex flex-wrap items-center justify-center gap-1 p-2 mb-16 transition-transform group-hover:scale-110">
               <div className="w-2.5 h-2.5 bg-vesper-text" />
               <div className="w-2.5 h-2.5 border border-vesper-text" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-medium text-vesper-text mb-4">Automated filing & docs</h3>
              <p className="text-base text-vesper-text-muted font-normal leading-relaxed">
                Generates required engineering documentation and regulatory filings dynamically based on mission constraints.
              </p>
            </div>
          </div>

          {/* Feature 3 - Small card */}
          <div className="md:col-span-4 bg-vesper-base p-10 md:p-16 flex flex-col justify-between group">
            <div className="w-12 h-12 border border-vesper-text flex items-center justify-center mb-16 transition-transform group-hover:rotate-180 duration-700">
               <div className="w-6 h-6 border-[1.5px] border-vesper-text rounded-full border-t-transparent" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-medium text-vesper-text mb-4">End-to-end monitoring</h3>
              <p className="text-base text-vesper-text-muted font-normal leading-relaxed">
                Keeps organizations compliant throughout the mission lifecycle—from initial planning through launch to final deorbit.
              </p>
            </div>
          </div>

          {/* Feature 4 - Large spanning card */}
          <div className="md:col-span-8 bg-vesper-base p-10 md:p-16 flex flex-col justify-between group relative overflow-hidden">
             <div className="absolute inset-0 pointer-events-none z-0">
               {/* Subtle background lines pattern */}
               <div className="absolute top-1/2 left-0 w-full h-px bg-vesper-border/50" />
               <div className="absolute left-1/2 top-0 w-px h-full bg-vesper-border/50" />
             </div>
            <div className="w-12 h-12 border border-vesper-text flex items-center justify-center mb-16 relative z-10 transition-transform group-hover:-translate-y-2">
              <motion.div 
                className="w-full h-full bg-vesper-text origin-bottom"
                initial={{ scaleY: 0.1 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-medium text-vesper-text mb-4">Automated dependency coordination</h3>
              <p className="text-lg text-vesper-text-muted font-normal leading-relaxed max-w-xl">
                Assigns compliance tasks, tracks deadlines, and ensures engineering and legal are perfectly synchronized across the entire process.
              </p>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
