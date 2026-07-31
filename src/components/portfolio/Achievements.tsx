import { Award, Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Section";

const ICONS = [Trophy, Award];

export function Achievements() {
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
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={item.code} delay={i * 120} className="scene-3d">
              <article className="cert-card glass flex h-full flex-col rounded-2xl p-7">
                <div className="relative flex items-start justify-between gap-4">
                  <div className="relative grid h-12 w-12 place-items-center rounded-xl border border-signal/40 bg-signal/10">
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

                <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
