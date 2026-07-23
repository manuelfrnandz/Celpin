import { motion } from "framer-motion";
import { COPA_CELPIN } from "../../data/copaCelpin";
import { Eyebrow } from "../ui/Eyebrow";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function CopaCelpin() {
  const reduced = useReducedMotion();

  return (
    <section id="copa-celpin" className="bg-cream py-20 xl:py-32 border-t border-border">
      <div className="max-w-landing mx-auto px-5 xl:px-14">

        {/* Header */}
        <div className="max-w-2xl mb-12 xl:mb-16">
          <Eyebrow number="05" label="Copa CELPIN" className="mb-4" />
          <h2 className="font-display font-semibold text-h2-mobile xl:text-h2-section text-ink mb-4">
            Cuatro facciones,{" "}
            <em className="font-serif italic text-green">una comunidad.</em>
          </h2>
          <p className="font-mono text-eyebrow text-ink-muted tracking-[0.14em] uppercase mb-4">
            {COPA_CELPIN.detalle}
          </p>
          <p className="text-lead-lg text-ink-soft">
            {COPA_CELPIN.descripcion}
          </p>
        </div>

        {/* Equipos grid */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {COPA_CELPIN.equipos.map((equipo, i) => (
            <motion.div
              key={equipo.nombre}
              initial={reduced ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-border p-6 xl:p-8 flex flex-col items-center gap-4 hover:shadow-card transition-shadow"
            >
              <div className="aspect-square w-full max-w-[180px] flex items-center justify-center overflow-hidden">
                <img
                  src={equipo.logo}
                  alt={equipo.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display font-semibold text-h3-card text-ink text-center">
                {equipo.nombre}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
