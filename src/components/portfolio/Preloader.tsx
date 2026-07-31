import { useEffect, useState } from "react";

const NAME = "JIVITHESH";

/** Nothing OS style boot sequence: dot-matrix name reveal + hairline progress. */
export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setMounted(true);
    const start = performance.now();
    const duration = 1750;
    let frame = 0;

    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / duration);
      setProgress(t);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 420);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted || done) return null;

  const pct = Math.round(progress * 100);

  return (
    <div
      aria-hidden
      data-exiting={progress >= 1}
      className="preloader fixed inset-0 z-[200] grid place-items-center bg-background"
    >
      <div className="pointer-events-none absolute inset-0 dot-matrix opacity-40" />
      <div className="glow-orb float-slow left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 bg-signal/12" />

      <div className="relative w-full max-w-md px-8 text-center">
        <p className="mono-label text-muted-foreground">Portfolio · Boot</p>

        <h1 className="mt-6 flex justify-center font-display text-3xl font-bold tracking-[0.28em] sm:text-4xl">
          {NAME.split("").map((char, i) => (
            <span
              key={`${char}-${i}`}
              className="boot-letter inline-block"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <p className="mono-label mt-4 text-signal">A S</p>

        <div className="mt-10 h-px w-full overflow-hidden bg-border">
          <div
            className="h-full origin-left bg-signal"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>

        <div className="mono-label mt-4 flex items-center justify-between text-muted-foreground">
          <span>Initialising interface</span>
          <span className="text-foreground">{String(pct).padStart(3, "0")}%</span>
        </div>
      </div>
    </div>
  );
}
