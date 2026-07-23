import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eyebrow } from "../ui/Eyebrow";
import { useReducedMotion } from "../../hooks/useReducedMotion";

// Fotos en /public/images/vida/ — rotan entre los 5 slots cada 4s
const FOTOS = [
  { src: "/images/vida/evento-liga-celebracion.jpg", alt: "Estudiantes celebrando en la Liga Deportiva CELPIN" },
  { src: "/images/vida/liga-grupo.jpg",              alt: "Equipo de la Liga Deportiva CELPIN" },
  { src: "/images/vida/Screenshot 2026-06-03 125917.png", alt: "Vida estudiantil CELPIN" },
  { src: "/images/vida/Screenshot 2026-06-04 100153.png", alt: "Comunidad CELPIN" },
];

function RotatingTile({
  slot,
  offset,
  className,
  reduced,
}: {
  slot: number;
  offset: number;
  className: string;
  reduced: boolean;
}) {
  const foto = FOTOS[(slot + offset) % FOTOS.length];
  return (
    <div className={className}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={foto.src}
          src={foto.src}
          alt={foto.alt}
          loading="lazy"
          className="w-full h-full object-cover"
          initial={reduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? {} : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>
    </div>
  );
}

export function VidaEnCelpin() {
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setOffset((o) => (o + 1) % FOTOS.length), 4000);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <section id="vida" className="bg-cream py-20 xl:py-32 border-t border-border">
      <div className="max-w-landing mx-auto px-5 xl:px-14">

        {/* Header */}
        <div className="max-w-2xl mb-12 xl:mb-16">
          <Eyebrow number="06" label="Vida en CELPIN" className="mb-4" />
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
            <RotatingTile slot={0} offset={offset} reduced={reduced}
              className="rounded-2xl overflow-hidden aspect-[16/9]" />
            <RotatingTile slot={1} offset={offset} reduced={reduced}
              className="rounded-2xl overflow-hidden aspect-[16/9] xl:aspect-auto xl:min-h-[300px]" />
          </div>

          {/* Row 2: 3 equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <RotatingTile slot={2} offset={offset} reduced={reduced}
              className="rounded-2xl overflow-hidden aspect-[4/3]" />
            <RotatingTile slot={3} offset={offset} reduced={reduced}
              className="rounded-2xl overflow-hidden aspect-[4/3]" />
            <RotatingTile slot={4} offset={offset} reduced={reduced}
              className="rounded-2xl overflow-hidden aspect-[4/3]" />
          </div>
        </motion.div>

        {/* Instagram Reels — dos embeds lado a lado en desktop, apilados en mobile */}
        <div className="mt-10 grid sm:grid-cols-2 gap-6 justify-items-center">
          <blockquote
            className="instagram-media !m-0 w-full"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DQZxwZhD_un/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: 0,
              maxWidth: "100%",
              minWidth: "280px",
              padding: 0,
              width: "100%",
            }}
          />
          <blockquote
            className="instagram-media !m-0 w-full"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DXugHlTD3LO/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: 0,
              maxWidth: "100%",
              minWidth: "280px",
              padding: 0,
              width: "100%",
            }}
          />
        </div>

      </div>
    </section>
  );
}
