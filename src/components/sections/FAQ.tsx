import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS } from "../../data/faq";
import { SITE } from "../../data/site";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";

const WA_LINK = `https://wa.me/${SITE.contacto.whatsapp}?text=${encodeURIComponent(
  "Hola, tengo una pregunta sobre CELPIN."
)}`;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-20 xl:py-32 border-t border-border">
      <div className="max-w-landing mx-auto px-5 xl:px-14">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-12 xl:mb-14">
            <Eyebrow number="08" label="Preguntas frecuentes" className="mb-4" />
            <h2 className="font-display font-semibold text-h2-mobile xl:text-h2-section text-ink">
              Lo que{" "}
              <em className="font-serif italic text-green">necesitas saber.</em>
            </h2>
          </div>

          {/* Accordion */}
          <div>
            {FAQS.map((item, i) => (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-5 xl:py-6 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="font-display font-semibold text-[17px] xl:text-[19px] text-ink leading-snug group-hover:text-green-dark transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 text-ink-muted mt-0.5 transition-transform duration-200 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    <Plus size={20} strokeWidth={1.5} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-body text-ink-soft leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA below */}
          <div className="mt-12 xl:mt-14 flex flex-col items-center gap-3 text-center">
            <p className="text-body text-ink-soft">
              ¿Tienes otra pregunta? Escríbenos directo.
            </p>
            <Button variant="primary" href={WA_LINK} external>
              Pregúntanos por WhatsApp
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
