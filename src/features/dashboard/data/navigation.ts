export type DashboardNavId = "dashboard" | "groups" | "activity" | "reports" | "settings";
export const dashboardNavigation = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard" },
  { id: "groups", label: "Groups", href: "/dashboard#groups" },
  { id: "activity", label: "Activity", href: "/dashboard#activity" },
  { id: "reports", label: "Reports", preview: true },
  { id: "settings", label: "Settings", preview: true },
] as const;

export const upcomingFeatures = {
  "create-group": { title: "A home for your people, coming soon.", description: "Group creation and invitations will arrive in a later step. The groups shown here are fixed examples; this preview doesn’t create or save a group." },
  "add-expense": { title: "Shared moments, coming soon.", description: "Adding and editing expenses isn’t available yet. The amounts on this dashboard are sample data; this preview doesn’t add an expense or change any balance." },
  "settle-up": { title: "A softer way to settle, coming soon.", description: "Settlement records will arrive in a later step. This preview doesn’t record a settlement, transfer money, or change any balance." },
  reports: { title: "The bigger picture, coming soon.", description: "Reports and exports aren’t available in this UI preview. For now, explore the sample overview, groups, and activity." },
  settings: { title: "Your little preferences, coming soon.", description: "Settings and account preferences aren’t available yet. Jamie is a demo identity, and this preview doesn’t have a real user account." },
} as const;

export type UpcomingFeature = keyof typeof upcomingFeatures;
