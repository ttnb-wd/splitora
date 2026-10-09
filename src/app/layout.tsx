import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/motion/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Splitora — Good company. Better balance.",
  description: "Split bills, track shared expenses, and settle up effortlessly — all in one beautifully simple place. Explore what’s coming with Splitora.",
  applicationName: "Splitora",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Splitora — Good company. Better balance.",
    description: "A softer way to share. Discover Splitora’s upcoming smart split bill and group expense manager.",
    siteName: "Splitora",
  },
  twitter: {
    card: "summary",
    title: "Splitora — Good company. Better balance.",
    description: "A beautifully simple way to split bills and share expenses. Coming soon.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <noscript><style>{'[data-reveal] { opacity: 1 !important; transform: none !important; }'}</style></noscript>
        <a href="#main-content" className="fixed top-4 left-4 z-50 rounded-full bg-surface px-5 py-3 font-semibold shadow-clay-raised opacity-0 focus:opacity-100 pointer-events-none focus:pointer-events-auto">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}


