import { Split } from "lucide-react";
import { ClaySurface } from "@/components/clay/clay-surface";

export function Brand() {
  return (
    <a href="#top" aria-label="Splitora home" className="inline-flex min-h-12 shrink-0 items-center gap-2.5 rounded-2xl">
      <ClaySurface tone="lavender" className="flex size-11 items-center justify-center rounded-2xl">
        <Split className="size-6 text-lavender-ink" strokeWidth={2.5} aria-hidden="true" />
      </ClaySurface>
      <span className="text-2xl font-bold tracking-[-0.05em]">splitora<span className="text-lavender">.</span></span>
    </a>
  );
}
