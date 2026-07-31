import avatar from "@/assets/avatar.png.asset.json";
import { STATS } from "@/lib/portfolio-data";
import { useTilt } from "@/hooks/use-motion";
import { Reveal, Section } from "./Section";

export function About() {
  const tiltRef = useTilt<HTMLDivElement>(7);

  return (
    <Section
      id="about"
      label="About Me"
      title="The philosophy behind my craft"
      className="border-t border-border bg-surface-2/40"
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="scene-3d">
          <div ref={tiltRef} className="tilt-3d surface-panel rounded-2xl p-4">
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src={avatar.url}
                alt="Jivithesh A S portrait"
                width={512}
                height={512}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mono-label layer-lift mt-4 text-signal">Full Stack // Robotics</p>
          </div>
        </Reveal>

        <div>
          <Reveal delay={80}>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Full Stack Developer &amp; Robotics Enthusiast
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I am an undergraduate Computer Science and Engineering student at Karunya Institute of
              Technology &amp; Sciences, motivated by a genuine passion for full-stack web
              applications, machine learning models, and building autonomous intelligent systems.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Continuously building expertise in robust backend workflows, responsive interface
              designs, and low-level C programming. Striving to merge high-velocity computational
              power with fluid user experiences, bridging physical robotics intelligence with modern
              digital architectures.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={120 + i * 90}>
                <div className="card-3d rounded-xl border border-border bg-card p-4">
                  <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="mono-label mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
