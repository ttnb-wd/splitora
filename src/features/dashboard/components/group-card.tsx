import { Check, Coffee, House, Plane } from "lucide-react";
import { ClayBadge } from "@/components/clay/clay-badge";
import { ClayCard } from "@/components/clay/clay-card";
import { ClaySurface } from "@/components/clay/clay-surface";
import type { MockGroup } from "../data/mock-dashboard";
import { formatMoney } from "../lib/format";

const icons = { travel: Plane, home: House, food: Coffee };
const avatarTones = { lavender: "bg-lavender-light text-lavender-ink", mint: "bg-mint text-mint-ink", peach: "bg-peach text-peach-ink" };

export function GroupCard({ group }: { group: MockGroup }) {
  const Icon = icons[group.category];
  const settled = group.balance.direction === "settled";
  const balanceLabel = group.balance.direction === "you-owe" ? "You owe" : group.balance.direction === "you-are-owed" ? "You are owed" : "Your balance";
  return <article aria-labelledby={"group-" + group.id} className="h-full">
    <ClayCard tone={group.tone} className="h-full p-5 sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-3">
        <ClaySurface tone={group.tone} className="flex size-12 items-center justify-center rounded-2xl"><Icon className="size-6" aria-hidden="true" /></ClaySurface>
        <ClayBadge variant={settled ? "success" : "neutral"} dot>{settled ? "Your share settled" : "To settle"}</ClayBadge>
      </div>
      <h3 id={"group-" + group.id} className="type-card">{group.name}</h3>
      <p className="type-support mt-1.5">{group.purpose}</p>
      <div className="mt-5 flex items-center gap-3">
        <div role="img" aria-label={"Sample members: " + group.members.map(member => member.name).join(", ")} className="flex -space-x-2">
          {group.members.map(member => <span key={member.id} aria-hidden="true" className={"sample-avatar " + avatarTones[member.tone]}>{member.initials}</span>)}
        </div>
        <span className="type-caption">{group.members.length} members</span>
      </div>
      <div className="mt-6 border-t border-border/50 pt-5">
        <p className="type-caption">Total expenses</p><p className="type-financial mt-1 text-3xl">{formatMoney(group.totalExpensesCents)}</p>
        <ClaySurface tone={group.tone} elevation="inset" className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl px-4 py-3">
          <span className="type-caption font-semibold">{balanceLabel}</span>
          <span className={"type-financial text-xl " + (group.balance.direction === "you-owe" ? "text-peach-ink" : "text-mint-ink")}>{settled ? <span className="inline-flex items-center gap-1.5 text-sm"><Check className="size-4" aria-hidden="true" />All clear</span> : formatMoney(group.balance.amountCents)}</span>
        </ClaySurface>
      </div>
    </ClayCard>
  </article>;
}
