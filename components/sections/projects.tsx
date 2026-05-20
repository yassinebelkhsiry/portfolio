"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, RadioTower } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import {
  AnomalyHeatmap,
  D3SensorRadar,
  EngineChart,
  FraudChart,
  WorldCupChart
} from "@/components/charts/portfolio-charts";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/portfolio";

function ProjectVisual({ id }: { id: string }) {
  if (id === "aerospace") {
    return (
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-background/45 p-4">
          <p className="mb-3 text-sm font-semibold text-white">Dégradation moteur et RUL</p>
          <EngineChart />
        </div>
        <div className="rounded-lg border border-white/10 bg-background/45 p-4">
          <p className="mb-3 text-sm font-semibold text-white">Heatmap anomalies capteurs</p>
          <AnomalyHeatmap />
        </div>
        <div className="rounded-lg border border-white/10 bg-background/45 p-4 lg:col-span-2">
          <p className="mb-3 text-sm font-semibold text-white">Radar D3 - signature capteurs</p>
          <D3SensorRadar />
        </div>
      </div>
    );
  }
  if (id === "worldcup") {
    return (
      <div className="rounded-lg border border-white/10 bg-background/45 p-4">
        <p className="mb-3 text-sm font-semibold text-white">Buts par édition majeure</p>
        <WorldCupChart />
      </div>
    );
  }
  if (id === "fraud") {
    return (
      <div className="rounded-lg border border-white/10 bg-background/45 p-4">
        <p className="mb-3 text-sm font-semibold text-white">Score de risque et fraude observée</p>
        <FraudChart />
      </div>
    );
  }
  return (
    <div className="rounded-lg border border-white/10 bg-background/45 p-5">
      <div className="grid gap-3 md:grid-cols-4">
        {["PDF", "Extraction", "JSON", "LLM", "LoRA", "Réponse"].map((step, index) => (
          <motion.div
            key={step}
            className="rounded-md border border-violet/25 bg-violet/10 p-4 text-center"
            animate={{ opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.18 }}
          >
            <p className="font-display text-sm font-semibold text-white">{step}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projets" className="section-shell py-24">
      <SectionHeading
        eyebrow="Projets"
        title="Études de cas construites comme des produits analytiques."
        description="Chaque projet combine un contexte métier crédible, des indicateurs actionnables, des visualisations et une logique de décision prête à être présentée à un recruteur technique ou métier."
      />
      <div className="space-y-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.id} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                className="glass overflow-hidden rounded-lg"
              >
                <div className="grid lg:grid-cols-[.88fr_1.12fr]">
                  <div className="relative min-h-[320px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/55 px-3 py-2 text-sm text-white backdrop-blur">
                      <Icon className="h-4 w-4" style={{ color: project.accent }} />
                      {project.subtitle}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                      {project.kpis.map((kpi) => (
                        <div key={kpi.label} className="rounded-md border border-white/10 bg-background/58 p-3 backdrop-blur">
                          <p className="font-display text-xl font-semibold text-white">{kpi.value}</p>
                          <p className="mt-1 text-xs text-muted">{kpi.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-3 inline-flex items-center gap-2 text-sm text-cyan">
                          <RadioTower className="h-4 w-4" />
                          Cas métier recruteur
                        </p>
                        <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-5 leading-8 text-slate-200">{project.story}</p>
                    <p className="mt-4 leading-8 text-muted">
                      <span className="font-semibold text-white">Impact business: </span>
                      {project.impact}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/7 px-3 py-1 text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <ProjectVisual id={project.id} />
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button asChild size="sm" variant="secondary">
                        <a href="https://github.com/yassinebelkhsiry" target="_blank" rel="noreferrer">
                          <Github className="h-4 w-4" />
                          Code GitHub
                        </a>
                      </Button>
                      <Button asChild size="sm">
                        <a href="#contact">
                          <ExternalLink className="h-4 w-4" />
                          Démo live
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
