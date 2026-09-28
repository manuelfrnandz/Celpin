import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, Heart, MapPin } from "lucide-react";
import { TRANSPORTE } from "../../data/transporte";
import { SITE } from "../../data/site";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const ICONS = [ShieldCheck, Users, Clock, Heart];

const WA_LINK = `https://wa.me/${SITE.contacto.whatsapp}?text=${encodeURIComponent(
  "Hola, me interesa el transporte escolar de CELPIN. ¿Tienen cupo en mi zona?"
)}`;

export function Transporte() {
  const reduced = useReducedMotion();

  return (
    <section id="transporte" className="bg-ink py-20 xl:py-32">
      <div className="max-w-landing mx-auto px-5 xl:px-14">
        <div className="grid xl:grid-cols-[1.25fr_0.75fr] gap-12 xl:gap-16 items-start">

          {/* Texto */}
          <div className="flex flex-col">
            <Eyebrow label="Transporte escolar" onDark className="mb-4" />
            <h2 className="font-display font-semibold text-h2-mobile xl:text-h2-section text-cream mb-4">
              Más que un traslado,{" "}
              <em className="font-serif italic text-green">una extensión de nuestro cuidado.</em>
            </h2>
            <p className="text-lead-lg text-cream/60 mb-10">{TRANSPORTE.descripcion}</p>

            {/* Pilares */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {TRANSPORTE.pilares.map((p, i) => {
                const Icon = ICONS[i];
                return (
                  <div key={p.titulo} className="flex flex-col gap-3">
                    <span className="w-11 h-11 rounded-full border border-green/50 text-green flex items-center justify-center">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <p className="text-body-sm text-cream leading-snug">
                      <span className="font-semibold">{p.titulo}</span>
                      <br />
                      <span className="text-cream/60">{p.desc}</span>
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Cobertura */}
            <div className="flex gap-4 items-start p-5 xl:p-6 rounded-2xl bg-white/5 border border-white/10 mb-12">
              <MapPin size={20} strokeWidth={1.5} className="text-green flex-shrink-0 mt-0.5" />
              <p className="text-body text-cream/75">{TRANSPORTE.cobertura}</p>
            </div>

            {/* Reserva tu cupo */}
            <h3 className="font-display font-semibold text-h3-card text-cream mb-2">Reserva tu cupo</h3>
            <p className="font-mono text-eyebrow tracking-[0.14em] uppercase text-green mb-6">
              {TRANSPORTE.cupos}
            </p>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {TRANSPORTE.pasos.map((paso, i) => (
                <motion.li
                  key={paso.titulo}
                  initial={reduced ? {} : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex flex-col gap-1.5 border-t border-white/15 pt-4"
                >
                  <span className="font-display font-semibold text-[28px] leading-none text-green/40">{i + 1}</span>
                  <span className="font-body font-semibold text-body text-cream">{paso.titulo}</span>
                  <span className="text-body-sm text-cream/60">{paso.desc}</span>
                </motion.li>
              ))}
            </ol>

            <div>
              <Button variant="primary-green" href={WA_LINK} external>
                Reserva el cupo por WhatsApp
              </Button>
            </div>
          </div>

          {/* Foto */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden aspect-[560/760] w-full max-w-sm mx-auto xl:max-w-none xl:sticky xl:top-28"
          >
            <img
              src={TRANSPORTE.foto}
              alt="Estudiante de CELPIN subiendo al transporte escolar"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
