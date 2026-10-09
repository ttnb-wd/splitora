import { Bell } from "lucide-react";
import { ClayBadge } from "@/components/clay/clay-badge";
import { ClaySurface } from "@/components/clay/clay-surface";
import type { DemoIdentity } from "../data/demo-access";
import { AppBrand } from "./app-brand";

export function DashboardHeader({ identity }: { identity: DemoIdentity }) {
  return <header className="app-topbar">
    <div className="flex min-h-16 items-center justify-between gap-3">
      <div className="lg:hidden"><AppBrand /></div>
      <div className="hidden lg:block"><p className="type-section">Dashboard</p><p className="type-caption mt-1">A calmer view of shared spending.</p></div>
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden sm:block"><ClayBadge variant="lavender" dot>Demo mode</ClayBadge></div>
        <ClaySurface elevation="soft" role="img" aria-label="Notification icon: decorative preview only" className="relative hidden size-12 items-center justify-center rounded-2xl md:flex">
          <Bell className="size-5 text-muted-foreground" aria-hidden="true" /><span className="absolute -right-1 -bottom-1 rounded-full bg-lavender-light px-1.5 py-0.5 text-[8px] font-semibold text-lavender-ink" aria-hidden="true">Preview</span>
        </ClaySurface>
        <div className="flex items-center gap-2.5" aria-label={identity.name + ", demonstration identity"}>
          <span aria-hidden="true" className="sample-avatar size-11 bg-peach text-peach-ink">{identity.initials}</span>
          <div className="hidden sm:block"><p className="type-label">{identity.name}</p><p className="type-caption">Demo identity</p></div>
          <span className="text-xs font-semibold text-lavender-ink sm:hidden">Demo</span>
        </div>
      </div>
    </div>
  </header>;
}
