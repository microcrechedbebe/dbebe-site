"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PEDAGOGICAL_AXES } from "@/app/lib/constants";
import {
  Heart, Baby, Sparkles, Eye, MessageCircle, Globe, Leaf, Activity, Handshake,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  heart: Heart, baby: Baby, sparkles: Sparkles, eye: Eye,
  "message-circle": MessageCircle, globe: Globe, leaf: Leaf,
  activity: Activity, handshake: Handshake,
};

const colorStyles = [
  { bg: "bg-sky-100", icon: "bg-sky-300", text: "text-sky-700", border: "border-sky-200" },
  { bg: "bg-coral-50", icon: "bg-coral-300", text: "text-coral-600", border: "border-coral-200" },
  { bg: "bg-sun-50", icon: "bg-sun-300", text: "text-sun-700", border: "border-sun-200" },
  { bg: "bg-mint-50", icon: "bg-mint-300", text: "text-mint-600", border: "border-mint-200" },
  { bg: "bg-lilac-50", icon: "bg-lilac-300", text: "text-lilac-600", border: "border-lilac-200" },
  { bg: "bg-peach-50", icon: "bg-peach-300", text: "text-peach-600", border: "border-peach-200" },
  { bg: "bg-sky-50", icon: "bg-sky-400", text: "text-sky-600", border: "border-sky-200" },
  { bg: "bg-coral-50", icon: "bg-coral-400", text: "text-coral-700", border: "border-coral-100" },
  { bg: "bg-sun-50", icon: "bg-sun-400", text: "text-sun-600", border: "border-sun-100" },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-4">
              ✨ Notre monde
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-baloo font-bold text-sky-900 mb-6">
              Un univers pensé pour{" "}
              <span className="text-gradient-warm">s&apos;éveiller</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              9 piliers pédagogiques pour accompagner chaque enfant dans son développement.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PEDAGOGICAL_AXES.map((axe, i) => {
            const Icon = iconMap[axe.icon] || Heart;
            const style = colorStyles[i % colorStyles.length];
            return (
              <AnimatedSection key={i}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`p-6 rounded-2xl ${style.bg} border ${style.border} card-playful cursor-default`}
                >
                  <div className={`w-12 h-12 rounded-xl ${style.icon} flex items-center justify-center mb-4`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className={`font-baloo font-bold text-lg ${style.text} mb-2`}>{axe.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{axe.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
