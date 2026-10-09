"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ClayIconButton } from "@/components/clay/clay-icon-button";
import { ClaySurface } from "@/components/clay/clay-surface";
import { navigation } from "../data/landing-content";
import { Brand } from "./brand";
import { GetStartedLink } from "./landing-actions";

export function LandingNavigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 768px)");
    const resize = () => { if (media.matches) setOpen(false); };
    document.addEventListener("pointerdown", dismiss);
    media.addEventListener("change", resize);
    return () => { document.removeEventListener("pointerdown", dismiss); media.removeEventListener("change", resize); };
  }, [open]);

  return (
    <header ref={header} className="landing-header showcase-shell" data-scrolled={scrolled}
      onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } }}>
      <ClaySurface elevation={scrolled ? "raised" : "soft"} className="rounded-[1.75rem] px-3 py-3 sm:px-5">
        <div className="flex items-center justify-between gap-2">
          <Brand />
          <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => <a key={item.href} href={item.href} className="landing-nav-link">{item.label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <GetStartedLink className="hidden px-5 sm:inline-flex" />
            <ClayIconButton ref={toggle} label={open ? "Close navigation" : "Open navigation"} variant="lavender" className="md:hidden" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </ClayIconButton>
          </div>
        </div>
        <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="pt-3 md:hidden">
          <div className="flex flex-col gap-1 border-t border-border/60 pt-2">
            {navigation.map((item) => <a key={item.href} href={item.href} className="landing-nav-link justify-start" onClick={() => setOpen(false)}>{item.label}</a>)}
            <div className="px-2 pt-2 pb-1 sm:hidden"><GetStartedLink className="w-full" onNavigate={() => setOpen(false)} /></div>
          </div>
        </nav>
      </ClaySurface>
      <noscript><nav aria-label="Navigation without JavaScript" className="flex flex-wrap justify-center gap-1 md:hidden">{navigation.map((item) => <a key={item.href} href={item.href} className="landing-nav-link">{item.label}</a>)}</nav></noscript>
    </header>
  );
}
