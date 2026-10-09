import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ClayInputProps = Omit<ComponentProps<"input">, "id"> & {
  id: string;
  label: string;
  description?: string;
  error?: string;
  leading?: ReactNode;
  containerClassName?: string;
};

export function ClayInput({
  id, label, description, error, leading, className, containerClassName,
  "aria-describedby": describedBy, "aria-invalid": invalid, ...props
}: ClayInputProps) {
  const descriptionId = description ? id + "-description" : undefined;
  const errorId = error ? id + "-error" : undefined;
  const descriptions = [describedBy, descriptionId, errorId].filter(Boolean).join(" ") || undefined;
  return (
    <div className={cn("space-y-2.5", containerClassName)}>
      <label htmlFor={id} className="type-label block">{label}</label>
      <div className="relative">
        {leading && <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-muted-foreground">{leading}</span>}
        <input id={id} aria-describedby={descriptions} aria-invalid={error ? true : invalid}
          className={cn("clay-input", leading && "pl-11", className)} {...props} />
      </div>
      {description && <p id={descriptionId} className="type-caption">{description}</p>}
      {error && <p id={errorId} className="text-xs leading-relaxed text-destructive">{error}</p>}
    </div>
  );
}

