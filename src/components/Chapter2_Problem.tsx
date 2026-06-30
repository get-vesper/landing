"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// --- Card 1: Fragmentation ---
function FragmentationAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const runSequence = (currentStep: number) => {
      let delay = 1000;
      if (currentStep === 0) delay = 1000; // Legal requests
      if (currentStep === 1) delay = 1000; // Moving to Eng
      if (currentStep === 2) delay = 800; // Ops waiting / Eng processing
      if (currentStep === 3) delay = 1000; // Moving to Legal
      if (currentStep === 4) delay = 2000; // Attached, waiting to reset
      
      timeoutId = setTimeout(() => {
        setStep((prev) => (prev >= 4 ? 0 : prev + 1));
      }, delay);
    };

    runSequence(step);
    return () => clearTimeout(timeoutId);
  }, [step]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 relative">
      {/* Container */}
      <div className="w-full max-w-[280px] h-[280px] relative">
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <path d="M 140 60 L 140 140" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" fill="none" />
          <path d="M 140 140 L 140 220" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" fill="none" />
        </svg>

        {/* Legal Panel (Top) */}
        <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-200 rounded shadow-sm p-3 z-10">
          <div className="text-[10px] font-mono text-gray-400 mb-1">Legal</div>
          <div className="text-xs font-medium text-gray-800">
            {step >= 4 ? "FCC Filing Complete" : "Preparing FCC Filing"}
          </div>
          <AnimatePresence mode="popLayout">
            {(step === 1 || step === 2 || step === 3) && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="mt-2 p-1.5 bg-blue-50 border border-blue-100 rounded text-[10px] text-blue-700"
              >
                Request: Updated frequency plan
              </motion.div>
            )}
            {step >= 4 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="mt-2 flex items-center gap-1.5 text-[10px] text-green-700 bg-green-50 p-1.5 rounded border border-green-100"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                freq_plan_rev7.pdf attached
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mission Ops Panel (Middle) */}
        <motion.div className="absolute top-[110px] left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-200 rounded shadow-sm p-3 z-10">
          <div className="text-[10px] font-mono text-gray-400 mb-1">Mission Operations</div>
          <div className={`text-xs font-medium transition-colors ${step === 2 || step === 3 ? 'text-orange-600' : step >= 4 ? 'text-green-600' : 'text-gray-800'}`}>
            {step === 0 || step === 1 ? "Awaiting filing..." : 
             step === 2 || step === 3 ? "Waiting on Engineering..." : 
             "Ready"}
          </div>
        </motion.div>

        {/* Engineering Panel (Bottom) */}
        <motion.div className="absolute top-[220px] left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-200 rounded shadow-sm p-3 z-10">
          <div className="text-[10px] font-mono text-gray-400 mb-1">Engineering</div>
          <div className="text-xs font-medium text-gray-800">
            {step < 3 ? "Finalizing payload specs" : "Documents Uploaded"}
          </div>
          <AnimatePresence mode="popLayout">
            {(step === 3 || step === 4) && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-2 p-1.5 bg-gray-50 border border-gray-200 rounded text-[10px] text-gray-600 flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                freq_plan_rev7.pdf
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Animated Cursor */}
        <AnimatePresence>
          {(step > 0 && step < 4) && (
            <motion.div 
              initial={{ top: 70, left: '50%', opacity: 0 }}
              animate={
                step === 1 ? { top: 210, left: '60%', opacity: 1 } :
                step === 2 ? { top: 220, left: '65%', opacity: 1 } :
                step === 3 ? { top: 80, left: '55%', opacity: 1 } : 
                { opacity: 0 }
              }
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-5 h-5 z-20 pointer-events-none drop-shadow-md -translate-x-1/2 -translate-y-1/2"
            >
              {/* Green cursor like the image */}
              <svg viewBox="0 0 24 24" fill="#D3E0AC" stroke="#B0C27D" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.42c.45 0 .67-.54.35-.85L5.5 3.21Z"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </div>
  );
}

// --- Card 2: Overhead ---
function OverheadAnimation() {
  const [devTime, setDevTime] = useState(127);
  const [overhead, setOverhead] = useState(384);
  const [tasks, setTasks] = useState<{id: number, text: string}[]>([]);
  const [taskIdCounter, setTaskIdCounter] = useState(0);
  const [resetting, setResetting] = useState(false);

  const TASK_LIST = [
    "Need to check FCC filing",
    "Need to complete antenna spec",
    "Need to verify frequency",
    "Need to build compliance matrix",
    "Need to review payload ICD",
    "Need to update timeline"
  ];

  useEffect(() => {
    if (resetting) return;
    
    const interval = setInterval(() => {
      setTaskIdCounter(p => {
        const nextId = p + 1;
        
        // When we reach max tasks, trigger a smooth reset
        if (nextId > TASK_LIST.length) {
          setResetting(true);
          setTimeout(() => {
            setTasks([]);
            setTaskIdCounter(0);
            setDevTime(127);
            setOverhead(384);
            setResetting(false);
          }, 600); // Wait for exit animation
          return p;
        }

        setDevTime(prev => prev + 2);
        setOverhead(prev => prev + 12);

        setTasks(current => {
          const newTasks = [...current, { id: nextId, text: TASK_LIST[(nextId - 1) % TASK_LIST.length] }];
          return newTasks;
        });
        
        return nextId;
      });
    }, 900);
    return () => clearInterval(interval);
  }, [resetting]);

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="w-full max-w-[320px] flex gap-4 h-[240px]">
        {/* Task List */}
        <div className="flex-1 flex flex-col gap-2 overflow-hidden relative border-r border-gray-200/50 pr-4">
          <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2">Compliance Tasks</div>
          <div className="flex flex-col gap-2">
            <AnimatePresence>
              {tasks.map(task => (
                <motion.div 
                  key={task.id}
                  initial={{ opacity: 0, x: -10, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, x: 0, height: 'auto', marginBottom: 8 }}
                  exit={{ opacity: 0, x: 10, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs p-2 rounded border bg-orange-50 border-orange-200 text-orange-800 flex items-center justify-between shadow-sm overflow-hidden"
                >
                  <span className="truncate pr-2">{task.text}</span>
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Metrics */}
        <div className="w-32 flex flex-col gap-6 pt-6">
          <motion.div layout>
            <div className="text-[10px] text-gray-500 mb-1">Mission Dev Time</div>
            <div className="text-xl font-display text-gray-900">{devTime} <span className="text-xs text-gray-400">Days</span></div>
          </motion.div>
          <motion.div layout>
            <div className="text-[10px] text-orange-600 font-medium mb-1 transition-colors">Compliance Overhead</div>
            <div className="text-xl font-display text-orange-600 transition-colors">{overhead} <span className="text-xs text-gray-400">Hours</span></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// --- Card 3: Cost Risk ---
function CostRiskAnimation() {
  const [phase, setPhase] = useState(0); 
  // 0: Healthy, 1: Missing diagram, 2: Delayed and costs rise, 3: Resetting
  const [cost, setCost] = useState(84000);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let costInterval: NodeJS.Timeout;
    
    if (phase === 0) {
      timer = setTimeout(() => setPhase(1), 1500); // Warning appears
    } else if (phase === 1) {
      timer = setTimeout(() => setPhase(2), 1500); // Slide to right and cost goes up
    } else if (phase === 2) {
      costInterval = setInterval(() => setCost(c => c + 3500), 100); // Cost increases fast
      timer = setTimeout(() => setPhase(3), 2000); // Start reset
    } else if (phase === 3) {
      timer = setTimeout(() => {
        setCost(84000);
        setPhase(0);
      }, 500); // Smooth reset time
    }

    return () => { clearTimeout(timer); clearInterval(costInterval); };
  }, [phase]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 relative">
      <div className="w-full max-w-[320px] flex flex-col gap-8">
        
        {/* Top Display */}
        <div className="flex justify-between items-start h-12">
          <div>
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">Upcoming Milestone</div>
            <div className="text-sm font-medium text-gray-800">FCC Submission</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative h-20">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 w-full flex justify-between -translate-y-1/2 px-2">
            
            {/* Eng */}
            <div className="flex flex-col items-center gap-2 relative">
              <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-white z-10" />
              <span className="text-[9px] text-gray-400 absolute top-4">Eng</span>
            </div>
            
            {/* Comp */}
            <div className="flex flex-col items-center gap-2 relative">
              <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-white z-10" />
              <span className="text-[9px] text-gray-400 absolute top-4">Review</span>
            </div>
            
            {/* Reg */}
            <div className="flex flex-col items-center gap-2 relative">
              <div className={`w-3 h-3 rounded-full border-2 border-white z-10 transition-colors duration-300 ${phase > 0 && phase < 3 ? 'bg-red-500' : 'bg-gray-800'}`} />
              <span className="text-[9px] text-gray-800 font-medium absolute top-4">Submit</span>
              
              <AnimatePresence>
                {(phase === 1 || phase === 2) && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-6 whitespace-nowrap bg-red-50 text-red-600 text-[10px] px-2 py-1 rounded border border-red-200 shadow-sm z-20"
                  >
                    Missing Antenna Diagram
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Launch */}
            <motion.div 
              className="flex flex-col items-center gap-2 relative"
              animate={phase === 2 ? { x: 35 } : { x: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              <div className={`w-3 h-3 rounded-full border-2 border-white z-10 transition-colors duration-300 ${phase === 2 ? 'bg-orange-400' : 'bg-gray-300'}`} />
              <span className="text-[9px] text-gray-500 absolute top-4">Launch</span>
              <AnimatePresence>
                {phase === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-8 whitespace-nowrap text-[9px] text-orange-600 font-medium bg-orange-50 px-1 rounded"
                  >
                    Delayed +21 Days
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="flex justify-between items-end border-t border-gray-200/50 pt-4">
          <div>
            <div className="text-[10px] text-gray-500 mb-1">Mission Risk</div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={phase === 2 ? 'elevated' : 'nominal'}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className={`text-xs font-medium px-2 py-0.5 rounded-sm inline-flex ${phase === 2 ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}
              >
                {phase === 2 ? 'Elevated' : 'Nominal'}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-gray-500 mb-1">Legal Costs</div>
            <div className={`text-lg font-mono transition-colors duration-300 ${phase === 2 ? 'text-red-600 font-medium' : 'text-gray-800'}`}>
              ${cost.toLocaleString()}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Chapter2_Problem() {
  return (
    <section className="py-32 md:py-48 relative bg-vesper-base border-t border-vesper-border/50">
      <div className="max-w-7xl mx-auto px-8 w-full">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-12 max-w-4xl">
          <div className="text-xs font-mono tracking-widest text-vesper-text-muted uppercase mb-8">
            01 / The Problem
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-vesper-text tracking-tight leading-[1.1]">
            Traditional aerospace compliance is broken.
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: The Disconnect */}
          <div className="flex flex-col gap-6 group">
            <div className="h-[380px] md:h-[440px] rounded-sm bg-[#EEF2F6] overflow-hidden relative flex items-center justify-center border border-black/5">
              <FragmentationAnimation />
            </div>
            <div className="pr-8">
              <h3 className="text-lg font-display font-medium text-vesper-text mb-2">Mission information is fragmented.</h3>
              <p className="text-sm text-vesper-text-muted font-normal leading-relaxed">
                Engineering builds the mission. Legal manages the filings. Because these teams exist in separate systems, critical information is lost in translation, creating massive operational risk.
              </p>
            </div>
          </div>

          {/* Card 2: The Overhead */}
          <div className="flex flex-col gap-6 group">
            <div className="h-[380px] md:h-[440px] rounded-sm bg-[#F3F5F2] overflow-hidden relative flex items-center justify-center border border-black/5">
              <OverheadAnimation />
            </div>
            <div className="pr-8">
              <h3 className="text-lg font-display font-medium text-vesper-text mb-2">Manual compliance creates operational overhead.</h3>
              <p className="text-sm text-vesper-text-muted font-normal leading-relaxed">
                Relying on manual spreadsheets and disconnected PDFs means tedious data entry. This busywork adds unnecessary mission overhead and drastically delays planning.
              </p>
            </div>
          </div>

          {/* Card 3: The Cost */}
          <div className="flex flex-col gap-6 group">
            <div className="h-[380px] md:h-[440px] rounded-sm bg-[#F8F6F0] overflow-hidden relative flex items-center justify-center border border-black/5">
              <CostRiskAnimation />
            </div>
            <div className="pr-8">
              <h3 className="text-lg font-display font-medium text-vesper-text mb-2">One missed deadline delays everything.</h3>
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
