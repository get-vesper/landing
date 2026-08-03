"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "Does Vesper handle ITAR and export-controlled data?",
    answer: "Yes. Vesper can be deployed in isolated GovCloud environments. We implement advanced role-based access controls (RBAC) and data residency options to ensure that all export-controlled technical data remains strictly within authorized boundaries and complies fully with ITAR and EAR regulations."
  },
  {
    question: "How long does it take to onboard a new mission?",
    answer: "Unlike traditional consulting processes that take months, Vesper's intelligence engine generates a complete regulatory roadmap for a new mission within minutes of inputting your orbital parameters. Full engineering tool integration and team onboarding typically take less than 48 hours."
  },
  {
    question: "Which regulatory agencies does Vesper support?",
    answer: "Vesper currently supports automated workflows and intelligence for the FCC (Federal Communications Commission), FAA (Federal Aviation Administration), NOAA (National Oceanic and Atmospheric Administration), and the ITU (International Telecommunication Union). We continuously update our intelligence engine as regulations change."
  },
  {
    question: "Can Vesper integrate with our existing PLM or Jira setup?",
    answer: "Yes. Vesper provides native integrations with Jira, Confluence, Slack, Microsoft Teams, and standard Product Lifecycle Management (PLM) systems. Our API allows you to map compliance tasks directly to your engineering tickets, ensuring compliance is tracked without disrupting your engineers' workflows."
  },
  {
    question: "Is Vesper a replacement for internal legal counsel?",
    answer: "No. Vesper is an infrastructure tool that augments your legal and regulatory teams. It automates the tedious processes of project management, document aggregation, and deadline tracking, freeing up your counsel to focus on strategic regulatory negotiations and complex legal analysis rather than chasing spreadsheets."
  }
];

export default function Chapter8_FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-gray-50 border-t border-gray-200 border-b">
      <div className="max-w-7xl mx-auto px-8 w-full py-24 md:py-32 border-x border-gray-200">
        <div className="max-w-4xl mx-auto w-full">
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-black tracking-tight mb-4 text-center">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-black pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`text-gray-600 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
}
