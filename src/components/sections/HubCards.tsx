import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Landmark, BookOpen, Sparkles, ClipboardCheck, MessageCircleQuestion, ArrowRight } from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const CARDS = [
  {
    to: "/nosotros",
    Icon: Landmark,
    titulo: "Nosotros",
    desc: "Nuestra historia, el equipo y la forma en que enseñamos desde 2007.",
    incluye: "Metodología · Fundador · Director",
  },
  {
    to: "/programas",
    Icon: BookOpen,
    titulo: "Programas",
    desc: "Primaria, Secundaria, Strukturas y la Jornada Extendida con clases extracurriculares.",
    incluye: "Niveles · Jornada Extendida · Extracurriculares",
  },
  {
    to: "/vida-estudiantil",
    Icon: Sparkles,
    titulo: "Vida estudiantil",
    desc: "El día a día de nuestros estudiantes, los deportes y la Copa CELPIN.",
    incluye: "Comunidad · Deportes · Copa CELPIN",
  },
  {
    to: "/admisiones",
    Icon: ClipboardCheck,
    titulo: "Admisiones",
    desc: "Cómo inscribir a tu hijo, el transporte escolar y los documentos de inscripción.",
    incluye: "Proceso · Transporte · Documentos",
  },
  {
    to: "/preguntas-frecuentes",
    Icon: MessageCircleQuestion,
    titulo: "Preguntas frecuentes",
    desc: "Costos, horario, niveles, transporte y todo lo que las familias nos preguntan.",
    incluye: "Respuestas directas",
  },
];

export function HubCards() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-cream py-16 xl:py-24">
      <div className="max-w-landing mx-auto px-5 xl:px-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5 gap-5">
          {CARDS.map(({ to, Icon, titulo, desc, incluye }, i) => (
            <motion.div
              key={to}
              className={i < 3 ? "lg:col-span-2 xl:col-span-1" : i === 3 ? "lg:col-span-3 xl:col-span-1" : "sm:col-span-2 lg:col-span-3 xl:col-span-1"}
              initial={reduced ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Link
                to={to}
                className="group h-full bg-white rounded-2xl border border-border p-6 xl:p-7 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-green/60 hover:shadow-card"
              >
                <span className="w-11 h-11 rounded-xl bg-green-tint text-green-dark flex items-center justify-center">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-display font-semibold text-h3-card text-ink">{titulo}</h3>
                  <p className="text-body-sm text-ink-soft">{desc}</p>
                </div>
                <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-muted">
                  {incluye}
                </p>
                <span className="inline-flex items-center gap-1.5 text-body-sm font-medium text-green-dark group-hover:gap-2.5 transition-all">
                  Ver más <ArrowRight size={14} strokeWidth={1.75} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
