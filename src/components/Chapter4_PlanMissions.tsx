"use client";

import { motion } from "framer-motion";
import { ChevronRight, Target, Globe, Shield } from "lucide-react";

export default function Chapter4_PlanMissions() {
  return (
    <section className="relative w-full bg-white">
      <div className="max-w-7xl mx-auto px-8 w-full py-24 md:py-32 border-x border-gray-200">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-3xl">
            <div className="text-xs font-mono tracking-widest text-vesper-accent mb-6 uppercase">
              Phase 1 / Plan
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-black tracking-tight leading-[1.1]">
              Architect your mission&apos;s regulatory strategy in seconds.
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl leading-relaxed font-sans">
              Stop interpreting hundreds of pages of agency documentation. Vesper automatically translates your mission parameters into a concrete, actionable compliance roadmap.
            </p>
          </div>
        </div>

        {/* Feature Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="order-2 lg:order-1 relative aspect-square bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-vesper-accent/5 to-transparent pointer-events-none" />
            
            {/* Mockup for Roadmap */}
            <div className="w-full flex flex-col gap-4">
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-md transform transition-transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded bg-vesper-accent/10 flex items-center justify-center border border-vesper-accent/20">
                     <Target className="text-vesper-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="text-black font-medium text-sm">Mission Parameters Detected</h4>
                    <p className="text-gray-500 text-xs">LEO • X-Band • Commercial</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-vesper-border/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5 }}
                    className="h-full bg-vesper-accent"
                  />
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-md ml-8 transform transition-transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded bg-emerald-50 flex items-center justify-center border border-emerald-100">
                     <Globe className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-black font-medium text-sm">FCC Pathway Generated</h4>
                    <p className="text-gray-500 text-xs">Part 25 Commercial License Required</p>
                  </div>
                </div>
                 <div className="h-1.5 w-full bg-vesper-border/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-emerald-400"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-serif text-black mb-4">Mission-Specific Compliance Roadmaps</h3>
            <p className="text-lg text-gray-600 font-normal leading-relaxed mb-8">
              Automatically generate regulatory timelines, milestones, and filing requirements for every mission based on your specific orbital, spectrum, and vehicle parameters.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-black">
                <Shield className="w-4 h-4 text-vesper-accent" /> Assesses FAA, FCC, NOAA, and ITU applicability.
              </li>
              <li className="flex items-center gap-3 text-sm text-black">
                <Shield className="w-4 h-4 text-vesper-accent" /> Eliminates manual regulatory research.
              </li>
              <li className="flex items-center gap-3 text-sm text-black">
                <Shield className="w-4 h-4 text-vesper-accent" /> Updates dynamically as mission scope changes.
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h3 className="text-2xl font-serif text-black mb-4">Centralized Agency Management</h3>
            <p className="text-lg text-gray-600 font-normal leading-relaxed mb-8">
              Manage all agency interactions from a single interface. Never lose track of which forms have been submitted, which data requests are pending, and what deadlines are approaching.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-black">
                <Shield className="w-4 h-4 text-amber-500" /> Unified dashboard for all regulatory bodies.
              </li>
              <li className="flex items-center gap-3 text-sm text-black">
                <Shield className="w-4 h-4 text-amber-500" /> Automated compliance intelligence mapping.
              </li>
              <li className="flex items-center gap-3 text-sm text-black">
                <Shield className="w-4 h-4 text-amber-500" /> Predict timeline risks based on agency backlogs.
              </li>
            </ul>
          </div>
          
          <div className="relative aspect-[4/3] bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center p-8 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent pointer-events-none" />
            
            {/* Mockup Grid */}
            <div className="w-full grid grid-cols-2 gap-4">
              {['FCC', 'FAA', 'NOAA', 'ITU'].map((agency, i) => (
                <div key={agency} className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col gap-3 shadow-sm transition-colors hover:border-amber-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-gray-500">{agency}</span>
                    <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
                  </div>
                  <div className="text-lg text-black font-medium">{i % 2 === 0 ? 'Cleared' : 'Pending Review'}</div>
                  <div className="text-xs text-gray-500">Target: Q{i + 1} 2027</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
