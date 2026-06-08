import { PROGRAMAS } from "../../data/programas";
import { Eyebrow } from "../ui/Eyebrow";
import { ProgramaCard } from "../cards/ProgramaCard";

export function Programas() {
  return (
    <section id="programas" className="bg-cream py-20 xl:py-32">
      <div className="max-w-landing mx-auto px-5 xl:px-14">
        {/* Header */}
        <div className="max-w-2xl mb-12 xl:mb-16 headline-block">
          <Eyebrow number="02" label="Programas" className="mb-4" />
          <h2 className="font-display font-semibold text-h2-mobile xl:text-h2-section text-ink mb-4">
            Un programa para{" "}
            <em className="font-serif italic text-green">cada etapa.</em>
          </h2>
          <p className="text-lead-lg text-ink-soft">
            Desde primaria hasta secundaria, con el mismo principio: cada
            estudiante importa y cada proceso de aprendizaje es único.
          </p>
        </div>

        {/* 2×2 bento grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {PROGRAMAS.map((programa, i) => (
            <ProgramaCard key={programa.key} programa={programa} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
