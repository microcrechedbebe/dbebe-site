"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  PRACTICAL_INFO, FINANCIAL_INFO, HEALTH_INFO, RULES, CRECHE_INFO, DOCUMENTS_LINKS,
} from "@/app/lib/constants";
import {
  FileText, FolderOpen, Euro, Users, Stethoscope, AlertTriangle, Phone, ChevronDown,
} from "lucide-react";

const sectionIcons: Record<string, React.ElementType> = {
  "Inscription": FileText,
  "Documents nécessaires": FolderOpen,
  "Frais d'entrée": Euro,
  "Période de familiarisation": Users,
  "Santé": Stethoscope,
  "Allergies": AlertTriangle,
  "Urgences": Phone,
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Accordion({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-ocean-50/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-ocean-100 flex items-center justify-center">
            <Icon size={20} className="text-ocean-600" />
          </div>
          <span className="font-poppins font-semibold text-ocean-900">{title}</span>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={20} className="text-gray-400" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 pt-0">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default function Infos() {
  return (
    <section id="infos" className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-sand-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              Infos Pratiques
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-ocean-900 mb-6">
              Tout ce qu&apos;il faut{" "}
              <span className="gradient-text">savoir</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {PRACTICAL_INFO.map((section, i) => {
            const Icon = sectionIcons[section.title] || FileText;
            return (
              <Accordion key={i} title={section.title} icon={Icon}>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-coral-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Accordion>
            );
          })}

          <Accordion title={FINANCIAL_INFO.title} icon={Euro}>
            <div className="space-y-4">
              <div className="p-4 bg-coral-50 rounded-xl">
                <h4 className="font-poppins font-semibold text-coral-700 mb-2">{FINANCIAL_INFO.cmg.title}</h4>
                <p className="text-gray-600 text-sm">{FINANCIAL_INFO.cmg.description}</p>
              </div>
              <div className="p-4 bg-ocean-50 rounded-xl">
                <h4 className="font-poppins font-semibold text-ocean-700 mb-2">{FINANCIAL_INFO.taxCredit.title}</h4>
                <p className="text-gray-600 text-sm">{FINANCIAL_INFO.taxCredit.description}</p>
              </div>
              <p className="text-gray-500 text-sm italic">{FINANCIAL_INFO.mention}</p>
            </div>
          </Accordion>

          {HEALTH_INFO.map((section, i) => {
            const Icon = sectionIcons[section.title] || Stethoscope;
            return (
              <Accordion key={`health-${i}`} title={section.title} icon={Icon}>
                <p className="text-gray-600 text-sm">{section.description}</p>
              </Accordion>
            );
          })}

          <Accordion title="Règlement & Documents" icon={FolderOpen}>
            <div className="space-y-3">
              {RULES.map((rule, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <rule.icon size={18} className="text-ocean-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-ocean-900 text-sm">{rule.title}</p>
                    <p className="text-gray-600 text-xs mt-0.5">{rule.description}</p>
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-ocean-800 mb-3">Documents à télécharger :</p>
                <div className="flex flex-wrap gap-3">
                  {DOCUMENTS_LINKS.map((doc, i) => (
                    <a
                      key={i}
                      href={doc.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-ocean-100 text-ocean-700 rounded-lg text-sm font-medium hover:bg-ocean-200 transition-colors"
                    >
                      📄 {doc.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
