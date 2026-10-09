export type DemoIdentity = Readonly<{ name: string; firstName: string; initials: string }>;

// Temporary public UI preview. Replace this function at the application layout
// boundary with real session authorization when authentication is implemented.
// It must never grant access to real financial records or account services.
export function getMockDashboardAccess(): Readonly<{ mode: "public-mock"; identity: DemoIdentity }> {
  return { mode: "public-mock", identity: { name: "Jamie Chen", firstName: "Jamie", initials: "JC" } };
}
