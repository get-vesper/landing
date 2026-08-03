"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Layers className="w-5 h-5 text-gray-900 transition-transform group-hover:scale-105" />
          <span className="font-sans font-semibold text-xl tracking-tight text-gray-900">Vesper</span>
        </Link>
        
        <div className="flex items-center gap-8">
          
          <div className="relative group hidden md:block">
            <button className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors flex items-center gap-1">
              Product
              <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="w-48 bg-white border border-gray-100 shadow-sm rounded flex flex-col p-2">
                <Link href="#" className="text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded">Overview</Link>
                <Link href="#" className="text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded">Features</Link>
                <Link href="#" className="text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded">Integrations</Link>
              </div>
            </div>
          </div>

          <div className="relative group hidden md:block">
            <button className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors flex items-center gap-1">
              Resources
              <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="w-48 bg-white border border-gray-100 shadow-sm rounded flex flex-col p-2">
                <Link href="#" className="text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded">Documentation</Link>
                <Link href="#" className="text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded">Case Studies</Link>
                <Link href="#" className="text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded">Blog</Link>
              </div>
            </div>
          </div>

          <div className="relative group hidden md:block">
            <button className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors flex items-center gap-1">
              Company
              <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="w-48 bg-white border border-gray-100 shadow-sm rounded flex flex-col p-2">
                <Link href="#" className="text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded">About</Link>
                <Link href="#" className="text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded">Careers</Link>
                <Link href="#" className="text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded">Contact</Link>
              </div>
            </div>
          </div>

          <button className="px-5 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded-none shadow-sm">
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
