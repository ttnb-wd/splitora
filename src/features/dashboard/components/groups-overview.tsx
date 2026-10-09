import { Users } from "lucide-react";
import { ClayBadge } from "@/components/clay/clay-badge";
import { MotionItem, MotionReveal } from "@/components/motion/motion-reveal";
import type { MockGroup } from "../data/mock-dashboard";
import { EmptyState } from "./empty-state";
import { GroupCard } from "./group-card";

export function GroupsOverview({ groups }: { groups: readonly MockGroup[] }) {
  return <section id="groups" tabIndex={-1} aria-labelledby="groups-title" className="dashboard-section">
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><h2 id="groups-title" className="type-section">Your circles</h2><p className="type-support mt-1">A little home for every shared plan.</p></div><ClayBadge variant="lavender">{groups.length} sample {groups.length === 1 ? "group" : "groups"}</ClayBadge></div>
    {groups.length === 0 ? <EmptyState title="Good company starts here." description="Your groups will have a home here. Group creation is coming soon." icon={<Users className="size-7" />} /> :
      <MotionReveal preset="stagger" className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{groups.map(group => <MotionItem key={group.id}><GroupCard group={group} /></MotionItem>)}</MotionReveal>}
  </section>;
}
