"use client";

import { ClayButton, type ClayButtonProps } from "./clay-button";
import { cn } from "@/lib/utils";

export type ClayIconButtonProps = Omit<ClayButtonProps, "aria-label"> & {
  label: string;
  shape?: "square" | "circle";
};

export function ClayIconButton({ label, shape = "square", children, className, ...props }: ClayIconButtonProps) {
  return (
    <ClayButton aria-label={label} className={cn("size-12 min-h-12 p-0", shape === "square" ? "rounded-2xl" : "rounded-full", className)} {...props}>
      <span aria-hidden="true" className="inline-flex">{children}</span>
    </ClayButton>
  );
}

