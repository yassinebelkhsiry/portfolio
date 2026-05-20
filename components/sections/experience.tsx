"use client";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experiences" className="section-shell py-24">
      <SectionHeading
        eyebrow="Expériences"
        title="Une trajectoire alignée avec l'industrie, la finance et la recherche appliquée."
        description="Des expériences structurées autour du reporting, de l'analyse de performance, de la qualité des données et de la transformation de signaux métiers en indicateurs exploitables."
      />
      <div className="relative space-y-5 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan before:via-white/20 before:to-transparent md:before:left-1/2">
        {experiences.map((experience, index) => {
          const Icon = experience.icon;
          return (
            <Reveal key={experience.company} delay={index * 0.08}>
              <article className={`relative grid gap-5 md:grid-cols-2 ${index % 2 ? "" : "md:[&>div]:col-start-2"}`}>
                <span className="absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan shadow-glow md:left-1/2" />
                <div className="glass ml-10 rounded-lg p-6 md:ml-0">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-md bg-cyan/10 text-cyan">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{experience.company}</h3>
                      <p className="text-sm text-muted">{experience.period}</p>
                    </div>
                  </div>
                  <p className="mt-4 font-semibold text-cyan">{experience.role}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                    {experience.missions.map((mission) => (
                      <li key={mission}>- {mission}</li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-md border border-emerald/20 bg-emerald/8 p-3 text-sm text-emerald">
                    {experience.result}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
