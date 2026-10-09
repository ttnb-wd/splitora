import type { Metadata } from "next";
import { DashboardOverview } from "@/features/dashboard/components/dashboard-overview";
import { getMockDashboardAccess } from "@/features/dashboard/data/demo-access";

export const metadata: Metadata = {
  title: "Dashboard Demo — Splitora",
  description: "Explore Splitora’s responsive dashboard with illustrative groups, shared expenses, and balances. All data is fictional.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Dashboard Demo — Splitora",
    description: "An illustrative dashboard preview. All data is fictional.",
  },
  twitter: {
    title: "Dashboard Demo — Splitora",
    description: "An illustrative dashboard preview. All data is fictional.",
  },
};

export default function DashboardPage() {
  const { identity } = getMockDashboardAccess();
  return <DashboardOverview identity={identity} />;
}
