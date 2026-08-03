"use client";

import { ShieldCheck, Lock, Network, History, Database, Key } from "lucide-react";

export default function Chapter7_Enterprise() {
  return (
    <section className="relative w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 w-full py-24 md:py-32 border-x border-gray-200">
        
        <div className="mb-20 max-w-3xl">
          <div className="text-xs font-mono tracking-widest text-vesper-accent mb-6 uppercase">
            Enterprise Infrastructure
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-black tracking-tight mb-6">
            Built for mission-critical security.
          </h2>
          <p className="text-lg text-gray-600">
            Vesper provides the security, governance, and integrations required by the world's most demanding aerospace organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center bg-gray-50">
              <ShieldCheck size={20} className="text-black" />
            </div>
            <h3 className="text-xl font-medium text-black">SOC 2 Type II Certified</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our infrastructure and practices are independently audited to ensure the highest levels of security, availability, and confidentiality for your mission data.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center bg-gray-50">
              <Lock size={20} className="text-black" />
            </div>
            <h3 className="text-xl font-medium text-black">ITAR & EAR Aware</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Deploy in isolated GovCloud environments. Advanced access controls ensure export-controlled technical data remains strictly within authorized boundaries.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center bg-gray-50">
              <Key size={20} className="text-black" />
            </div>
            <h3 className="text-xl font-medium text-black">SSO & RBAC</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Integrate with Okta, Azure AD, or Google Workspace. Enforce granular Role-Based Access Control down to the specific document or mission phase.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center bg-gray-50">
              <History size={20} className="text-black" />
            </div>
            <h3 className="text-xl font-medium text-black">Immutable Audit Trails</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every action, approval, and document upload is cryptographically logged. Generate comprehensive compliance reports for internal or external auditors in seconds.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center bg-gray-50">
              <Database size={20} className="text-black" />
            </div>
            <h3 className="text-xl font-medium text-black">Data Residency</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Choose exactly where your data lives. Vesper supports strict data residency requirements across multiple global regions to comply with local laws.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center bg-gray-50">
              <Network size={20} className="text-black" />
            </div>
            <h3 className="text-xl font-medium text-black">Engineering Integrations</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Seamlessly sync with your existing stack. Vesper integrates natively with Jira, Confluence, Slack, Teams, and standard PLM systems via our secure API.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
