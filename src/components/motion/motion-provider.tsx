"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { claySpring } from "@/lib/motion";

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user" transition={claySpring}>{children}</MotionConfig>;
}

