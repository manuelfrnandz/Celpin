import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { type Testimonio } from "../../data/testimonios";

interface Props {
  testimonio: Testimonio;
  index?: number;
  onPlay: () => void;
}

const safeName = (nombre: string, index: number) =>
  nombre.startsWith("TODO") ? `Testimonio ${index + 1}` : nombre;

const safeRelacion = (relacion: string) =>
  relacion.startsWith("TODO") ? "Familia CELPIN" : relacion;

export function TestimonioCard({ testimonio, index = 0, onPlay }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer group"
      onClick={onPlay}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onPlay()}
      aria-label={`Reproducir testimonio de ${safeName(testimonio.nombre, index)}`}
    >
      {/* Video preview — first frame via seek */}
      <div className="relative aspect-[9/16] overflow-hidden bg-ink-soft/30">
        <video
          src={testimonio.videoFile}
          className="w-full h-full object-cover"
          preload="metadata"
          muted
          playsInline
          onLoadedMetadata={(e) => {
            e.currentTarget.currentTime = 0.1;
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors duration-200" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
            <Play size={22} className="text-ink ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-0.5">
        <p className="font-display font-semibold text-body text-cream leading-snug">
          {safeName(testimonio.nombre, index)}
        </p>
        <p className="font-body text-body-sm text-cream/50">
          {safeRelacion(testimonio.relacion)}
        </p>
      </div>
    </motion.div>
  );
}
