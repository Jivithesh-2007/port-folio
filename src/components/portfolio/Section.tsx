import { useReveal } from "@/hooks/use-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.05);

  return (
    <section id={id} className={cn("relative scroll-mt-24 py-24 sm:py-32", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div ref={ref} data-visible={visible} className="reveal mb-14">
          <p className="mono-label flex items-center gap-3 text-signal">
            <span className="h-px w-10 bg-signal" />
            {label}
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{title}</h2>
          {subtitle ? (
            <p className="mono-label mt-3 text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.05);
  return (
    <div
      ref={ref}
      data-visible={visible}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
