"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, CreditCard, Video, Users, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlowOrb } from "@/components/shared/GlowOrb";
import { useCountdown } from "@/hooks/useCountdown";
import { padTwo } from "@/utils/countdown";
import { staggerContainer, fadeUp } from "@/lib/animations";
import {
  REGISTRATION_CLOSES,
  REGISTRATION_FEE,
  REGISTRATION_DEADLINE_DISPLAY,
  AUDITION_FORMAT,
} from "@/constants";

const details = [
  { icon: Calendar, label: "Registration Opens", value: "July 1, 2026" },
  { icon: Calendar, label: "Registration Closes", value: REGISTRATION_DEADLINE_DISPLAY },
  { icon: CreditCard, label: "Registration Fee", value: REGISTRATION_FEE },
  { icon: Video, label: "Audition Format", value: AUDITION_FORMAT },
  { icon: Users, label: "Panel of Judges", value: "3 Professional Judges" },
  { icon: MapPin, label: "Location", value: "Virtual: Nationwide & Diaspora" },
];

function CountdownUnit({ value = 0, label, }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="glass border-gradient flex h-16 w-16 items-center justify-center rounded-xl sm:h-20 sm:w-20">
        <span className="font-heading text-2xl font-black text-white sm:text-3xl">
          {padTwo(Number(value) || 0)}
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-widest text-white/40">{label}</span>
    </div>
  );
}

function CountdownTimer() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(REGISTRATION_CLOSES);

if (
  [days, hours, minutes, seconds].some(
    (v) => typeof v !== "number" || isNaN(v)
  )
) {
  return null;
}

  if (isExpired) {
    return (
      <p className="text-center font-heading text-lg font-semibold text-primary">
        Registration has closed.
      </p>
    );
  }
  return (
    <div className="flex items-end justify-center gap-3 sm:gap-5" aria-label="Time remaining until registration closes">
      <CountdownUnit value={days} label="Days" />
      <span className="mb-8 font-heading text-2xl font-bold text-gold/60 sm:mb-10 sm:text-3xl" aria-hidden="true">:</span>
      <CountdownUnit value={hours} label="Hours" />
      <span className="mb-8 font-heading text-2xl font-bold text-gold/60 sm:mb-10 sm:text-3xl" aria-hidden="true">:</span>
      <CountdownUnit value={minutes} label="Minutes" />
      <span className="mb-8 font-heading text-2xl font-bold text-gold/60 sm:mb-10 sm:text-3xl" aria-hidden="true">:</span>
      <CountdownUnit value={seconds} label="Seconds" />
    </div>
  );
}

export function CompetitionSection() {
  return (
    <section
      id="competition"
      className="relative overflow-hidden bg-brand-dark-1 section-pad"
      aria-label="Competition details"
    >
      <GlowOrb color="gold" size="xl" intensity="low" className="-top-20 left-1/2 -translate-x-1/2" />
      <GlowOrb color="red" size="lg" intensity="low" className="bottom-0 -right-24" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14"
        >
          <SectionHeading
            eyebrow="Competition Details"
            title="Everything You"
            titleAccent="Need To Know"
            description="Cadenza Music Season 3.0 is entirely virtual, making it accessible to talented musicians across Nigeria and beyond."
          />
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/[0.06] to-transparent p-8 text-center"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gold">
            Registration Closes In
          </p>
          <CountdownTimer />
        </motion.div>

        {/* Detail cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {details.map((detail) => (
            <motion.div
              key={detail.label}
              variants={fadeUp}
              className="glass group rounded-2xl border border-white/[0.06] p-6 transition-all duration-300 hover:border-gold/20"
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 transition-colors group-hover:bg-gold/20">
                <detail.icon size={18} className="text-gold" aria-hidden="true" />
              </div>
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/40">
                {detail.label}
              </p>
              <p className="font-heading text-lg font-semibold text-white">{detail.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
