"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'precision-glass py-4' : 'bg-transparent py-6 border-b border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Layers className="w-5 h-5 text-vesper-text transition-transform group-hover:scale-105" />
          <span className="font-display font-semibold text-lg tracking-tight text-vesper-text">Vesper</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link href="#" className="hidden md:block text-sm font-medium text-vesper-text-muted hover:text-vesper-text transition-colors">Platform</Link>
          <Link href="#" className="hidden md:block text-sm font-medium text-vesper-text-muted hover:text-vesper-text transition-colors">Customers</Link>
          <Link href="#" className="hidden md:block text-sm font-medium text-vesper-text-muted hover:text-vesper-text transition-colors">Company</Link>
          <button className="px-5 py-2.5 text-sm font-medium text-vesper-surface bg-vesper-text hover:bg-black transition-colors">
            Request Access
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
