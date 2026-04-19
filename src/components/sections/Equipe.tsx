"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TEAM } from "@/app/lib/constants";
import { Directions, School, Users } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  directions: Directions,
  school: School,
  users: Users,
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

export default function Equipe() {
  return (
    <section id="equipe" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-ocean-100 text-ocean-700 rounded-full text-sm font-semibold mb-4">
              L&apos;Équipe
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-ocean-900 mb-6">
              L&apos;humain au{" "}
              <span className="gradient-text">cœur de tout</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une équipe passionnée et qualifiée, dédiée à l&apos;éveil et au bien-être de chaque enfant.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM.map((member, i) => {
            const Icon = iconMap[member.icon] || Users;
            return (
              <AnimatedSection key={i}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 25px 50px rgba(12, 74, 110, 0.15)" }}
                  className="p-8 rounded-2xl bg-white shadow-md border border-ocean-100 text-center transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-ocean-500/25">
                    <Icon size={36} className="text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-ocean-900 mb-1">{member.name}</h3>
                  <p className="text-coral-500 font-semibold text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
