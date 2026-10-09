import { ArrowDownLeft, ReceiptText, Waves } from "lucide-react";
import { ClayBadge } from "@/components/clay/clay-badge";
import { ClayCard } from "@/components/clay/clay-card";
import { ClaySurface } from "@/components/clay/clay-surface";
import { MotionReveal } from "@/components/motion/motion-reveal";
import type { MockActivity, MockGroup } from "../data/mock-dashboard";
import { formatDemoDate, formatMoney } from "../lib/format";
import { EmptyState } from "./empty-state";

export function RecentActivity({ activities, groups }: { activities: readonly MockActivity[]; groups: readonly MockGroup[] }) {
  return <section id="activity" tabIndex={-1} aria-labelledby="activity-title" className="dashboard-section">
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><h2 id="activity-title" className="type-section">The latest little moments</h2><p className="type-support mt-1">Shared expenses and settlements, at a glance.</p></div><p className="type-caption">Sample activity · USD</p></div>
    {activities.length === 0 ? <EmptyState title="A little quiet, for now." description="Shared expenses and settlements will appear here. Your group’s next moment is still to come." icon={<Waves className="size-7" />} /> :
      <MotionReveal preset="fade"><ClayCard className="px-4 py-2 sm:px-6">
        <ul className="divide-y divide-border/60">{activities.map(activity => {
          const group = groups.find(item => item.id === activity.groupId);
          const settlement = activity.kind === "settlement";
          const Icon = settlement ? ArrowDownLeft : ReceiptText;
          return <li key={activity.id} className="activity-row grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-x-3 gap-y-2 py-5 sm:items-center sm:gap-x-4">
            <ClaySurface tone={settlement ? "mint" : group?.tone ?? "lavender"} elevation="soft" className="flex size-11 items-center justify-center rounded-2xl"><Icon className="size-5" aria-hidden="true" /></ClaySurface>
            <div className="min-w-0"><h3 className="text-sm leading-relaxed font-semibold">{activity.description}</h3><p className="type-caption mt-1">{group?.name ?? "Sample group"}</p><p className="type-caption mt-1"><time dateTime={activity.date}>{formatDemoDate(activity.date)}</time><span aria-hidden="true"> · </span><span>Paid by {activity.paidBy}</span></p></div>
            <div className="text-right"><p className="type-financial whitespace-nowrap text-base sm:text-lg">{formatMoney(activity.amountCents)}</p><div className="mt-2 flex justify-end"><ClayBadge variant={settlement ? "success" : "lavender"} dot>{settlement ? "Settled" : "Shared"}</ClayBadge></div></div>
          </li>;
        })}</ul>
      </ClayCard></MotionReveal>}
  </section>;
}
