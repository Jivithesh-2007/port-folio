import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal, Section } from "./Section";

const FILTERS = ["ALL", "FULLSTACK", "AI & ROBOTICS", "AI & ALGORITHMIC", "FRONTEND"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");
  const visible = PROJECTS.filter((p) => filter === "ALL" || p.category === filter);

  return (
    <Section
      id="projects"
      label="Digital Creations"
      title="Crafted with precision and fluid optimization"
      className="border-y border-border bg-surface-2/40"
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal key={project.spec} delay={i * 70} className="scene-3d">
            <article className="card-3d group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6">
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <span className="mono-label text-accent">{project.spec} //</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                </div>
                <span className="mono-label mt-3 inline-block rounded border border-signal/40 bg-signal/10 px-2 py-1 text-signal">
                  {project.category}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border bg-surface-2 px-2 py-1 font-mono text-[0.65rem] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="rounded border border-border bg-surface-2 px-2 py-1 font-mono text-[0.65rem] text-signal">
                    +{project.extra}
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
