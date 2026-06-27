"use client";

import { motion } from "framer-motion";
import { Heart, Eye, Zap } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlowOrb } from "@/components/shared/GlowOrb";
import { stats } from "@/data";
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from "@/lib/animations";

const pillars = [
  {
    icon: Heart,
    title: "Mission",
    description:
      "To discover, nurture, and celebrate exceptional musical talent across Nigeria and the diaspora through a faith-centred platform that honours God and uplifts communities.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To build the most inspiring gospel and faith-based music competition in Africa - a movement that raises generational voices of excellence.",
  },
  {
    icon: Zap,
    title: "Purpose",
    description:
      "Every Cadenza season is a divine appointment - a convergence of talent, mentorship, and spiritual growth that releases musicians into their God-ordained calling.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-brand-dark-1 section-pad"
      aria-label="About Cadenza"
    >
      <GlowOrb color="gold" size="xl" intensity="low" className="-top-20 -right-32" />
      <GlowOrb color="red" size="lg" intensity="low" className="bottom-0 -left-24" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="About Cadenza"
            title="Faith. Discovery."
            titleAccent="Excellence."
            description="Cadenza Music Season 3.0 is a platform organised by King D Music Hub dedicated to discovering, nurturing, and showcasing exceptional musical talents while promoting faith, creativity, and excellence."
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="glass border-gradient rounded-2xl p-6 text-center"
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ duration: 0.25 }}
            >
              <p className="font-heading text-4xl font-black text-gold-shimmer md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/50 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={i === 0 ? fadeLeft : i === 2 ? fadeRight : fadeUp}
              className="glass border-gradient group rounded-2xl p-8 transition-all duration-300 hover:border-gold/20"
              whileHover={{ y: -6 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 transition-colors group-hover:bg-gold/20">
                <pillar.icon size={24} className="text-gold" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
