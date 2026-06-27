"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.3);

  useEffect(() => {
    if (!inView) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(startValue + (value - startValue) * eased));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
