"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

interface CounterProps {
  to: number;
  format?: boolean;
  className?: string;
}

export function Counter({ to, format, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;
    const controls = animate(0, to, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, to, shouldReduceMotion]);

  const display = shouldReduceMotion ? to : value;

  return (
    <span ref={ref} className={className}>
      {format ? display.toLocaleString("en-US") : display}
    </span>
  );
}
