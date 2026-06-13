import React, { useEffect, useState } from "react";
import { Info, Clock, CheckCircle2, Service, Home, Car, PhoneCall, Sparkles, Map, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState("");

  // Target coordinates of Maharani Peta location
  const locationAddress = "16/8/13/B, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002";

  const serviceAreas = [
    "Visakhapatnam City (Vizag)",
    "Vizianagaram Region",
    "Srikakulam District",
    "Anakapalle Area",
    "Narsipatnam Surroundings"
  ];

  const highlights = [
    {
      title: "On-Site Inspections",
      desc: "Our estimation engineers visit your home or office in Vizag with catalog samples."
    },
    {
      title: "10-Year Material Integrity",
      desc: "Heavy-duty thermal polymers designed specifically to resist sagging and termite rot."
    },
    {
      title: "Fast Mess-Free Installations",
      desc: "Zero plaster sanding or wet paint splatters. Interlocking panels slide cleanly."
    }
  ];

  // Live active hours status updater
  useEffect(() => {
    const updateBusinessHours = () => {
      // Local time from system (Visakhapatnam is GMT+5.5, the execution time provides local metadata)
      const now = new Date();
      // Translate to localized Indian Standard Time (IST) offset if running in UTC.
      // But standard system timezone checks are simple:
      const hours = now.getHours();
      
      // Open daily: 08:00 to 22:00 (8:00 AM to 10:00 PM)
      if (hours >= 8 && hours < 22) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }

      // Nice readable format
      const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentTimeStr(formattedTime);
    };

    updateBusinessHours();
    const interval = setInterval(updateBusinessHours, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden border-t border-b border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Business Narrative & Highlights (col-span 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E05A10] bg-orange-100 px-2.5 py-1 rounded-md shadow-xs">
                About Our Craft
              </span>
              <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
              <span className="text-xs text-slate-400 font-mono">interior decorator</span>
            </div>

            <h2 className="font-sans font-black tracking-tight text-slate-900 text-3xl sm:text-4xl">
              Specialists in Premium PVC & WPC Elements
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>A to Z PVC Ceiling and WPC Wall Panels, Visakhapatnam</strong>, specializes in premium PVC ceiling false paneling systems, 3D fluted WPC wall panels, and high-performance exterior louvers. We serve both residential and commercial projects throughout coastal Andhra Pradesh.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Our durable materials are extensively engineered to resolve the key issues plaguing standard plaster ceiling construction in Visakhapatnam—providing complete safeguards against high coastal humidity, salty coastal air, termites, water stains, and structural paint cracking.
            </p>

            {/* highlights row */}
            <div className="space-y-4 pt-4 border-t border-slate-200/60">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-800 text-sm tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Block: Location coordinates, business hours & Map mimic (col-span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Business Hours Panel */}
            <div className={`border p-5 rounded-3xl shadow-sm transition-colors ${
              isOpenNow 
                ? "bg-emerald-50/50 border-emerald-100 text-emerald-950" 
                : "bg-amber-50/40 border-amber-100 text-amber-950"
            }`} id="hours">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200/60 mb-3">
                <div className="flex items-center gap-2">
                  <Clock className={`w-5 h-5 ${isOpenNow ? "text-emerald-600 animate-pulse" : "text-amber-600"}`} />
                  <span className="font-sans font-bold text-sm">Business Operations</span>
                </div>
                {isOpenNow ? (
                  <span className="bg-emerald-600 text-white text-[10px] font-bold font-mono tracking-widest px-2.5 py-1 rounded-full uppercase leading-none">
                    ✔ Open Live
                  </span>
                ) : (
                  <span className="bg-amber-600 text-white text-[10px] font-bold font-mono tracking-widest px-2.5 py-1 rounded-full uppercase leading-none">
                    Closed (Opens 8 AM)
                  </span>
                )}
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-700 font-sans">
                  <span>Monday – Sunday Active Hours:</span>
                  <span className="font-bold text-slate-900">08:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 pt-1.5 text-[11px] font-mono border-t border-slate-200/30">
                  <span>Current local time check:</span>
                  <span className="font-semibold text-slate-800">{currentTimeStr || "22:34 PM IST"}</span>
                </div>
              </div>
            </div>

            {/* Service Area Card */}
            <div className="bg-white border border-slate-100 p-5 rounded-3xl shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#0C1E36]">
                <Map className="w-5 h-5 text-[#E05A10]" />
                <h4 className="font-sans font-bold text-sm">Design Service Regions</h4>
              </div>
              <p className="text-slate-500 text-xs">
                We operate on-site delivery and execution across all surrounding regions:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {serviceAreas.map((area, idx) => (
                  <span key={idx} className="bg-slate-50 text-slate-600 border border-slate-100 text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Parking and Amenities Details Card */}
            <div className="bg-white border border-slate-100 p-5 rounded-3xl shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-slate-700 text-xs font-bold uppercase tracking-wider font-mono">
                <Car className="w-4 h-4 text-orange-500" />
                Customer Parking & Transit
              </div>
              <ul className="space-y-1.5 text-xs text-slate-500 pl-1">
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> Free on-site customer parking lot
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> Free of charge street parking available
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> Near Maharani Peta landmark, easy public transit access
                </li>
              </ul>
            </div>

            {/* Location Address Block Map placeholder */}
            <div className="bg-[#0C1E36] text-white p-5 rounded-3xl shadow-lg relative overflow-hidden space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#E05A10] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Headquarters Address</span>
                  <p className="text-xs font-medium text-slate-200 mt-0.5">{locationAddress}</p>
                </div>
              </div>
              {/* Static styled map widget embed */}
              <div className="h-32 bg-slate-800 rounded-xl overflow-hidden border border-slate-700/60 relative">
                {/* Embedded Styled Map Iframe for Maharani Peta Visakhapatnam */}
                <iframe
                  title="A To Z PVC Ceiling Visakhapatnam Address Map"
                  src={`https://maps.google.com/maps?q=16/8/13/B,%20Maharani%20Peta,%20Visakhapatnam,%20Andhra%20Pradesh%20530002&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0 grayscale opacity-80"
                  allowFullScreen={false}
                  loading="lazy"
                  scrolling="no"
                ></iframe>
                {/* Pointer Tag */}
                <div className="absolute inset-0 bg-[#0C1E36]/10 pointer-events-none hover:bg-transparent transition-colors"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
