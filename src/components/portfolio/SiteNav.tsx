import { useEffect, useState } from "react";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import resume from "@/assets/resume.pdf.asset.json";
import { NAV_LINKS } from "@/lib/portfolio-data";
import { useActiveSection, useScrollProgress } from "@/hooks/use-motion";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const progress = useScrollProgress();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/60 backdrop-blur-2xl backdrop-saturate-150"
            : "border-b border-transparent",
        )}
      >
        <nav className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-signal/40 bg-signal/10 font-mono text-sm font-bold text-signal">
              J
            </span>
            <span className="truncate font-display text-sm font-bold tracking-[0.18em]">
              JIVITHESH<span className="text-signal">.DEV</span>
            </span>
          </a>

          <div className="flex items-center gap-2">
            <ul className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={cn(
                      "relative rounded-md px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] transition-colors",
                      active === link.id
                        ? "text-signal"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                    {active === link.id ? (
                      <span className="absolute inset-x-2 -bottom-0.5 h-px bg-signal" />
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-border px-3.5 py-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-signal/60 hover:text-signal sm:inline-flex"
            >
              <FileText className="h-3.5 w-3.5" />
              Resume
            </a>

            <button
              onClick={toggle}
              aria-label="Toggle color theme"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card/70 text-foreground transition-all duration-300 hover:border-signal/60 hover:text-signal"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card/70 lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open ? (
          <ul className="animate-fade-in border-t border-border bg-background/95 px-5 py-3 backdrop-blur-xl lg:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <div
          className="h-px origin-left bg-signal transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </header>
  );
}
