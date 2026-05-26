import { motion } from "framer-motion";
import { Eyebrow } from "../ui/Eyebrow";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const FOTOS = [
  { src: "/images/primaria-1.png",           alt: "Estudiantes de primaria en clase" },
  { src: "/images/primaria-2.png",           alt: "Actividad en el salón de primaria" },
  { src: "/images/inicial-1.png",            alt: "Estudiantes en actividad creativa" },
  { src: "/images/primaria-3.png",           alt: "Comunidad CELPIN en la feria de lectura" },
  { src: "/images/prog-secundaria.jpg",      alt: "Estudiantes de secundaria en actividad" },
];

export function VidaEnCelpin() {
  const reduced = useReducedMotion();

  return (
    <section id="vida" className="bg-cream py-20 xl:py-32 border-t border-border">
      <div className="max-w-landing mx-auto px-5 xl:px-14">

        {/* Header */}
        <div className="max-w-2xl mb-12 xl:mb-16">
          <Eyebrow number="05" label="Vida en CELPIN" className="mb-4" />
          <h2 className="font-display font-semibold text-h2-mobile xl:text-h2-section text-ink mb-4">
            Una comunidad que{" "}
            <em className="font-serif italic">crece contigo.</em>
          </h2>
          <p className="text-lead-lg text-ink-soft">
            El aprendizaje en CELPIN va más allá del salón de clases. La comunidad,
            el deporte y el arte forman parte del día a día.
          </p>
        </div>

        {/* Mosaic */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5"
        >
          {/* Row 1: 2fr + 1fr */}
          <div className="grid md:grid-cols-2 xl:grid-cols-[2fr_1fr] gap-5">
            <div className="rounded-2xl overflow-hidden aspect-[16/9]">
              <img src={FOTOS[0].src} alt={FOTOS[0].alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[16/9] xl:aspect-auto xl:min-h-[300px]">
              <img src={FOTOS[1].src} alt={FOTOS[1].alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          {/* Row 2: 3 equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FOTOS.slice(2).map((foto) => (
              <div key={foto.src} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={foto.src} alt={foto.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
