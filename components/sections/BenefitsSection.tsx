"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/shared/DynamicIcon";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlowOrb } from "@/components/shared/GlowOrb";
import { benefits } from "@/data";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-brand-black section-pad"
      aria-label="Winner benefits"
    >
      <GlowOrb color="red" size="xl" intensity="low" className="-bottom-32 left-1/2 -translate-x-1/2" />
      <GlowOrb color="gold" size="md" intensity="low" className="top-10 -right-20" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14"
        >
          <SectionHeading
            eyebrow="Winner Benefits"
            title="What Awaits"
            titleAccent="The Winners"
            description="Cadenza celebrates more than talent - it invests in your future as an artist, minister, and leader in the music space."
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 ${
                benefit.highlight
                  ? "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 shadow-glow"
                  : "glass border border-white/[0.06] hover:border-primary/20"
              }`}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {benefit.highlight && (
                <>
                  {/* Star badge */}
                  <div className="absolute top-4 right-4 rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-black">
                    Featured
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 100%, rgba(193,18,31,0.3) 0%, transparent 70%)",
                    }}
                  />
                </>
              )}

              <div
                className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                  benefit.highlight
                    ? "bg-gold/20 group-hover:bg-gold/30"
                    : "bg-primary/10 group-hover:bg-primary/20"
                }`}
              >
                <DynamicIcon
                  name={benefit.icon}
                  size={22}
                  className={benefit.highlight ? "text-gold" : "text-primary"}
                  aria-hidden="true"
                />
              </div>

              <h3 className="relative mb-2.5 font-heading text-lg font-bold text-white">
                {benefit.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-white/50">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
