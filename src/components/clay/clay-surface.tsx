import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type ClayTone = "warm" | "lavender" | "mint" | "peach";
export type ClayElevation = "soft" | "raised" | "floating" | "inset" | "pressed";

export const clayToneClasses: Record<ClayTone, string> = {
  warm: "clay-warm", lavender: "clay-lavender", mint: "clay-mint", peach: "clay-peach",
};
export const clayElevationClasses: Record<ClayElevation, string> = {
  soft: "shadow-clay-soft", raised: "shadow-clay-raised", floating: "shadow-clay-floating",
  inset: "shadow-clay-inset", pressed: "shadow-clay-pressed",
};

export type ClaySurfaceProps = ComponentProps<"div"> & { tone?: ClayTone; elevation?: ClayElevation };

export function ClaySurface({ tone = "warm", elevation = "raised", className, ...props }: ClaySurfaceProps) {
  return <div className={cn("clay-surface", clayToneClasses[tone], clayElevationClasses[elevation], className)} {...props} />;
}

