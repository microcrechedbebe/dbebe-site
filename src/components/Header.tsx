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

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#projet", label: "Notre Projet" },
    { href: "#equipe", label: "L'Équipe" },
    { href: "#quotidien", label: "Quotidien" },
    { href: "#infos", label: "Infos" },
    { href: "#familles", label: "Familles" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
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
              <span className={`font-poppins font-bold text-lg sm:text-xl transition-colors ${
                scrolled ? "text-ocean-800" : "text-white"
              }`}>
                D&apos;BEBE
              </span>
              <span className={`block text-xs transition-colors ${
                scrolled ? "text-ocean-600" : "text-white/80"
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
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-ocean-500/10 ${
                  scrolled
                    ? "text-ocean-700 hover:text-ocean-900"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#familles"
              className="ml-2 px-4 py-2 bg-coral-500 text-white rounded-lg text-sm font-semibold hover:bg-coral-600 transition-colors shadow-lg shadow-coral-500/25"
            >
              Inscription
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-ocean-800" : "text-white"
            }`}
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
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-ocean-100"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-ocean-700 hover:bg-ocean-50 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#familles"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 bg-coral-500 text-white rounded-lg text-center font-semibold hover:bg-coral-600 transition-colors"
              >
                Inscription
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
