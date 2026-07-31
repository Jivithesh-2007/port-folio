import { useEffect, useRef, useState } from "react";
import { SKILL_MODULES, TOOLBELT } from "@/lib/portfolio-data";
import { useReveal } from "@/hooks/use-motion";
import { Reveal, Section } from "./Section";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setWidth(level), delay);
    return () => clearTimeout(timer);
  }, [visible, level, delay]);

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="min-w-0 truncate text-sm text-foreground">{name}</span>
        <span className="mono-label shrink-0 text-signal">{level}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%`, backgroundImage: "var(--gradient-signal)" }}
        />
      </div>
    </div>
  );
}

function ModuleCard({
  module,
  title,
  skills,
  index,
}: {
  module: string;
  title: string;
  skills: { name: string; level: number }[];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <Reveal delay={index * 120} className="scene-3d">
      <div
        ref={cardRef}
        className="card-3d h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
      >
        <p className="mono-label text-accent">{module}</p>
        <h3 className="mt-2 font-display text-xl font-bold">{title}</h3>
        <div className="mt-6 space-y-5">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={i * 120} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      label="Technical Inventory"
      title="Capabilities and proficiencies"
      subtitle="Measured across frontend, backend and engineering practice"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {SKILL_MODULES.map((mod, i) => (
          <ModuleCard key={mod.module} {...mod} index={i} />
        ))}
      </div>

      <div className="relative mt-14 overflow-hidden rounded-xl border border-border bg-surface-2 py-4">
        <div className="marquee-track flex w-max gap-3 px-3">
          {[...TOOLBELT, ...TOOLBELT].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="rounded-md border border-border bg-card px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
