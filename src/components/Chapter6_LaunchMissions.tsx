"use client";

import { motion } from "framer-motion";
import { Rocket, CheckCircle2, AlertTriangle, Play } from "lucide-react";

export default function Chapter6_LaunchMissions() {
  return (
    <section className="relative w-full bg-gray-50 border-t border-gray-200 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-vesper-accent/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 w-full py-24 md:py-32 border-x border-gray-200 relative z-10">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-3xl">
            <div className="text-xs font-mono tracking-widest text-vesper-accent mb-6 uppercase">
              Phase 3 / Launch
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-black tracking-tight leading-[1.1]">
              Achieve absolute launch readiness.
            </h2>
            <p className="mt-6 text-xl text-gray-500 max-w-2xl leading-relaxed font-sans">
              No more guessing if you have the green light. Vesper synthesizes every regulatory approval and engineering milestone into a definitive launch readiness score.
            </p>
          </div>
        </div>

        {/* Massive Full-Width Dashboard Teaser */}
        <div className="w-full relative aspect-[16/9] md:aspect-[21/9] bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col shadow-xl">
          
          {/* Header */}
          <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-gray-50/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
                <Rocket size={16} className="text-white" />
              </div>
              <span className="font-medium text-gray-900 tracking-wide text-sm">Polaris Dawn — Launch Readiness Overview</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono text-emerald-500">Live Sync</span>
              </div>
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col gap-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-vesper-accent/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full z-10">
              
              {/* Massive Score Gauge */}
              <div className="md:col-span-1 bg-white border border-gray-100 shadow-sm rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
                <h3 className="text-sm font-medium text-gray-500 absolute top-6 left-6">Readiness Score</h3>
                
                <div className="relative w-48 h-48 mt-8">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-100" />
                    <motion.circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                      strokeDasharray="283"
                      initial={{ strokeDashoffset: 283 }}
                      whileInView={{ strokeDashoffset: 28 }} // ~90%
                      transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                      className="text-vesper-accent" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-medium text-black">92<span className="text-2xl text-gray-400">%</span></span>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  <span className="text-xs font-medium text-emerald-700">Cleared for Final Review</span>
                </div>
              </div>

              {/* Action Items & Critical Path */}
              <div className="md:col-span-2 flex flex-col gap-6">
                
                <div className="grid grid-cols-2 gap-6">
                   <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 flex flex-col justify-between">
                     <h3 className="text-sm font-medium text-gray-500 mb-4">Launch Window</h3>
                     <div className="text-2xl font-medium text-gray-900 mb-1">Nov 12 - Nov 18</div>
                     <div className="text-xs text-vesper-accent">Cape Canaveral, FL</div>
                   </div>
                   <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 flex flex-col justify-between">
                     <h3 className="text-sm font-medium text-gray-500 mb-4">Remaining Blockers</h3>
                     <div className="text-2xl font-medium text-gray-900 mb-1">2 <span className="text-lg text-gray-400 font-normal">Pending</span></div>
                     <div className="text-xs text-amber-600 flex items-center gap-1"><AlertTriangle size={12}/> Needs Engineering Sign-off</div>
                   </div>
                </div>

                <div className="flex-1 bg-white border border-gray-100 shadow-sm rounded-xl p-6 flex flex-col overflow-hidden">
                   <h3 className="text-sm font-medium text-gray-500 mb-6">Final Sign-off Sequence</h3>
                   <div className="flex-1 flex flex-col gap-4">
                     {[
                       { task: "FAA Launch Operator License Issued", status: "complete" },
                       { task: "FCC Frequency Grant Received", status: "complete" },
                       { task: "Payload Integration Review", status: "pending" },
                       { task: "Flight Readiness Review (FRR)", status: "upcoming" }
                     ].map((item, i) => (
                       <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                         <div className="flex items-center gap-4">
                           <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.status === 'complete' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : item.status === 'pending' ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'bg-gray-50 text-gray-400 border border-gray-200'}`}>
                             {item.status === 'complete' ? <CheckCircle2 size={12} /> : item.status === 'pending' ? <Play size={12} className="ml-0.5" /> : <div className="w-1.5 h-1.5 rounded-full bg-current" />}
                           </div>
                           <span className={`text-sm ${item.status === 'upcoming' ? 'text-gray-400' : 'text-gray-900'}`}>{item.task}</span>
                         </div>
                         <div className="text-xs font-mono text-gray-500">
                           {item.status === 'complete' ? '100%' : item.status === 'pending' ? 'In Progress' : 'Locked'}
                         </div>
                       </div>
                     ))}
                   </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
