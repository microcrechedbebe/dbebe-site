"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["about", "team", "day", "contact"];
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
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md shadow-ocean-400/5"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      {/* Top bar: logo + CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-xl shadow-sm flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="D'BEBE"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div>
              <span className="font-baloo font-bold text-base sm:text-lg text-ocean-700">
                D&apos;BEBE
              </span>
              <span className="hidden sm:block text-[9px] text-ocean-400 tracking-widest uppercase leading-none">
                Micro-crèche
              </span>
            </div>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="px-4 py-2 bg-gold-400 text-white rounded-full text-sm font-bold hover:bg-gold-500 transition-all duration-300 shadow-md shadow-gold-400/20 hover:shadow-lg hover:-translate-y-0.5"
          >
            Inscription ✨
          </a>
        </div>
      </div>

      {/* Tab navigation - always visible */}
      <div className="border-t border-ocean-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1.5">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={tab.href}
                onClick={(e) => handleClick(e, tab.href)}
                className={`flex-shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
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

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </header>
  );
}
