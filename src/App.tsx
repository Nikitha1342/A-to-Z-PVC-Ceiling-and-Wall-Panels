import React from "react";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Services from "./components/Services.tsx";
import About from "./components/About.tsx";
import Reviews from "./components/Reviews.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import { Phone, MessageCircle } from "lucide-react";

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
        
        {/* WhatsApp Pill Trigger */}
        <a
          href="https://wa.me/916304345327"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm group relative"
          id="floating-whatsapp-btn"
          title="Chat on WhatsApp"
        >
          {/* Subtle pulsate indicator */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-40 rounded-full"></span>
          <MessageCircle className="w-5 h-5 fill-white/10" />
          <span>WhatsApp Chat</span>
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
