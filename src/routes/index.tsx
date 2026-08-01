import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Preloader } from "@/components/portfolio/Preloader";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { Achievements } from "@/components/portfolio/Achievements";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { SiteFooter } from "@/components/portfolio/SiteFooter";

const TITLE = "Jivithesh A S — Full Stack Developer & Robotics Engineer";
const DESCRIPTION =
  "Portfolio of Jivithesh A S: full-stack web architectures, AI/ML models and autonomous robotic systems. CSE undergraduate at Karunya University.";

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
          alumniOf: "Karunya University",
          knowsAbout: ["Full Stack Development", "Machine Learning", "Robotics", "React", "Node.js"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Preloader />
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Timeline />

        <Certifications />
        <Contact />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}

