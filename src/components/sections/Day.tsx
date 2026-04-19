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
  "from-[#4f9cf7] to-[#22d3ee]",
  "from-[#22d3ee] to-[#4f9cf7]",
  "from-[#a855f7] to-[#4f9cf7]",
  "from-[#fb923c] to-[#f472b6]",
  "from-[#f472b6] to-[#a855f7]",
  "from-[#a855f7] to-[#4f9cf7]",
  "from-[#22d3ee] to-[#a855f7]",
  "from-[#4f9cf7] to-[#fb923c]",
  "from-[#fb923c] to-[#f472b6]",
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Day() {
  return (
    <section id="day" className="py-24 sm:py-32 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#22d3ee]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#fb923c]/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 glass rounded-full text-xs font-medium text-[#22d3ee] tracking-wider uppercase mb-6">
              Une journée type
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-space font-bold text-white mb-6">
              Le quotidien{" "}
              <span className="text-gradient">chez D&apos;BEBE</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Glowing line */}
          <div className="absolute left-6 sm:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-[#4f9cf7] via-[#a855f7] to-[#fb923c] opacity-30" />

          <div className="space-y-4">
            {DAILY_SCHEDULE.map((item, i) => {
              const Icon = iconMap[item.icon] || Sunrise;
              const gradient = timeColors[i % timeColors.length];
              return (
                <AnimatedSection key={i}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="relative flex items-start gap-4 sm:gap-6 pl-2"
                  >
                    <div className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                      <Icon size={20} className="text-white" />
                    </div>

                    <div className="flex-1 glass rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                      <span className="text-xs font-bold text-[#4f9cf7] bg-[#4f9cf7]/10 px-2 py-0.5 rounded-full">
                        {item.time}
                      </span>
                      <p className="text-white font-medium mt-1">{item.activity}</p>
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
