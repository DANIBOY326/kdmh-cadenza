"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/shared/DynamicIcon";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlowOrb } from "@/components/shared/GlowOrb";
import { whyJoinCards } from "@/data";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function WhyJoinSection() {
  return (
    <section
      id="why-join"
      className="relative overflow-hidden section-pad bg-brand-black"
      aria-label="Why join Cadenza"
    >
      <GlowOrb color="red" size="xl" intensity="low" className="top-1/2 -translate-y-1/2 -left-32" />
      <GlowOrb color="gold" size="lg" intensity="low" className="-bottom-20 right-0" />

      {/* Decorative diagonal line */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14"
        >
          <SectionHeading
            eyebrow="Why Join"
            title="Six Reasons To"
            titleAccent="Sign Up"
            description="More than a competition — Cadenza is a life-changing experience built for musicians who believe their gift has a higher purpose."
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyJoinCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-brand-dark-1 p-7 transition-all duration-300 hover:border-primary/30"
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(193,18,31,0.08) 0%, transparent 70%)",
                }}
              />

              {/* Number */}
              <span
                aria-hidden="true"
                className="absolute top-5 right-5 font-heading text-5xl font-black text-white/[0.04] select-none"
              >
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-glow">
                <DynamicIcon
                  name={card.icon}
                  size={22}
                  className="text-primary transition-colors group-hover:text-gold"
                  aria-hidden="true"
                />
              </div>

              <h3 className="relative mb-2.5 font-heading text-lg font-bold text-white">
                {card.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-white/50">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
