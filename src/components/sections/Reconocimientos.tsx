import { motion } from "framer-motion";
import { Eyebrow } from "../ui/Eyebrow";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Reconocimientos() {
  const reduced = useReducedMotion();

  return (
    <section id="reconocimientos" className="bg-cream py-12 xl:py-16 border-t border-border">
      <div className="max-w-landing mx-auto px-5 xl:px-14">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10"
        >
          <div className="max-w-md">
            <Eyebrow label="Reconocimientos" className="mb-3" />
            <p className="text-body text-ink-soft">
              CELPIN está{" "}
              <em className="font-serif italic text-green-dark">rankeado</em>{" "}
              como uno de los centros educativos de referencia en Santo Domingo por Enrankeo.
            </p>
          </div>

          <div className="w-full md:w-auto md:flex-shrink-0 flex justify-center md:justify-end">
            <iframe
              src="https://enrankeo.com/escuelas/los-pinos-nuevos/badge"
              width="320"
              height="280"
              frameBorder="0"
              loading="lazy"
              title="Badge de CELPIN en Enrankeo"
              style={{ borderRadius: "12px", overflow: "hidden", maxWidth: "100%" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
