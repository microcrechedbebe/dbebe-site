"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TEAM } from "@/app/lib/constants";
import { Compass, GraduationCap, Users } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  compass: Compass, school: GraduationCap, users: Users,
};

const gradients = [
  "from-ocean-400 to-ocean-500",
  "from-gold-400 to-peach-400",
  "from-ocean-300 to-gold-300",
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-16 sm:py-24 px-4 relative overflow-hidden bg-gradient-to-b from-cream to-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-200/15 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-600 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
              💛 L&apos;équipe
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-baloo font-bold text-ocean-800 mb-4 sm:mb-6">
              L&apos;humain au{" "}
              <span className="text-gradient-brand">cœur</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
              Passionnées, qualifiées, dédiées au bien-être de chaque enfant.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {TEAM.map((member, i) => {
            const Icon = iconMap[member.icon] || Users;
            return (
              <AnimatedSection key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 sm:p-8 rounded-2xl bg-white shadow-md border border-gray-100 text-center card-playful"
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-lg`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-baloo font-bold text-lg sm:text-xl text-ocean-800 mb-1">{member.name}</h3>
                  <p className="text-gold-500 font-bold text-xs sm:text-sm mb-2 sm:mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
