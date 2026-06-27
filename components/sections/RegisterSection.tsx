"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlowOrb } from "@/components/shared/GlowOrb";
import { staggerContainer, fadeUp } from "@/lib/animations";
import {
  PAYMENT_BANK,
  PAYMENT_ACCOUNT_NAME,
  PAYMENT_ACCOUNT_NUMBER,
  PAYMENT_DISCLAIMER,
  REGISTRATION_FEE,
} from "@/constants";

interface CopyFieldProps {
  label: string;
  value: string;
}

function CopyField({ label, value }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success(`${label} copied!`, {
        description: value,
        duration: 2500,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error("Failed to copy. Please copy manually.");
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium uppercase tracking-widest text-white/40">
        {label}
      </label>
      <div className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
        <span className="font-heading text-base font-semibold text-white sm:text-lg">
          {value}
        </span>
        <motion.button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
            copied
              ? "bg-green-500/20 text-green-400"
              : "bg-gold/10 text-gold hover:bg-gold/20"
          }`}
          whileTap={{ scale: 0.93 }}
          aria-label={`Copy ${label}`}
        >
          {copied ? (
            <>
              <Check size={12} aria-hidden="true" />
              Copied
            </>
          ) : (
            <>
              <Copy size={12} aria-hidden="true" />
              Copy
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}

export function RegisterSection() {
  return (
    <section
      id="register"
      className="relative overflow-hidden bg-brand-black section-pad"
      aria-label="Registration payment details"
    >
      <GlowOrb color="red" size="xl" intensity="medium" className="-top-20 left-1/2 -translate-x-1/2" />
      <GlowOrb color="gold" size="lg" intensity="low" className="bottom-0 -right-24" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14"
        >
          <SectionHeading
            eyebrow="Register Now"
            title="Secure Your"
            titleAccent="Audition Slot"
            description={`Registration fee is just ${REGISTRATION_FEE}. Pay to the account below, then complete the registration form.`}
          />
        </motion.div>

        <div className="mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/[0.07] via-transparent to-primary/[0.07] p-8"
          >
            {/* Corner decoration */}
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
            />

            {/* Header */}
            <div className="relative mb-8">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gold animate-pulse" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Payment Details
                </span>
              </div>
              <div className="h-px bg-gradient-to-r from-gold/40 via-gold/10 to-transparent" />
            </div>

            {/* Fields */}
            <div className="relative space-y-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-widest text-white/40">
                  Bank
                </label>
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
                  <span className="font-heading text-base font-semibold text-white sm:text-lg">
                    {PAYMENT_BANK}
                  </span>
                </div>
              </div>

              <CopyField label="Account Name" value={PAYMENT_ACCOUNT_NAME} />
              <CopyField label="Account Number" value={PAYMENT_ACCOUNT_NUMBER} />

              {/* Registration fee highlight */}
              <div className="flex items-center justify-between rounded-xl border border-gold/20 bg-gold/5 px-4 py-3">
                <span className="text-sm font-medium text-white/60">Registration Fee</span>
                <span className="font-heading text-xl font-black text-gold">
                  {REGISTRATION_FEE}
                </span>
              </div>
            </div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative mt-6 flex gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4"
              role="note"
              aria-label="Important payment note"
            >
              <AlertCircle
                size={18}
                className="mt-0.5 flex-shrink-0 text-amber-400"
                aria-hidden="true"
              />
              <p className="text-xs leading-relaxed text-amber-200/70">{PAYMENT_DISCLAIMER}</p>
            </motion.div>
          </motion.div>

          {/* After payment note */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center text-sm text-white/40"
          >
            After payment, proceed to complete the registration form above.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
