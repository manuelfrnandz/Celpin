import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

interface PillProps {
  children: ReactNode;
  className?: string;
  dot?: boolean;
}

export function Pill({ children, className, dot }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-tint text-green-ink text-body-sm font-body font-medium",
        className
      )}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0" />
      )}
      {children}
    </span>
  );
}
