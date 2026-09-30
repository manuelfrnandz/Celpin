import { motion } from "framer-motion";
import { Clock, Check } from "lucide-react";
import { JORNADA, type ClaseExtra } from "../../data/jornada";
import { SITE } from "../../data/site";
import { Button } from "../ui/Button";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cn } from "../../lib/cn";

const WA_LINK = `https://wa.me/${SITE.contacto.whatsapp}?text=${encodeURIComponent(
  "Hola, me interesa la Jornada Extendida de CELPIN. ¿Qué disponibilidad tienen?"
)}`;

function ClaseCard({ clase, index, className }: { clase: ClaseExtra; index: number; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={cn("bg-white rounded-2xl border border-border p-5 xl:p-6 flex flex-col gap-2", className)}
    >
      <h4 className="font-display font-semibold text-[22px] leading-tight text-ink">{clase.nombre}</h4>
      <p className="flex items-start gap-1.5 text-[13px] font-medium text-green-ink">
        <Clock size={14} strokeWidth={1.75} className="flex-shrink-0 mt-[2px]" />
        {clase.horario}
      </p>
      <p className="text-body-sm text-ink-soft">{clase.desc}</p>
    </motion.div>
  );
}

export function JornadaExtendida() {
  const reduced = useReducedMotion();
  const clases = [JORNADA.ingles, ...JORNADA.artes];

  return (
    <section id="jornada-extendida" className="bg-cream py-20 xl:py-28">
      <div className="max-w-landing mx-auto px-5 xl:px-14">

        {/* Header + modalidad académica, side by side on large screens */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start mb-14 xl:mb-16">
          <div>
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

          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="bg-white rounded-2xl border border-border p-6 xl:p-8 flex flex-col gap-5"
          >
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
            <p className="text-body-sm text-ink-soft border-t border-border pt-5">{JORNADA.habitos}</p>
          </motion.div>
        </div>

        {/* Clases extracurriculares */}
        <div id="extracurriculares" className="max-w-2xl mb-6 xl:mb-8">
          <h3 className="font-display font-semibold text-[28px] xl:text-[36px] leading-tight tracking-[-0.02em] text-ink mb-3">
            Clases <em className="font-serif italic font-normal">extracurriculares</em>
          </h3>
          <p className="text-body text-ink-soft">{JORNADA.extracurricularesIntro}</p>
        </div>

        {/* 5 clases + cierre = 6 recuadros parejos (3×2 en computadora, 2×3 en tablet) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5">
          {clases.map((clase, i) => (
            <ClaseCard key={clase.nombre} clase={clase} index={i} />
          ))}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: clases.length * 0.06 }}
            className="bg-ink rounded-2xl p-5 xl:p-6 flex flex-col gap-4 justify-between"
          >
            <p className="text-body-sm text-cream/75">{JORNADA.cierre}</p>
            <Button variant="primary-green" href={WA_LINK} external className="self-start">
              Consulta disponibilidad
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
