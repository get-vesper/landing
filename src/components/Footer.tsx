import Link from "next/link";
import { Layers } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-transparent py-24 bg-gradient-to-br from-[#031525] to-[#128292] w-full">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-16 md:gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-white" />
            <span className="font-serif font-semibold tracking-tight text-white text-lg">Vesper</span>
          </div>
          <p className="text-sm text-white/60 max-w-xs">
            The operational infrastructure layer for aerospace compliance and coordination.
          </p>
        </div>
        
        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm text-white">Product</h4>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Platform</Link>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Security</Link>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Documentation</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm text-white">Company</h4>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">About</Link>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Careers</Link>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm text-white">Legal</h4>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-white/60">
          &copy; {new Date().getFullYear()} Vesper Inc. All rights reserved.
        </div>
        <div className="text-xs text-white/60 font-mono tracking-wider">
          STATUS: OPERATIONAL
        </div>
      </div>
    </footer>
  );
}
