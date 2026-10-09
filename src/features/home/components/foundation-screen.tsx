import { CircleCheck, Split } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function FoundationScreen() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-5 py-12 sm:px-8">
      <Card className="w-full max-w-lg rounded-[2rem] border border-border bg-card py-0 shadow-[var(--shadow-clay-card)] ring-0">
        <CardContent className="flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[4px_4px_12px_rgba(110,75,190,0.25),inset_2px_2px_4px_rgba(255,255,255,0.25)]">
            <Split className="size-8" aria-hidden="true" />
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Splitora
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Smart Split Bill &amp; Group Expense Manager
            </p>
          </div>
          <p className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
            <CircleCheck className="size-4 shrink-0" aria-hidden="true" />
            Project foundation is ready
          </p>
        </CardContent>
      </Card>
    </main>
  );
}

