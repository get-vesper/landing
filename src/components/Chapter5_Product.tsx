"use client";

import { motion } from "framer-motion";

export default function Chapter5_Product() {
  return (
    <section className="py-32 md:py-48 relative bg-vesper-base border-t border-vesper-border">
      <div className="max-w-7xl mx-auto px-8 w-full">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono tracking-widest text-vesper-accent mb-12 uppercase">
              04 / Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-vesper-text tracking-tight leading-[1.1]">
              How Vesper operates.
            </h2>
          </div>
          <p className="text-xs text-vesper-text-muted font-mono uppercase tracking-widest max-w-xs md:text-right hidden md:block">
            System Capabilities & Operational Mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-vesper-border">
          {/* Capability 1 */}
          <div className="bg-vesper-base p-10 md:p-16 flex flex-col justify-between group">
            <div className="w-12 h-12 border border-vesper-text flex items-center justify-center mb-24 transition-transform group-hover:scale-105">
              <div className="w-4 h-4 bg-vesper-text" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-medium text-vesper-text mb-4">Understands Missions</h3>
              <p className="text-base text-vesper-text-muted font-normal leading-relaxed">
                Ingests raw technical parameters from your engineering stack and parses them into a structured operational model. It knows what you are flying and where.
              </p>
            </div>
          </div>

          {/* Capability 2 */}
          <div className="bg-vesper-base p-10 md:p-16 flex flex-col justify-between group">
            <div className="w-12 h-12 border border-vesper-text flex flex-wrap items-center justify-center gap-1 p-2 mb-24 transition-transform group-hover:scale-105">
              <div className="w-2.5 h-2.5 bg-vesper-text" />
              <div className="w-2.5 h-2.5 bg-vesper-accent" />
              <div className="w-2.5 h-2.5 border border-vesper-text" />
              <div className="w-2.5 h-2.5 bg-vesper-text" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-medium text-vesper-text mb-4">Coordinates Teams</h3>
              <p className="text-base text-vesper-text-muted font-normal leading-relaxed">
                Provides a single cryptographic source of truth. When an engineer updates a frequency allocation, the legal team's filing drafts update automatically.
              </p>
            </div>
          </div>

          {/* Capability 3 */}
          <div className="bg-vesper-base p-10 md:p-16 flex flex-col justify-between group">
            <div className="w-12 h-12 border border-vesper-text flex items-center justify-center mb-24 transition-transform group-hover:scale-105">
              <div className="w-6 h-6 border-[1.5px] border-vesper-text rounded-full" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-medium text-vesper-text mb-4">Organizes Regulatory Work</h3>
              <p className="text-base text-vesper-text-muted font-normal leading-relaxed">
                Translates mission parameters into precise regulatory requirements for the FCC, ITU, and NOAA, generating workflows dynamically based on mission constraints.
              </p>
            </div>
          </div>

          {/* Capability 4 */}
          <div className="bg-vesper-base p-10 md:p-16 flex flex-col justify-between group">
            <div className="w-12 h-12 border border-vesper-text flex items-center justify-center mb-24 relative overflow-hidden transition-transform group-hover:scale-105">
              <motion.div 
                className="absolute inset-0 bg-vesper-text"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-display font-medium text-vesper-text mb-4">Moves Toward Autonomy</h3>
              <p className="text-base text-vesper-text-muted font-normal leading-relaxed">
                Reduces manual translation and tracking. By treating compliance as deterministic code, Vesper paves the way for autonomous filing and licensing.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
