"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Bell, Check, Heart, Plus, Split } from "lucide-react";
import { ClayButton } from "@/components/clay/clay-button";
import { ClayIconButton } from "@/components/clay/clay-icon-button";

export function ButtonPlayground() {
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);
  const [feedback, setFeedback] = useState("Try a button. Feel the spring.");
  useEffect(() => {
    if (!loading) return;
    const timeout = setTimeout(() => {
      setLoading(false);
      setFeedback("Spring press preview complete. Nice and easy.");
    }, 1200);
    return () => clearTimeout(timeout);
  }, [loading]);

  return (
    <div className="space-y-7">
      <div className="flex flex-wrap gap-3">
        <ClayButton loading={loading} loadingLabel="Trying the press" onClick={() => setLoading(true)}>
          <Split className="size-4" aria-hidden="true" /> Split evenly
        </ClayButton>
        <ClayButton variant="secondary" onClick={() => setFeedback("A warm, raised secondary surface.")}>
          View details <ArrowUpRight className="size-4" aria-hidden="true" />
        </ClayButton>
        <ClayButton variant="mint" onClick={() => setFeedback("Mint brings a little calm to a positive action.")}>
          <Check className="size-4" aria-hidden="true" /> All settled
        </ClayButton>
        <ClayButton variant="peach" onClick={() => setFeedback("A soft peach accent for a friendly reminder.")}>
          Send a nudge
        </ClayButton>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <ClayIconButton label="Preview an add action" variant="lavender" onClick={() => setFeedback("A little lift. A soft landing.")}>
          <Plus className="size-5" />
        </ClayIconButton>
        <ClayIconButton label="Preview a notification action" variant="mint" onClick={() => setFeedback("A gentle notification button preview.")}>
          <Bell className="size-5" />
        </ClayIconButton>
        <ClayIconButton label="Like this design preview" shape="circle" variant="peach" aria-pressed={liked}
          onClick={() => { setLiked(!liked); setFeedback(liked ? "Design preview unliked." : "A little love for the little details."); }}>
          <Heart className="size-5" fill={liked ? "currentColor" : "none"} />
        </ClayIconButton>
        <span className="type-caption ml-1">Small buttons.<br />Comfortable touch.</span>
      </div>
      <div className="flex flex-wrap items-center gap-3 border-t border-border/70 pt-5">
        <ClayButton variant="secondary" disabled className="min-h-11 px-4 text-xs">Unavailable</ClayButton>
        <ClayButton variant="lavender" loading loadingLabel="Loading preview" className="min-h-11 px-4 text-xs">
          Loading preview
        </ClayButton>
      </div>
      <p className="type-caption min-h-9" aria-live="polite" role="status">{feedback}</p>
    </div>
  );
}

