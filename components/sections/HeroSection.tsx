"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, CreditCard, Video, Music2 } from "lucide-react";
import { FloatingNotes } from "@/components/shared/FloatingNotes";
import { GlowOrb } from "@/components/shared/GlowOrb";
import { fadeUp, staggerContainer, fadeIn } from "@/lib/animations";
import {
  REGISTRATION_URL,
  REGISTRATION_FEE,
  REGISTRATION_DEADLINE_DISPLAY,
  AUDITION_FORMAT,
} from "@/constants";

const quickInfo = [
  { icon: CreditCard, label: "Registration Fee", value: REGISTRATION_FEE },
  { icon: Calendar, label: "Deadline", value: REGISTRATION_DEADLINE_DISPLAY },
  { icon: Video, label: "Audition", value: "Virtual (Google Meet)" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-gradient pt-20"
      aria-label="Hero section"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <GlowOrb color="red" size="xl" intensity="medium" className="-top-32 left-1/2 -translate-x-1/2" />
      <GlowOrb color="gold" size="md" intensity="low" className="top-1/3 -right-20" />
      <GlowOrb color="red" size="md" intensity="low" className="bottom-1/4 -left-20" />

      {/* Spotlight ring */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-primary/10"
        animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-gold/10"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating musical notes */}
      <FloatingNotes />

      {/* Additional Decorative Notes */}
      <div className="absolute left-10 top-1/3 text-gold/30 text-6xl animate-pulse hidden lg:block">
        ♪
      </div>

      <div className="absolute right-10 top-1/2 text-gold/30 text-7xl animate-bounce hidden lg:block">
        ♫
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl"
        >
          {/* Season badge */}
          <motion.div variants={fadeUp} className="mb-6 flex justify-center">
            <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" aria-hidden="true" />
              King D Music Hub Presents
            </span>
          </motion.div>

          {/* Main headline */}
          {/* Main headline */}
<motion.div
  variants={fadeUp}
  className="flex items-center justify-center gap-4 md:gap-8"
>
  {/* Left Music Icon */}
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [0, -5, 5, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="hidden lg:block"
  >
    <Music2
      size={70}
      className="text-gold opacity-80"
    />
  </motion.div>

  {/* Main Heading */}
      <motion.h1
        className="font-heading text-5xl font-black leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Your Voice
        <span className="block text-gold-shimmer">
          Deserves To
        </span>
        <span className="block">
          Be Heard
        </span>
      </motion.h1>

      {/* Right Music Icon */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="hidden lg:block"
      >
        <Music2
          size={70}
          className="text-gold opacity-80"
        />
      </motion.div>
    </motion.div>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base text-white/60 md:text-xl"
          >
            Join <strong className="text-white font-semibold">Cadenza Music Season 3.0</strong> and
            showcase your God-given musical talent to the world.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-red-gradient px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:shadow-[0_0_50px_rgba(193,18,31,0.5)]"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Register Now
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>
            <motion.a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="glass inline-flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Quick info cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {quickInfo.map((info) => (
              <motion.div
                key={info.label}
                variants={fadeUp}
                className="glass-strong border-gradient rounded-2xl p-5 text-center"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-3 flex justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                    <info.icon size={20} className="text-gold" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-white/40">
                  {info.label}
                </p>
                <p className="mt-1 font-heading text-lg font-bold text-white">{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
            <div className="h-8 w-5 rounded-full border border-white/20 flex justify-center pt-1.5">
              <motion.div
                className="h-1.5 w-1 rounded-full bg-gold"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
