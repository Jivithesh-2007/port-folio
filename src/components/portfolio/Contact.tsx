import { useState } from "react";
import { Github, Linkedin, Lock, Mail, Send, SquareCode } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/portfolio-data";
import { toast } from "sonner";
import { useTilt } from "@/hooks/use-motion";
import { Reveal, Section } from "./Section";

export function Contact() {
  const tiltRef = useTilt<HTMLDivElement>(5);
  const [sending, setSending] = useState(false);

  return (
    <Section
      id="contact"
      label="Contact"
      title="Let’s build something together"
      subtitle="Open to internships, collaborations and engineering conversations"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="scene-3d">
          <div ref={tiltRef} className="tilt-3d glass h-full rounded-3xl p-7">
            <p className="mono-label text-signal">Contact details</p>
            <h3 className="mt-4 font-display text-2xl font-bold">
              Available for new opportunities.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Whether it is a full-stack build, an applied ML idea or a robotics prototype, I am
              happy to talk through the problem and how I can help.
            </p>
            <div className="layer-lift mt-8 rounded-2xl border border-border bg-card/70 p-4">
              <p className="mono-label text-muted-foreground">Direct email</p>
              <a
                href="mailto:jivithesh448@gmail.com"
                className="mt-2 flex items-center gap-2 text-sm font-medium transition-colors hover:text-signal"
              >
                <Mail className="h-4 w-4 shrink-0 text-signal" />
                <span className="truncate">jivithesh448@gmail.com</span>
              </a>
            </div>

            <div className="mt-4 grid gap-3">
              {SOCIAL_LINKS.filter((link) => link.label !== "Email").map((link) => {
                const Icon =
                  link.label === "GitHub" ? Github : link.label === "LinkedIn" ? Linkedin : SquareCode;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="layer-lift group flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 transition-colors hover:border-signal/60"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-signal" />
                    <span className="min-w-0">
                      <span className="mono-label block text-muted-foreground">{link.label}</span>
                      <span className="mt-1 block truncate text-sm font-medium transition-colors group-hover:text-signal">
                        {link.handle}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSending(true);
              setTimeout(() => {
                setSending(false);
                toast.success("Message sent", {
                  description: "Thanks for reaching out — I'll reply shortly.",
                });
                (event.target as HTMLFormElement).reset();
              }, 700);
            }}
            className="glass rounded-3xl p-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="mono-label text-signal">Send a message</p>
              <p className="mono-label flex items-center gap-1.5 text-muted-foreground">
                <Lock className="h-3 w-3" />
                Secure form
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" placeholder="Jane Doe" />
              <Field label="Email address" name="email" type="email" placeholder="jane@studio.com" />
            </div>
            <div className="mt-4">
              <Field label="Message subject" name="subject" placeholder="Internship / project collaboration" />
            </div>
            <div className="mt-4">
              <label className="mono-label text-muted-foreground" htmlFor="message">
                Message body
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about the project or role..."
                className="mt-2 w-full resize-none rounded-xl border border-input bg-secondary/50 px-3.5 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-signal"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mono-label text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-secondary/50 px-3.5 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-signal"
      />
    </div>
  );
}
