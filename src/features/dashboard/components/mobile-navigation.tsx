"use client";

import { useEffect, useRef, useState } from "react";
import { BarChart3, LayoutDashboard, Settings2, Users, Waves } from "lucide-react";
import { ClayBottomNav, type ClayNavItem } from "@/components/clay/clay-bottom-nav";
import { dashboardNavigation } from "../data/navigation";
import { useDashboardLocation } from "../hooks/use-dashboard-location";
import { PreviewDialog } from "./preview-dialog";

const icons = { dashboard: LayoutDashboard, groups: Users, activity: Waves, reports: BarChart3, settings: Settings2 };

export function MobileNavigation() {
  const active = useDashboardLocation();
  const [feature, setFeature] = useState<"reports" | "settings" | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (feature) dialogRef.current?.showModal(); }, [feature]);
  const items: ClayNavItem[] = dashboardNavigation.map((item) => {
    const Icon = icons[item.id];
    const base = { id: item.id, label: item.label, icon: <Icon className="size-5" /> };
    return "href" in item ? { ...base, href: item.href } : { ...base, preview: true, onClick: () => setFeature(item.id) };
  });
  return <>
    <div className="app-mobile-navigation lg:hidden"><ClayBottomNav items={items} activeId={active} label="Mobile app navigation" className="max-w-[520px]" /></div>
    <PreviewDialog dialogRef={dialogRef} feature={feature ?? "reports"} onClose={() => setFeature(null)} />
  </>;
}
