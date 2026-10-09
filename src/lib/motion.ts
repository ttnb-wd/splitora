import type { Transition, Variants } from "motion/react";

export const claySpring: Transition = { type: "spring", stiffness: 380, damping: 30, mass: 0.7 };
export const entranceSpring: Transition = { type: "spring", stiffness: 180, damping: 24, mass: 0.8 };

export type EntrancePreset = "fade" | "slide" | "spring" | "stagger";

export function entranceVariants(preset: EntrancePreset, reduced: boolean): Variants {
  if (reduced) {
    return { hidden: { opacity: 0 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.12 } } };
  }
  const hidden = preset === "fade" || preset === "stagger"
    ? { opacity: 0 }
    : preset === "spring" ? { opacity: 0, y: 14, scale: 0.97 } : { opacity: 0, y: 16 };
  return {
    hidden,
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: preset === "stagger"
        ? { duration: 0.2, staggerChildren: 0.07, delayChildren: 0.04 }
        : preset === "spring" ? entranceSpring : { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

export function overlayVariants(reduced: boolean): { panel: Variants; backdrop: Variants } {
  return {
    panel: {
      hidden: reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 },
      visible: { opacity: 1, scale: 1, y: 0, transition: reduced ? { duration: 0.12 } : entranceSpring },
      exit: reduced ? { opacity: 0, transition: { duration: 0.12 } }
        : { opacity: 0, scale: 0.98, y: 6, transition: { duration: 0.16 } },
    },
    backdrop: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: reduced ? 0.12 : 0.2 } },
      exit: { opacity: 0, transition: { duration: 0.15 } },
    },
  };
}


