import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Modal({
  open,
  onClose,
  label,
  title,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
    >
      <button
        aria-label="Close dialog"
        onClick={onClose}
        className="modal-backdrop absolute inset-0 cursor-default bg-background/70 backdrop-blur-xl"
      />

      <div
        className={cn(
          "modal-panel glass relative flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl",
          className,
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border/70 px-6 py-5">
          <div className="min-w-0">
            <p className="mono-label text-signal">{label}</p>
            <h3 className="mt-2 truncate font-display text-lg font-bold sm:text-xl">{title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card/70 transition-all duration-300 hover:rotate-90 hover:border-signal/60 hover:text-signal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6">{children}</div>
      </div>
    </div>
  );
}
