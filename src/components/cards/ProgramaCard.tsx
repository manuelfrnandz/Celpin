import { motion } from "framer-motion";
import { type Programa } from "../../data/programas";
import { Pill } from "../ui/Pill";
import { PhotoPlaceholder } from "../ui/PhotoPlaceholder";

interface Props {
  programa: Programa;
  index?: number;
}

export function ProgramaCard({ programa, index = 0 }: Props) {
  const base = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, delay: index * 0.07 },
  };

  if (programa.featured) {
    return (
      <motion.div
        {...base}
        className="bg-ink rounded-2xl overflow-hidden flex flex-col"
      >
        {/* Logo area */}
        <div className="aspect-[16/9] flex items-center justify-center relative bg-white/5">
          <img
            src="/images/strukturas-logo.png"
            alt="Strukturas"
            className="h-16 w-auto object-contain"
          />
          <span className="absolute top-4 right-4 font-mono text-eyebrow tracking-[0.14em] uppercase text-green bg-green-tint px-3 py-1 rounded-full">
            Especializado
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-6 xl:p-8 flex-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-eyebrow text-cream/40 tracking-[0.14em] uppercase">
              {programa.tag}
            </span>
            <span className="text-cream/20">·</span>
            <span className="font-mono text-eyebrow text-cream/40 tracking-[0.14em] uppercase">
              {programa.edad}
            </span>
          </div>
          <h3 className="font-display font-semibold text-h3-card text-cream">
            {programa.titulo}
          </h3>
          <p className="text-body text-cream/60 flex-1">{programa.desc}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      {...base}
      className="bg-white rounded-2xl shadow-card overflow-hidden flex flex-col"
    >
      {/* Photo */}
      <div className="aspect-[16/9] overflow-hidden bg-green-tint">
        {programa.foto.includes("placeholder") ? (
          <PhotoPlaceholder
            label={programa.tag}
            className="w-full h-full"
          />
        ) : (
          <img
            src={programa.foto}
            alt={programa.titulo}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 xl:p-8 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <Pill>{programa.tag}</Pill>
          <span className="font-mono text-eyebrow text-ink-muted tracking-[0.14em] uppercase">
            {programa.edad}
          </span>
        </div>
        <h3 className="font-display font-semibold text-h3-card text-ink">
          {programa.titulo}
        </h3>
        <p className="text-body text-ink-soft flex-1">{programa.desc}</p>
      </div>
    </motion.div>
  );
}
