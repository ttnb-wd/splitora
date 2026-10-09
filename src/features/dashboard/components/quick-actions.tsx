import { ArrowRight, Handshake, Plus, ReceiptText } from "lucide-react";
import { ClayCard } from "@/components/clay/clay-card";
import { ClaySurface } from "@/components/clay/clay-surface";
import { ComingSoonAction } from "./preview-dialog";

const actions = [
  { label: "Create Group", feature: "create-group", icon: Plus, tone: "lavender", detail: "Give your plans a shared home." },
  { label: "Add Expense", feature: "add-expense", icon: ReceiptText, tone: "peach", detail: "Keep the little details together." },
  { label: "Settle Up", feature: "settle-up", icon: Handshake, tone: "mint", detail: "Finish on a good note." },
] as const;

export function QuickActions() {
  return <section aria-labelledby="actions-title" className="dashboard-section">
    <ClayCard elevation="soft" className="p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2"><h2 id="actions-title" className="type-card">A little shortcut</h2><span className="type-caption">Actions coming soon</span></div>
      <div className="grid gap-3 md:grid-cols-3">{actions.map(({ label, feature, icon: Icon, tone, detail }) => <ComingSoonAction key={feature} feature={feature} variant={tone} className="w-full justify-start gap-3 rounded-3xl px-4 py-4 text-left">
        <ClaySurface tone={tone} elevation="soft" className="flex size-10 shrink-0 items-center justify-center rounded-2xl"><Icon className="size-5" aria-hidden="true" /></ClaySurface>
        <span className="min-w-0"><span className="block text-sm font-semibold">{label}</span><span className="mt-1 block text-xs leading-relaxed font-normal">{detail}</span></span><ArrowRight className="ml-auto size-4 shrink-0" aria-hidden="true" />
      </ComingSoonAction>)}</div>
      <p className="type-caption mt-4">Explore the previews. No groups, expenses, or payments are created here.</p>
      <noscript><p className="type-support mt-3">These actions aren’t available yet. Enable JavaScript to read their coming-soon previews.</p></noscript>
    </ClayCard>
  </section>;
}
