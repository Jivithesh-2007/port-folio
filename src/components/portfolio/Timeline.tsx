import { useState } from "react";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { TIMELINE } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal, Section } from "./Section";

const FILTERS = ["ALL", "WORK", "EDUCATION"] as const;

export function Timeline() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");
  const entries = TIMELINE.filter((e) => filter === "ALL" || e.kind === filter);

  return (
    <Section
      id="timeline"
      label="Journey & Timeline"
      title="My education and professional background"
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-md border px-3.5 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] transition-all duration-300",
              filter === f
                ? "border-signal bg-signal/15 text-signal"
                : "border-border bg-card text-muted-foreground hover:border-signal/50 hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-signal/70 via-border to-transparent sm:left-5" />
        <div className="space-y-8">
          {entries.map((entry, i) => (
            <Reveal key={`${entry.org}-${entry.period}`} delay={i * 90} className="scene-3d">
              <div className="relative pl-12 sm:pl-16">
                <span className="absolute left-0 top-4 grid h-8 w-8 place-items-center rounded-full border border-signal/50 bg-card text-signal sm:left-1">
                  {entry.kind === "WORK" ? (
                    <Briefcase className="h-4 w-4" />
                  ) : (
                    <GraduationCap className="h-4 w-4" />
                  )}
                </span>
                <article className="card-3d rounded-2xl border border-border bg-card p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="mono-label rounded border border-accent/40 bg-accent/10 px-2 py-1 text-accent">
                      {entry.kind}
                    </span>
                    <span className="mono-label text-muted-foreground">{entry.period}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">{entry.role}</h3>
                  <p className="mt-1 text-sm font-medium text-signal">{entry.org}</p>
                  <p className="mono-label mt-2 flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="h-3 w-3 shrink-0" />
                    {entry.location}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {entry.summary}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {entry.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
