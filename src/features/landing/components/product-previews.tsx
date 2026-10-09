import { ArrowDownLeft, Check, Link2, Sparkles, Split, Users } from "lucide-react";
import { ClayBadge } from "@/components/clay/clay-badge";
import { ClayCard } from "@/components/clay/clay-card";
import { ClaySurface } from "@/components/clay/clay-surface";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { sampleExpenses } from "../data/landing-content";
import { MemberAvatars } from "./member-avatars";

export function GuestSharingSection() {
  return (
    <section id="guest-sharing" tabIndex={-1} aria-labelledby="guest-title" className="landing-section">
      <ClaySurface elevation="soft" className="grid items-center gap-10 rounded-[2rem] p-6 sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:p-12">
        <MotionReveal>
          <ClayBadge variant="success" dot>Planned guest sharing</ClayBadge>
          <h2 id="guest-title" className="type-page mt-5">A place for everyone.<br /><span className="text-mint-ink">Even the plus-ones.</span></h2>
          <p className="type-body mt-5 max-w-sm text-muted-foreground">We’re designing a guest-friendly way to join a group through an invite link. Less setup, more time for the plans you made together.</p>
          <ul className="mt-6 space-y-4">
            {["One shared link to bring your people together", "An easy-to-follow view of the group’s expenses", "Clear participation, without the extra fuss"].map((text) => <li key={text} className="flex items-start gap-3 text-sm leading-relaxed"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint"><Check className="size-3 text-mint-ink" aria-hidden="true" /></span>{text}</li>)}
          </ul>
          <p className="type-caption mt-6 max-w-sm">Concept preview. Guest access and invitations will be introduced in a future release.</p>
        </MotionReveal>
        <MotionReveal preset="spring" className="relative mx-auto w-full max-w-[370px] pb-3">
          <div aria-hidden="true" className="absolute top-16 -left-3 size-36 rounded-full bg-mint-light shadow-clay-inset sm:-left-6" />
          <ClayCard elevation="floating" className="relative mx-auto w-[280px] max-w-full rounded-[2.5rem] border-[5px] border-white/80 p-5 pb-7">
            <div aria-hidden="true" className="mx-auto mb-6 h-1.5 w-14 rounded-full bg-border/70" />
            <div className="mb-5 flex items-center justify-between"><span className="type-label">A little adventure</span><Split className="size-4 text-lavender-ink" aria-hidden="true" /></div>
            <ClaySurface tone="mint" className="mb-5 flex items-center gap-3 rounded-2xl p-4"><Users className="size-6 shrink-0 text-mint-ink" aria-hidden="true" /><div><p className="type-label text-mint-ink">You’re in good company</p><p className="type-caption mt-1">4 friends · Sample group</p></div></ClaySurface>
            <MemberAvatars className="justify-center" />
            <p className="type-support mt-5 text-center">The next good memory,<br />with everyone in the picture.</p>
            <ClaySurface tone="lavender" elevation="soft" className="mt-5 rounded-2xl p-3 text-center"><span className="type-label text-lavender-ink">Guest participation preview</span></ClaySurface>
          </ClayCard>
          <ClaySurface tone="peach" elevation="floating" className="relative -mt-3 flex items-center gap-3 rounded-2xl p-4 sm:-ml-4">
            <Link2 className="size-5 shrink-0 text-peach-ink" aria-hidden="true" />
            <div className="min-w-0"><p className="type-caption font-semibold text-peach-ink">Conceptual invite link</p><p className="mt-1 text-sm font-medium break-all">splitora.example / your-group</p></div>
          </ClaySurface>
          <p className="type-caption mt-4 text-center">Illustration only · This link isn’t active.</p>
        </MotionReveal>
      </ClaySurface>
    </section>
  );
}

export function ProductPreviewSection() {
  return (
    <section id="product-preview" tabIndex={-1} aria-labelledby="product-title" className="landing-section">
      <MotionReveal className="mx-auto mb-9 max-w-xl text-center">
        <p className="landing-eyebrow mb-3">The bigger picture</p>
        <h2 id="product-title" className="type-page">Everything shared.<br /><span className="text-lavender-ink">All a little clearer.</span></h2>
        <p className="type-body mt-4 text-muted-foreground">A calm place for the numbers, so you can get back to the moments.</p>
      </MotionReveal>
      <MotionReveal preset="spring">
        <figure className="m-0">
          <ClaySurface elevation="floating" className="rounded-[2rem] p-4 sm:p-7 lg:p-9">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
              <div className="flex items-center gap-3"><ClaySurface tone="lavender" className="flex size-12 shrink-0 items-center justify-center rounded-2xl"><Sparkles className="size-5 text-lavender-ink" aria-hidden="true" /></ClaySurface><div><h3 className="type-card">A little adventure</h3><p className="type-caption mt-1">Weekend away · Sample group</p></div></div>
              <div className="flex items-center gap-3"><MemberAvatars /><ClayBadge variant="lavender">Product concept</ClayBadge></div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <ClayCard tone="lavender" elevation="soft" className="p-5"><p className="type-support">Total expenses</p><p className="type-financial mt-2 text-4xl">$538.00</p><p className="type-caption mt-2">Three shared moments</p></ClayCard>
              <ClayCard tone="mint" elevation="soft" className="p-5"><p className="type-support">Your balance</p><p className="type-financial mt-2 text-4xl text-mint-ink">+$185.50</p><p className="type-caption mt-2 flex items-center gap-1"><ArrowDownLeft className="size-3" aria-hidden="true" />You’re owed · Sample balance</p></ClayCard>
              <ClayCard tone="peach" elevation="soft" className="justify-center p-5"><p className="type-support mb-3">Settlement status</p><ClayBadge variant="warning" dot>To settle</ClayBadge><p className="type-caption mt-3">A clear next step for the group</p></ClayCard>
            </div>
            <div className="mt-7 flex items-center justify-between gap-3"><h4 className="type-label">Recent shared expenses</h4><span className="type-caption">Illustrative data</span></div>
            <ul className="mt-3 divide-y divide-border/60">
              {sampleExpenses.map(({ title, detail, amount, share, icon: Icon, tone, ink }) => (
                <li key={title} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-4 sm:gap-4">
                  <ClaySurface tone={tone} elevation="soft" className={"flex size-11 items-center justify-center rounded-2xl " + ink}><Icon className="size-5" aria-hidden="true" /></ClaySurface>
                  <div className="min-w-0"><p className="text-sm leading-snug font-semibold">{title}</p><p className="type-caption mt-1">{detail}</p></div>
                  <div className="text-right"><p className="type-financial text-base sm:text-lg">{amount}</p><p className="type-caption mt-1"><span className="hidden sm:inline">Your share </span>{share}</p></div>
                </li>
              ))}
            </ul>
          </ClaySurface>
          <figcaption className="type-caption mt-5 text-center">An illustrative look at what’s coming. All names, amounts, and statuses are sample data.</figcaption>
        </figure>
      </MotionReveal>
    </section>
  );
}
