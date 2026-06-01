import { motion } from "framer-motion";
import { PILARES } from "../../data/pilares";
import { SITE } from "../../data/site";
import { Eyebrow } from "../ui/Eyebrow";
import { PillarCard } from "../cards/PillarCard";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Metodologia() {
  const reduced = useReducedMotion();

  return (
    <section id="metodologia" className="bg-cream py-20 xl:py-32 border-t border-border">
      <div className="max-w-landing mx-auto px-5 xl:px-14">

        {/* Header */}
        <div className="max-w-2xl mb-12 xl:mb-16">
          <Eyebrow number="03" label="Metodología" className="mb-4" />
          <h2 className="font-display font-semibold text-h2-mobile xl:text-h2-section text-ink mb-4">
            Enseñamos diferente porque los niños{" "}
            <em className="font-serif italic">aprenden diferente.</em>
          </h2>
          <p className="text-lead-lg text-ink-soft">
            Cuatro principios que guían cada decisión pedagógica en CELPIN,
            desde el aula hasta el patio.
          </p>
        </div>

        {/* Pilares 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-20 xl:mb-28">
          {PILARES.map((pilar, i) => (
            <PillarCard key={pilar.num} pilar={pilar} index={i} />
          ))}
        </div>

        {/* Fundador */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="grid xl:grid-cols-[300px_1fr] gap-10 xl:gap-16 items-center border-t border-border pt-16 xl:pt-20"
        >
          {/* Photo */}
          <div className="w-full max-w-[260px] mx-auto xl:mx-0 xl:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden flex-shrink-0 bg-ink">
            <img
              src={SITE.director.foto}
              alt={SITE.director.nombre}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

          {/* Quote + attribution */}
          <div className="flex flex-col gap-6">
            {/* TODO: Víctor enviar su quote personal — cuando lo envíe, reemplazar el texto de abajo */}
            <blockquote className="font-serif italic text-[1.75rem] xl:text-[2.25rem] leading-snug text-ink">
              "{SITE.fundador.cita}"
            </blockquote>
            <div className="h-px w-12 bg-border" />
            <div className="flex flex-col gap-1">
              <a
                href={SITE.director.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-h3-card text-ink hover:text-green-dark transition-colors"
              >
                {SITE.director.nombre}
              </a>
              <p className="text-body-sm text-ink-muted">
                {SITE.director.titulo}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
