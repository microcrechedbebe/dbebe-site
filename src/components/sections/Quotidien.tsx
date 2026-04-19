"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DAILY_SCHEDULE } from "@/app/lib/constants";
import { Sunrise, Coffee, Palette, Utensils, Bath, Moon, Cookie, Gamepad2, Home } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  sunrise: Sunrise,
  coffee: Coffee,
  palette: Palette,
  utensils: Utensils,
  bath: Bath,
  moon: Moon,
  cookie: Cookie,
  "gamepad-2": Gamepad2,
  home: Home,
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

export default function Quotidien() {
  return (
    <section id="quotidien" className="py-20 sm:py-28 px-4 bg-gradient-to-b from-white/50 to-ocean-50/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-sun-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
              Une journée type
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-ocean-900 mb-6">
              Le quotidien{" "}
              <span className="gradient-text">chez D&apos;BEBE</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque journée est pensée pour offrir un cadre sécurisant et stimulant,
              rythmé par les besoins de chaque enfant.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean-300 via-coral-300 to-sun-300 rounded-full" />

          <div className="space-y-6">
            {DAILY_SCHEDULE.map((item, i) => {
              const Icon = iconMap[item.icon] || Sunrise;
              return (
                <AnimatedSection key={i}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="relative flex items-start gap-4 sm:gap-6 pl-2"
                  >
                    {/* Icon circle */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg border-2 border-ocean-200 flex items-center justify-center">
                      <Icon size={i === 0 ? 22 : 24} className="text-ocean-600" />
                    </div>

                    {/* Content card */}
                    <div className="flex-1 bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-coral-500 bg-coral-50 px-2 py-0.5 rounded-full">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-ocean-900 font-semibold">{item.activity}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
