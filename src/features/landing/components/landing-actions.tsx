"use client";

import { useId, useRef, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { ClayButton, type ClayButtonVariant } from "@/components/clay/clay-button";
import { ClayIconButton } from "@/components/clay/clay-icon-button";
import { ClaySurface } from "@/components/clay/clay-surface";
import { useHydratedReducedMotion } from "@/hooks/use-hydrated-reduced-motion";
import { claySpring } from "@/lib/motion";
import { cn } from "@/lib/utils";

const subscribeToHydration = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;
const MotionLink = motion.create(Link);

export function GetStartedLink({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  const reduced = useHydratedReducedMotion();
  return <MotionLink href="/dashboard" aria-label="Get Started — explore the demo dashboard" onNavigate={() => onNavigate?.()}
    whileHover={reduced ? {} : { y: -3 }} whileTap={reduced ? {} : { y: 1.5, scale: 0.965 }} transition={claySpring}
    className={cn("clay-surface clay-primary clay-button", className)}>
    Get Started<ArrowRight className="size-4 shrink-0" aria-hidden="true" />
  </MotionLink>;
}

export function GetStartedButton({ children = "Get Started", variant = "primary", className }: {
  children?: string;
  variant?: ClayButtonVariant;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const hydrated = useSyncExternalStore(subscribeToHydration, clientSnapshot, serverSnapshot);
  return (
    <>
      <ClayButton variant={variant} className={className} aria-haspopup="dialog" onClick={() => dialog.current?.showModal()}>
        {children}<ArrowRight className="size-4 shrink-0" aria-hidden="true" />
      </ClayButton>
      {hydrated && createPortal(<dialog ref={dialog} className="coming-soon-dialog clay-surface clay-warm shadow-clay-floating" aria-labelledby={titleId} aria-describedby={descriptionId}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("button:not([disabled])");
          const first = buttons[0];
          const last = buttons[buttons.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }}
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className="relative p-7 sm:p-10">
          <ClayIconButton label="Close coming-soon message" variant="secondary" className="absolute top-4 right-4" onClick={() => dialog.current?.close()}><X className="size-5" /></ClayIconButton>
          <ClaySurface tone="lavender" className="mb-6 flex size-16 items-center justify-center rounded-3xl"><Sparkles className="size-7 text-lavender-ink" aria-hidden="true" /></ClaySurface>
          <p className="landing-eyebrow mb-3">Coming soon</p>
          <h2 id={titleId} className="type-page max-w-xs">Good things take a little care.</h2>
          <p id={descriptionId} className="type-body mt-5 text-muted-foreground">Splitora is taking shape. Group creation and onboarding aren’t available yet. For now, explore a preview of the experience we’re building.</p>
          <p className="type-support mt-3">There’s nothing to sign up for or submit today.</p>
          <ClayButton autoFocus variant="lavender" className="mt-7 w-full sm:w-auto" onClick={() => dialog.current?.close()}>Back to exploring</ClayButton>
        </div>
      </dialog>, document.body)}
    </>
  );
}

export function SectionLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const reduced = useHydratedReducedMotion();
  return <motion.a href={href} whileHover={reduced ? {} : { y: -3 }} whileTap={reduced ? {} : { y: 1.5, scale: 0.965 }} transition={claySpring}
    className={cn("clay-surface clay-warm clay-button text-foreground", className)}>{children}</motion.a>;
}
