import React, { useState, useEffect } from "react";
import { Hammer, Sparkles, Check, ArrowUpRight, Flame, CloudSun, ShieldAlert, MonitorPlay, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Individual Auto-Sliding Image Showcase
function ServiceImageGallery({ images, title }: { images: string[]; title: string }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-60 sm:h-64 rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
      <div className="absolute inset-0 bg-slate-950">
        <img
          src={images[currentIdx]}
          alt={`${title} design example`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-all duration-750 scale-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Manual buttons invisible by default, show on hover */}
      <button
        onClick={() => setCurrentIdx((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-900/60 text-white hover:bg-[#E05A10] transition-colors focus:outline-none opacity-0 group-hover:opacity-100 shadow"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={() => setCurrentIdx((prev) => (prev + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-900/60 text-white hover:bg-[#E05A10] transition-colors focus:outline-none opacity-0 group-hover:opacity-100 shadow"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Mini Indicator dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIdx(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              currentIdx === i ? "bg-[#E05A10] w-3" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const servicesList = [
    {
      id: "pvc-ceilings",
      title: "PVC Ceiling Systems",
      badge: "Interior Masterpiece",
      tagline: "High-gloss, matte, or wooden finishes that never yellow or crack.",
      description: "Our premium PVC ceilings are the absolute finest solution for humid environments. We construct durable multi-level or flat false ceilings featuring integrated spot LED profiles and warm ambient cove backlighting. Ideal for kitchens, bedrooms, and living spaces.",
      specs: [
        "100% Moisture Proof & Termite Resistant",
        "Integral Thermal & Shock Insulation",
        "Over 120+ wood grain & high-gloss layouts",
        "Quick installation within 24-48 hours"
      ],
      images: [
        "/images/pvc-ceiling-1.jpg",
        "/images/pvc-ceiling-2.jpg",
        "/images/pvc-ceiling-3.jpg"
      ],
      accent: "from-[#2e1d11] to-[#603e22]"
    },
    {
      id: "wpc-walls",
      title: "WPC Fluted Wall Panels",
      badge: "Architectural Accents",
      tagline: "Eco-friendly wooden composite designs with premium structural flutes.",
      description: "Upgrade boring plain sheetrock walls into gorgeous textured backdrops. Premium WPC wall panels blend authentic natural wood colors with resilient polymers, creating gorgeous 3D textured vertical ridges. Ideal for television backgrounds, office entryways, and bed backrests.",
      specs: [
        "Zero painting and sanding ever needed",
        "Sound dampening fluted visual structures",
        "Tough impact resistance against scratches",
        "Interlocking groove system for clean finish"
      ],
      images: [
        "/images/wpc-wall-1.jpg",
        "/images/wpc-wall-2.jpg",
        "/images/wpc-wall-3.jpg"
      ],
      accent: "from-slate-900 to-indigo-950"
    },
    {
      id: "exterior-cladding",
      title: "Exterior Louvers / Cladding",
      badge: "Heavy Duty Facade",
      tagline: "Anti-UV composites designed specifically to withstand harsh sun & heavy rains.",
      description: "Enhance your commercial workspace, luxury shopfront, or domestic villa exterior. Designed to protect structural outer walls from harsh coastal winds and intense monsoons of Vizag, while delivering modern structural aesthetics that turn heads.",
      specs: [
        "Anti-fading UV stabilizer layer",
        "Heavy-duty thermal defense shields",
        "Engineered structure prevents damp absorption",
        "Elevates modern commercial resale value"
      ],
      images: [
        "/images/cladding-1.jpg",
        "/images/cladding-2.jpg",
        "/images/cladding-3.jpg"
      ],
      accent: "from-slate-100 to-slate-200"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#E05A10] bg-orange-100 px-3 py-1.5 rounded-full shadow-sm">
            Our Elite Solutions
          </span>
          <h2 className="font-sans font-black tracking-tight text-slate-900 text-3xl sm:text-4xl mt-3">
            Premium Ceiling & Wall Systems
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Stylish interiors, durable materials. Discover our core installation solutions designed with commercial-grade specifications to elevate spaces and withstand Visakhapatnam&apos;s humid environment.
          </p>
        </div>

        {/* Services Layout: Alternating Layout Grid */}
        <div className="space-y-12">
          {servicesList.map((service, index) => {
            const isEvent = index % 2 === 0;
            return (
              <div
                key={service.id}
                className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all grid lg:grid-cols-12 gap-8 items-center"
              >
                {/* Visual Preview Half with Scrolling Slideshow Images */}
                <div className={`lg:col-span-5 ${isEvent ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative">
                    {/* Visual accent backplate glow */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-slate-50/50 rounded-2xl blur-lg -z-10"></div>
                    
                    {/* Slideshow element */}
                    <ServiceImageGallery images={service.images} title={service.title} />

                    {/* Badge */}
                    <div className="mt-4 flex gap-2">
                      <span className="bg-[#0C1E36]/5 text-[#0C1E36] text-[10px] font-bold font-mono tracking-wider px-2.5 py-1.5 rounded-md uppercase">
                        Premium Quality
                      </span>
                      <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold font-mono tracking-wider px-2.5 py-1.5 rounded-md uppercase flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                        Full Installation Service
                      </span>
                    </div>
                  </div>
                </div>

                {/* Information Half */}
                <div className={`lg:col-span-7 ${isEvent ? "lg:order-2" : "lg:order-1"} flex flex-col space-y-4`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E05A10]">
                      {service.badge}
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="text-xs text-slate-400 font-mono">A-Grade Quality</span>
                  </div>

                  <h3 className="font-sans font-black text-slate-800 text-xl sm:text-2xl tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#0C1E36] italic">
                    {service.tagline}
                  </p>

                  <p className="text-slate-600 text-[13px] sm:text-[14px] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet points mapping */}
                  <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                    {service.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 font-sans">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick CTAs for this specific service */}
                  <div className="pt-4 flex flex-wrap gap-3 items-center font-sans">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E05A10] bg-orange-50 hover:bg-orange-100 border border-orange-200 px-4 py-2.5 rounded-xl transition-all"
                    >
                      Book Free Site Visit
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`https://wa.me/916304345327?text=Hi!%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20for%20my%20property.%20Can%20you%20share%20some%20more%20catalogs?`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      Inquire on WhatsApp ➔
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

