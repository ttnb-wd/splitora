"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { useHydratedReducedMotion } from "@/hooks/use-hydrated-reduced-motion";
import { entranceVariants, type EntrancePreset } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & { preset?: EntrancePreset };

export function MotionReveal({ preset = "slide", children, ...props }: RevealProps) {
  const reduced = useHydratedReducedMotion();
  return (
    <motion.div data-reveal initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      variants={entranceVariants(preset, reduced)} {...props}>
      {children}
    </motion.div>
  );
}

export function MotionItem({ children, ...props }: HTMLMotionProps<"div">) {
  const reduced = useHydratedReducedMotion();
  return <motion.div data-reveal variants={entranceVariants("spring", reduced)} {...props}>{children}</motion.div>;
}



