"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
        >
          <span className="h-px w-6 bg-gold inline-block" />
          {eyebrow}
          <span className="h-px w-6 bg-gold inline-block" />
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
      >
        {title}{" "}
        {titleAccent && (
          <span className="text-gold-shimmer">{titleAccent}</span>
        )}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mt-4 text-base text-brand-gray-3 md:text-lg",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
