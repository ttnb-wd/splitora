import { Sparkles } from "lucide-react";
import { ClayBadge } from "@/components/clay/clay-badge";
import { ClaySurface } from "@/components/clay/clay-surface";
import { MotionItem, MotionReveal } from "@/components/motion/motion-reveal";
import type { DemoIdentity } from "../data/demo-access";
import { mockActivities, mockGroups, mockSnapshotDate, mockSummary } from "../data/mock-dashboard";
import { formatDemoDate } from "../lib/format";
import { GroupsOverview } from "./groups-overview";
import { QuickActions } from "./quick-actions";
import { RecentActivity } from "./recent-activity";
import { SummaryCards } from "./summary-cards";

export function DashboardOverview({ identity }: { identity: DemoIdentity }) {
  return <main id="main-content" tabIndex={-1} className="dashboard-main">
    <MotionReveal preset="stagger" className="mb-8">
      <MotionItem><div className="mb-5 flex flex-wrap items-center gap-2"><ClayBadge variant="lavender" dot>Demonstration</ClayBadge><span className="type-caption">Fixed snapshot · <time dateTime={mockSnapshotDate}>{formatDemoDate(mockSnapshotDate)}</time></span></div></MotionItem>
      <MotionItem><h1 className="type-page">Hey {identity.firstName},<br className="sm:hidden" /> good to see you<span className="text-lavender">.</span></h1><p className="type-body mt-3 max-w-xl text-muted-foreground">Here’s a little clarity for your shared moments.<br className="hidden sm:block" /> Your people, your plans, and where the sample balances stand.</p></MotionItem>
      <MotionItem><ClaySurface tone="lavender" elevation="soft" className="mt-6 flex items-start gap-3 rounded-2xl px-4 py-3"><Sparkles className="mt-0.5 size-4 shrink-0 text-lavender-ink" aria-hidden="true" /><p className="text-xs leading-relaxed text-lavender-ink"><strong>Just a preview.</strong> All people, groups, expenses, and balances are mock data. This public demo isn’t connected to an account.</p></ClaySurface></MotionItem>
    </MotionReveal>
    <SummaryCards summary={mockSummary} />
    <QuickActions />
    <GroupsOverview groups={mockGroups} />
    <RecentActivity activities={mockActivities} groups={mockGroups} />
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-5"><p className="type-caption">Splitora · Good company. Better balance.</p><p className="type-caption">Mock dashboard · No live financial data</p></footer>
  </main>;
}
