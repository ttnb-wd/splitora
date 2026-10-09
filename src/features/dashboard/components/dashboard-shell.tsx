import type { ReactNode } from "react";
import type { DemoIdentity } from "../data/demo-access";
import { AppSidebar } from "./app-sidebar";
import { DashboardHeader } from "./dashboard-header";
import { MobileNavigation } from "./mobile-navigation";

export function DashboardShell({ children, identity }: { children: ReactNode; identity: DemoIdentity }) {
  return <div className="dashboard-app" data-access-mode="public-mock">
    <AppSidebar />
    <div className="app-content min-w-0">
      <DashboardHeader identity={identity} />
      {children}
    </div>
    <MobileNavigation />
  </div>;
}
