import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type ClayBadgeVariant = "neutral" | "lavender" | "success" | "warning" | "danger";
const variants: Record<ClayBadgeVariant, string> = {
  neutral: "clay-warm text-muted-foreground", lavender: "clay-lavender text-lavender-ink",
  success: "clay-mint text-mint-ink", warning: "bg-warning-surface text-warning",
  danger: "bg-destructive-surface text-destructive",
};

export type ClayBadgeProps = ComponentProps<"span"> & { variant?: ClayBadgeVariant; dot?: boolean };

export function ClayBadge({ variant = "neutral", dot = false, children, className, ...props }: ClayBadgeProps) {
  return (
    <span className={cn("inline-flex w-fit items-center gap-1.5 rounded-full border border-white/70 px-3 py-1.5 text-xs font-semibold shadow-clay-soft",
      variant === "neutral" || variant === "lavender" || variant === "success" ? "clay-surface" : "",
      variants[variant], className)} {...props}>
      {dot && <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}

