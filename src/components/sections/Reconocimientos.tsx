import { motion } from "framer-motion";
import { Eyebrow } from "../ui/Eyebrow";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const BADGE_HREF = "https://enrankeo.com/escuelas/los-pinos-nuevos";

// Badge nativo — mismo diseño que el iframe de Enrankeo (bloqueado por CSP para embed).
function EnrankeoBadge() {
  return (
    <a
      href={BADGE_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full max-w-[320px] rounded-xl p-5 text-white transition-all hover:-translate-y-0.5"
      style={{
        background: "#2563eb",
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
      }}
      aria-label="Ver perfil de CELPIN en Enrankeo"
    >
      {/* Brand row */}
      <div className="flex items-center justify-center gap-2.5 mb-4 pb-3 border-b border-white/20">
        <svg width="26" height="24" viewBox="0 0 103 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M102.765 16.4C101.625 4.04001 85.795 -1.14998 77.665 9.05002L62.595 26.88C56.975 33.52 46.755 33.52 41.135 26.88L25.915 8.87002C19.355 1.10002 6.65502 2.31002 2.29502 11.49C1.40502 13.39 0.89502 15.53 0.89502 17.83V81.55C0.89502 89.52 7.35502 95.98 15.325 95.98H88.845C96.565 95.98 102.825 89.72 102.825 82V17.83C102.825 17.34 102.805 16.87 102.755 16.4H102.765ZM51.865 82.04C38.715 82.04 28.045 71.38 28.045 58.21C28.045 45.04 38.705 34.39 51.865 34.39C65.025 34.39 75.685 45.05 75.685 58.21C75.685 71.37 65.025 82.04 51.865 82.04Z" fill="white"/>
          <path d="M67.305 1.03003L51.885 19.12L36.475 1.03003H67.305Z" fill="white"/>
        </svg>
        <span className="font-body text-[18px] font-bold text-white tracking-[-0.5px]">Enrankeo</span>
      </div>

      {/* School name */}
      <div className="text-center text-[13px] font-semibold text-white/95 leading-tight mb-3">
        Centro Educativo Los Pinos Nuevos
      </div>

      {/* Achievement block */}
      <div className="flex flex-col items-center gap-1.5 mb-3">
        <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V9.5C18 11.4 16.5 13 14.6 13.2L14 13.3V15C14 15.5 14.3 16 14.8 16.2L18 17.5V20H6V17.5L9.2 16.2C9.7 16 10 15.5 10 15V13.3L9.4 13.2C7.5 13 6 11.4 6 9.5V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z" fill="#fbbf24"/>
        </svg>
        <div className="text-[14px] font-semibold text-white leading-tight">Verificado en Enrankeo</div>
        <div className="text-[11px] text-white/80 leading-tight">Escuela Registrada</div>
        <div className="mt-1 text-[10px] font-mono tracking-[0.14em] uppercase text-white/70">2026</div>
      </div>

      {/* CTA row */}
      <div className="pt-3 border-t border-white/20 flex items-center justify-center gap-1.5 text-[11px] font-medium text-white/85 group-hover:text-white transition-colors">
        <span>Ver perfil</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 4.5L20 12l-6.5 7.5-1.5-1.4L16.2 13H4v-2h12.2l-4.2-5.1z"/>
        </svg>
      </div>
    </a>
  );
}

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
              <em className="font-serif italic text-green-dark">verificado</em>{" "}
              en Enrankeo, la plataforma de referencia sobre centros educativos en la República Dominicana.
            </p>
          </div>

          <div className="w-full md:w-auto md:flex-shrink-0 flex justify-center md:justify-end">
            <EnrankeoBadge />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
