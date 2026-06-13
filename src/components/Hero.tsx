import React, { useState, useEffect } from "react";
import { Sparkles, Phone, Flame, Droplets, SprayCan as Bug, Brush, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: "/images/pvc-ceiling-3.jpg",
      title: "PVC False Ceilings",
      badge: "LIVING & BEDROOMS",
      desc: "Premium wood-finish and high-gloss PVC ceilings. 100% moisture-proof, zero painting required, and extensively engineered to withstand Visakhapatnam's damp coastal air."
    },
    {
      image: "/images/pvc-ceiling-1.jpg",
      title: "3D Fluted WPC Walls",
      badge: "ELEGANT BACKGROUNDS",
      desc: "Eco-friendly wood-polymer composites designed for premium TV units & main lounge highlights. Dust-proof, sound dampening, and completely insect & termite resistant."
    },
    {
      image: "/images/cladding-1.jpg",
      title: "Weatherproof Exterior Louvers",
      badge: "OUTDOOR CLADDING",
      desc: "Heavy-duty outdoor panels built for coastal property facades. Completely immune to extreme monsoons, salty sea mist, and intense tropical sun."
    }
  ];

  // Auto scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const features = [
    {
      icon: <Droplets className="w-5 h-5 text-sky-400" />,
      title: "100% Waterproof",
      description: "Resists damp coastal seepage and salty wind rust perfectly.",
    },
    {
      icon: <Bug className="w-5 h-5 text-amber-400" />,
      title: "Termite Defense",
      description: "Chemically inert polymers fully immune to termite nests.",
    },
    {
      icon: <Flame className="w-5 h-5 text-red-400" />,
      title: "Fire Retardant",
      description: "Self-extinguishing premium composite raw materials.",
    },
    {
      icon: <Brush className="w-5 h-5 text-teal-400" />,
      title: "Zero Maintenance",
      description: "No plaster sanding, no paint smells, simple soap-water wash.",
    },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-between bg-slate-950 overflow-hidden text-white font-sans">
      
      {/* BACKGROUND SLIDESHOW LAYER WITH ABSOLUTE CROSS-FADING IMAGES */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[activeIndex].image}
              alt={slides[activeIndex].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform scale-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Sophisticated Dark Overlay Gradients with High Image Visibility */}
        <div className="absolute inset-0 bg-slate-950/25"></div>
        {/* Deep, rich dark gradient on the left and bottom where text is placed */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40"></div>
        <div className="absolute inset-y-0 left-0 w-full md:w-4/5 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent pointer-events-none"></div>
      </div>

      {/* HERO INNER CONTENT OVERLAY CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex-grow flex flex-col justify-center">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Headings & CTAs centered-left - Floating naturally without card boundaries for absolute elegance */}
          <div className="lg:col-span-9 space-y-6 text-left max-w-3xl">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#E05A10]/20 to-[#E05A10]/5 border border-[#E05A10]/40 rounded-full text-xs font-bold text-orange-400 uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span>Premium Architectural PVC &amp; WPC Finishes</span>
            </div>

            <h1 className="font-sans font-black tracking-tight leading-[1.08] text-4xl sm:text-5xl md:text-6xl text-white">
              Elevate Ceilings. <br />
              <span className="text-[#E05A10]">
                Redefine Luxury Walls.
              </span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-medium max-w-2xl">
              Specialized custom interior transformations using durable, zero-maintenance, humidity-sealed premium polymers. Upgrade your luxury lounge, commercial venue, or modern home across <strong className="text-white font-bold">Visakhapatnam &amp; Surrounding Coastal Districts</strong>.
            </p>

            {/* Premium Interactive Slideshow Information Block - Sleek integrated editorial highlight */}
            <div className="border-l-2 border-[#E05A10] pl-4 py-1.5 max-w-xl relative group">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono tracking-widest font-extrabold text-[#E05A10] uppercase">
                  {slides[activeIndex].badge}
                </span>
                <span className="text-slate-400 text-xs">•</span>
                <span className="text-amber-400 font-extrabold text-xs flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> Featured Solution
                </span>
              </div>
              
              <h3 className="text-lg font-black text-white tracking-tight">
                {slides[activeIndex].title}
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-1 font-medium">
                {slides[activeIndex].desc}
              </p>
            </div>

            {/* Heavy-Duty Call & WhatsApp CTA buttons with dynamic styling */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 font-sans">
              <a
                href="tel:+916304345327"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#E05A10] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-extrabold text-sm md:text-base hover:-translate-y-0.5 shadow-xl shadow-orange-600/30 active:scale-95 transition-all text-center"
                id="hero-call-cta-overlay"
              >
                <Phone className="w-5 h-5 text-white animate-pulse" />
                <span>Call Helpline: +91 63043 45327</span>
              </a>
              <a
                href="https://wa.me/916304345327"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-extrabold text-sm md:text-base hover:from-emerald-700 hover:to-teal-700 hover:-translate-y-0.5 shadow-xl shadow-emerald-600/25 active:scale-95 transition-all text-center"
                id="hero-whatsapp-cta-overlay"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Browse WhatsApp Catalog</span>
              </a>
            </div>

          </div>

          {/* Right Controller Panel with Luxury Minimal styling */}
          <div className="lg:col-span-3 flex lg:flex-col justify-between items-center gap-4 py-4 lg:py-0 border-t border-b border-white/5 lg:border-none">
            <div className="hidden lg:block space-y-1 font-mono text-[10px] tracking-widest text-slate-400 text-right w-full">
              <span className="block text-slate-500 font-bold">AUTOMATED DISPLAY</span>
              <span className="text-emerald-400 font-extrabold flex items-center justify-end gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                ACTIVE CAROUSEL
              </span>
            </div>

            {/* Beautiful Luxury Slide Toggles */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3.5 rounded-xl border border-white/10 bg-slate-900/60 text-white hover:bg-[#E05A10] hover:border-transparent transition-all active:scale-90 shadow-lg backdrop-blur-md"
                aria-label="Previous Slide Background"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="text-xs font-mono tracking-widest text-[#E05A10] font-black bg-slate-950/80 px-4 py-2 border border-white/10 rounded-xl shadow-md min-w-[70px] text-center">
                {activeIndex + 1} / {slides.length}
              </div>

              <button
                onClick={handleNext}
                className="p-3.5 rounded-xl border border-white/10 bg-slate-900/60 text-white hover:bg-[#E05A10] hover:border-transparent transition-all active:scale-90 shadow-lg backdrop-blur-md"
                aria-label="Next Slide Background"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* FEATURES ROW FLOATING AT THE BOTTOM WITH TRANSPARENT FROSTED FEEL */}
      <div className="relative z-10 w-full bg-slate-950/70 border-t border-white/10 backdrop-blur-xl py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, index) => (
              <div key={index} className="flex gap-3.5 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E05A10]/20 group-hover:border-[#E05A10]/40 transition-all duration-300">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-sans font-black text-slate-100 text-xs sm:text-sm tracking-tight">{feat.title}</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed mt-0.5">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
