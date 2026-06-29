import Link from "next/link";
import { Layers } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-vesper-border py-24 bg-vesper-surface w-full mt-32">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-16 md:gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-vesper-text" />
            <span className="font-display font-semibold tracking-tight text-vesper-text text-lg">Vesper</span>
          </div>
          <p className="text-sm text-vesper-text-muted max-w-xs">
            The operational infrastructure layer for aerospace compliance and coordination.
          </p>
        </div>
        
        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm text-vesper-text">Product</h4>
            <Link href="#" className="text-sm text-vesper-text-muted hover:text-vesper-accent transition-colors">Platform</Link>
            <Link href="#" className="text-sm text-vesper-text-muted hover:text-vesper-accent transition-colors">Security</Link>
            <Link href="#" className="text-sm text-vesper-text-muted hover:text-vesper-accent transition-colors">Documentation</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm text-vesper-text">Company</h4>
            <Link href="#" className="text-sm text-vesper-text-muted hover:text-vesper-accent transition-colors">About</Link>
            <Link href="#" className="text-sm text-vesper-text-muted hover:text-vesper-accent transition-colors">Careers</Link>
            <Link href="#" className="text-sm text-vesper-text-muted hover:text-vesper-accent transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm text-vesper-text">Legal</h4>
            <Link href="#" className="text-sm text-vesper-text-muted hover:text-vesper-accent transition-colors">Privacy</Link>
            <Link href="#" className="text-sm text-vesper-text-muted hover:text-vesper-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-8 border-t border-vesper-border flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-vesper-text-muted">
          &copy; {new Date().getFullYear()} Vesper Inc. All rights reserved.
        </div>
        <div className="text-xs text-vesper-text-muted font-mono tracking-wider">
          STATUS: OPERATIONAL
        </div>
      </div>
    </footer>
  );
}
