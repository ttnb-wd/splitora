import { ArrowDown, Check, Coffee, DollarSign, Heart, Split } from "lucide-react";
import { ClayBadge } from "@/components/clay/clay-badge";
import { ClayCard } from "@/components/clay/clay-card";
import { ClaySurface } from "@/components/clay/clay-surface";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { FloatingVisual } from "./floating-visual";
import { GetStartedLink, SectionLink } from "./landing-actions";
import { MemberAvatars } from "./member-avatars";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="landing-hero grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
      <MotionReveal preset="slide" className="relative z-10 max-w-xl">
        <p className="landing-eyebrow mb-5">A softer way to share</p>
        <h1 id="hero-title" className="type-display">Good company.<br /><span className="text-lavender-ink">Better balance.</span></h1>
        <p className="type-body mt-6 max-w-[420px] text-muted-foreground sm:text-lg">Split bills, track shared expenses, and settle up effortlessly — all in one beautifully simple place.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <GetStartedLink />
          <SectionLink href="#how-it-works">See How It Works<ArrowDown className="size-4" aria-hidden="true" /></SectionLink>
        </div>
        <p className="type-caption mt-5">Explore the demo. No account or sign-up required.</p>
        <noscript><p className="type-support mt-3">The dashboard is a public demo. Onboarding is not yet available.</p></noscript>
        <div className="mt-8 flex items-center gap-3 sm:mt-10">
          <span aria-hidden="true" className="flex -space-x-1.5">
            <span className="size-7 rounded-full border-2 border-background bg-lavender shadow-clay-soft" />
            <span className="size-7 rounded-full border-2 border-background bg-mint shadow-clay-soft" />
            <span className="size-7 rounded-full border-2 border-background bg-peach shadow-clay-soft" />
          </span>
          <span className="type-caption">For friends, flatmates, and the good times.</span>
        </div>
      </MotionReveal>

      <MotionReveal preset="spring" className="mx-auto w-full max-w-[470px]">
        <FloatingVisual>
          <figure className="hero-scene relative isolate m-0 flex items-center justify-center">
            <div aria-hidden="true" className="clay-orbit absolute top-12 right-5 size-[260px] rotate-12 rounded-[4.5rem] sm:size-[300px]" />
            <div aria-hidden="true" className="absolute bottom-12 left-10 size-24 rounded-full bg-peach-light shadow-clay-inset" />
            <ClaySurface tone="mint" elevation="floating" aria-hidden="true" className="absolute top-2 right-2 z-20 flex size-[76px] rotate-12 items-center justify-center rounded-full sm:size-20">
              <DollarSign className="size-9 text-mint-ink" strokeWidth={2.5} />
            </ClaySurface>
            <ClayCard tone="lavender" elevation="floating" className="relative z-10 w-[310px] max-w-[86%] -rotate-3 rounded-[1.75rem] p-6 sm:p-7">
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="type-label text-lavender-ink">A shared moment</span>
                <Split className="size-5 text-lavender-ink" aria-hidden="true" />
              </div>
              <p className="type-support">Your share</p>
              <p className="type-financial mt-1 text-6xl">$48<span className="text-4xl">.50</span></p>
              <p className="type-caption mt-2">of $194.00 · Dinner for four</p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
                <MemberAvatars />
                <ClayBadge variant="success"><Check className="size-3" aria-hidden="true" />Equal split</ClayBadge>
              </div>
            </ClayCard>
            <ClaySurface tone="peach" elevation="floating" aria-hidden="true" className="absolute bottom-9 left-0 z-20 flex size-[70px] -rotate-12 items-center justify-center rounded-3xl sm:left-2 sm:size-20">
              <Coffee className="size-8 text-peach-ink" />
            </ClaySurface>
            <ClaySurface tone="warm" elevation="floating" className="absolute right-0 bottom-8 z-20 flex items-center gap-2 rounded-2xl px-4 py-3 sm:bottom-10">
              <Heart className="size-4 text-peach-ink" aria-hidden="true" /><span className="type-caption font-semibold">Shared, simply.</span>
            </ClaySurface>
            <span aria-hidden="true" className="absolute top-4 left-12 size-4 rounded-full bg-peach shadow-clay-soft" />
            <span aria-hidden="true" className="absolute right-8 bottom-0 size-3 rounded-full bg-mint shadow-clay-soft" />
            <figcaption className="type-caption absolute -bottom-8 left-0 w-full text-center">Illustrative preview · A little less math. A lot more together.</figcaption>
          </figure>
        </FloatingVisual>
      </MotionReveal>
    </section>
  );
}
