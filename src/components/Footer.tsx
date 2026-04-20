"use client";

import { CRECHE_INFO, DOCUMENTS_LINKS } from "@/app/lib/constants";
import { MapPin, Phone, Mail, Clock, Heart, FileText } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ocean-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 bg-white rounded-xl overflow-hidden flex items-center justify-center">
                <Image src="/logo.png" alt="Logo D'BEBE" fill className="object-contain p-0.5" />
              </div>
              <div>
                <span className="font-baloo font-bold text-lg">D&apos;BEBE</span>
                <span className="block text-[9px] text-ocean-300 tracking-widest uppercase">Micro-crèche</span>
              </div>
            </div>
            <p className="text-ocean-300 text-sm leading-relaxed mb-4">
              Un cocon d&apos;éveil chaleureux pour révéler le potentiel de chaque enfant, dès 10 semaines.
            </p>
            <div className="flex items-center gap-2 text-gold-300 text-sm">
              <Heart size={13} className="fill-gold-300" aria-hidden="true" />
              <span>Fait avec amour à Besançon</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-baloo font-bold text-base mb-3">Contact</h3>
            <div className="space-y-2.5">
              <a href={`tel:${CRECHE_INFO.phone.replace(/\s/g, "")}`} aria-label="Appeler la micro-crèche" className="flex items-center gap-2 text-ocean-300 hover:text-white transition-colors text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded">
                <Phone size={13} aria-hidden="true" /><span>{CRECHE_INFO.phone}</span>
              </a>
              <a href={`mailto:${CRECHE_INFO.email}`} aria-label="Envoyer un email" className="flex items-center gap-2 text-ocean-300 hover:text-white transition-colors text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded">
                <Mail size={13} aria-hidden="true" /><span>{CRECHE_INFO.email}</span>
              </a>
              <a href={CRECHE_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Voir l'adresse sur Google Maps" className="flex items-start gap-2 text-ocean-300 hover:text-white transition-colors text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" aria-hidden="true" /><span>{CRECHE_INFO.address}, {CRECHE_INFO.city}</span>
              </a>
              <div className="flex items-center gap-2 text-ocean-300 text-sm">
                <Clock size={13} aria-hidden="true" /><span>{CRECHE_INFO.hours} — {CRECHE_INFO.days}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-baloo font-bold text-base mb-3">Navigation</h3>
            <div className="space-y-2">
              {[
                { href: "#about", label: "Notre monde" },
                { href: "#team", label: "L'équipe" },
                { href: "#day", label: "Une journée" },
                { href: "#tarifs", label: "Tarifs" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Inscription" },
              ].map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)} className="block text-ocean-300 hover:text-white transition-colors text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div>
            <h3 className="font-baloo font-bold text-base mb-3">Documents</h3>
            <div className="space-y-2">
              {DOCUMENTS_LINKS.map((doc, i) => (
                <a key={i} href={doc.path} target="_blank" rel="noopener noreferrer" aria-label={`Télécharger ${doc.name}`} className="flex items-start gap-2 text-ocean-300 hover:text-white transition-colors text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded">
                  <FileText size={13} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{doc.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 border-t border-ocean-700 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ocean-400 text-xs">© {new Date().getFullYear()} Micro-crèche D&apos;BEBE — Tous droits réservés</p>
          <p className="text-ocean-500 text-xs">Agrément PMI • {CRECHE_INFO.capacity} places • {CRECHE_INFO.surface}</p>
        </div>
      </div>
    </footer>
  );
}
