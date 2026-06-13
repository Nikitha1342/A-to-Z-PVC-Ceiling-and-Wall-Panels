import React, { useState, useEffect } from "react";
import { Phone, Check, Menu, X, Clock, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll height to apply dynamic high-contrast physical properties
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Premium Logo branding
  const Logo = () => (
    <div className="flex items-center gap-2.5 select-none text-left">
      {/* Circle Logo containing premium golden-orange and deep navy architectural emblem */}
      <div className="relative w-10 h-10 flex-shrink-0 bg-[#0C1E36] rounded-xl flex items-center justify-center overflow-hidden shadow-md border border-slate-800">
        <div className="absolute inset-0 bg-[#E05A10]/15"></div>
        {/* Abstract Architectural intersecting lines represent Ceiling grids and Fluted panels */}
        <div className="relative w-5 h-5 flex flex-col justify-between items-center">
          <div className="w-4.5 h-1 bg-[#E05A10] rounded-full self-start transform -rotate-12 translate-y-0.5"></div>
          <div className="flex gap-0.5 w-4.5 h-3 justify-center items-end mt-0.5">
            <div className="w-1 h-2 bg-amber-400 rounded-sm"></div>
            <div className="w-1 h-3 bg-amber-500 rounded-sm"></div>
            <div className="w-1 h-1.5 bg-amber-300 rounded-sm"></div>
          </div>
        </div>
      </div>
      
      {/* Brand typographic signature */}
      <div className="flex flex-col">
        <h1 className="font-sans font-black tracking-tight text-[#0C1E36] text-sm sm:text-base leading-tight">
          A to <span className="text-[#E05A10]">Z</span> PVC
        </h1>
        <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-[#E05A10] leading-none">
          Ceilings &amp; WPC Panels
        </p>
      </div>
    </div>
  );

  return (
    <header 
      id="app-header" 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-md py-3" 
          : "bg-white/98 border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-all">
        
        {/* Refined Brand Logo Link */}
        <a href="#hero" className="hover:opacity-90 transition-opacity">
          <Logo />
        </a>

        {/* Clean Luxury Link Elements with subtle bottom line hover effect */}
        <nav className="hidden lg:flex items-center gap-8 font-sans">
          <a href="#services" className="text-[12px] font-extrabold uppercase tracking-widest text-slate-600 hover:text-[#0C1E36] transition-colors relative group py-1">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E05A10] transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-[12px] font-extrabold uppercase tracking-widest text-slate-600 hover:text-[#0C1E36] transition-colors relative group py-1">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E05A10] transition-all group-hover:w-full"></span>
          </a>
          <a href="#hours" className="text-[12px] font-extrabold uppercase tracking-widest text-slate-600 hover:text-[#0C1E36] transition-colors relative group py-1">
            Hours
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E05A10] transition-all group-hover:w-full"></span>
          </a>
          <a href="#reviews" className="text-[12px] font-extrabold uppercase tracking-widest text-slate-600 hover:text-[#0C1E36] transition-colors relative group py-1">
            Reviews
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E05A10] transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-[12px] font-extrabold uppercase tracking-widest text-[#E05A10] hover:text-orange-600 transition-colors relative group py-1">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
          </a>
        </nav>

        {/* Call Now button */}
        <div className="hidden lg:flex items-center">
          <a
            href="tel:+916304345327"
            className="group flex items-center gap-2 bg-[#0C1E36] hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-slate-800"
            id="header-call-cta"
          >
            <Phone className="w-3.5 h-3.5 text-[#E05A10]" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile menu button and contact badge */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:+916304345327"
            className="flex items-center gap-1.5 bg-[#0C1E36] text-white px-3 py-2 rounded-xl text-[10px] font-bold tracking-wide hover:bg-slate-800 transition-all shadow"
            title="Call Us"
            id="header-mobile-call-cta"
          >
            <Phone className="w-3 h-3 text-[#E05A10] animate-bounce" />
            <span>63043 45327</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-800 bg-slate-100 border border-slate-200/50 rounded-xl hover:bg-slate-200 transition-all active:scale-95"
            id="header-menu-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with premium spacing */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-50 border-t border-slate-200/45 overflow-hidden"
            id="mobile-navigation-drawer"
          >
            <div className="px-4 py-4 space-y-1">
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-widest text-slate-700 hover:text-[#0C1E36] hover:bg-slate-100 transition-all"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-widest text-slate-700 hover:text-[#0C1E36] hover:bg-slate-100 transition-all"
              >
                About Us
              </a>
              <a
                href="#hours"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-widest text-slate-700 hover:text-[#0C1E36] hover:bg-slate-100 transition-all"
              >
                Operating Hours
              </a>
              <a
                href="#reviews"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-widest text-slate-700 hover:text-[#0C1E36] hover:bg-slate-100 transition-all"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-widest text-[#E05A10] bg-orange-50 hover:bg-orange-100/50 transition-all"
              >
                Contact
              </a>

              {/* Direct action button inside mobile menu */}
              <div className="pt-2.5 border-t border-slate-200/60 mt-2">
                <a
                  href="tel:+916304345327"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0C1E36] to-slate-900 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-3.5 h-3.5 text-[#E05A10]" />
                  Call: +91 63043 45327
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
