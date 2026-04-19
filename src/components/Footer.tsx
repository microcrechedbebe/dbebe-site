"use client";

import { CRECHE_INFO } from "@/app/lib/constants";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060810]">
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
                <span className="font-space font-bold text-xl text-white">D&apos;BEBE</span>
                <span className="block text-[10px] text-white/30 tracking-widest uppercase">Micro-crèche</span>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed mb-4">
              Un cocon d&apos;éveil innovant pour révéler le potentiel de chaque enfant.
            </p>
            <div className="flex items-center gap-2 text-[#f472b6] text-sm">
              <Heart size={14} className="fill-[#f472b6]" />
              <span>Fait avec passion à {CRECHE_INFO.city}</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-space font-bold text-lg text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a href={`tel:${CRECHE_INFO.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-white/40 hover:text-white transition-colors">
                <Phone size={16} />
                <span className="text-sm">{CRECHE_INFO.phone}</span>
              </a>
              <a href={`mailto:${CRECHE_INFO.email}`} className="flex items-center gap-3 text-white/40 hover:text-white transition-colors">
                <Mail size={16} />
                <span className="text-sm">{CRECHE_INFO.email}</span>
              </a>
              <div className="flex items-center gap-3 text-white/40">
                <MapPin size={16} />
                <span className="text-sm">{CRECHE_INFO.address}, {CRECHE_INFO.city}</span>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <Clock size={16} />
                <span className="text-sm">{CRECHE_INFO.hours} — {CRECHE_INFO.days}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-space font-bold text-lg text-white mb-4">Navigation</h3>
            <div className="space-y-2">
              {[
                { href: "#about", label: "Notre monde" },
                { href: "#team", label: "L'équipe" },
                { href: "#day", label: "Une journée" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-white/40 hover:text-white transition-colors text-sm">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Micro-crèche D&apos;BEBE
          </p>
          <p className="text-white/15 text-xs">
            Agrément PMI • {CRECHE_INFO.capacity} places • {CRECHE_INFO.surface}
          </p>
        </div>
      </div>
    </footer>
  );
}
