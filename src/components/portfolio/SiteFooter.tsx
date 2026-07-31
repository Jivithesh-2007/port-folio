export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-2/60">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-12 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div className="min-w-0">
          <p className="font-display text-sm font-bold tracking-[0.18em]">
            JIVITHESH<span className="text-signal">.DEV</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Handcrafted with extreme precision and structural motion standards.
          </p>
        </div>
        <p className="mono-label text-muted-foreground">© 2026 Jivithesh. All rights reserved.</p>
      </div>
    </footer>
  );
}
