"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = () => setMobileOpen(false);

  const navLinks = [
    { href: "#about", label: "Notre monde" },
    { href: "#team", label: "L'équipe" },
    { href: "#day", label: "Une journée" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-ocean-400/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/logo.png"
                alt="D'BEBE"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className={`font-baloo font-bold text-lg sm:text-xl transition-colors ${
                scrolled ? "text-ocean-700" : "text-white"
              }`}>
                D&apos;BEBE
              </span>
              <span className={`block text-[10px] sm:text-xs tracking-widest uppercase transition-colors ${
                scrolled ? "text-ocean-500" : "text-white/80"
              }`}>
                Micro-crèche
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  scrolled
                    ? "text-ocean-600 hover:bg-ocean-50 hover:text-ocean-800"
                    : "text-white/90 hover:bg-white/20 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-5 py-2.5 bg-gold-400 text-white rounded-full text-sm font-bold hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-gold-400/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              Inscription ✨
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "text-ocean-700" : "text-white"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-ocean-100"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 rounded-xl text-ocean-700 hover:bg-ocean-50 font-semibold transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-2 px-4 py-3 bg-gold-400 text-white rounded-xl text-center font-bold hover:bg-gold-500 transition-all"
              >
                Inscription ✨
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
