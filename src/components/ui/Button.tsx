import { type ReactNode, type MouseEvent } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "primary-green" | "secondary" | "whatsapp";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: (e?: MouseEvent) => void;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ink text-cream shadow-btn-primary hover:bg-ink-soft active:scale-[0.98]",
  "primary-green":
    "bg-green text-white shadow-btn-green hover:bg-green-dark active:scale-[0.98]",
  secondary:
    "bg-white text-ink border border-border hover:bg-cream active:scale-[0.98]",
  whatsapp:
    "bg-whatsapp text-white hover:opacity-90 active:scale-[0.98]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-body-sm rounded-lg",
  md: "px-6 py-3 text-body rounded-lg",
  lg: "px-7 py-3.5 text-body rounded-xl",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  external,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-body font-medium transition-all duration-150 cursor-pointer select-none whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
