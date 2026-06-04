import { useEffect } from "react";
import { motion } from "framer-motion";
import { DEPORTE } from "../../data/deporte";
import { Eyebrow } from "../ui/Eyebrow";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Deporte() {
  const reduced = useReducedMotion();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <section id="deportes" className="bg-ink py-20 xl:py-32">
      <div className="max-w-landing mx-auto px-5 xl:px-14">

        {/* Header */}
        <div className="max-w-2xl mb-12 xl:mb-16">
          <Eyebrow number="04" label="Deportes" onDark className="mb-4" />
          <h2 className="font-display font-semibold text-h2-mobile xl:text-h2-section text-cream mb-4">
            El deporte como{" "}
            <em className="font-serif italic text-green">aula.</em>
          </h2>
          <p className="text-lead-lg text-cream/60">
            En CELPIN, el deporte no es recreo. Es parte del currículo, herramienta
            de desarrollo emocional y espacio donde los estudiantes aprenden a
            convivir, competir y crecer.
          </p>
        </div>

        {/* Liga Deportiva — main feature */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid xl:grid-cols-2 gap-8 xl:gap-16 mb-12 xl:mb-16"
        >
          {/* Text */}
          <div className="flex flex-col gap-4 justify-center">
            <p className="font-mono text-eyebrow text-cream/40 tracking-[0.14em] uppercase">
              {DEPORTE.liga.detalle}
            </p>
            <h3 className="font-display font-semibold text-h3-card text-cream">
              {DEPORTE.liga.nombre}
            </h3>
            <p className="text-body text-cream/60 leading-relaxed">
              {DEPORTE.liga.descripcion}
            </p>
          </div>

          {/* Photos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden aspect-[3/4]">
              <img
                src="/images/liga-grupo.jpg"
                alt="Equipo de la Liga Deportiva CELPIN"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[3/4]">
              <img
                src="/images/liga-bus.jpg"
                alt="Estudiantes en excursión deportiva"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Video embeds — grid de hasta 3 */}
        <div className="mb-12 xl:mb-16 grid sm:grid-cols-2 xl:grid-cols-2 gap-6 justify-items-center">
          {/* Video 1 — Liga Deportiva */}
          <blockquote
            className="instagram-media !m-0 w-full"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DQsZMD8j42Z/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF", border: 0, borderRadius: "3px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: 0, maxWidth: "100%", minWidth: "280px", padding: 0, width: "100%",
            }}
          />
          {/* Video 2 — Ajedrez */}
          <blockquote
            className="instagram-media !m-0 w-full"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DQZxwZhD_un/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF", border: 0, borderRadius: "3px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: 0, maxWidth: "100%", minWidth: "280px", padding: 0, width: "100%",
            }}
          />
          {/* Video 3 — TODO: agregar URL cuando Víctor lo envíe */}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-12 xl:mb-16" />

        {/* Wolves + Okami + Ajedrez */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

          {/* CELPIN Wolves */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-5 items-start"
          >
            <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-white/10 flex items-center justify-center p-2 overflow-hidden">
              <img
                src={DEPORTE.wolves.logo}
                alt="CELPIN Wolves"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-display font-semibold text-h3-card text-cream mb-2">
                {DEPORTE.wolves.nombre}
              </h3>
              <p className="text-body text-cream/60">{DEPORTE.wolves.descripcion}</p>
            </div>
          </motion.div>

          {/* Okami Dojo */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-5 items-start"
          >
            <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white flex items-center justify-center p-1.5">
              <img
                src="/images/okami-dojo-logo.png"
                alt="Okami Dojo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-display font-semibold text-h3-card text-cream mb-2">
                {DEPORTE.okami.nombre}
              </h3>
              <p className="text-body text-cream/60">{DEPORTE.okami.descripcion}</p>
            </div>
          </motion.div>

          {/* Ajedrez */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-5 items-start"
          >
            <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-3xl select-none">
              ♟
            </div>
            <div>
              <h3 className="font-display font-semibold text-h3-card text-cream mb-2">
                {DEPORTE.ajedrez.nombre}
              </h3>
              <p className="text-body text-cream/60">{DEPORTE.ajedrez.descripcion}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
