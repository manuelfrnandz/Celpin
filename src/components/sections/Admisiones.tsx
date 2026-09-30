import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { PASOS, type Paso } from "../../data/pasos";
import { SITE } from "../../data/site";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";
import { Pill } from "../ui/Pill";

const WA_LINK = `https://wa.me/${SITE.contacto.whatsapp}?text=${encodeURIComponent(
  "Hola, me interesa conocer más sobre CELPIN. ¿Podría agendar una visita?"
)}`;

function PasoCard({ paso, index }: { paso: Paso; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white rounded-2xl border border-border p-6 xl:p-7 flex flex-col gap-4"
    >
      <span className="font-display font-semibold text-[48px] leading-none text-green/20 select-none">
        {paso.num}
      </span>
      <div className="flex-1">
        <h3 className="font-display font-semibold text-h3-card text-ink">
          {paso.titulo}
        </h3>
        <p className="text-body text-ink-soft mt-2">{paso.desc}</p>
      </div>
      <span className="inline-flex self-start items-center px-3 py-1 bg-green-tint text-green-ink font-mono text-eyebrow tracking-[0.12em] uppercase rounded-full">
        {paso.duracion}
      </span>
    </motion.div>
  );
}

export function InfoCard({ showPill = true }: { showPill?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="bg-ink rounded-2xl p-7 xl:p-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-14 lg:items-center"
    >
      <div className="flex flex-col gap-6">
      <div>
        {showPill && (
          <Pill dot className="mb-4">
            {SITE.admisiones.texto}
          </Pill>
        )}
        <h3 className="font-display font-semibold text-h3-card text-cream mb-2">
          ¿Listo para conocernos?
        </h3>
        <p className="text-body text-cream/60">
          Cupos limitados para el año escolar {SITE.admisiones.inicio}. El
          proceso completo toma menos de 2 semanas.
        </p>
      </div>

      <Button
        variant="primary-green"
        href={WA_LINK}
        external
        className="w-full sm:w-auto justify-center self-start"
      >
        Agenda una visita por WhatsApp
      </Button>
      </div>

      <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-14 flex flex-col gap-4">
        <a
          href={`tel:${SITE.contacto.whatsapp}`}
          className="flex items-center gap-3 text-body-sm text-cream/60 hover:text-cream transition-colors"
        >
          <Phone size={15} className="flex-shrink-0 text-green" strokeWidth={1.5} />
          {SITE.contacto.telefono}
        </a>
        <a
          href={`mailto:${SITE.contacto.email}`}
          className="flex items-center gap-3 text-body-sm text-cream/60 hover:text-cream transition-colors"
        >
          <Mail size={15} className="flex-shrink-0 text-green" strokeWidth={1.5} />
          {SITE.contacto.email}
        </a>
        <div className="flex items-start gap-3 text-body-sm text-cream/40">
          <MapPin size={15} className="flex-shrink-0 text-green mt-0.5" strokeWidth={1.5} />
          <span>{SITE.contacto.direccion}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function Admisiones() {
  return (
    <section id="admisiones" className="bg-cream py-20 xl:py-32">
      <div className="max-w-landing mx-auto px-5 xl:px-14">

        {/* Header */}
        <div className="max-w-2xl mb-12 xl:mb-16">
          <Eyebrow label="Admisiones" className="mb-4" />
          <h2 className="font-display font-semibold text-h2-mobile xl:text-h2-section text-ink mb-4">
            El proceso es más{" "}
            <em className="font-serif italic">fácil de lo que crees.</em>
          </h2>
          <p className="text-lead-lg text-ink-soft">
            Cuatro pasos para que tu hijo empiece el próximo año en CELPIN.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-12 xl:mb-16">
          {PASOS.map((paso, i) => (
            <PasoCard key={paso.num} paso={paso} index={i} />
          ))}
        </div>

        {/* CTA */}
        <InfoCard />

      </div>
    </section>
  );
}
