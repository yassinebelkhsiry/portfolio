"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutStats } from "@/data/portfolio";

export function About() {
  return (
    <section id="apropos" className="section-shell py-24">
      <SectionHeading
        eyebrow="Profil"
        title="Un profil Data Science pensé pour les environnements exigeants."
        description="Mon approche combine rigueur statistique, compréhension métier et culture dashboard pour produire des analyses utilisables par des équipes opérationnelles, financières ou industrielles."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
        <Reveal className="glass rounded-lg p-6 md:p-8">
          <p className="text-lg leading-9 text-slate-200">
            Je suis étudiant en Master Data Science à Aix-Marseille Université, avec une
            orientation forte vers l'IA appliquée, la business intelligence, l'analyse
            prédictive et la visualisation de KPI. J'aime construire des systèmes
            analytiques qui ne s'arrêtent pas au modèle: ils expliquent, surveillent,
            priorisent et accélèrent la décision.
          </p>
          <p className="mt-5 text-lg leading-9 text-muted">
            Mes projets couvrent la maintenance prédictive aéronautique, le scoring
            bancaire, l'analyse sportive historique et les assistants IA. L'objectif est
            constant: rendre les données complexes lisibles, fiables et actionnables.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {aboutStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} className="glass rounded-lg p-6">
              <motion.p
                className="font-display text-4xl font-semibold text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                {stat.value}
                {stat.suffix}
              </motion.p>
              <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
