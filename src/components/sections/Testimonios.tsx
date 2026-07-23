import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIOS, type Testimonio } from "../../data/testimonios";
import { Eyebrow } from "../ui/Eyebrow";
import { TestimonioCard } from "../cards/TestimonioCard";

function VideoModal({
  testimonio,
  onClose,
}: {
  testimonio: Testimonio;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[80] flex items-center justify-center p-6"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Video panel */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", damping: 26, stiffness: 300 }}
        className="relative z-10 w-full max-w-sm"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-cream transition-colors"
          aria-label="Cerrar video"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <video
          src={testimonio.videoFile}
          controls
          autoPlay
          playsInline
          className="w-full rounded-2xl shadow-2xl"
        />

        {/* Name below video */}
        <p className="mt-4 text-center font-body text-body-sm text-cream/60">
          {!testimonio.nombre.startsWith("TODO")
            ? testimonio.nombre
            : "Familia CELPIN"}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function Testimonios() {
  const [selected, setSelected] = useState<Testimonio | null>(null);

  return (
    <>
      <section
        id="testimonios"
        className="bg-ink py-20 xl:py-32 border-t border-white/10"
      >
        <div className="max-w-landing mx-auto px-5 xl:px-14">
          {/* Header */}
          <div className="max-w-2xl mb-12 xl:mb-16">
            <Eyebrow number="07" label="Testimonios" onDark className="mb-4" />
            <h2 className="font-display font-semibold text-h2-mobile xl:text-h2-section text-cream mb-4">
              Lo que cuentan{" "}
              <em className="font-serif italic">las familias.</em>
            </h2>
            <p className="text-lead-lg text-cream/60">
              Nada habla mejor de CELPIN que quienes lo viven. Estas son las
              historias reales de nuestras familias.
            </p>
          </div>

          {/* 3-column grid on desktop; horizontal snap-scroll carousel on mobile */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 pb-3 md:pb-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:snap-none md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TESTIMONIOS.map((t, i) => (
              <div key={t.id} className="snap-center flex-shrink-0 w-[85vw] md:w-auto">
                <TestimonioCard
                  testimonio={t}
                  index={i}
                  onPlay={() => setSelected(t)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video modal */}
      <AnimatePresence>
        {selected && (
          <VideoModal
            key="video-modal"
            testimonio={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
