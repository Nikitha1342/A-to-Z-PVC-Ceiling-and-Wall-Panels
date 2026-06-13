import React from "react";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Services from "./components/Services.tsx";
import About from "./components/About.tsx";
import Reviews from "./components/Reviews.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import { Phone } from "lucide-react";

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      {/* Dynamic Header */}
      <Header />

      {/* Main Single-View Sections */}
      <main className="flex-grow">
        {/* Entry Jumbotron Banner with Slider */}
        <Hero />

        {/* Detailed Solutions Catalogue & Pricing specs */}
        <Services />

        {/* Brand Background, Map & Service areas */}
        <About />

        {/* Localized Proof & trust section */}
        <Reviews />

        {/* Instant Lead Inquiries panel */}
        <Contact />
      </main>

      {/* Foot Credits Statement */}
      <Footer />

      {/* FLOATING ACTION INTERACTIVE BUTTONS FOR CALL AND WHATSAPP */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col sm:flex-row gap-3 items-end sm:items-center font-sans" id="floating-ctas-panel">
        
        {/* WhatsApp Icon Button */}
        <a
          href="https://wa.me/916304345327"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all w-12 h-12 sm:w-14 sm:h-14 group relative"
          id="floating-whatsapp-btn"
          title="Chat on WhatsApp"
        >
          {/* Subtle pulsate indicator */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-40 rounded-full"></span>
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        {/* Call Now Telephone Pill Trigger showing the number directly */}
        <a
          href="tel:+916304345327"
          className="flex items-center gap-2 bg-[#0C1E36] hover:bg-slate-800 text-white font-bold py-3 px-4.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm border border-slate-800"
          id="floating-call-btn"
          title="Call Us Now"
        >
          <Phone className="w-4 h-4 text-[#E05A10] animate-bounce" />
          <span>Call: +91 63043 45327</span>
        </a>

      </div>
    </div>
  );
}
