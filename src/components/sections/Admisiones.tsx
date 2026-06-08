import { useState } from "react";
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

const NIVELES = [
  "Primaria (1°–6° grado)",
  "Secundaria (1°–6° media)",
  "Strukturas (Programa Especializado)",
  "No sé todavía",
];

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

const inputClass =
  "w-full bg-white border border-border rounded-xl px-4 py-3 text-ink font-body text-body placeholder:text-ink-muted focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-colors";

function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nivel, setNivel] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "Hola, me interesa conocer más sobre CELPIN.",
      "",
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      nivel ? `Nivel de interés: ${nivel}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${SITE.contacto.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-border p-7 xl:p-8 flex flex-col gap-5"
    >
      <div>
        <h3 className="font-display font-semibold text-h3-card text-ink mb-1">
          Solicita información
        </h3>
        <p className="text-body-sm text-ink-muted">
          Respondemos de 8:00 AM a 5:00 PM por WhatsApp.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className="font-body text-body-sm text-ink-soft mb-1.5 block">
            Nombre completo
          </label>
          <input
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>

        <div>
          <label className="font-body text-body-sm text-ink-soft mb-1.5 block">
            Teléfono / WhatsApp
          </label>
          <input
            type="tel"
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="(809) 000-0000"
            className={inputClass}
          />
        </div>

        <div>
          <label className="font-body text-body-sm text-ink-soft mb-1.5 block">
            Nivel de interés
          </label>
          <select
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
            className={inputClass}
          >
            <option value="">Selecciona un nivel</option>
            {NIVELES.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Button variant="primary" type="submit" className="w-full justify-center">
        Enviar por WhatsApp →
      </Button>
    </motion.form>
  );
}

function InfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="bg-ink rounded-2xl p-7 xl:p-8 flex flex-col gap-6"
    >
      <div>
        <Pill dot className="mb-4">
          {SITE.admisiones.texto}
        </Pill>
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
        className="w-full justify-center"
      >
        Agenda una visita por WhatsApp
      </Button>

      <div className="border-t border-white/10 pt-5 flex flex-col gap-3">
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
    <section id="admisiones" className="bg-cream py-20 xl:py-32 border-t border-border">
      <div className="max-w-landing mx-auto px-5 xl:px-14">

        {/* Header */}
        <div className="max-w-2xl mb-12 xl:mb-16 headline-block">
          <Eyebrow number="07" label="Admisiones" className="mb-4" />
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

        {/* Form + Info card */}
        <div className="grid xl:grid-cols-2 gap-5">
          <ContactForm />
          <InfoCard />
        </div>

      </div>
    </section>
  );
}
