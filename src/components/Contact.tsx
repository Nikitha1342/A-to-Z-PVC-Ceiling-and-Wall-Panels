import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, AlertCircle, Sparkles } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Address matching reference exactly
  const streetAddress = "16/8/13/B, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002";

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const getWhatsAppURL = () => {
    const textTarget = `Hi A to Z PVC Ceilings & WPC Wall Panels! 

My name is *${name}*, my contact is *${phone}*. 
I am sending this inquiry from your website.

*My message*: ${msg || 'I want to ask about false ceilings and fluted wall panel installations and catalogs.'}

Please schedule a quick consultation or call me when free!`;
    return `https://wa.me/916304345327?text=${encodeURIComponent(textTarget)}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      {/* Absolute decorative accent circles */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left information column (col-span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex items-center gap-1.5 text-[#E05A10]">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E05A10]">
                Contact information
              </span>
            </div>

            <h2 className="font-sans font-black tracking-tight text-white text-3xl sm:text-4xl">
              Get A Free Catalog <br />
              &amp; Site Estimate
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Ready to remodel your space? Submit your details to book a visual catalogs showcase or get standard estimations.
            </p>

            {/* Quick cards */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-[#E05A10] flex items-center justify-center flex-shrink-0 font-bold border border-slate-700/80">
                  📞
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Phone Consultation</span>
                  <a href="tel:+916304345327" className="text-sm font-bold text-slate-200 hover:text-white transition-colors">
                    063043 45327
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-500 flex items-center justify-center flex-shrink-0 font-bold border border-slate-700/80">
                  💬
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Chat WhatsApp Live</span>
                  <a href="https://wa.me/916304345327" target="_blank" rel="noreferrer" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                    +91 63043 45327
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-[#E05A10] flex items-center justify-center flex-shrink-0 font-bold border border-slate-700/80">
                  📍
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Our Showroom</span>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed max-w-xs mt-0.5">
                    {streetAddress}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right form block column (col-span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/80 border border-slate-700/50 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              
              {!submitted ? (
                <form onSubmit={handleEnquiry} className="space-y-5" id="enquiry-form">
                  <h4 className="font-sans font-bold text-lg text-slate-100 tracking-tight">
                    Quick Consultation Request
                  </h4>
                  
                  <div className="space-y-1 flex flex-col">
                    <label className="text-xs text-slate-400">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Naidu"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="space-y-1 flex flex-col">
                    <label className="text-xs text-slate-400">Phone Number / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98480 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="space-y-1 flex flex-col">
                    <label className="text-xs text-slate-400">Message / Dimension details (Optional)</label>
                    <textarea
                      placeholder="I want false ceilings for my kitchen, or WPC fluted walls for my main hall..."
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      rows={3}
                      className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E05A10] hover:bg-orange-600 text-white font-bold tracking-wider text-sm py-4 rounded-xl shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
                    id="contact-enquiry-submit"
                  >
                    <Send className="w-4.5 h-4.5" />
                    Submit Request
                  </button>

                </form>
              ) : (
                <div className="text-center py-6 space-y-6 flex flex-col items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    ✓
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-sans font-extrabold text-slate-100 text-lg tracking-tight">
                      Enquiry Initiated!
                    </h4>
                    <p className="text-slate-400 text-xs max-w-sm mx-auto leading-relaxed">
                      Thank you Ramesh / customer! Your specifications are stored. For lighting fast catalogs sharing on WhatsApp, click the direct button below!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                    <a
                      href={getWhatsAppURL()}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Send Copy to WhatsApp Link
                    </a>
                    
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setPhone("");
                        setMsg("");
                      }}
                      className="text-slate-400 hover:text-slate-200 underline text-xs"
                    >
                      Fill another requestForm
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
