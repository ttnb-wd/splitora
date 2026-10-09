import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { ClayCard } from "@/components/clay/clay-card";
import { ClaySurface } from "@/components/clay/clay-surface";

export function EmptyState({ title, description, icon, action }: {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
}) {
  return <ClayCard elevation="soft" className="items-center px-6 py-10 text-center">
    <ClaySurface tone="lavender" className="mb-5 flex size-16 items-center justify-center rounded-3xl text-lavender-ink"><span aria-hidden="true">{icon ?? <Sparkles className="size-7" />}</span></ClaySurface>
    <h3 className="type-card">{title}</h3>
    <p className="type-support mt-3 max-w-sm">{description}</p>
    {action && <div className="mt-6">{action}</div>}
  </ClayCard>;
}
