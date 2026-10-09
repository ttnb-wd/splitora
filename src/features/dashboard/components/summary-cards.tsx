import { ArrowDownLeft, ArrowUpRight, Scale, WalletCards } from "lucide-react";
import { ClayCard } from "@/components/clay/clay-card";
import { ClaySurface } from "@/components/clay/clay-surface";
import { MotionItem, MotionReveal } from "@/components/motion/motion-reveal";
import type { MockSummary } from "../data/mock-dashboard";
import { AnimatedAmount } from "./animated-amount";

export function SummaryCards({ summary }: { summary: MockSummary }) {
  const cards = [
    { label: "Total Shared Expenses", cents: summary.totalSharedExpensesCents, tone: "lavender", ink: "text-lavender-ink", icon: WalletCards, detail: "Across 3 sample groups", signed: false },
    { label: "You Owe", cents: summary.youOweCents, tone: "peach", ink: "text-peach-ink", icon: ArrowUpRight, detail: "Your outstanding shares", signed: false },
    { label: "You Are Owed", cents: summary.youAreOwedCents, tone: "mint", ink: "text-mint-ink", icon: ArrowDownLeft, detail: "Others’ shares of what you paid", signed: false },
    { label: "Net Balance", cents: summary.netBalanceCents, tone: "warm", ink: "text-lavender-ink", icon: Scale, detail: "Overall, you’re owed", signed: true },
  ] as const;
  return <section aria-labelledby="summary-title" className="dashboard-section">
    <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><h2 id="summary-title" className="type-section">At a glance</h2><p className="type-caption">Sample balances · USD</p></div>
    <MotionReveal preset="stagger" className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
      {cards.map(({ label, cents, tone, ink, icon: Icon, detail, signed }) => <MotionItem key={label}>
        <ClayCard tone={tone} className="h-full p-4 sm:p-5">
          <ClaySurface tone={tone === "warm" ? "lavender" : tone} elevation="soft" className={"mb-4 flex size-10 items-center justify-center rounded-2xl " + ink}><Icon className="size-5" aria-hidden="true" /></ClaySurface>
          <h3 className="min-h-10 text-xs leading-relaxed font-semibold sm:text-sm">{label}</h3>
          <p className={"type-financial dashboard-amount mt-2 " + ink}><AnimatedAmount cents={cents} signed={signed} /></p>
          <p className="type-caption mt-2">{detail}</p>
        </ClayCard>
      </MotionItem>)}
    </MotionReveal>
  </section>;
}
