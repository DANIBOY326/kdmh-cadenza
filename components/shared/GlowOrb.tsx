"use client";

import { cn } from "@/utils/cn";

interface GlowOrbProps {
  color?: "red" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  intensity?: "low" | "medium" | "high";
}

const colorMap = {
  red: "bg-primary",
  gold: "bg-gold",
};

const sizeMap = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-96 h-96",
  xl: "w-[32rem] h-[32rem]",
};

const intensityMap = {
  low: "opacity-[0.06]",
  medium: "opacity-[0.12]",
  high: "opacity-[0.18]",
};

export function GlowOrb({
  color = "red",
  size = "lg",
  className,
  intensity = "low",
}: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-[100px]",
        colorMap[color],
        sizeMap[size],
        intensityMap[intensity],
        className
      )}
    />
  );
}
