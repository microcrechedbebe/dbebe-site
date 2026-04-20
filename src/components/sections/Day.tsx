"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DAILY_SCHEDULE } from "@/app/lib/constants";
import { Sunrise, Coffee, Palette, Utensils, Bath, Moon, Cookie, Gamepad2, Home } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  sunrise: Sunrise, coffee: Coffee, palette: Palette, utensils: Utensils,
  bath: Bath, moon: Moon, cookie: Cookie, "gamepad-2": Gamepad2, home: Home,
};

const timeColors = [
  "from-ocean-400 to-ocean-300",
  "from-gold-300 to-gold-400",
  "from-ocean-300 to-gold-300",
  "from-peach-300 to-gold-400",
  "from-ocean-300 to-peach-300",
  "from-ocean-400 to-ocean-300",
  "from-gold-300 to-peach-300",
  "from-ocean-300 to-ocean-400",
  "from-gold-400 to-peach-400",
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -15 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Day() {
  return (
    <section id="day" className="py-16 sm:py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-ocean-200/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-200/15 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold-50 text-gold-600 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
              ☀️ Une journée type
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-baloo font-bold text-ocean-800 mb-4 sm:mb-6">
              Le quotidien{" "}
              <span className="text-gradient-brand">chez D&apos;BEBE</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
              Chaque journée est pensée pour offrir un cadre sécurisant et stimulant.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Colorful line */}
          <div className="absolute left-5 sm:left-9 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-ocean-300 via-gold-300 to-peach-300" />

          <div className="space-y-3 sm:space-y-4">
            {DAILY_SCHEDULE.map((item, i) => {
              const Icon = iconMap[item.icon] || Sunrise;
              const gradient = timeColors[i % timeColors.length];
              return (
                <AnimatedSection key={i}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="relative flex items-start gap-3 sm:gap-5 pl-1"
                  >
                    <div className={`relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md`}>
                      <Icon size={18} className="text-white" />
                    </div>

                    <div className="flex-1 bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <span className="text-[10px] sm:text-xs font-bold text-ocean-500 bg-ocean-50 px-2 py-0.5 rounded-full">
                        {item.time}
                      </span>
                      <p className="text-ocean-800 font-semibold text-sm sm:text-base mt-0.5 sm:mt-1">{item.activity}</p>
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
