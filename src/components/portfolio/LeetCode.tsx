import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight, Code2, Flame, Trophy } from "lucide-react";
import { getLeetCodeStats } from "@/lib/leetcode.functions";
import { useTilt } from "@/hooks/use-motion";
import { Reveal, Section } from "./Section";

export function LeetCode() {
  const fetchStats = useServerFn(getLeetCodeStats);
  const tiltRef = useTilt<HTMLDivElement>(6);

  const { data, isLoading } = useQuery({
    queryKey: ["leetcode-stats"],
    queryFn: () => fetchStats(),
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
  });

  const solved = data?.solved;
  const total = data?.total;
  const pct = solved && total?.all ? Math.min(100, (solved.all / total.all) * 100) : 0;

  const rows = [
    { label: "Easy", value: solved?.easy ?? 0, of: total?.easy ?? 0 },
    { label: "Medium", value: solved?.medium ?? 0, of: total?.medium ?? 0 },
    { label: "Hard", value: solved?.hard ?? 0, of: total?.hard ?? 0 },
  ];

  return (
    <Section
      id="leetcode"
      label="Problem Solving"
      title="LeetCode — live statistics"
      subtitle="Fetched directly from my LeetCode profile, refreshed automatically"
      className="relative border-y border-border"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 dot-fade opacity-60" />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="scene-3d">
          <div ref={tiltRef} className="tilt-3d glass shine-hover h-full rounded-3xl p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mono-label text-signal">Problems solved</p>
                <p className="mt-3 font-display text-5xl font-bold tabular-nums sm:text-6xl">
                  {isLoading ? "—" : solved?.all ?? 0}
                  <span className="ml-2 font-mono text-base font-normal text-muted-foreground">
                    / {total?.all ?? 0}
                  </span>
                </p>
              </div>
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-signal/40 bg-signal/10">
                <Code2 className="h-5 w-5 text-signal" />
              </div>
            </div>

            <div className="mt-7 h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-signal transition-[width] duration-1000 ease-out"
                style={{ width: `${pct}%` }}
              />
            </div>

            <div className="mt-7 space-y-4">
              {rows.map((row) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between">
                    <p className="mono-label text-muted-foreground">{row.label}</p>
                    <p className="font-mono text-xs tabular-nums">
                      {row.value}
                      <span className="text-muted-foreground"> / {row.of}</span>
                    </p>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-foreground/60 transition-[width] duration-1000 ease-out"
                      style={{ width: `${row.of ? (row.value / row.of) * 100 : 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <a
              href={data?.profileUrl ?? "https://leetcode.com/u/30aYsYXBXU/"}
              target="_blank"
              rel="noreferrer noopener"
              className="magnetic mono-label mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2.5 text-muted-foreground transition-colors hover:border-signal/60 hover:text-signal"
            >
              Open LeetCode profile
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="scene-3d">
          <div className="grid h-full gap-6 sm:grid-cols-2">
            <StatTile
              icon={<Flame className="h-4 w-4 text-signal" />}
              label="Global rank"
              value={data?.ranking ? data.ranking.toLocaleString() : "—"}
              hint="Across all LeetCode users"
            />
            <StatTile
              icon={<Trophy className="h-4 w-4 text-signal" />}
              label="Contest rating"
              value={data?.contest.rating ? Math.round(data.contest.rating).toString() : "—"}
              hint={
                data?.contest.attended ? `${data.contest.attended} contests attended` : "No contests yet"
              }
            />
            <StatTile
              icon={<Code2 className="h-4 w-4 text-signal" />}
              label="Username"
              value={data?.username ?? "—"}
              hint="Live from leetcode.com"
            />
            <StatTile
              icon={<ArrowUpRight className="h-4 w-4 text-signal" />}
              label="Acceptance mix"
              value={`${solved?.easy ?? 0}E · ${solved?.medium ?? 0}M · ${solved?.hard ?? 0}H`}
              hint={data?.error ?? "Auto-refreshes every 5 minutes"}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function StatTile({
  icon,
  label,
  value,
  hint,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="cert-card glass-soft layer-lift flex flex-col rounded-2xl p-5">
      <div className="flex items-center gap-2">
        {icon}
        <p className="mono-label text-muted-foreground">{label}</p>
      </div>
      <p className="mt-4 font-display text-2xl font-bold tabular-nums">{value}</p>
      <p className="mt-auto pt-4 text-xs leading-relaxed text-muted-foreground">{hint}</p>
    </div>
  );
}
