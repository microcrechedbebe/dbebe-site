"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FAQ } from "@/app/lib/constants";
import { ChevronDown } from "lucide-react";

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

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-ocean-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400"
      >
        <span className="font-semibold text-ocean-800 text-sm sm:text-base">{question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-7 h-7 rounded-full bg-ocean-100 flex items-center justify-center"
        >
          <ChevronDown size={16} className="text-ocean-500" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-500 text-sm leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 px-4 relative overflow-hidden bg-gradient-to-b from-cream to-white">
      <div className="absolute top-0 right-0 w-72 h-72 bg-ocean-200/10 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 bg-ocean-100 text-ocean-600 rounded-full text-xs sm:text-sm font-bold mb-3">
              ❓ Questions fréquentes
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-baloo font-bold text-ocean-800 mb-4">
              Tout ce que vous{" "}
              <span className="text-gradient-brand">voulez savoir</span>
            </h2>
            <p className="text-base text-gray-500 max-w-lg mx-auto">
              Les réponses aux questions les plus fréquentes des familles.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-3">
          {FAQ.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} index={i} />
          ))}
        </AnimatedSection>

        <AnimatedSection className="mt-8 p-5 bg-ocean-50 rounded-2xl border border-ocean-100 text-center">
          <p className="text-ocean-700 text-sm">
            Vous ne trouvez pas votre réponse ?{" "}
            <a href="tel:0951886006" className="font-bold text-ocean-600 hover:text-ocean-800 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400 rounded">
              Appelez-nous au 09 51 88 60 06
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
