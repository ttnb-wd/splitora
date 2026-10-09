"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { useHydratedReducedMotion } from "@/hooks/use-hydrated-reduced-motion";
import { LoaderCircle } from "lucide-react";
import { claySpring } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type ClayButtonVariant = "primary" | "secondary" | "lavender" | "mint" | "peach";
const variants: Record<ClayButtonVariant, string> = {
  primary: "clay-primary", secondary: "clay-warm text-foreground", lavender: "clay-lavender text-lavender-ink",
  mint: "clay-mint text-mint-ink", peach: "clay-peach text-peach-ink",
};

export type ClayButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  variant?: ClayButtonVariant;
  loading?: boolean;
  loadingLabel?: string;
};

export function ClayButton({
  children, variant = "primary", loading = false, loadingLabel = "Working",
  disabled, className, type = "button", ...props
}: ClayButtonProps) {
  const reduced = useHydratedReducedMotion();
  const blocked = disabled || loading;
  return (
    <motion.button type={type} disabled={blocked} aria-busy={loading || undefined}
      whileHover={blocked || reduced ? {} : { y: -3 }}
      whileTap={blocked || reduced ? {} : { y: 1.5, scale: 0.965 }}
      transition={claySpring}
      className={cn("clay-surface clay-button", variants[variant], className)} {...props}>
      {loading && <LoaderCircle className="size-4 motion-safe:animate-spin" aria-hidden="true" />}
      {loading ? loadingLabel : children}
    </motion.button>
  );
}

