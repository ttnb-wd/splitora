"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useHydratedReducedMotion } from "@/hooks/use-hydrated-reduced-motion";
import { formatMoney } from "../lib/format";

export function AnimatedAmount({ cents, signed = false }: { cents: number; signed?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const played = useRef(false);
  const inView = useInView(ref, { once: true });
  const reduced = useHydratedReducedMotion();
  const value = useMotionValue(cents);
  const display = useTransform(value, (latest) => formatMoney(Math.round(latest), signed));
  useEffect(() => {
    if (reduced || played.current) { value.set(cents); return; }
    if (!inView) return;
    played.current = true;
    value.set(cents * 0.92);
    const controls = animate(value, cents, { duration: 0.65, ease: [0.22, 1, 0.36, 1] });
    return () => { controls.stop(); value.set(cents); };
  }, [cents, inView, reduced, value]);
  return <span ref={ref}><span className="sr-only">{formatMoney(cents, signed)}</span><motion.span aria-hidden="true" data-counter={cents}>{display}</motion.span></span>;
}
