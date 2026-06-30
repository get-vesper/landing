"use client";

import { motion } from "framer-motion";

export default function Chapter2_Problem() {
  return (
    <section className="py-32 md:py-48 relative bg-vesper-base">
      <div className="max-w-7xl mx-auto px-8 w-full">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-vesper-text tracking-tight leading-[1.1]">
            Aerospace compliance fails in the gaps. <br className="hidden md:block" /> We built Vesper to close them.
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: The Disconnect */}
          <div className="flex flex-col gap-6 group">
            <div className="h-[360px] md:h-[420px] rounded-sm bg-[#EEF2F6] overflow-hidden relative flex items-center justify-center p-6">
              {/* Animation Graphic: Disconnected Systems UI */}
              <motion.div 
                className="w-full max-w-[280px] bg-white rounded shadow-sm border border-black/5 overflow-hidden flex flex-col"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="p-3 border-b border-black/5 flex items-center justify-between bg-[#F8FAFC]">
                  <span className="text-[11px] font-medium text-vesper-text">Mission Alpha</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                  </div>
                </div>
                <div className="p-3 border-b border-black/5 flex items-center gap-4 bg-white">
                  <span className="text-[10px] font-medium text-vesper-text">Requirements <span className="text-gray-400 font-normal ml-1">13</span></span>
                </div>
                <div className="flex flex-col p-2 gap-0.5 relative bg-white">
                   {/* Rows */}
                   {[
                     { id: "REQ-001", text: "FCC Form 312 Setup", status: "Done", delay: 0 },
                     { id: "REQ-002", text: "Antenna Specs (Legacy)", status: "Missing", delay: 0.1 },
                     { id: "REQ-003", text: "Orbital Debris Report", status: "Pending", delay: 0.2 },
                     { id: "REQ-004", text: "ITU Coordination", status: "Done", delay: 0.3 },
                     { id: "REQ-005", text: "Launch Provider Sync", status: "Missing", delay: 0.4 },
                     { id: "REQ-006", text: "Spectrum Allocation", status: "Done", delay: 0.5 },
                   ].map((row, i) => (
                     <motion.div 
                       key={i} 
                       className="flex items-center gap-3 p-2 rounded-sm hover:bg-gray-50 z-10 transition-colors"
                       initial={{ opacity: 0, x: -5 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.4, delay: 0.2 + row.delay }}
                       viewport={{ once: true }}
                     >
                        <span className="text-[9px] text-gray-400 font-mono w-10 flex-shrink-0">{row.id}</span>
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${row.status === 'Done' ? 'bg-gray-200' : row.status === 'Missing' ? 'bg-red-400' : 'bg-gray-200'}`} />
                        <span className="text-[10px] text-gray-600 truncate flex-1">{row.text}</span>
                        {row.status === 'Missing' && (
                          <span className="text-[8px] text-red-600 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded flex-shrink-0">Missing Data</span>
                        )}
                     </motion.div>
                   ))}
                </div>
              </motion.div>
            </div>
            <div className="pr-8">
              <h3 className="text-lg font-display font-medium text-vesper-text mb-2">The Disconnect.</h3>
              <p className="text-sm text-vesper-text-muted font-normal leading-relaxed">
                Engineering builds the mission. Legal manages the filings. Because these teams exist in separate systems, critical information is lost in translation, creating massive operational risk.
              </p>
            </div>
          </div>

          {/* Card 2: The Overhead */}
          <div className="flex flex-col gap-6 group">
            <div className="h-[360px] md:h-[420px] rounded-sm bg-[#F3F5F2] overflow-hidden relative flex flex-col items-center justify-center p-6">
              {/* Animation Graphic: Manual tasks drifting */}
              <div className="w-full flex flex-col items-start gap-4 max-w-[260px] relative">
                <div className="absolute left-3 top-0 bottom-0 w-px bg-green-900/5 dashed-line" />
                {[
                  { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "Extracting parameters from PDFs", color: "text-emerald-600/70" },
                  { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "Emailing engineering for specs", color: "text-blue-600/70" },
                  { icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z", text: "Updating master spreadsheets", color: "text-green-600/70" },
                  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Chasing impending deadlines", color: "text-orange-600/70" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center gap-4 relative z-10"
                    initial={{ opacity: 0.2, y: 15 }}
                    animate={{ opacity: [0.2, 0.8, 0.2], y: [15, 0, -15] }}
                    transition={{ duration: 5, repeat: Infinity, delay: i * 1.2, ease: "easeInOut" }}
                  >
                    <div className="w-6 h-6 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded shadow-sm border border-black/5 flex-shrink-0">
                      <svg className={`w-3 h-3 ${item.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-[11px] font-medium text-gray-500/80">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="pr-8">
              <h3 className="text-lg font-display font-medium text-vesper-text mb-2">The Overhead.</h3>
              <p className="text-sm text-vesper-text-muted font-normal leading-relaxed">
                Relying on manual spreadsheets and disconnected PDFs means tedious data entry. This busywork adds unnecessary mission overhead and drastically delays planning.
              </p>
            </div>
          </div>

          {/* Card 3: The Cost */}
          <div className="flex flex-col gap-6 group">
            <div className="h-[360px] md:h-[420px] rounded-sm bg-[#F8F6F0] overflow-hidden relative flex items-center justify-center p-6">
              {/* Animation Graphic: Stacked Cards */}
              <div className="relative w-56 h-40">
                {[
                  { title: "Spectrum Strategy", status: "Resolved", delay: 0 },
                  { title: "ITU Coordination", status: "In Progress", delay: 1 },
                  { title: "Launch Clearance", status: "At Risk", delay: 2 },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-x-0 bottom-0 bg-[#FDFCFB] rounded shadow-sm border border-black/5 flex flex-col justify-between p-4 h-28"
                    initial={{ y: (2 - i) * 12, scale: 1 - (2 - i) * 0.06, opacity: i === 2 ? 1 : 0.6 }}
                    animate={i === 2 ? {
                      y: [0, -6, 0],
                    } : {}}
                    transition={i === 2 ? {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    } : {}}
                    style={{ zIndex: i }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-gray-100/80 text-gray-500 uppercase tracking-wider">Milestone</div>
                      {card.status === 'At Risk' ? (
                        <motion.div 
                          className="px-2 py-0.5 rounded-full bg-orange-100 text-[9px] font-medium text-orange-700 flex items-center gap-1.5"
                          animate={{ opacity: [1, 0.7, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                          At Risk
                        </motion.div>
                      ) : (
                        <div className="text-[9px] font-medium text-gray-400">{card.status}</div>
                      )}
                    </div>
                    <div className="text-[13px] font-medium text-vesper-text">{card.title}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="pr-8">
              <h3 className="text-lg font-display font-medium text-vesper-text mb-2">The Cost.</h3>
              <p className="text-sm text-vesper-text-muted font-normal leading-relaxed">
                Managing regulatory chaos forces companies to rely on expensive space lawyers, consultants, and massive internal compliance teams just to keep up.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
