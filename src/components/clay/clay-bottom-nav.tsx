"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useHydratedReducedMotion } from "@/hooks/use-hydrated-reduced-motion";
import { ClaySurface } from "./clay-surface";
import { claySpring } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type ClayNavItem = { id: string; label: string; icon: ReactNode; preview?: boolean } & (
  | { href: string; onClick?: never }
  | { href?: never; onClick: () => void }
);
export type ClayBottomNavProps = {
  items: readonly ClayNavItem[];
  activeId: string;
  onSelect?: (id: string) => void;
  label?: string;
  className?: string;
};

export function ClayBottomNav({ items, activeId, onSelect, label = "Design preview navigation", className }: ClayBottomNavProps) {
  const reduced = useHydratedReducedMotion();
  return (
    <nav aria-label={label} className={cn("w-full max-w-[380px]", className)}>
      <ClaySurface elevation="floating" className="flex gap-1 rounded-[1.75rem] p-2">
        {items.map((item) => {
          const content = <><span aria-hidden="true" className="clay-nav-icon relative">{item.icon}{item.preview && <span className="absolute -top-1 -right-1 rounded-full bg-lavender-light px-1.5 py-0.5 text-[8px] font-semibold text-lavender-ink">Soon</span>}</span><span>{item.label}</span></>;
          const interaction = { whileTap: reduced ? {} : { scale: 0.96 }, transition: claySpring };
          return item.href !== undefined ? (
            <motion.a key={item.id} href={item.href} aria-current={activeId === item.id ? "location" : undefined}
              data-active={activeId === item.id} className="clay-nav-link" {...interaction}
              onClick={() => onSelect?.(item.id)}>{content}</motion.a>
          ) : (
            <motion.button key={item.id} type="button" aria-label={item.label + (item.preview ? " — coming soon" : "")}
              aria-haspopup={item.preview ? "dialog" : undefined} className="clay-nav-link" {...interaction}
              onClick={() => { item.onClick(); onSelect?.(item.id); }}>{content}</motion.button>
          );
        })}
      </ClaySurface>
    </nav>
  );
}

