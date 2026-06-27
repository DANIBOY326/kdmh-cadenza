"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { buttonHover } from "@/lib/animations";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "gold" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-red-gradient text-white shadow-glow hover:shadow-[0_0_50px_rgba(193,18,31,0.5)] border border-primary/30",
  outline:
    "bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/5",
  gold: "bg-gold-gradient text-brand-black font-semibold shadow-glow-gold hover:shadow-[0_0_50px_rgba(244,180,0,0.4)]",
  ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  disabled,
  type = "button",
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-heading font-semibold transition-all duration-200 cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const hoverProps = buttonHover;

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        whileHover={buttonHover}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={disabled ? {} : buttonHover}
      whileTap={disabled ? {} : { scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
