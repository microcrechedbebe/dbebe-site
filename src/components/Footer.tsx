"use client";

import { CRECHE_INFO } from "@/app/lib/constants";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ocean-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="D'BEBE"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-baloo font-bold text-lg sm:text-xl">D&apos;BEBE</span>
                <span className="block text-[9px] sm:text-[10px] text-ocean-300 tracking-widest uppercase">Micro-crèche</span>
              </div>
            </div>
            <p className="text-ocean-300 text-sm leading-relaxed mb-4">
              Un cocon d&apos;éveil chaleureux pour révéler le potentiel de chaque enfant.
            </p>
            <div className="flex items-center gap-2 text-gold-300 text-sm">
              <Heart size={14} className="fill-gold-300" />
              <span>Fait avec amour à {CRECHE_INFO.city}</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-baloo font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-2 sm:space-y-3">
              <a href={`tel:${CRECHE_INFO.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 sm:gap-3 text-ocean-300 hover:text-white transition-colors text-sm">
                <Phone size={14} />
                <span>{CRECHE_INFO.phone}</span>
              </a>
              <a href={`mailto:${CRECHE_INFO.email}`} className="flex items-center gap-2 sm:gap-3 text-ocean-300 hover:text-white transition-colors text-sm">
                <Mail size={14} />
                <span>{CRECHE_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2 sm:gap-3 text-ocean-300 text-sm">
                <MapPin size={14} />
                <span>{CRECHE_INFO.address}, {CRECHE_INFO.city}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-ocean-300 text-sm">
                <Clock size={14} />
                <span>{CRECHE_INFO.hours} — {CRECHE_INFO.days}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-baloo font-bold text-base sm:text-lg mb-3 sm:mb-4">Navigation</h3>
            <div className="space-y-2">
              {[
                { href: "#about", label: "Notre monde" },
                { href: "#team", label: "L'équipe" },
                { href: "#day", label: "Une journée" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-ocean-300 hover:text-white transition-colors text-sm">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-ocean-700 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-ocean-400 text-xs">
            © {new Date().getFullYear()} Micro-crèche D&apos;BEBE
          </p>
          <p className="text-ocean-500 text-xs">
            Agrément PMI • {CRECHE_INFO.capacity} places • {CRECHE_INFO.surface}
          </p>
        </div>
      </div>
    </footer>
  );
}
