"use client";

import { useSyncExternalStore } from "react";
import type { DashboardNavId } from "../data/navigation";

function subscribe(change: () => void) {
  window.addEventListener("hashchange", change);
  window.addEventListener("popstate", change);
  return () => { window.removeEventListener("hashchange", change); window.removeEventListener("popstate", change); };
}

export function useDashboardLocation(): DashboardNavId {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash, () => "");
  return hash === "#groups" ? "groups" : hash === "#activity" ? "activity" : "dashboard";
}
