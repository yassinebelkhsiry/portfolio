import Image from "next/image";
import { Github, GitPullRequest, Star } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { personal } from "@/data/portfolio";

const repos = [
  { name: "CMAPSS Predictive Maintenance", stack: "Python, ML, Streamlit", metric: "RUL + anomalies" },
  { name: "World Cup Analytics Dashboard", stack: "Power BI, Python", metric: "1930-2022" },
  { name: "University AI Assistant", stack: "Qwen, LLaMA 3, LoRA", metric: "RAG + NLP" },
  { name: "Fraud Credit Scoring", stack: "XGBoost, SQL, SHAP", metric: "ROC-AUC 0,96" }
];

export function GithubSection() {
  return (
    <section id="github" className="section-shell py-24">
      <SectionHeading
        eyebrow="GitHub"
        title="Un espace de travail orienté preuves, code et reproductibilité."
        description="Cette section pointe vers les projets, notebooks, dashboards et expérimentations qui démontrent la capacité à passer d'un dataset brut à un livrable analytique présentable."
      />
      <div className="grid gap-6 lg:grid-cols-[.92fr_1.08fr]">
        <Reveal className="glass rounded-lg p-6">
          <div className="flex items-center gap-3">
            <Github className="h-8 w-8 text-cyan" />
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">yassinebelkhsiry</h3>
              <p className="text-muted">Repositories data science, BI et IA appliquée</p>
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-lg border border-white/10 bg-background/40">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=yassinebelkhsiry&show_icons=true&theme=tokyonight&hide_border=true&bg_color=040812&title_color=67e8f9&text_color=EAF2FF&icon_color=38BDF8"
              alt="Statistiques GitHub de Yassine Bel-Khsiry"
              width={720}
              height={320}
              className="w-full"
            />
          </div>
          <Button asChild className="mt-6">
            <a href={personal.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              Ouvrir GitHub
            </a>
          </Button>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {repos.map((repo, index) => (
            <Reveal key={repo.name} delay={index * 0.06} className="glass rounded-lg p-5">
              <div className="flex items-center justify-between">
                <GitPullRequest className="h-5 w-5 text-cyan" />
                <Star className="h-4 w-4 text-amber" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{repo.name}</h3>
              <p className="mt-2 text-sm text-muted">{repo.stack}</p>
              <p className="mt-4 rounded-md border border-cyan/20 bg-cyan/8 px-3 py-2 text-sm text-cyan">
                {repo.metric}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
