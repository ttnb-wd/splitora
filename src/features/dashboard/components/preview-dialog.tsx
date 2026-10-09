"use client";

import { useId, useRef, useSyncExternalStore, type ReactNode, type RefObject } from "react";
import { createPortal } from "react-dom";
import { Sparkles, X } from "lucide-react";
import { ClayButton, type ClayButtonVariant } from "@/components/clay/clay-button";
import { ClayIconButton } from "@/components/clay/clay-icon-button";
import { ClaySurface } from "@/components/clay/clay-surface";
import { upcomingFeatures, type UpcomingFeature } from "../data/navigation";

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function PreviewDialog({ dialogRef, feature, onClose }: {
  dialogRef: RefObject<HTMLDialogElement | null>;
  feature: UpcomingFeature;
  onClose?: () => void;
}) {
  const titleId = useId();
  const descriptionId = useId();
  const hydrated = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
  const content = upcomingFeatures[feature];
  if (!hydrated) return null;
  return createPortal(
    <dialog ref={dialogRef} aria-labelledby={titleId} aria-describedby={descriptionId} className="coming-soon-dialog clay-surface clay-warm shadow-clay-floating"
      onClose={() => {
        const active = document.activeElement;
        // A responsive breakpoint can hide the original navigation trigger.
        // In that case return focus to the visible application content.
        if (active === document.body || (active instanceof HTMLElement && active.getClientRects().length === 0)) {
          document.getElementById("main-content")?.focus({ preventScroll: true });
        }
        onClose?.();
      }}
      onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("button:not([disabled])");
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }}>
      <div className="relative p-7 sm:p-10">
        <ClayIconButton label="Close feature preview" variant="secondary" className="absolute top-4 right-4" onClick={() => dialogRef.current?.close()}><X className="size-5" /></ClayIconButton>
        <ClaySurface tone="lavender" className="mb-6 flex size-16 items-center justify-center rounded-3xl"><Sparkles className="size-7 text-lavender-ink" aria-hidden="true" /></ClaySurface>
        <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-lavender-ink uppercase">Coming soon · Demo only</p>
        <h2 id={titleId} className="type-page">{content.title}</h2>
        <p id={descriptionId} className="type-body mt-5 text-muted-foreground">{content.description}</p>
        <ClayButton autoFocus variant="lavender" className="mt-7 w-full sm:w-auto" onClick={() => dialogRef.current?.close()}>Back to the demo</ClayButton>
      </div>
    </dialog>, document.body,
  );
}

export function ComingSoonAction({ feature, children, variant = "secondary", className }: {
  feature: UpcomingFeature;
  children: ReactNode;
  variant?: ClayButtonVariant;
  className?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return <>
    <ClayButton variant={variant} className={className} aria-haspopup="dialog" onClick={() => dialogRef.current?.showModal()}>{children}</ClayButton>
    <PreviewDialog dialogRef={dialogRef} feature={feature} />
  </>;
}
