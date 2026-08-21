import { motion } from "framer-motion";
import { STATS } from "../../data/stats";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const ENRANKEO_HREF = "https://enrankeo.com/escuelas/los-pinos-nuevos";

function EnrankeoBadge() {
  return (
    <a
      href={ENRANKEO_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full max-w-[280px] rounded-xl p-4 text-white transition-all hover:-translate-y-0.5"
      style={{
        background: "#2563eb",
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.15), 0 2px 4px -1px rgba(0,0,0,0.1)",
      }}
      aria-label="Ver perfil de CELPIN en Enrankeo"
    >
      <div className="flex items-center justify-center gap-2 mb-3 pb-2.5 border-b border-white/20">
        <svg width="22" height="20" viewBox="0 0 103 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M102.765 16.4C101.625 4.04001 85.795 -1.14998 77.665 9.05002L62.595 26.88C56.975 33.52 46.755 33.52 41.135 26.88L25.915 8.87002C19.355 1.10002 6.65502 2.31002 2.29502 11.49C1.40502 13.39 0.89502 15.53 0.89502 17.83V81.55C0.89502 89.52 7.35502 95.98 15.325 95.98H88.845C96.565 95.98 102.825 89.72 102.825 82V17.83C102.825 17.34 102.805 16.87 102.755 16.4H102.765ZM51.865 82.04C38.715 82.04 28.045 71.38 28.045 58.21C28.045 45.04 38.705 34.39 51.865 34.39C65.025 34.39 75.685 45.05 75.685 58.21C75.685 71.37 65.025 82.04 51.865 82.04Z" fill="white"/>
          <path d="M67.305 1.03003L51.885 19.12L36.475 1.03003H67.305Z" fill="white"/>
        </svg>
        <span className="font-body text-[15px] font-bold text-white tracking-[-0.3px]">Enrankeo</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V9.5C18 11.4 16.5 13 14.6 13.2L14 13.3V15C14 15.5 14.3 16 14.8 16.2L18 17.5V20H6V17.5L9.2 16.2C9.7 16 10 15.5 10 15V13.3L9.4 13.2C7.5 13 6 11.4 6 9.5V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z" fill="#fbbf24"/>
        </svg>
        <div className="text-[12px] font-semibold text-white leading-tight text-center">Verificado en Enrankeo</div>
        <div className="text-[10px] text-white/75 leading-tight">Escuela Registrada</div>
        <div className="mt-1 text-[9px] font-mono tracking-[0.14em] uppercase text-white/60 flex items-center gap-1.5 group-hover:text-white/90 transition-colors">
          <span>2026</span>
          <span aria-hidden="true">·</span>
          <span>Ver perfil →</span>
        </div>
      </div>
    </a>
  );
}

export function TrustStrip() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-ink py-16 xl:py-20">
      <div className="max-w-landing mx-auto px-5 xl:px-14">
        <div className="grid grid-cols-2 xl:grid-cols-5 gap-x-8 gap-y-12 xl:gap-10 items-start">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col gap-1"
            >
              {/* Big number */}
              <p className="font-display font-semibold text-[56px] xl:text-[72px] leading-none text-cream tracking-tight">
                {stat.value}
                {stat.suffix && (
                  <span className="text-cream/40">{stat.suffix}</span>
                )}
              </p>

              {/* Label */}
              <p className="font-body text-body text-cream/60 whitespace-pre-line">
                {stat.label}
              </p>

              {/* Sublabel — hide TODOs in production */}
              {stat.sublabel && !stat.sublabel.startsWith("TODO") && (
                <p className="font-mono text-eyebrow text-cream/30 tracking-[0.14em] uppercase mt-0.5">
                  {stat.sublabel}
                </p>
              )}
            </motion.div>
          ))}

          {/* Enrankeo verification — 5th column on desktop, spans row on mobile */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: STATS.length * 0.08 }}
            className="col-span-2 xl:col-span-1 flex flex-col gap-3 items-center xl:items-start"
          >
            <EnrankeoBadge />
            <p className="text-body-sm text-cream/50 text-center xl:text-left max-w-[280px]">
              CELPIN está{" "}
              <em className="font-serif italic text-green">verificado</em>{" "}
              en Enrankeo, plataforma de referencia sobre centros educativos en R.D.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
