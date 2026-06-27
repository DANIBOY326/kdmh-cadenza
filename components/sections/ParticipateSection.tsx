"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DynamicIcon } from "@/components/shared/DynamicIcon";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlowOrb } from "@/components/shared/GlowOrb";
import { steps } from "@/data";
import { REGISTRATION_URL } from "@/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function ParticipateSection() {
  return (
    <section
      id="participate"
      className="relative overflow-hidden bg-brand-dark-1 section-pad"
      aria-label="How to participate"
    >
      <GlowOrb color="red" size="lg" intensity="low" className="top-0 -left-24" />
      <GlowOrb color="gold" size="md" intensity="low" className="bottom-0 -right-16" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14"
        >
          <SectionHeading
            eyebrow="How To Participate"
            title="Four Simple Steps"
            titleAccent="To The Stage"
            description="Getting into Cadenza is straightforward. Follow these steps and your audition slot is secured."
          />
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute top-12 left-0 right-0 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(244,180,0,0.2) 20%, rgba(244,180,0,0.2) 80%, transparent 100%)",
            }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="group flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent transition-all duration-300 group-hover:border-gold/60 group-hover:shadow-glow-gold"
                    whileHover={{ scale: 1.08 }}
                  >
                    <DynamicIcon
                      name={step.icon}
                      size={28}
                      className="text-gold mb-1"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-bold text-gold/60">Step {step.step}</span>
                  </motion.div>

                  {/* Arrow between steps (except last) */}
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute top-1/2 -right-3 -translate-y-1/2 hidden lg:block"
                    >
                      <ArrowRight size={16} className="text-gold/30" />
                    </div>
                  )}
                </div>

                {/* Content card */}
                <div className="glass rounded-2xl border border-white/[0.06] p-6 transition-all duration-300 group-hover:border-gold/20">
                  <h3 className="mb-2 font-heading text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <motion.a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-red-gradient px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:shadow-[0_0_50px_rgba(193,18,31,0.5)]"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Journey
            <ArrowRight size={18} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
