import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className="mb-10 max-w-3xl">
      <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-cyan">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-muted md:text-lg">{description}</p>
    </Reveal>
  );
}
