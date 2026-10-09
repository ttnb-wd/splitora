"use client";

import { useState } from "react";
import { House, Layers, SlidersHorizontal, Sparkles } from "lucide-react";
import { ClayBottomNav, type ClayNavItem } from "@/components/clay/clay-bottom-nav";

const items: readonly ClayNavItem[] = [
  { id: "preview", label: "Preview", href: "#main-content", icon: <House className="size-5" /> },
  { id: "surfaces", label: "Surfaces", href: "#surfaces", icon: <Layers className="size-5" /> },
  { id: "inputs", label: "Inputs", href: "#inputs", icon: <SlidersHorizontal className="size-5" /> },
  { id: "motion", label: "Motion", href: "#buttons", icon: <Sparkles className="size-5" /> },
];

export function NavigationPreview() {
  const [active, setActive] = useState("preview");
  return <ClayBottomNav items={items} activeId={active} onSelect={setActive} />;
}

