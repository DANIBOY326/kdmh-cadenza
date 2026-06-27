"use client";

import { useState, useEffect } from "react";
import { getCountdown, type CountdownValues } from "@/utils/countdown";

export function useCountdown(targetDate: Date): CountdownValues {
  const [countdown, setCountdown] = useState<CountdownValues>(
    getCountdown(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
}
