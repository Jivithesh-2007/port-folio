import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import avatar from "@/assets/avatar.png.asset.json";
import { useTilt } from "@/hooks/use-motion";

const ROLES = [
  "an Open-Source Contributor",
  "a Full Stack Developer",
  "a Robotics Enthusiast",
  "an AI/ML Explorer",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const cleared = deleting && text === "";
    const delay = done ? 1800 : cleared ? 220 : deleting ? 32 : 62;

    const timer = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(ROLES);
  const tiltRef = useTilt<HTMLDivElement>(9);

  return (
    <section id="home" className="relative isolate overflow-hidden pb-24 pt-32 sm:pt-40">
      <div className="absolute inset-0 -z-10 grid-backdrop" />
      <div className="glow-orb float-slow -left-24 top-10 -z-10 h-80 w-80 bg-signal/40" />
      <div className="glow-orb float-slow -right-16 top-40 -z-10 h-96 w-96 bg-accent/30 [animation-delay:2s]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-signal/40 bg-signal/10 px-3.5 py-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-signal" />
            <span className="mono-label text-signal">Available for global opportunities</span>
          </div>

          <h1 className="mt-7 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I am
            <br />
            <span className="text-gradient">Jivithesh A S</span>
          </h1>

          <p className="mt-5 min-h-[2.2em] font-display text-xl text-muted-foreground sm:text-3xl">
            I am{" "}
            <span className="text-foreground">
              {typed}
              <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-pulse bg-signal" />
            </span>
          </p>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Engineering intelligent full-stack software architectures &amp; autonomous robotic
            systems. Undergraduate Computer Science and Engineering student at Karunya Institute of
            Technology &amp; Sciences, passionate about software development, AI/ML, and building
            autonomous intelligent systems.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground shadow-[var(--shadow-signal)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore My Work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] transition-colors duration-300 hover:border-signal/60 hover:text-signal"
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </a>
          </div>

          <div className="mt-14 flex items-center gap-3 text-muted-foreground">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span className="mono-label">Scroll down</span>
          </div>
        </div>

        <div className="scene-3d">
          <div ref={tiltRef} className="tilt-3d relative mx-auto max-w-sm">
            <div className="spin-slow absolute -inset-6 rounded-[2rem] border border-dashed border-signal/30" />
            <div className="surface-panel relative overflow-hidden rounded-2xl p-5">
              <div className="mono-label flex items-center justify-between text-muted-foreground">
                <span className="text-signal">Available for opportunities</span>
                <span>ID_01</span>
              </div>
              <div className="layer-lift mt-4 overflow-hidden rounded-xl border border-border bg-surface-2">
                <img
                  src={avatar.url}
                  alt="Portrait of Jivithesh A S, full stack developer and robotics enthusiast"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4">
                <p className="font-display text-lg font-bold">Jivithesh A S</p>
                <p className="mono-label mt-1 text-muted-foreground">
                  IP: 142.250.190.46 // PROTOCOL: TRUE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
