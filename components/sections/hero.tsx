"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Mail, Radar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroKpis, personal } from "@/data/portfolio";

const titles = ["Data Scientist", "Data Analyst", "AI Engineer", "Business Intelligence Analyst"];

export function Hero() {
  return (
    <section id="accueil" className="section-shell relative flex min-h-screen items-center pt-24">
      <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/8 px-4 py-2 text-sm text-cyan">
            <Radar className="h-4 w-4" />
            Profil Data Science orienté industrie, IA et décision métier
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] text-white md:text-7xl">
            {personal.name}
          </h1>
          <div className="mt-5 h-10 overflow-hidden font-display text-2xl font-semibold text-gradient md:text-3xl">
            <motion.div
              animate={{ y: ["0%", "-25%", "-50%", "-75%", "0%"] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            >
              {titles.map((title) => (
                <div key={title} className="h-10">
                  {title}
                </div>
              ))}
            </motion.div>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Étudiant en Master Data Science à Aix-Marseille Université, je conçois
            des analyses fiables, des tableaux de bord décisionnels et des modèles
            prédictifs pour transformer les données complexes en leviers opérationnels.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="/cv-bel-khsiry-yassine.pdf" download>
                <Download className="h-4 w-4" />
                Télécharger le CV
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#projets">Voir les projets</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Me contacter
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
            <span>{personal.location}</span>
            <span className="text-white/25">/</span>
            <span>{personal.education}</span>
            <span className="text-white/25">/</span>
            <a href={personal.github} className="inline-flex items-center gap-2 text-cyan">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/20" />
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/20" />
          <div className="relative mx-auto aspect-[4/5] max-w-[430px] overflow-hidden rounded-lg border border-white/15 bg-navy shadow-panel">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-46" />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan/10 via-background/30 to-background" />
            <div className="absolute inset-x-8 top-8 rounded-lg border border-cyan/20 bg-background/50 p-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan">Mission Control</p>
              <p className="mt-2 font-display text-2xl font-semibold text-white">Analytics industriel</p>
            </div>
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
              {heroKpis.map((kpi) => (
                <div key={kpi.label} className="rounded-lg border border-white/10 bg-white/8 p-4 backdrop-blur-xl">
                  <p className="font-display text-2xl font-semibold text-white">{kpi.value}</p>
                  <p className="mt-1 text-xs text-muted">{kpi.label}</p>
                  <p className="mt-2 text-xs text-cyan">{kpi.trend}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <a
        href="#apropos"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/15 p-3 text-muted transition hover:text-cyan md:block"
        aria-label="Descendre"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
