import type { ComponentProps } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { clayToneClasses, clayElevationClasses, type ClayTone, type ClayElevation } from "./clay-surface";

export type ClayCardProps = ComponentProps<typeof Card> & {
  tone?: ClayTone;
  elevation?: ClayElevation;
  /** Enables hover feedback for a card containing a real link or control. */
  interactive?: boolean;
};

export function ClayCard({ tone = "warm", elevation = "raised", interactive = false, className, ...props }: ClayCardProps) {
  return (
    <Card className={cn("clay-surface gap-0 overflow-visible rounded-3xl p-6 ring-0",
      clayToneClasses[tone], clayElevationClasses[elevation], interactive && "clay-interactive", className)} {...props} />
  );
}

