import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { GithubSection } from "@/components/sections/github-section";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { BackgroundFX } from "@/components/ui/background-fx";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-radial-grid">
      <BackgroundFX />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <GithubSection />
      <Contact />
    </main>
  );
}
