import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-bg hover:bg-gold-soft focus-visible:outline-offset-4",
  secondary:
    "border border-gold/50 text-gold-soft hover:border-gold hover:bg-gold-dim",
  ghost: "text-muted hover:text-text",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  download?: boolean;
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download,
  external,
  className = "",
}: Props) {
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
