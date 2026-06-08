import { Download } from "lucide-react";
import { DOCUMENTOS } from "../../data/documentos";
import { Eyebrow } from "../ui/Eyebrow";

export function Documentos() {
  if (DOCUMENTOS.length === 0) return null;

  return (
    <section id="documentos" className="bg-cream py-20 xl:py-28 border-t border-border">
      <div className="max-w-landing mx-auto px-5 xl:px-14">

        {/* Header */}
        <div className="max-w-2xl mb-10 xl:mb-12">
          <Eyebrow number="09" label="Documentos" className="mb-4" />
          <h2 className="font-display font-semibold text-h2-mobile xl:text-h2-section text-ink mb-4">
            Descarga nuestros{" "}
            <em className="font-serif italic">materiales.</em>
          </h2>
          <p className="text-lead-lg text-ink-soft">
            Todo lo que necesitas saber sobre CELPIN, en un solo archivo.
          </p>
        </div>

        {/* Document cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {DOCUMENTOS.map((doc) => (
            <a
              key={doc.href}
              href={doc.href}
              download
              className="group flex flex-col bg-white rounded-2xl border border-border shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Top stripe with file type */}
              <div className="bg-ink px-6 py-5 flex items-center justify-between">
                <span className="font-mono text-eyebrow tracking-[0.18em] uppercase text-cream/50">
                  {doc.tipo}
                </span>
                <div className="w-8 h-8 rounded-lg bg-green/20 flex items-center justify-center">
                  <Download
                    size={15}
                    strokeWidth={1.5}
                    className="text-green group-hover:translate-y-0.5 transition-transform duration-150"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2 px-6 py-5 flex-1">
                <p className="font-display font-semibold text-h3-card text-ink leading-snug">
                  {doc.titulo}
                </p>
                <p className="text-body-sm text-ink-soft leading-relaxed">
                  {doc.descripcion}
                </p>
              </div>

              {/* Download CTA */}
              <div className="px-6 pb-5">
                <span className="inline-flex items-center gap-2 text-body-sm font-medium text-green-dark group-hover:gap-3 transition-all duration-150">
                  <Download size={14} strokeWidth={1.5} />
                  Descargar {doc.tipo}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
