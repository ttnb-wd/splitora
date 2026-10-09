"use client";

import { useRef, useSyncExternalStore, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useHydratedReducedMotion } from "@/hooks/use-hydrated-reduced-motion";

function subscribe(change: () => void) {
  const media = window.matchMedia("(min-width: 768px)");
  media.addEventListener("change", change);
  return () => media.removeEventListener("change", change);
}

export function FloatingVisual({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useHydratedReducedMotion();
  const desktop = useSyncExternalStore(subscribe, () => window.matchMedia("(min-width: 768px)").matches, () => false);
  const inView = useInView(ref, { amount: 0.15 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], [8, -8]);
  const animate = desktop && !reduced && inView;
  return (
    <motion.div ref={ref} style={{ y: desktop && !reduced ? drift : 0 }}>
      <motion.div animate={{ y: animate ? [0, -7, 0] : 0 }} transition={animate ? { duration: 7, ease: "easeInOut", repeat: Infinity } : { duration: 0 }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
