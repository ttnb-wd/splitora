const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const signedCurrency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", signDisplay: "exceptZero" });
const date = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

// Display formatting only. Group and balance values come directly from fixtures.
export function formatMoney(cents: number, signed = false): string {
  return (signed ? signedCurrency : currency).format(cents / 100);
}

export function formatDemoDate(isoDate: string): string {
  return date.format(new Date(isoDate + "T12:00:00Z"));
}
