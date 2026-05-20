"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="competences" className="section-shell py-24">
      <SectionHeading
        eyebrow="Compétences"
        title="Stack analytique complète, du SQL au modèle déployable."
        description="Une combinaison de data preparation, machine learning, BI et storytelling pour livrer des outils compréhensibles par les métiers et solides côté technique."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <Reveal key={skill.name} delay={(index % 4) * 0.05}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass group h-full rounded-lg p-5 transition hover:border-cyan/40"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-cyan/10 text-cyan">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs text-muted">{skill.group}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{skill.name}</h3>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-violet"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                  />
                </div>
                <p className="mt-3 text-sm text-muted">{skill.level}% maîtrise projet</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
