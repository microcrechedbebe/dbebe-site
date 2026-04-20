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
  "from-sky-400 to-sky-300",
  "from-sun-300 to-sun-400",
  "from-mint-300 to-mint-400",
  "from-coral-300 to-coral-400",
  "from-lilac-300 to-lilac-400",
  "from-sky-300 to-lilac-300",
  "from-sun-300 to-coral-300",
  "from-mint-300 to-sky-300",
  "from-coral-300 to-sun-300",
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
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
    <section id="day" className="py-20 sm:py-28 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-sun-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-mint-200/20 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-sun-50 text-sun-700 rounded-full text-sm font-bold mb-4">
              ☀️ Une journée type
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-baloo font-bold text-sky-900 mb-6">
              Le quotidien{" "}
              <span className="text-gradient-sky">chez D&apos;BEBE</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Chaque journée est pensée pour offrir un cadre sécurisant et stimulant.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Colorful line */}
          <div className="absolute left-6 sm:left-10 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-sky-300 via-coral-300 to-sun-300" />

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
                    <div className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md`}>
                      <Icon size={20} className="text-white" />
                    </div>

                    <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <span className="text-xs font-bold text-sky-500 bg-sky-50 px-2 py-0.5 rounded-full">
                        {item.time}
                      </span>
                      <p className="text-sky-900 font-semibold mt-1">{item.activity}</p>
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
