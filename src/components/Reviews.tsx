import React from "react";
import { Star, ShieldCheck, Quote, ThumbsUp } from "lucide-react";

export default function Reviews() {
  const customerReviews = [
    {
      name: "Srinivas Rao",
      location: "MVP Colony, Visakhapatnam",
      rating: 5,
      date: "May 2026",
      text: "We wanted a clean look for our living room false ceiling because our coastal house had paint peeling issues due to humidity. A to Z installed the PVC wood-finish ceilings in just 2 days. Complete dry installation with zero dust. Highly recommended!",
      project: "PVC Living Room Ceiling"
    },
    {
      name: "Divya Naidu",
      location: "Gajuwaka, Visakhapatnam",
      rating: 5,
      date: "April 2026",
      text: "The fluted WPC louvers they set up behind my TV wall feel high-end and modern. Clean interlocking grooves with integrated golden LED lighting. The team was very cooperative and completed on-time.",
      project: "WPC Fluted TV unit wall"
    },
    {
      name: "Prakash Kumar",
      location: "Maharani Peta, Vizag",
      rating: 5,
      date: "March 2026",
      text: "Excellent exterior wood cladding. Installed these louvers over our commercial clinic entrance. With Vizag's heavy monsoons, regular cladding used to rot, but this polymer material is completely immune. Outstanding durability.",
      project: "Exterior Facade Cladding"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#E05A10] bg-orange-100 px-3 py-1.5 rounded-full shadow-sm">
            Kind Words
          </span>
          <h2 className="font-sans font-black tracking-tight text-slate-900 text-3xl sm:text-4xl mt-3">
            Real Vizag Testimonials
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            See what property owners and office spaces across Visakhapatnam think about our custom installations and material quality.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {customerReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-100/80 p-6 rounded-3xl flex flex-col justify-between hover:border-orange-100 hover:shadow-md transition-all relative group"
            >
              {/* Subtle design quote backplate indicator */}
              <div className="absolute top-4 right-6 text-slate-200">
                <Quote className="w-8 h-8 opacity-40 group-hover:scale-110 transition-transform" />
              </div>

              <div className="space-y-4">
                {/* Stars Row */}
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                  &quot;{review.text}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/50 mt-6 flex justify-between items-end">
                <div>
                  <h5 className="font-sans font-extrabold text-slate-800 text-sm tracking-tight">
                    {review.name}
                  </h5>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">{review.location}</p>
                </div>
                <span className="bg-slate-200/50 text-slate-600 text-[9px] font-mono font-bold uppercase px-2 py-1 rounded">
                  {review.project}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Certifications Badges Bar */}
        <div className="mt-16 pt-12 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">🛡️</span>
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">Moth & Insect Proof</span>
            <p className="text-[10px] text-slate-400 mt-0.5">Chemically inert polymers</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">💧</span>
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">Zero Seepage Stains</span>
            <p className="text-[10px] text-slate-400 mt-0.5">Hydrophobic surfaces</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">🧼</span>
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">Wipe Washable</span>
            <p className="text-[10px] text-slate-400 mt-0.5">Mild soapy water friendly</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">♻️</span>
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">Eco Wood Composite</span>
            <p className="text-[10px] text-slate-400 mt-0.5">100% recyclable raw base</p>
          </div>
        </div>

      </div>
    </section>
  );
}
