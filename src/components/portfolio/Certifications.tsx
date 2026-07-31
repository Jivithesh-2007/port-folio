import { useState } from "react";
import { BadgeCheck, ChevronDown, ChevronUp } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal, Section } from "./Section";

const FILTERS = [
  "All",
  "AI & GenAI",
  "Python & Data Science",
  "DataCamp",
  "Google & Cloud",
  "Git & Frontend",
] as const;

const COLLAPSED_COUNT = 12;

export function Certifications() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [expanded, setExpanded] = useState(false);

  const all = CERTIFICATIONS.filter((c) => filter === "All" || c.group === filter);
  const visible = expanded ? all : all.slice(0, COLLAPSED_COUNT);

  return (
    <Section
      id="certifications"
      label="Certifications"
      title="46 verified technical credentials"
      subtitle="Specialisation courses, cloud tracks and industry certifications"
      className="border-y border-border"
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => {
              setFilter(f);
              setExpanded(false);
            }}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] transition-all duration-300",
              filter === f
                ? "border-signal bg-signal/12 text-signal"
                : "border-border bg-card/60 text-muted-foreground hover:border-signal/50 hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((cert, i) => (
          <Reveal key={`${cert.issuer}-${cert.title}`} delay={(i % 6) * 60} className="scene-3d">
            <article className="cert-card glass flex h-full flex-col justify-between rounded-2xl p-5">
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <p className="mono-label text-signal">{cert.issuer}</p>
                  <span className="mono-label text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-sm font-bold leading-snug">{cert.title}</h3>
              </div>
              <div className="relative mt-6 flex items-end justify-between gap-3">
                <span className="mono-label text-muted-foreground">{cert.date}</span>
                {cert.id ? (
                  <span className="mono-label max-w-[45%] truncate text-muted-foreground">
                    ID: {cert.id}
                  </span>
                ) : (
                  <span className="mono-label flex shrink-0 items-center gap-1 text-signal">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Verified
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>


      {all.length > COLLAPSED_COUNT ? (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] transition-colors duration-300 hover:border-signal/60 hover:text-signal"
          >
            {expanded ? (
              <>
                Collapse to view less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Expand all {all.length} credentials <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      ) : null}
    </Section>
  );
}
