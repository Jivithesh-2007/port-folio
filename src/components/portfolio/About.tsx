import avatar from "@/assets/avatar.png.asset.json";
import { STATS } from "@/lib/portfolio-data";
import { useTilt } from "@/hooks/use-motion";
import { Reveal, Section } from "./Section";

export function About() {
  const tiltRef = useTilt<HTMLDivElement>(7);

  return (
    <Section
      id="about"
      label="About"
      title="Engineering with intent"
      subtitle="Who I am, how I work, and what I am building towards"
      className="border-t border-border"
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="scene-3d">
          <div ref={tiltRef} className="tilt-3d glass rounded-3xl p-4">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={avatar.url}
                alt="Jivithesh A S portrait"
                width={512}
                height={512}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mono-label layer-lift mt-4 text-signal">Full Stack · AI/ML · Robotics</p>
          </div>
        </Reveal>

        <div>
          <Reveal delay={80}>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Full Stack Developer, AI/ML &amp; Robotics
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I am a Computer Science and Engineering undergraduate at Karunya Institute of
              Technology and Sciences, maintaining a 9.32 CGPA while working across full-stack web
              development, applied machine learning and autonomous robotics.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              My focus is on writing clear, maintainable code: structured backends in Node.js and
              MySQL, accessible React interfaces, and Python-based ML and computer vision work. I
              learn through building — internships, hackathons and national robotics competitions
              have shaped how I ship under real constraints.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={120 + i * 90}>
                <div className="cert-card glass rounded-2xl p-4">
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
