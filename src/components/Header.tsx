"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["about", "team", "day", "tarifs", "faq", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { href: "#about", label: "Notre monde", id: "about" },
    { href: "#team", label: "L'équipe", id: "team" },
    { href: "#day", label: "Une journée", id: "day" },
    { href: "#tarifs", label: "Tarifs", id: "tarifs" },
    { href: "#faq", label: "FAQ", id: "faq" },
    { href: "#contact", label: "Inscription", id: "contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-lg shadow-md" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5"
            aria-label="D'BEBE — Retour en haut"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="Logo D'BEBE" fill className="object-contain p-0.5" priority />
            </div>
            <div>
              <span className="font-baloo font-bold text-base sm:text-lg text-ocean-700">D&apos;BEBE</span>
              <span className="hidden sm:block text-[9px] text-ocean-400 tracking-widest uppercase leading-none">Micro-crèche</span>
            </div>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            aria-label="Demander une pré-inscription"
            className="px-4 py-2 bg-gold-400 text-white rounded-full text-sm font-bold hover:bg-gold-500 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            Inscription ✨
          </a>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="border-t border-ocean-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Navigation principale" className="flex items-center gap-1 overflow-x-auto py-1.5" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={tab.href}
                onClick={(e) => handleClick(e, tab.href)}
                aria-label={tab.label}
                aria-current={activeSection === tab.id ? "true" : undefined}
                className={`flex-shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400 ${
                  activeSection === tab.id
                    ? "bg-ocean-400 text-white shadow-sm"
                    : "text-ocean-600 hover:bg-ocean-50 hover:text-ocean-800"
                }`}
              >
                {tab.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
