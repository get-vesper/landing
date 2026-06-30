"use client";

import { motion } from "framer-motion";

const ecosystem1 = ["Jira", "Linear", "GitHub", "Slack", "Notion", "Asana", "Salesforce", "PLM Systems"];
const ecosystem2 = ["FCC Databases", "ITU Filings", "NOAA", "FAA", "DoD", "ESA", "NASA", "Space Force"];

export default function Chapter6_Ecosystem() {
  return (
    <section className="py-32 md:py-48 relative border-t border-vesper-border bg-vesper-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Typography */}
        <div className="w-full md:w-1/2 flex flex-col items-start z-10">
          <div className="text-xs font-mono tracking-widest text-vesper-accent mb-8 uppercase">
            04 / The Ecosystem
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-8 text-vesper-text tracking-tight leading-[1.1]">
            Connects to your <br className="hidden lg:block" />
            ecosystem.
          </h2>
          
          <p className="text-lg text-vesper-text-muted font-normal leading-relaxed max-w-lg">
            Vesper connects separated engineering, business, and legal teams, ensuring your entire company operates from a single source of truth without leaving their existing tools.
          </p>
        </div>

        {/* Right Side: Vertical Tickers */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative flex justify-center gap-6 overflow-hidden mask-vertical-fades">
          {/* Top/Bottom gradient masks to make tickers fade out */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-vesper-base to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-vesper-base to-transparent z-10 pointer-events-none" />

          {/* Ticker 1 (Scrolling Up) */}
          <div className="w-48 relative flex flex-col overflow-hidden">
            <motion.div
              className="flex flex-col gap-6 w-full"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...ecosystem1, ...ecosystem1].map((item, i) => (
                <div key={`col1-${i}`} className="h-24 border border-vesper-border bg-vesper-surface flex items-center justify-center p-4">
                  <span className="font-display font-medium text-vesper-text text-lg tracking-tight">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Ticker 2 (Scrolling Down) */}
          <div className="w-48 relative flex flex-col overflow-hidden mt-12">
            <motion.div
              className="flex flex-col gap-6 w-full"
              animate={{ y: ["-50%", "0%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...ecosystem2, ...ecosystem2].map((item, i) => (
                <div key={`col2-${i}`} className="h-24 border border-vesper-border bg-vesper-surface flex items-center justify-center p-4">
                  <span className="font-display font-medium text-vesper-text text-lg tracking-tight text-center">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
