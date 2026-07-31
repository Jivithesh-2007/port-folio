import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { SiteFooter } from "@/components/portfolio/SiteFooter";

const TITLE = "Jivithesh A S — Full Stack Developer & Robotics Engineer";
const DESCRIPTION =
  "Portfolio of Jivithesh A S: full-stack web architectures, AI/ML models and autonomous robotic systems. CSE undergraduate at Karunya Institute of Technology & Sciences.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jivithesh A S",
          jobTitle: "Full Stack Developer & Robotics Enthusiast",
          email: "mailto:jivithesh448@gmail.com",
          alumniOf: "Karunya Institute of Technology and Sciences",
          knowsAbout: ["Full Stack Development", "Machine Learning", "Robotics", "React", "Node.js"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
