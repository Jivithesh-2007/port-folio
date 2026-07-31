import { ArrowDown, ArrowUpRight, FileText, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import avatar from "@/assets/avatar.png.asset.json";
import resume from "@/assets/resume.pdf.asset.json";
import { useTilt } from "@/hooks/use-motion";

const ROLES = [
  "Full Stack Developer",
  "AI & Machine Learning Enthusiast",
  "Computer Vision Explorer",
  "Robotics Engineer in the Making",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const done = !deleting && text === word;
    const cleared = deleting && text === "";
    const delay = done ? 1900 : cleared ? 220 : deleting ? 30 : 60;

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
  const tiltRef = useTilt<HTMLDivElement>(8);

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 dot-fade" />
      <div className="glow-orb float-slow -left-32 top-24 -z-10 h-80 w-80 bg-signal/20" />
      <div className="glow-orb float-slow -right-24 bottom-16 -z-10 h-96 w-96 bg-foreground/10 [animation-delay:2.5s]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="glass-soft inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-signal" />
            <span className="mono-label text-muted-foreground">
              Open to internships & collaborations
            </span>
          </div>

          <h1 className="mt-8 font-display text-[2.75rem] font-bold leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.25rem]">
            Jivithesh
            <br />
            <span className="text-muted-foreground/60">A S</span>
            <span className="text-signal">.</span>
          </h1>

          <p className="mt-6 min-h-[1.8em] font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground sm:text-base">
            {typed}
            <span className="ml-1 inline-block h-[0.95em] w-[2px] translate-y-[0.15em] animate-pulse bg-signal" />
          </p>

          <p className="mt-7 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Computer Science &amp; Engineering undergraduate at Karunya Institute of Technology and
            Sciences. I design clean full-stack systems, apply machine learning and computer vision
            fundamentals, and build autonomous robotics prototypes that solve real problems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass inline-flex items-center gap-2 rounded-full px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 hover:text-signal"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 hover:border-signal/60 hover:text-signal"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>

          <div className="mt-14 flex items-center gap-3 text-muted-foreground">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span className="mono-label">Scroll to explore</span>
          </div>
        </div>

        <div className="scene-3d">
          <div ref={tiltRef} className="tilt-3d relative mx-auto max-w-sm">
            <div className="spin-slow absolute -inset-8 rounded-full border border-dashed border-border" />
            <div className="glass relative overflow-hidden rounded-3xl p-5">
              <div className="mono-label flex items-center justify-between text-muted-foreground">
                <span className="text-signal">Profile</span>
                <span>01 / 01</span>
              </div>
              <div className="layer-lift mt-4 overflow-hidden rounded-2xl border border-border bg-surface-2">
                <img
                  src={avatar.url}
                  alt="Portrait of Jivithesh A S, full stack developer and robotics enthusiast"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-end justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-bold">Jivithesh A S</p>
                  <p className="mono-label mt-1 text-muted-foreground">Coimbatore, India</p>
                </div>
                <p className="mono-label text-signal">CGPA 9.32</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
