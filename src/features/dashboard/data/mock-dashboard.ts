export type MockMember = Readonly<{
  id: string;
  name: string;
  initials: string;
  tone: "lavender" | "mint" | "peach";
}>;

export type MockBalance =
  | Readonly<{ direction: "you-owe" | "you-are-owed"; amountCents: number }>
  | Readonly<{ direction: "settled"; amountCents: 0 }>;

export type MockGroup = Readonly<{
  id: "weekend-away" | "home-sweet-home" | "coffee-club";
  name: string;
  purpose: string;
  category: "travel" | "home" | "food";
  tone: "lavender" | "peach" | "mint";
  members: readonly MockMember[];
  totalExpensesCents: number;
  yourExpenseShareCents: number;
  yourPaidExpensesCents: number;
  yourPaidSettlementsCents: number;
  balance: MockBalance;
}>;

export type MockActivity = Readonly<{
  id: string;
  kind: "expense" | "settlement";
  description: string;
  groupId: MockGroup["id"];
  date: string;
  amountCents: number;
  paidBy: string;
  status: "shared" | "settled";
}>;

export type MockSummary = Readonly<{
  totalSharedExpensesCents: number;
  youOweCents: number;
  youAreOwedCents: number;
  netBalanceCents: number;
}>;

const you: MockMember = { id: "sample-you", name: "Jamie (you)", initials: "JC", tone: "lavender" };

// Deterministic illustration fixtures, in USD minor units. These are not user records.
// All totals and balances are authored here; presentation does no expense calculations.
// Weekend: $538 expenses / 4 = $134.50 share, $320 paid → $185.50 owed to you.
// Home: $420 expenses / 3 = $140 share, $50 paid → $90 owed by you.
// Coffee: $72 expenses / 3 = $24 share, $24 settlement paid → settled.
export const mockGroups: readonly MockGroup[] = [
  {
    id: "weekend-away", name: "A little adventure", purpose: "Weekend away", category: "travel", tone: "lavender",
    members: [you, { id: "sample-alex", name: "Alex", initials: "AJ", tone: "peach" }, { id: "sample-mika", name: "Mika", initials: "MK", tone: "mint" }, { id: "sample-sam", name: "Sam", initials: "SL", tone: "peach" }],
    totalExpensesCents: 53800, yourExpenseShareCents: 13450, yourPaidExpensesCents: 32000, yourPaidSettlementsCents: 0,
    balance: { direction: "you-are-owed", amountCents: 18550 },
  },
  {
    id: "home-sweet-home", name: "Home sweet home", purpose: "Flatmates & everyday essentials", category: "home", tone: "peach",
    members: [you, { id: "sample-maya", name: "Maya", initials: "MA", tone: "peach" }, { id: "sample-leo", name: "Leo", initials: "LT", tone: "mint" }],
    totalExpensesCents: 42000, yourExpenseShareCents: 14000, yourPaidExpensesCents: 5000, yourPaidSettlementsCents: 0,
    balance: { direction: "you-owe", amountCents: 9000 },
  },
  {
    id: "coffee-club", name: "Coffee & company", purpose: "Brunches, brews & catch-ups", category: "food", tone: "mint",
    members: [you, { id: "sample-noor", name: "Noor", initials: "NK", tone: "mint" }, { id: "sample-theo", name: "Theo", initials: "TW", tone: "peach" }],
    totalExpensesCents: 7200, yourExpenseShareCents: 2400, yourPaidExpensesCents: 0, yourPaidSettlementsCents: 2400,
    balance: { direction: "settled", amountCents: 0 },
  },
];

export const mockSummary: MockSummary = {
  totalSharedExpensesCents: 103000,
  youOweCents: 9000,
  youAreOwedCents: 18550,
  netBalanceCents: 9550,
};

// Complete fixed expense history: $538 + $420 + $72 = $1,030.
// Settlements appear in the feed but do not add to shared expense totals.
export const mockActivities: readonly MockActivity[] = [
  { id: "sample-settlement", kind: "settlement", description: "Brunch share settled with Noor", groupId: "coffee-club", date: "2026-10-09", amountCents: 2400, paidBy: "You", status: "settled" },
  { id: "sample-dinner", kind: "expense", description: "Dinner for four", groupId: "weekend-away", date: "2026-10-08", amountCents: 19400, paidBy: "Alex", status: "shared" },
  { id: "sample-cleaning", kind: "expense", description: "Cleaning essentials", groupId: "home-sweet-home", date: "2026-10-08", amountCents: 5000, paidBy: "You", status: "shared" },
  { id: "sample-coffee", kind: "expense", description: "Coffee before the road trip", groupId: "weekend-away", date: "2026-10-07", amountCents: 2400, paidBy: "Mika", status: "shared" },
  { id: "sample-pantry", kind: "expense", description: "Pantry restock", groupId: "home-sweet-home", date: "2026-10-07", amountCents: 7000, paidBy: "Maya", status: "shared" },
  { id: "sample-stay", kind: "expense", description: "A cozy place to stay", groupId: "weekend-away", date: "2026-10-06", amountCents: 32000, paidBy: "You", status: "shared" },
  { id: "sample-utilities", kind: "expense", description: "Monthly utilities", groupId: "home-sweet-home", date: "2026-10-05", amountCents: 12000, paidBy: "Leo", status: "shared" },
  { id: "sample-groceries", kind: "expense", description: "Shared groceries", groupId: "home-sweet-home", date: "2026-10-04", amountCents: 18000, paidBy: "Maya", status: "shared" },
  { id: "sample-brunch", kind: "expense", description: "Sunday brunch", groupId: "coffee-club", date: "2026-10-04", amountCents: 7200, paidBy: "Noor", status: "shared" },
];

export const mockSnapshotDate = "2026-10-09";
