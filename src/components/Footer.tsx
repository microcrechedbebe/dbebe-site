"use client";

import { CRECHE_INFO } from "@/app/lib/constants";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ocean-900 text-white">
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
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <span className="font-poppins font-bold text-xl">D&apos;BEBE</span>
                <span className="block text-ocean-300 text-xs">Micro-crèche</span>
              </div>
            </div>
            <p className="text-ocean-300 text-sm leading-relaxed mb-4">
              {CRECHE_INFO.tagline}
            </p>
            <div className="flex items-center gap-2 text-coral-400 text-sm">
              <Heart size={14} className="fill-coral-400" />
              <span>Fait avec passion à {CRECHE_INFO.city}</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a href={`tel:${CRECHE_INFO.phone.replace(/\\s/g, "")}`} className="flex items-center gap-3 text-ocean-300 hover:text-white transition-colors">
                <Phone size={18} />
                <span className="text-sm">{CRECHE_INFO.phone}</span>
              </a>
              <a href={`mailto:${CRECHE_INFO.email}`} className="flex items-center gap-3 text-ocean-300 hover:text-white transition-colors">
                <Mail size={18} />
                <span className="text-sm">{CRECHE_INFO.email}</span>
              </a>
              <div className="flex items-center gap-3 text-ocean-300">
                <MapPin size={18} />
                <span className="text-sm">{CRECHE_INFO.address}, {CRECHE_INFO.city}</span>
              </div>
              <div className="flex items-center gap-3 text-ocean-300">
                <Clock size={18} />
                <span className="text-sm">{CRECHE_INFO.hours} — {CRECHE_INFO.days}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Liens utiles</h3>
            <div className="space-y-2">
              <a href="#accueil" className="block text-ocean-300 hover:text-white transition-colors text-sm">Accueil</a>
              <a href="#projet" className="block text-ocean-300 hover:text-white transition-colors text-sm">Notre projet</a>
              <a href="#equipe" className="block text-ocean-300 hover:text-white transition-colors text-sm">L&apos;équipe</a>
              <a href="#quotidien" className="block text-ocean-300 hover:text-white transition-colors text-sm">Le quotidien</a>
              <a href="#infos" className="block text-ocean-300 hover:text-white transition-colors text-sm">Infos pratiques</a>
              <a href="#familles" className="block text-ocean-300 hover:text-white transition-colors text-sm">Inscription</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ocean-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ocean-400 text-xs">
            © {new Date().getFullYear()} Micro-crèche D&apos;BEBE. Tous droits réservés.
          </p>
          <p className="text-ocean-500 text-xs">
            Agrément PMI vérifié • Capacité {CRECHE_INFO.capacity} places
          </p>
        </div>
      </div>
    </footer>
  );
}
