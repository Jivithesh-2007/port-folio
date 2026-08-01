import { SOCIAL_LINKS } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-2/60">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-12 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div className="min-w-0">
          <p className="font-display text-sm font-bold tracking-[0.18em]">
            JIVITHESH<span className="text-signal">.DEV</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Full Stack Developer · AI/ML & Robotics · Coimbatore, India
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <nav className="flex flex-wrap gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="mono-label rounded-full border border-border bg-card/70 px-3.5 py-2 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/60 hover:text-signal"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="mono-label text-muted-foreground">© 2026 Jivithesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
