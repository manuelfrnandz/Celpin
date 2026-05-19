import { cn } from "../../lib/cn";

interface EyebrowProps {
  number?: string;
  label: string;
  className?: string;
  onDark?: boolean;
}

export function Eyebrow({ number, label, className, onDark }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-eyebrow tracking-[0.18em] uppercase",
        onDark ? "text-cream/40" : "text-ink-soft",
        className
      )}
    >
      {number ? `◆ ${number} · ${label}` : label}
    </p>
  );
}
