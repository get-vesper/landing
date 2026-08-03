"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronRight } from "lucide-react";

const BENTO_DATA = [
  {
    id: "workflow",
    title: "Regulatory Workflow Automation",
    description: "Automate repetitive compliance tasks, approvals, reminders, and document requests.",
    longDescription: "Vesper's workflow engine replaces manual email chains and spreadsheets. It automatically generates tasks based on the required regulatory pathway, assigns them to the correct engineering or legal stakeholders, and tracks completion. Escalations and reminders are handled automatically.",
    colorClass: "bg-vesper-accent/10 group-hover:bg-vesper-accent/20",
    gradient: "from-vesper-accent/20 to-transparent",
    colSpan: "md:col-span-8",
  },
  {
    id: "docs",
    title: "Engineering Document Aggregation",
    description: "Collect and organize technical documentation from across the engineering organization.",
    longDescription: "Connect directly to your engineering tools or allow drag-and-drop uploads. Vesper acts as the single source of truth for all mission-critical documentation, automatically versioning and linking docs to specific regulatory requirements.",
    colorClass: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    gradient: "from-emerald-500/20 to-transparent",
    colSpan: "md:col-span-4",
  },
  {
    id: "workspaces",
    title: "Mission Workspaces",
    description: "Dedicated workspaces containing roadmaps, tasks, documents, and timelines.",
    longDescription: "Keep every mission isolated and organized. Each workspace serves as a dedicated command center for a specific launch or deployment, ensuring that requirements for one mission never get conflated with another.",
    colorClass: "bg-blue-500/10 group-hover:bg-blue-500/20",
    gradient: "from-blue-500/20 to-transparent",
    colSpan: "md:col-span-4",
  },
  {
    id: "dependency",
    title: "Dependency Tracking",
    description: "Monitor regulatory milestones and identify risks before they delay a mission.",
    longDescription: "Vesper understands that an FAA license might depend on an FCC grant. The platform visually maps these dependencies and automatically flags critical path risks, allowing you to reallocate resources before a launch is delayed.",
    colorClass: "bg-amber-500/10 group-hover:bg-amber-500/20",
    gradient: "from-amber-500/20 to-transparent",
    colSpan: "md:col-span-4",
  },
  {
    id: "collab",
    title: "Cross-Team Collaboration",
    description: "Coordinate engineering, legal, mission operations, and leadership in one workspace.",
    longDescription: "Break down silos between technical and regulatory teams. Engineering can upload specs, legal can review and approve, and leadership can monitor overall progress without ever leaving the Vesper platform.",
    colorClass: "bg-purple-500/10 group-hover:bg-purple-500/20",
    gradient: "from-purple-500/20 to-transparent",
    colSpan: "md:col-span-8",
  }
];

export default function Chapter5_CoordinateMissions() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = BENTO_DATA.find(item => item.id === selectedId);

  return (
    <section className="relative w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 w-full py-24 md:py-32 border-x border-gray-200">
        
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono tracking-widest text-vesper-accent mb-6 uppercase">
              Phase 2 / Coordinate
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-black tracking-tight leading-[1.1]">
              Execute compliance flawlessly.
            </h2>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {BENTO_DATA.map((item) => (
            <motion.div 
              layoutId={`card-${item.id}`}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`${item.colSpan} bg-gray-50 border border-gray-100 p-10 md:p-16 flex flex-col justify-between group overflow-hidden relative min-h-[400px] cursor-pointer rounded-xl`}
            >
              <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 transition-all duration-1000 group-hover:scale-150 ${item.colorClass}`} />
              
              <div className="relative z-10 flex-1 flex flex-col justify-end">
                <h3 className="text-3xl font-serif text-black mb-4 transition-colors">{item.title}</h3>
                <p className="text-lg text-gray-600 font-normal leading-relaxed max-w-xl">
                  {item.description}
                </p>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-sm font-medium text-black">
                  Learn more <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-[#000]/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              layoutId={`card-${selectedItem.id}`}
              className="relative w-full max-w-5xl bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Abstract Visual Side */}
              <div className={`w-full md:w-1/2 p-12 flex items-center justify-center bg-gradient-to-br ${selectedItem.gradient} relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-white/40 backdrop-blur-md mix-blend-overlay opacity-50" />
                 <div className="w-full aspect-square border border-gray-200 rounded-xl bg-white shadow-lg relative z-10" />
              </div>
              
              {/* Content Side */}
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-between overflow-y-auto">
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-900 z-20"
                >
                  <X size={20} />
                </button>
                
                <div>
                  <h3 className="text-3xl font-serif text-black mb-6">{selectedItem.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {selectedItem.longDescription}
                  </p>
                  
                  <ul className="space-y-4 mb-12">
                    {[1, 2, 3].map(i => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-vesper-text" />
                        </div>
                        <span className="text-sm text-black">Deep integration capability detail {i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="px-6 py-3 w-full sm:w-auto bg-vesper-text text-white text-sm font-medium hover:bg-gray-800 transition-colors rounded-none flex items-center justify-center gap-2">
                  Book a Demo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
