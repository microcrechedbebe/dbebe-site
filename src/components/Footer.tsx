"use client";

import { CRECHE_INFO } from "@/app/lib/constants";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ocean-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="D'BEBE"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-baloo font-bold text-xl">D&apos;BEBE</span>
                <span className="block text-[10px] text-ocean-300 tracking-widest uppercase">Micro-crèche</span>
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
            <h3 className="font-baloo font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a href={`tel:${CRECHE_INFO.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-ocean-300 hover:text-white transition-colors">
                <Phone size={16} />
                <span className="text-sm">{CRECHE_INFO.phone}</span>
              </a>
              <a href={`mailto:${CRECHE_INFO.email}`} className="flex items-center gap-3 text-ocean-300 hover:text-white transition-colors">
                <Mail size={16} />
                <span className="text-sm">{CRECHE_INFO.email}</span>
              </a>
              <div className="flex items-center gap-3 text-ocean-300">
                <MapPin size={16} />
                <span className="text-sm">{CRECHE_INFO.address}, {CRECHE_INFO.city}</span>
              </div>
              <div className="flex items-center gap-3 text-ocean-300">
                <Clock size={16} />
                <span className="text-sm">{CRECHE_INFO.hours} — {CRECHE_INFO.days}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-baloo font-bold text-lg mb-4">Navigation</h3>
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

        <div className="mt-12 pt-8 border-t border-ocean-700 flex flex-col sm:flex-row items-center justify-between gap-4">
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
