import type { ReactNode } from "react";
import type { Viewport } from "next";
import { getMockDashboardAccess } from "@/features/dashboard/data/demo-access";
import { DashboardShell } from "@/features/dashboard/components/dashboard-shell";

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function ApplicationLayout({ children }: { children: ReactNode }) {
  // This is the single application access boundary to replace with authorization.
  // Step 04 deliberately exposes only deterministic mock UI, with no account data.
  const access = getMockDashboardAccess();
  return <DashboardShell identity={access.identity}>{children}</DashboardShell>;
}
