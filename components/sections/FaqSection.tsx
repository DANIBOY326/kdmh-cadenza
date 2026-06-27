"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlowOrb } from "@/components/shared/GlowOrb";
import { faqItems } from "@/data";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-brand-dark-1 section-pad"
      aria-label="Frequently asked questions"
    >
      <GlowOrb color="gold" size="lg" intensity="low" className="top-1/2 -translate-y-1/2 -right-24" />
      <GlowOrb color="red" size="md" intensity="low" className="-left-16 bottom-10" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14"
        >
          <SectionHeading
            eyebrow="FAQ"
            title="Got Questions?"
            titleAccent="We Have Answers."
            description="Everything you need to know about Cadenza Music Season 3.0, from eligibility to auditions."
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-3xl space-y-3"
        >
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === i
                  ? "border-gold/25 bg-gradient-to-br from-gold/[0.05] to-transparent"
                  : "border-white/[0.06] bg-brand-dark-2 hover:border-white/[0.12]"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="font-heading text-sm font-semibold text-white sm:text-base">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 0 : 0 }}
                  className={`flex-shrink-0 rounded-full p-1 transition-colors ${
                    openIndex === i ? "text-gold" : "text-white/40"
                  }`}
                  aria-hidden="true"
                >
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/[0.06] px-6 pb-5 pt-4">
                      <p className="text-sm leading-relaxed text-white/55">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
