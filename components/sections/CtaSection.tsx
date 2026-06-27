"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GlowOrb } from "@/components/shared/GlowOrb";
import { FloatingNotes } from "@/components/shared/FloatingNotes";
import { REGISTRATION_URL, CONTACT_EMAIL } from "@/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-brand-dark-1 section-pad"
      aria-label="Call to action"
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(193,18,31,0.12) 0%, rgba(244,180,0,0.06) 40%, transparent 70%)",
        }}
      />

      <GlowOrb color="red" size="xl" intensity="medium" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <FloatingNotes />

      {/* Border glow lines */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
          >
            <span className="h-px w-6 bg-gold inline-block" aria-hidden="true" />
            The Stage Is Waiting
            <span className="h-px w-6 bg-gold inline-block" aria-hidden="true" />
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Ready To Let{" "}
            <span className="text-gold-shimmer">Your Voice</span>
            <br />
            Be Heard?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base text-white/55 md:text-lg"
          >
            Register today and begin your journey towards musical excellence.
            Slots are limited — don&rsquo;t miss your moment.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-red-gradient px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:shadow-[0_0_60px_rgba(193,18,31,0.6)]"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Register Now
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>

            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/30 hover:bg-white/[0.08]"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={18} aria-hidden="true" />
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
