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
    { href: "#about", label: "Notre monde" },
    { href: "#team", label: "L'équipe" },
    { href: "#day", label: "Une journée" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-white/5"
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
              <span className="font-space font-bold text-lg sm:text-xl text-white group-hover:text-gradient transition-all duration-300">
                D&apos;BEBE
              </span>
              <span className="block text-[10px] sm:text-xs text-white/40 tracking-widest uppercase">
                Micro-crèche
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-5 py-2 bg-gradient-to-r from-[#4f9cf7] to-[#a855f7] text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#4f9cf7]/25 transition-all duration-300"
            >
              Inscription
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-t border-white/5"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 font-medium transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 bg-gradient-to-r from-[#4f9cf7] to-[#a855f7] text-white rounded-xl text-center font-semibold"
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
