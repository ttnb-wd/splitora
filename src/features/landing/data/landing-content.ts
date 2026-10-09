import { Coffee, Handshake, Hotel, PieChart, ReceiptText, Users, WalletCards } from "lucide-react";

export const navigation = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const features = [
  { title: "Create Expense Groups", description: "A shared space for the weekend away, the place you call home, and everything in between.", icon: Users, tone: "lavender", ink: "text-lavender-ink", detail: "Your people. One place." },
  { title: "Split Bills Your Way", description: "Equal shares, custom amounts, or percentages — planned to fit the way your group shares.", icon: PieChart, tone: "peach", ink: "text-peach-ink", detail: "A little flexibility goes a long way." },
  { title: "Track Who Owes Whom", description: "A clear view of shared spending and balances, so the little details are easier to follow.", icon: WalletCards, tone: "mint", ink: "text-mint-ink", detail: "Less mental math. More clarity." },
  { title: "Settle Up Easily", description: "Review what’s owed and record a settlement after you’ve paid each other your way.", icon: Handshake, tone: "warm", ink: "text-lavender-ink", detail: "Close the loop. Keep the good vibes." },
] as const;

export const steps = [
  { title: "Create a group", description: "Give your shared plans a little home.", icon: Users, tone: "lavender" },
  { title: "Invite your friends", description: "Bring your people into the picture.", icon: Handshake, tone: "peach" },
  { title: "Add shared expenses", description: "Keep the moments and the amounts together.", icon: ReceiptText, tone: "lavender" },
  { title: "Review balances and settle up", description: "See where you stand. Finish on a good note.", icon: WalletCards, tone: "mint" },
] as const;

export const sampleMembers = [
  { initials: "AJ", name: "Alex", color: "bg-peach text-peach-ink" },
  { initials: "MK", name: "Mika", color: "bg-mint text-mint-ink" },
  { initials: "SL", name: "Sam", color: "bg-lavender-light text-lavender-ink" },
  { initials: "YOU", name: "You", color: "bg-peach-light text-peach-ink text-[9px]" },
] as const;

// Fixed illustration content only; no account, balance, or expense calculations.
export const sampleExpenses = [
  { title: "Dinner for four", detail: "Alex paid · Equal split", amount: "$194.00", share: "$48.50", icon: ReceiptText, tone: "lavender", ink: "text-lavender-ink" },
  { title: "Coffee & catch-ups", detail: "Mika paid · Equal split", amount: "$24.00", share: "$6.00", icon: Coffee, tone: "peach", ink: "text-peach-ink" },
  { title: "A cozy place to stay", detail: "You paid · Equal split", amount: "$320.00", share: "$80.00", icon: Hotel, tone: "mint", ink: "text-mint-ink" },
] as const;

// Proposed plan content lives here so confirmed pricing can be added later.
export const plans = [
  { name: "Free", tone: "warm", eyebrow: "For everyday togetherness", description: "A simple starting point for sharing the little things.", price: "Planned free plan", items: ["Core expense groups", "Equal, custom & percentage splits", "Shared balances & settlement records"], cta: "Get Started" },
  { name: "Pro", tone: "lavender", eyebrow: "For a little more possibility", description: "Extra tools for groups with more to keep track of.", price: "Pricing to be announced", items: ["Everything proposed for Free", "Advanced spending insights", "Expense exports & more customization"], cta: "Explore what’s coming" },
] as const;
