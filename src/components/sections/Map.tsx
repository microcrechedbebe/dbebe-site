"use client";

import { CRECHE_INFO } from "@/app/lib/constants";
import { MapPin, ExternalLink } from "lucide-react";

export default function MapSection() {
  return (
    <section id="map" className="py-12 sm:py-16 px-4 relative overflow-hidden bg-gradient-to-b from-white to-cream">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-ocean-100 flex items-center justify-center">
              <MapPin size={18} className="text-ocean-500" />
            </div>
            <div>
              <h3 className="font-baloo font-bold text-ocean-800 text-base sm:text-lg">Nous trouver</h3>
              <p className="text-gray-500 text-sm">{CRECHE_INFO.address}, {CRECHE_INFO.city}</p>
            </div>
          </div>
          <a
            href={CRECHE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvrir dans Google Maps"
            className="flex items-center gap-2 px-4 py-2 bg-ocean-400 text-white rounded-full text-sm font-bold hover:bg-ocean-500 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400"
          >
            <ExternalLink size={14} />
            Ouvrir dans Maps
          </a>
        </div>

        <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-gray-100">
          <iframe
            title="Localisation Micro-crèche D'BEBE"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706.5!2d6.0227!3d47.2378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDE0JzE2LjEiTiA2wrAwMScyMS43IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
