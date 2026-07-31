import { useState } from "react";
import { BadgeCheck, ChevronDown, ChevronUp, Expand } from "lucide-react";
import {
  FEATURED_CERTIFICATIONS,
  OTHER_CERTIFICATIONS,
  type Certification,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Modal } from "./Modal";
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
  const [active, setActive] = useState<Certification | null>(null);

  const rest = OTHER_CERTIFICATIONS.filter((c) => filter === "All" || c.group === filter);
  const visible = expanded ? rest : rest.slice(0, COLLAPSED_COUNT);
  const total = FEATURED_CERTIFICATIONS.length + OTHER_CERTIFICATIONS.length;

  return (
    <Section
      id="certifications"
      label="Certifications"
      title={`${total} verified technical credentials`}
      subtitle="Scanned certificates first — click any card to open the full document"
      className="border-y border-border"
    >
      {/* ---------- featured: certificates with scans ---------- */}
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-signal" />
        <p className="mono-label text-signal">Certificate gallery</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_CERTIFICATIONS.map((cert, i) => (
          <Reveal key={`${cert.issuer}-${cert.title}`} delay={(i % 3) * 90} className="scene-3d">
            <button
              onClick={() => setActive(cert)}
              className="cert-card group glass flex h-full w-full flex-col overflow-hidden rounded-2xl p-3 text-left"
            >
              <div className="relative w-full overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate issued by ${cert.issuer} to Jivithesh A S`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="mono-label absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 translate-y-3 items-center gap-1.5 rounded-full border border-signal/50 bg-background/80 px-3 py-1.5 text-signal opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand className="h-3.5 w-3.5" />
                  View certificate
                </span>
              </div>

              <div className="relative px-3 pb-2 pt-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="mono-label text-signal">{cert.issuer}</p>
                  <span className="mono-label text-muted-foreground">{cert.date}</span>
                </div>
                <h3 className="mt-3 font-display text-sm font-bold leading-snug">{cert.title}</h3>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* ---------- remaining credentials ---------- */}
      <div className="mb-6 mt-16 flex items-center gap-3">
        <span className="h-px w-8 bg-border" />
        <p className="mono-label text-muted-foreground">All other credentials</p>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => {
              setFilter(f);
              setExpanded(false);
            }}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5",
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

      {rest.length > COLLAPSED_COUNT ? (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/60 hover:text-signal"
          >
            {expanded ? (
              <>
                Collapse to view less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Load more — {rest.length - COLLAPSED_COUNT} remaining{" "}
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      ) : null}

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        label={active ? `${active.issuer} · ${active.date}` : ""}
        title={active?.title ?? ""}
      >
        {active ? (
          <div className="space-y-5">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={active.image}
                alt={`${active.title} certificate issued by ${active.issuer} to Jivithesh A S`}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="mono-label text-muted-foreground">{active.group}</span>
              {active.id ? (
                <span className="mono-label text-muted-foreground">ID: {active.id}</span>
              ) : (
                <span className="mono-label inline-flex items-center gap-1.5 text-signal">
                  <BadgeCheck className="h-3.5 w-3.5" /> Verified credential
                </span>
              )}
            </div>
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}
