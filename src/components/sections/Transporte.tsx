import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, Heart } from "lucide-react";
import { TRANSPORTE } from "../../data/transporte";
import { SITE } from "../../data/site";
import { Button } from "../ui/Button";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const ICONS = [ShieldCheck, Users, Clock, Heart];

const WA_LINK = `https://wa.me/${SITE.contacto.whatsapp}?text=${encodeURIComponent(
  "Hola, me interesa el transporte escolar de CELPIN. ¿Tienen cupo en mi zona?"
)}`;

export function Transporte() {
  const reduced = useReducedMotion();

  return (
    <section id="transporte" className="bg-ink py-16 xl:py-20">
      <div className="max-w-landing mx-auto px-5 xl:px-14">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="grid md:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr] gap-8 xl:gap-12 items-center"
        >
          <div className="rounded-2xl overflow-hidden aspect-[4/5] w-full max-w-[260px] mx-auto md:mx-0">
            <img
              src={TRANSPORTE.foto}
              alt="Estudiante de CELPIN subiendo al transporte escolar"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h2 className="font-display font-semibold text-[32px] xl:text-[44px] leading-[1.05] tracking-[-0.03em] text-cream mb-2">
                Transporte <em className="font-serif italic font-normal text-green">escolar</em>
              </h2>
              <p className="font-display font-medium text-[18px] xl:text-[20px] text-cream/80 mb-3">
                Más que un traslado, una extensión de nuestro cuidado.
              </p>
              <p className="text-body text-cream/60 max-w-2xl">
                {TRANSPORTE.descripcion} Mismo servicio en todas las zonas · {TRANSPORTE.cupos.toLowerCase()}.
              </p>
            </div>

            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3">
              {TRANSPORTE.pilares.map((p, i) => {
                const Icon = ICONS[i];
                return (
                  <li key={p.titulo} className="flex items-center gap-2.5 text-body-sm text-cream">
                    <Icon size={18} strokeWidth={1.5} className="text-green flex-shrink-0" />
                    <span>
                      {p.titulo} <span className="text-cream/55">{p.desc}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 pt-5 border-t border-white/10">
              <p className="font-body font-semibold text-body-sm text-cream flex-shrink-0">Reserva en 4 pasos</p>
              <ol className="flex flex-wrap gap-x-5 gap-y-2 text-body-sm text-cream/70">
                {TRANSPORTE.pasos.map((paso, i) => (
                  <li key={paso.titulo}>
                    <span className="font-mono text-green mr-1.5">{i + 1}</span>
                    {paso.corto}
                  </li>
                ))}
              </ol>
              <Button variant="primary-green" href={WA_LINK} external className="self-start lg:ml-auto flex-shrink-0">
                Reserva tu cupo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
