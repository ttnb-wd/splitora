import { sampleMembers } from "../data/landing-content";
import { cn } from "@/lib/utils";

export function MemberAvatars({ className }: { className?: string }) {
  return (
    <div className={cn("flex -space-x-2", className)} role="img" aria-label="Sample group members: Alex, Mika, Sam, and you">
      {sampleMembers.map((member) => <span key={member.initials} aria-hidden="true" className={cn("sample-avatar", member.color)}>{member.initials}</span>)}
    </div>
  );
}
