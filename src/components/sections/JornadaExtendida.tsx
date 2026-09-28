import { motion } from "framer-motion";
import { Clock, Check } from "lucide-react";
import { JORNADA, type ClaseExtra } from "../../data/jornada";
import { SITE } from "../../data/site";
import { Button } from "../ui/Button";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const WA_LINK = `https://wa.me/${SITE.contacto.whatsapp}?text=${encodeURIComponent(
  "Hola, me interesa la Jornada Extendida de CELPIN. ¿Qué disponibilidad tienen?"
)}`;

function ClaseCard({ clase, wide, index }: { clase: ClaseExtra; wide?: boolean; index: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={
        wide
          ? "bg-white rounded-2xl border border-border p-6 flex flex-col gap-4 sm:col-span-2 xl:col-span-1"
          : "bg-white rounded-2xl border border-border p-6 flex flex-col gap-4"
      }
    >
      <div className="flex flex-col gap-3">
        <h4 className="font-display font-semibold text-h3-card text-ink">{clase.nombre}</h4>
        <p className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-green-ink">
          <Clock size={13} strokeWidth={1.75} className="flex-shrink-0" />
          {clase.horario}
        </p>
        <p className="text-body-sm text-ink-soft">{clase.desc}</p>
      </div>
    </motion.div>
  );
}

export function JornadaExtendida() {
  const reduced = useReducedMotion();

  return (
    <section id="jornada-extendida" className="bg-cream py-20 xl:py-32 border-t border-border">
      <div className="max-w-landing mx-auto px-5 xl:px-14">

        {/* Header */}
        <div className="max-w-2xl mb-12 xl:mb-16">
          <h2 className="font-display font-semibold text-h2-mobile xl:text-h2-section text-ink mb-3">
            Jornada <em className="font-serif italic font-normal text-green">Extendida</em>
          </h2>
          <p className="font-display font-medium text-[22px] xl:text-[28px] leading-snug tracking-[-0.015em] text-ink-soft mb-5">
            Más tiempo para aprender, reforzar y avanzar.
          </p>
          <p className="text-lead-lg text-ink-soft mb-5">{JORNADA.descripcion}</p>
          <p className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-tint text-green-ink rounded-full font-body font-medium text-body-sm">
            <Clock size={15} strokeWidth={1.75} />
            {JORNADA.horario}
          </p>
        </div>

        {/* Modalidad académica */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 mb-16 xl:mb-24"
        >
          <div className="flex flex-col gap-5">
            <h3 className="font-display font-semibold text-h3-card text-ink">Modalidad académica</h3>
            <ul className="flex flex-col gap-3">
              {JORNADA.academico.map((item) => (
                <li key={item} className="flex items-center gap-3 text-body text-ink">
                  <span className="w-7 h-7 rounded-full bg-green-tint text-green-dark flex items-center justify-center flex-shrink-0">
                    <Check size={15} strokeWidth={2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 lg:pt-12">
            <p className="text-body text-ink-soft">{JORNADA.habitos}</p>
          </div>
        </motion.div>

        {/* Clases extracurriculares */}
        <div id="extracurriculares" className="max-w-2xl mb-8 xl:mb-10">
          <h3 className="font-display font-semibold text-[28px] xl:text-[36px] leading-tight tracking-[-0.02em] text-ink mb-3">
            Clases <em className="font-serif italic font-normal">extracurriculares</em>
          </h3>
          <p className="text-body text-ink-soft">{JORNADA.extracurricularesIntro}</p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-5">
          {[JORNADA.ingles, ...JORNADA.artes].map((clase, i) => (
            <ClaseCard key={clase.nombre} clase={clase} index={i} wide={i === 0} />
          ))}
        </div>

        {/* Cierre + CTA */}
        <div className="mt-12 xl:mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="text-body text-ink-soft max-w-xl">{JORNADA.cierre}</p>
          <Button variant="primary" href={WA_LINK} external className="flex-shrink-0">
            Consulta disponibilidad
          </Button>
        </div>

      </div>
    </section>
  );
}
