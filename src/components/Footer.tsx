import React from "react";
import { Hammer, Trademark, ArrowUp, AlertCircle, ShieldEllipsis } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="app-footer" className="bg-[#040C16] text-[#6A788A] pt-16 pb-8 border-t border-slate-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-900/40">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white tracking-tight">
                A to <span className="text-[#E05A10]">Z</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest bg-slate-900 px-2 py-0.5 rounded text-slate-400">
                VIZAG
              </span>
            </div>
            
            <p className="text-xs leading-relaxed text-[#6A788A]">
              We craft beautiful modern interiors utilizing zero-maintenance PVC ceiling structures, heavy-duty WPC vertical moldings, and robust outdoor louvers. Specializing in customized luxury False Ceilings in Visakhapatnam.
            </p>

            <div className="text-[14px] font-mono font-bold tracking-widest text-[#E05A10] uppercase pt-2 border-t border-slate-900/60 w-fit">
              CEILINGS THAT INSPIRE. WALLS THAT IMPRESS.
            </div>
          </div>

          {/* Solution links Column */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400">Our Services</h5>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">PVC false ceilings false frame</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">3D fluted wall panelling</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Exterior house wood cladding</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">TV mounting backdrop grids</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Cove LED custom profile layouts</a>
              </li>
            </ul>
          </div>

          {/* Quick links Column */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400">Company</h5>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About our craftsmen</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Request a Catalog</a>
              </li>
              <li>
                <a href="#hours" className="hover:text-white transition-colors">Operations &amp; service hours</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Vizag project stories</a>
              </li>
            </ul>
          </div>

          {/* Quick scroll top */}
          <div className="md:col-span-2 flex justify-start md:justify-end items-start pt-2">
            <button
              onClick={handleScrollTop}
              className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer font-sans text-xs font-bold"
              id="footer-back-to-top"
              title="Scroll back to Top"
            >
              <ArrowUp className="w-4 h-4 text-[#E05A10]" />
              Scroll Top
            </button>
          </div>

        </div>

        {/* Lower row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono">
          <p>© {new Date().getFullYear()} A to Z PVC Ceiling &amp; WPC Wall Panels. Visakhapatnam, AP. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 transition-colors">Privacy Policy</span>
            <span className="h-3 w-[1px] bg-slate-800"></span>
            <span className="hover:text-slate-400 transition-colors">Terms of Operations</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
