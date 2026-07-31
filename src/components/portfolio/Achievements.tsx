import { useState } from "react";
import { Award, Expand, Trophy } from "lucide-react";
import { ACHIEVEMENTS, type Achievement } from "@/lib/portfolio-data";
import { Modal } from "./Modal";
import { Reveal, Section } from "./Section";

const ICONS = [Trophy, Award];

export function Achievements() {
  const [active, setActive] = useState<Achievement | null>(null);

  return (
    <Section
      id="achievements"
      label="Achievements"
      title="Competitive results & recognition"
      subtitle="Hackathon finals and national robotics competition outcomes"
      className="relative border-y border-border"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 dot-fade opacity-70" />

      <div className="grid gap-6 lg:grid-cols-2">
        {ACHIEVEMENTS.map((item, i) => {
          const Icon = ICONS[i % ICONS.length] ?? Trophy;
          return (
            <Reveal key={item.code} delay={i * 120} className="scene-3d">
              <button
                onClick={() => setActive(item)}
                className="cert-card group glass flex h-full w-full flex-col rounded-2xl p-7 text-left"
              >
                <div className="relative flex w-full items-start justify-between gap-4">
                  <div className="relative grid h-12 w-12 place-items-center rounded-xl border border-signal/40 bg-signal/10 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                    <Icon className="h-5 w-5 text-signal" />
                  </div>
                  <div className="text-right">
                    <p className="mono-label text-muted-foreground">{item.code}</p>
                    <p className="mono-label mt-1 text-signal">{item.result}</p>
                  </div>
                </div>

                <h3 className="relative mt-6 font-display text-xl font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm font-medium text-foreground/80">{item.org}</p>
                <p className="mono-label relative mt-3 text-muted-foreground">{item.date}</p>

                <p className="relative mt-5 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>

                <div className="relative mt-auto flex w-full flex-wrap items-center gap-2 pt-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="mono-label ml-auto inline-flex items-center gap-1.5 text-muted-foreground transition-colors duration-300 group-hover:text-signal">
                    <Expand className="h-3.5 w-3.5" />
                    {item.image ? "View certificate" : "View details"}
                  </span>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        label={active ? `${active.code} · ${active.result}` : ""}
        title={active?.title ?? ""}
      >
        {active ? (
          <div className="space-y-6">
            {active.image ? (
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={active.image}
                  alt={`${active.title} certificate awarded to Jivithesh A S`}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </div>
            ) : null}

            <div>
              <p className="mono-label text-signal">{active.date}</p>
              <p className="mt-3 text-sm font-medium">{active.org}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.detail}</p>
            </div>

            <ul className="space-y-3">
              {active.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}
