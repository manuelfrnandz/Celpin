import { cn } from "../../lib/cn";

interface PhotoPlaceholderProps {
  label?: string;
  className?: string;
}

export function PhotoPlaceholder({ label, className }: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-green-tint border border-green/20",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#85A93D 0,#85A93D 1px,transparent 0,transparent 50%)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 p-8 text-center">
        <span className="font-mono text-eyebrow tracking-[0.14em] uppercase text-green-dark bg-white/80 px-3 py-1 rounded-full">
          ◉ Placeholder
        </span>
        {label && (
          <p className="text-body-sm text-green-ink font-body max-w-[180px]">
            {label}
          </p>
        )}
      </div>
    </div>
  );
}
