import { motion } from "framer-motion";
import { SITE } from "../../data/site";
import { Button } from "../ui/Button";
import { Pill } from "../ui/Pill";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const WA_LINK = `https://wa.me/${SITE.contacto.whatsapp}?text=${encodeURIComponent(
  "Hola, me interesa conocer más sobre CELPIN. ¿Podría agendar una visita?"
)}`;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export function Hero() {
  const reduced = useReducedMotion();

  const anim = (delay = 0) =>
    reduced ? {} : fade(delay);

  return (
    <section
      id="nosotros"
      className="relative min-h-[100svh] flex items-center pt-[72px] overflow-hidden bg-cream"
    >
      <div className="max-w-landing mx-auto px-5 xl:px-14 w-full py-16 xl:py-24">
        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-6">

            {/* Admissions pill */}
            {SITE.admisiones.abiertas && (
              <motion.div {...anim(0)}>
                <Pill dot>
                  {SITE.admisiones.texto} · {SITE.admisiones.inicio}
                </Pill>
              </motion.div>
            )}

            {/* H1 */}
            <motion.h1
              {...anim(0.08)}
              className="font-display font-semibold text-h1-mobile xl:text-h1-hero text-ink"
            >
              {SITE.headline}
              <br />
              <span className="font-serif italic text-green">
                {SITE.headlineSub}
              </span>
            </motion.h1>

            {/* Lead */}
            <motion.p
              {...anim(0.16)}
              className="text-lead-lg text-ink-soft max-w-[560px]"
            >
              Educación personalizada en Santo Domingo para niños y jóvenes que
              aprenden{" "}
              <em className="font-serif not-italic text-ink">diferente</em>.
              Grupos reducidos, acompañamiento real, resultados que duran.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...anim(0.24)}
              className="flex flex-wrap gap-3 pt-1"
            >
              <Button variant="primary" size="lg" href={WA_LINK} external>
                Agenda una visita
              </Button>
              <Button variant="secondary" size="lg" href="#programas">
                Conoce los programas
              </Button>
            </motion.div>

            {/* MINERD badge */}
            <motion.p
              {...anim(0.36)}
              className="font-mono text-eyebrow text-ink-soft tracking-[0.18em] uppercase"
            >
              ◆ Acreditado MINERD · Santo Domingo, R.D.
            </motion.p>
          </div>

          {/* ── Right: Image + floating cards ── */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative"
          >
            {/* Hero image — swap for liga-grupo.png when available */}
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="/images/inicial-2.png"
                alt="Maestra con estudiantes en CELPIN"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating card: ratio — desktop only */}
            <div
              className="hidden xl:flex flex-col gap-1 absolute -left-10 bottom-20 bg-white rounded-2xl shadow-card px-5 py-4 min-w-[148px]"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              <p className="font-mono text-eyebrow text-ink-soft tracking-[0.14em] uppercase">
                Ratio
              </p>
              <p className="font-display font-semibold text-h3-card text-ink leading-none">
                1:7{" "}
                <span className="text-body text-ink-soft font-body font-normal">
                  máx.
                </span>
              </p>
            </div>

            {/* Floating card: lema — desktop only */}
            <div
              className="hidden xl:block absolute -right-6 top-10 bg-green rounded-2xl shadow-btn-green px-5 py-4 max-w-[172px]"
              style={{ transform: "rotate(2deg)" }}
            >
              <p className="font-display font-semibold text-[17px] leading-snug text-white">
                "{SITE.lema}"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
