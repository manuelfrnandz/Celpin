import { useEffect } from "react";
import { motion } from "framer-motion";
import { PILARES } from "../../data/pilares";
import { SITE } from "../../data/site";
import { Eyebrow } from "../ui/Eyebrow";
import { PillarCard } from "../cards/PillarCard";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Metodologia() {
  const reduced = useReducedMotion();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

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
          {/* Fundador photo */}
          <div className="w-full max-w-[260px] mx-auto xl:mx-0 xl:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden flex-shrink-0 bg-ink">
            <img
              src={SITE.fundador.foto}
              alt={SITE.fundador.nombre}
              className="w-full h-full object-cover object-right"
              loading="lazy"
            />
          </div>

          {/* Fundador quote + attribution */}
          <div className="flex flex-col gap-6">
            <blockquote className="font-serif italic text-[1.75rem] xl:text-[2.25rem] leading-snug text-ink">
              "{SITE.fundador.cita}"
            </blockquote>
            <div className="h-px w-12 bg-border" />
            <div className="flex flex-col gap-1">
              <p className="font-display font-semibold text-h3-card text-ink">
                {SITE.fundador.nombre}
              </p>
              <p className="text-body-sm text-ink-muted">
                {SITE.fundador.titulo}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Director — Editorial layout */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="border-t border-border pt-16 xl:pt-20 mt-16 xl:mt-20"
        >
          {/* flow-root = clearfix moderno — contiene los floats */}
          <div className="xl:flow-root">

            {/* Foto — flota a la izquierda en desktop */}
            <div className="xl:float-left xl:w-[220px] xl:mr-10 xl:mb-4 mb-8 max-w-[220px] mx-auto xl:mx-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-ink">
                <img
                  src={SITE.director.foto}
                  alt={SITE.director.nombre}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex flex-col gap-0.5">
                <a
                  href={SITE.director.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-[1.05rem] text-ink hover:text-green-dark transition-colors"
                >
                  {SITE.director.nombre}
                </a>
                <p className="text-body-sm text-ink-muted">{SITE.director.titulo}</p>
              </div>
            </div>

            {/* Instagram embed — flota a la derecha en desktop */}
            <div className="xl:float-right xl:w-[360px] xl:ml-10 xl:mb-4 mb-8 mx-auto xl:mx-0 w-full max-w-[360px]">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/reel/DW4MnWdCPl4/?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "3px",
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: 0,
                  maxWidth: "360px",
                  minWidth: "280px",
                  padding: 0,
                  width: "100%",
                }}
              />
            </div>

            {/* Quote + historia — fluyen entre foto y embed */}
            <blockquote className="font-serif italic text-[1.5rem] xl:text-[1.85rem] leading-snug text-ink mb-6">
              "{SITE.director.cita}"
            </blockquote>
            <p className="text-body text-ink-soft leading-relaxed">
              {SITE.director.historia}
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
