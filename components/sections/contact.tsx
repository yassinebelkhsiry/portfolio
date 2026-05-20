"use client";

import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { personal } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section-shell py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Disponible pour stage, alternance ou mission data à fort impact."
        description="Intéressé par les environnements aéronautiques, industriels, bancaires, assurance, énergie et conseil data où l'analyse doit produire une décision concrète."
      />
      <div className="grid gap-6 lg:grid-cols-[.78fr_1.22fr]">
        <Reveal className="glass rounded-lg p-6">
          <h3 className="font-display text-2xl font-semibold text-white">Coordonnées</h3>
          <div className="mt-6 space-y-4 text-muted">
            <a href={`mailto:${personal.email}`} className="flex items-center gap-3 transition hover:text-cyan">
              <Mail className="h-5 w-5" />
              {personal.email}
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-cyan">
              <Github className="h-5 w-5" />
              github.com/yassinebelkhsiry
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-cyan">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5" />
              {personal.location}
            </p>
          </div>
          <div className="mt-8 rounded-lg border border-white/10 bg-white/7 p-4">
            <p className="text-sm leading-6 text-muted">
              Cibles prioritaires: Airbus, Safran, EDF, Orange, AXA, Groupama,
              Capgemini, Crédit Agricole, Société Générale, BNP Paribas, Thales,
              Dassault et Michelin.
            </p>
          </div>
        </Reveal>
        <Reveal className="glass rounded-lg p-6">
          <form className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-muted">
                Nom
                <input
                  className="mt-2 w-full rounded-md border border-white/10 bg-background/60 px-4 py-3 text-white outline-none transition focus:border-cyan"
                  placeholder="Votre nom"
                />
              </label>
              <label className="text-sm text-muted">
                Entreprise
                <input
                  className="mt-2 w-full rounded-md border border-white/10 bg-background/60 px-4 py-3 text-white outline-none transition focus:border-cyan"
                  placeholder="Nom de l'entreprise"
                />
              </label>
            </div>
            <label className="text-sm text-muted">
              Email
              <input
                type="email"
                className="mt-2 w-full rounded-md border border-white/10 bg-background/60 px-4 py-3 text-white outline-none transition focus:border-cyan"
                placeholder="prenom.nom@entreprise.fr"
              />
            </label>
            <label className="text-sm text-muted">
              Message
              <textarea
                className="mt-2 min-h-36 w-full resize-none rounded-md border border-white/10 bg-background/60 px-4 py-3 text-white outline-none transition focus:border-cyan"
                placeholder="Décrivez le besoin data, analytics ou IA..."
              />
            </label>
            <Button type="button" className="justify-self-start">
              <Send className="h-4 w-4" />
              Envoyer le message
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
