import { SKILL_GROUPS, SKILL_ROWS, TOOLBELT } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal, Section } from "./Section";

function MarqueeRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  return (
    <div className="marquee-hover-pause relative overflow-hidden py-1">
      <div
        className={cn(
          "flex w-max gap-3",
          direction === "left" ? "marquee-track" : "marquee-track-reverse",
        )}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="glass-soft shrink-0 rounded-full px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-foreground/80 transition-colors duration-300 hover:text-signal"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      label="Technical Stack"
      title="Skills I build and ship with"
      subtitle="Languages, web engineering, applied AI fundamentals and delivery tooling"
    >
      <div className="glass relative overflow-hidden rounded-2xl px-4 py-6 sm:px-6">
        <div className="pointer-events-none absolute inset-0 dot-matrix opacity-60" />
        <div className="relative space-y-3">
          {SKILL_ROWS.map((row, i) => (
            <MarqueeRow key={i} items={row.items} direction={row.direction} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.code} delay={i * 90} className="scene-3d">
            <div className="cert-card glass h-full rounded-2xl p-6">
              <div className="relative flex items-center justify-between">
                <p className="mono-label text-signal">MODULE {group.code}</p>
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              </div>
              <h3 className="relative mt-3 font-display text-lg font-bold">{group.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {group.summary}
              </p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="marquee-hover-pause glass relative mt-10 overflow-hidden rounded-xl py-4">
        <div className="marquee-track-reverse flex w-max gap-3 px-3">
          {[...TOOLBELT, ...TOOLBELT].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="rounded-md border border-border bg-card/70 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
