"use client";

import { BarChart3, Coffee, LayoutDashboard, Settings2, Users, Waves } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { ClayBadge } from "@/components/clay/clay-badge";
import { ClaySurface } from "@/components/clay/clay-surface";
import { useHydratedReducedMotion } from "@/hooks/use-hydrated-reduced-motion";
import { claySpring } from "@/lib/motion";
import { dashboardNavigation } from "../data/navigation";
import { useDashboardLocation } from "../hooks/use-dashboard-location";
import { AppBrand } from "./app-brand";
import { ComingSoonAction } from "./preview-dialog";

const icons = { dashboard: LayoutDashboard, groups: Users, activity: Waves, reports: BarChart3, settings: Settings2 };

export function AppSidebar() {
  const active = useDashboardLocation();
  const reduced = useHydratedReducedMotion();
  return (
    <aside className="app-sidebar hidden lg:block" aria-label="Application sidebar">
      <ClaySurface elevation="raised" className="flex h-full flex-col rounded-[2rem] p-5">
        <AppBrand />
        <p className="type-caption mt-6 mb-3 px-3 tracking-[0.12em] uppercase">Your shared space</p>
        <nav aria-label="Desktop app navigation" className="space-y-2">
          {dashboardNavigation.map((item) => {
            const Icon = icons[item.id];
            if ("href" in item) return <motion.a key={item.id} href={item.href} aria-current={active === item.id ? item.id === "dashboard" ? "page" : "location" : undefined}
              data-active={active === item.id} className="app-sidebar-link" whileHover={reduced ? {} : { x: 2 }} whileTap={reduced ? {} : { scale: 0.98 }} transition={claySpring}>
              <Icon className="size-5 shrink-0" aria-hidden="true" /><span>{item.label}</span>
            </motion.a>;
            return <ComingSoonAction key={item.id} feature={item.id} className="app-sidebar-preview w-full justify-start rounded-2xl px-3 py-3">
              <Icon className="size-5 shrink-0" aria-hidden="true" /><span>{item.label}</span><span className="ml-auto rounded-full bg-lavender-light px-2 py-1 text-[10px] font-semibold text-lavender-ink">Soon</span>
            </ComingSoonAction>;
          })}
        </nav>
        <ClaySurface tone="mint" elevation="soft" className="mt-auto rounded-3xl p-4">
          <Coffee className="mb-3 size-6 text-mint-ink" aria-hidden="true" />
          <p className="type-label text-mint-ink">A little less math.<br />A lot more together.</p>
          <p className="type-caption mt-3">Take a look around. All groups and balances are samples.</p>
          <ClayBadge variant="success" className="mt-4" dot>Public demo</ClayBadge>
        </ClaySurface>
        <Link href="/" className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl text-xs font-semibold text-muted-foreground hover:text-lavender-ink">Back to Home</Link>
      </ClaySurface>
    </aside>
  );
}
