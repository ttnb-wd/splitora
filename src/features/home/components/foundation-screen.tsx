import { ArrowDownLeft, ArrowUpRight, Check, CircleCheck, Coffee, DollarSign, Layers, Leaf, ShieldCheck, Sparkles, Split, WalletCards } from "lucide-react";
import { ClayBadge } from "@/components/clay/clay-badge";
import { ClayCard } from "@/components/clay/clay-card";
import { ClayInput } from "@/components/clay/clay-input";
import { ClaySurface } from "@/components/clay/clay-surface";
import { MotionItem, MotionReveal } from "@/components/motion/motion-reveal";
import { ButtonPlayground } from "./button-playground";
import { NavigationPreview } from "./navigation-preview";

const surfaceSamples = [
  { tone: "lavender", title: "A little adventure", value: "$256.80", detail: "Weekend away · Sample total", icon: WalletCards, ink: "text-lavender-ink" },
  { tone: "mint", title: "Back in balance", value: "$32.00", detail: "All settled · Sample amount", icon: Leaf, ink: "text-mint-ink" },
  { tone: "peach", title: "Coffee & catch-ups", value: "$18.60", detail: "Three coffees · Sample total", icon: Coffee, ink: "text-peach-ink" },
] as const;

export function FoundationScreen() {
  return (
    <>
      <header className="showcase-shell flex items-center justify-between gap-3 py-7 sm:py-9">
        <div className="flex items-center gap-3">
          <ClaySurface tone="lavender" className="flex size-12 items-center justify-center rounded-2xl">
            <Split className="size-6 text-lavender-ink" strokeWidth={2.5} aria-hidden="true" />
          </ClaySurface>
          <span className="text-2xl font-bold tracking-[-0.05em]">splitora<span className="text-lavender">.</span></span>
        </div>
        <div className="flex items-center gap-4">
          <span className="type-caption hidden tracking-[0.12em] uppercase sm:block">02 / Visual foundation</span>
          <ClayBadge variant="lavender" dot>Design preview</ClayBadge>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="showcase-shell pb-12 sm:pb-16">
        <section aria-labelledby="preview-title" className="grid items-center gap-8 pt-6 pb-12 sm:pt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-16">
          <MotionReveal preset="slide" className="max-w-xl">
            <p className="mb-5 text-xs font-semibold tracking-[0.16em] text-lavender-ink uppercase">A softer way to share</p>
            <h1 id="preview-title" className="type-display">Good company.<br /><span className="text-lavender-ink">Better balance.</span></h1>
            <p className="type-body mt-6 max-w-sm text-muted-foreground">
              Less friction. More together.<br />
              A tactile visual playground for Splitora.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <div aria-hidden="true" className="flex -space-x-1.5">
                <span className="size-7 rounded-full border-2 border-background bg-lavender shadow-clay-soft" />
                <span className="size-7 rounded-full border-2 border-background bg-mint shadow-clay-soft" />
                <span className="size-7 rounded-full border-2 border-background bg-peach shadow-clay-soft" />
              </div>
              <span className="type-caption">Soft by design. Light by nature.</span>
            </div>
          </MotionReveal>

          <MotionReveal preset="spring" className="relative isolate mx-auto flex min-h-[345px] w-full max-w-[440px] items-center justify-center">
            <div aria-hidden="true" className="clay-orbit absolute top-10 right-7 size-64 rotate-12 rounded-[4.5rem] sm:size-72" />
            <ClaySurface tone="mint" elevation="floating" aria-hidden="true" className="absolute top-1 right-1 flex size-20 rotate-12 items-center justify-center rounded-full sm:right-4">
              <DollarSign className="size-9 text-mint-ink" strokeWidth={2.5} />
            </ClaySurface>
            <ClayCard tone="lavender" elevation="floating" className="relative z-10 mt-5 w-[300px] max-w-[86%] -rotate-3 rounded-[1.75rem] p-7">
              <div className="mb-7 flex items-center justify-between gap-3">
                <span className="type-label text-lavender-ink">A shared moment</span>
                <Split className="size-5 text-lavender-ink" aria-hidden="true" />
              </div>
              <p className="type-support">Your share</p>
              <p className="type-financial mt-1 text-6xl">$48<span className="text-4xl">.50</span></p>
              <p className="type-caption mt-2">of $194.00 · Dinner for four</p>
              <div className="mt-7 flex items-center justify-between gap-2">
                <div className="flex -space-x-2" aria-label="Four sample participants">
                  {["AJ", "MK", "SL", "YOU"].map((name, index) => (
                    <span key={name} className={"sample-avatar " + (index === 3 ? "bg-lavender-light text-lavender-ink text-[9px]" : index === 1 ? "bg-mint text-mint-ink" : "bg-peach text-peach-ink")}>{name}</span>
                  ))}
                </div>
                <ClayBadge variant="success"><Check className="size-3" aria-hidden="true" /> Equal split</ClayBadge>
              </div>
            </ClayCard>
            <ClaySurface tone="peach" elevation="floating" aria-hidden="true" className="absolute bottom-0 left-0 z-20 flex size-[76px] -rotate-12 items-center justify-center rounded-[1.5rem] sm:left-4">
              <Coffee className="size-8 text-peach-ink" />
            </ClaySurface>
            <span className="type-caption absolute right-2 bottom-0">Made of pixels. Feels like clay.</span>
          </MotionReveal>
        </section>

        <section id="surfaces" aria-labelledby="surfaces-title" className="pb-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="type-caption mb-2 tracking-[0.12em] uppercase">01 / Soft surfaces</p>
              <h2 id="surfaces-title" className="type-section">Room for the good things.</h2>
            </div>
            <span className="type-caption">Pastel surfaces · Sample values</span>
          </div>
          <MotionReveal preset="stagger" className="grid gap-5 sm:grid-cols-3 sm:gap-6">
            {surfaceSamples.map(({ tone, title, value, detail, icon: Icon, ink }) => (
              <MotionItem key={tone}>
                <ClayCard tone={tone} className="h-full p-6 sm:p-5 lg:p-6">
                  <ClaySurface tone={tone} className={"mb-5 flex size-12 items-center justify-center rounded-2xl " + ink}>
                    <Icon className="size-6" aria-hidden="true" />
                  </ClaySurface>
                  <h3 className="type-card">{title}</h3>
                  <p className="type-financial mt-3 text-4xl">{value}</p>
                  <p className="type-caption mt-2">{detail}</p>
                </ClayCard>
              </MotionItem>
            ))}
          </MotionReveal>
        </section>

        <div className="grid items-start gap-6 lg:grid-cols-[1.12fr_1fr]">
          <MotionReveal preset="fade">
            <section id="buttons" aria-labelledby="buttons-title">
              <ClayCard interactive className="p-6 sm:p-8">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="type-caption mb-2 tracking-[0.12em] uppercase">02 / Tactile controls</p>
                    <h2 id="buttons-title" className="type-section">Every tap has a little lift.</h2>
                    <p className="type-support mt-3">Puffy edges. Gentle springs. A soft landing.</p>
                  </div>
                  <Sparkles className="mt-1 size-5 shrink-0 text-lavender-ink" aria-hidden="true" />
                </div>
                <ButtonPlayground />
              </ClayCard>
            </section>
          </MotionReveal>
          <MotionReveal preset="slide">
            <section id="inputs" aria-labelledby="inputs-title">
              <ClayCard className="p-6 sm:p-8">
                <p className="type-caption mb-2 tracking-[0.12em] uppercase">03 / A comfortable place to type</p>
                <h2 id="inputs-title" className="type-section">Details, gently tucked in.</h2>
                <p className="type-support mt-3 mb-7">Recessed fields with clear, confident focus.</p>
                <div className="space-y-5">
                  <ClayInput id="sample-note" label="A name for the moment" placeholder="Friday dinner with friends"
                    description="An editable field for trying the input style." />
                  <ClayInput id="sample-amount" label="Total amount" type="text" inputMode="decimal"
                    defaultValue="194.00" leading={<DollarSign className="size-4" />} />
                  <ClayInput id="sample-error" label="Amount · Error preview" placeholder="0.00" inputMode="decimal"
                    error="Enter an amount greater than zero." />
                  <ClayInput id="sample-disabled" label="Currency · Disabled preview" defaultValue="USD — US Dollar" disabled />
                </div>
              </ClayCard>
            </section>
          </MotionReveal>
        </div>

        <section aria-labelledby="details-title" className="pt-12">
          <div className="mb-6">
            <p className="type-caption mb-2 tracking-[0.12em] uppercase">04 / The quieter details</p>
            <h2 id="details-title" className="type-section">Clarity is a good feeling.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <ClayCard className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <ClaySurface tone="mint" className="flex size-11 items-center justify-center rounded-2xl">
                  <ShieldCheck className="size-5 text-mint-ink" aria-hidden="true" />
                </ClaySurface>
                <h3 className="type-card">A clear status. At a glance.</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <ClayBadge variant="success" dot>Settled</ClayBadge>
                <ClayBadge variant="warning" dot>Pending</ClayBadge>
                <ClayBadge variant="lavender" dot>Shared</ClayBadge>
                <ClayBadge variant="danger" dot>Needs attention</ClayBadge>
                <ClayBadge>Draft</ClayBadge>
              </div>
              <ClaySurface elevation="inset" className="mt-7 grid grid-cols-2 gap-3 rounded-2xl p-5">
                <div>
                  <p className="type-caption flex items-center gap-1"><ArrowDownLeft className="size-3" aria-hidden="true" /> You receive</p>
                  <p className="type-financial mt-1 text-2xl text-mint-ink">+$32.00</p>
                </div>
                <div>
                  <p className="type-caption flex items-center gap-1"><ArrowUpRight className="size-3" aria-hidden="true" /> Your share</p>
                  <p className="type-financial mt-1 text-2xl">$48.50</p>
                </div>
              </ClaySurface>
              <p className="type-caption mt-4">Tabular figures keep every amount easy to compare.</p>
            </ClayCard>
            <ClayCard tone="lavender" className="flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="mb-4 flex items-center gap-2 text-lavender-ink">
                  <Layers className="size-4" aria-hidden="true" /><span className="type-label">A floating little home</span>
                </div>
                <h3 className="type-card">Made for thumbs. And for you.</h3>
                <p className="type-support mt-3 max-w-sm">A raised navigation preview, with generous touch targets and a lavender place to land.</p>
              </div>
              <div className="mt-8 flex justify-center pb-3"><NavigationPreview /></div>
              <p className="type-caption mt-5 text-center">Preview links explore this page. No app routes yet.</p>
            </ClayCard>
          </div>
        </section>

        <section aria-labelledby="type-title" className="mt-12">
          <ClaySurface elevation="soft" className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="type-caption mb-3 tracking-[0.12em] uppercase">05 / A friendly voice</p>
              <h2 id="type-title" className="type-page">Clear words.<br />Comfortable numbers.</h2>
              <p className="type-support mt-4 max-w-xs">A modern system sans-serif, a steady rhythm, and deep slate that stays gentle on the eyes.</p>
            </div>
            <div className="space-y-4 md:border-l md:border-border md:pl-8">
              <div className="flex items-baseline justify-between gap-4"><span className="type-section">Better together</span><span className="type-caption">Section</span></div>
              <div className="flex items-baseline justify-between gap-4"><span className="type-card">Shared, simply.</span><span className="type-caption">Card</span></div>
              <div className="flex items-baseline justify-between gap-4"><span className="type-body">Every little detail counts.</span><span className="type-caption">Body</span></div>
              <div className="flex items-baseline justify-between gap-4"><span className="type-label">Your share</span><span className="type-caption">Label</span></div>
              <div className="flex items-baseline justify-between gap-4"><span className="type-financial text-3xl">$1,284.50</span><span className="type-caption">Financial</span></div>
            </div>
          </ClaySurface>
        </section>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-6">
          <p className="type-caption">Splitora · Smart Split Bill &amp; Group Expense Manager</p>
          <span className="type-caption flex items-center gap-1.5"><CircleCheck className="size-3.5 text-mint-ink" aria-hidden="true" /> A visual foundation. All values are samples.</span>
        </footer>
      </main>
    </>
  );
}

