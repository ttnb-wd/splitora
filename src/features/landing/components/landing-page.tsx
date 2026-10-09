import { ArrowRight, Check, Heart, Sparkles } from "lucide-react";
import { ClayBadge } from "@/components/clay/clay-badge";
import { ClayCard } from "@/components/clay/clay-card";
import { ClaySurface } from "@/components/clay/clay-surface";
import { MotionItem, MotionReveal } from "@/components/motion/motion-reveal";
import { features, navigation, plans, steps } from "../data/landing-content";
import { Brand } from "./brand";
import { HeroSection } from "./hero-section";
import { GetStartedButton, GetStartedLink, SectionLink } from "./landing-actions";
import { LandingNavigation } from "./landing-navigation";
import { GuestSharingSection, ProductPreviewSection } from "./product-previews";

function FeaturesSection() {
  return (
    <section id="features" tabIndex={-1} aria-labelledby="features-title" className="landing-section">
      <MotionReveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div><p className="landing-eyebrow mb-3">Less friction. More together.</p><h2 id="features-title" className="type-page">Room for the good things.</h2></div>
        <p className="type-support max-w-xs">Four thoughtful essentials.<br />One simpler way to share, in the making.</p>
      </MotionReveal>
      <MotionReveal preset="stagger" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, description, icon: Icon, tone, ink, detail }) => (
          <MotionItem key={title}>
            <article className="h-full" aria-label={title}>
              <ClayCard tone={tone} className="h-full p-6 lg:p-5 xl:p-6">
                <ClaySurface tone={tone === "warm" ? "lavender" : tone} className={"mb-6 flex size-14 items-center justify-center rounded-2xl " + ink}><Icon className="size-6" aria-hidden="true" /></ClaySurface>
                <h3 className="type-card">{title}</h3>
                <p className="type-support mt-3">{description}</p>
                <p className={"mt-auto pt-6 text-xs leading-relaxed font-semibold " + ink}>{detail}</p>
              </ClayCard>
            </article>
          </MotionItem>
        ))}
      </MotionReveal>
      <p className="type-caption mt-5">Planned capabilities. The expense management experience is still in development.</p>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" tabIndex={-1} aria-labelledby="how-title" className="landing-section">
      <MotionReveal className="mx-auto mb-10 max-w-lg text-center"><p className="landing-eyebrow mb-3">A little plan. A lighter mind.</p><h2 id="how-title" className="type-page">From “let’s go” to all settled.</h2><p className="type-body mt-4 text-muted-foreground">The experience we’re building, in four simple steps.</p></MotionReveal>
      <ol className="landing-steps grid gap-7 md:grid-cols-4 md:gap-5">
        {steps.map(({ title, description, icon: Icon, tone }, index) => (
          <li key={title} className="relative">
            <MotionReveal preset="slide" transition={{ delay: index * 0.06, duration: 0.35 }} className="step-content flex items-start gap-5 md:flex-col md:items-center md:text-center">
              <ClaySurface tone={tone} elevation="raised" className="relative flex size-16 shrink-0 items-center justify-center rounded-3xl md:size-20">
                <Icon className="size-7 text-foreground" aria-hidden="true" />
                <span className="absolute -top-2 -right-2 flex size-7 items-center justify-center rounded-full border-2 border-background bg-surface text-xs font-bold text-lavender-ink shadow-clay-soft" aria-hidden="true">{index + 1}</span>
              </ClaySurface>
              <div className="pt-1 md:pt-2"><h3 className="type-card">{title}</h3><p className="type-support mt-2 md:mx-auto md:max-w-[210px]">{description}</p></div>
            </MotionReveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" tabIndex={-1} aria-labelledby="pricing-title" className="landing-section">
      <MotionReveal className="mx-auto mb-9 max-w-xl text-center"><p className="landing-eyebrow mb-3">A thoughtful starting point</p><h2 id="pricing-title" className="type-page">Simple plans. Shared possibilities.</h2><p className="type-body mt-4 text-muted-foreground">A preview of where we’re headed. Final features and pricing will be confirmed before launch.</p></MotionReveal>
      <MotionReveal preset="stagger" className="mx-auto grid max-w-[860px] gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <MotionItem key={plan.name}>
            <article className="h-full" aria-label={plan.name + " proposed plan"}>
              <ClayCard tone={plan.tone} className="h-full p-7 sm:p-8">
                <div className="flex items-center justify-between gap-3"><h3 className="type-section">{plan.name}</h3><ClayBadge variant={plan.name === "Pro" ? "lavender" : "neutral"}>Proposed plan</ClayBadge></div>
                <p className="type-caption mt-3">{plan.eyebrow}</p>
                <p className="mt-6 text-2xl leading-tight font-semibold tracking-tight">{plan.price}</p>
                <p className="type-support mt-4">{plan.description}</p>
                <div className="my-6 border-t border-border/60" />
                <p className="type-label mb-4">Proposed inclusions</p>
                <ul className="space-y-4">{plan.items.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed"><Check className="mt-0.5 size-4 shrink-0 text-lavender-ink" aria-hidden="true" />{item}</li>)}</ul>
                <div className="mt-auto pt-8"><GetStartedButton variant={plan.name === "Pro" ? "primary" : "secondary"} className="w-full">{plan.cta}</GetStartedButton></div>
              </ClayCard>
            </article>
          </MotionItem>
        ))}
      </MotionReveal>
      <p className="type-caption mx-auto mt-5 max-w-lg text-center">Preview only. Plans aren’t available to purchase. Proposed inclusions may change.</p>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section id="coming-soon" tabIndex={-1} aria-labelledby="cta-title" className="landing-section pb-12">
      <MotionReveal>
        <ClaySurface tone="lavender" elevation="raised" className="relative isolate rounded-[2rem] px-6 py-12 text-center sm:px-12 sm:py-16">
          <ClaySurface tone="mint" aria-hidden="true" className="absolute top-7 left-7 hidden size-14 rotate-[-12deg] items-center justify-center rounded-2xl lg:flex"><Heart className="size-6 text-mint-ink" /></ClaySurface>
          <ClaySurface tone="peach" aria-hidden="true" className="absolute right-8 bottom-9 hidden size-16 rotate-12 items-center justify-center rounded-3xl lg:flex"><Sparkles className="size-7 text-peach-ink" /></ClaySurface>
          <p className="landing-eyebrow mb-4">More memories. Fewer loose ends.</p>
          <h2 id="cta-title" className="type-page mx-auto max-w-xl">Make room for the company.<br /><span className="text-lavender-ink">We’ll help with the balance.</span></h2>
          <p className="type-body mx-auto mt-5 max-w-md text-muted-foreground">A beautifully simple way to share is on its way. Take a look at what’s coming.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3"><GetStartedLink /><SectionLink href="#product-preview">Explore the preview<ArrowRight className="size-4" aria-hidden="true" /></SectionLink></div>
          <p className="type-caption mt-5">Demo preview · No sign-up needed to explore.</p>
        </ClaySurface>
      </MotionReveal>
    </section>
  );
}

function LandingFooter() {
  return (
    <footer className="showcase-shell pb-7 sm:pb-9">
      <div className="grid gap-8 border-t border-border/70 pt-9 md:grid-cols-[1.5fr_1fr_1fr]">
        <div><Brand /><p className="type-support mt-4 max-w-xs">Smart Split Bill &amp; Group Expense Manager.<br />A softer way to share.</p></div>
        <nav aria-label="Footer navigation"><p className="type-label mb-3">Explore Splitora</p><ul>{[...navigation, { label: "Product preview", href: "#product-preview" }].map((item) => <li key={item.href}><a href={item.href} className="landing-footer-link">{item.label}</a></li>)}</ul></nav>
        <div><p className="type-label mb-3">In the making</p><p className="type-support">Privacy &amp; Terms — coming before launch.</p><p className="type-support mt-3">Support details — coming soon.</p><p className="type-caption mt-4">Public demo · Mock data only.</p></div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-5"><p className="type-caption">© {new Date().getUTCFullYear()} Splitora. All rights reserved.</p><p className="type-caption flex items-center gap-1.5"><Heart className="size-3 text-peach-ink" aria-hidden="true" />Good company. Better balance.</p></div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div id="top">
      <LandingNavigation />
      <main id="main-content" tabIndex={-1} className="showcase-shell">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <GuestSharingSection />
        <ProductPreviewSection />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <LandingFooter />
    </div>
  );
}
