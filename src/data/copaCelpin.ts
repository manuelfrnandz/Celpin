// TODO: pendiente cliente — Vapo pasará descripción final y nombres oficiales de los equipos.
// Todos los textos marcados como `DRAFT` son placeholders hasta que Vapo confirme.

export interface Equipo {
  nombre: string;
  logo: string;
  alt: string;
}

export const COPA_CELPIN = {
  // DRAFT — reemplazar cuando Vapo pase la descripción oficial
  descripcion:
    "La Copa CELPIN es nuestro torneo interno de casas, donde los estudiantes se dividen en facciones y compiten en múltiples disciplinas deportivas y académicas a lo largo del año escolar. Más que una competencia, es una tradición que fortalece el sentido de pertenencia, el liderazgo y el trabajo en equipo — cada facción se convierte en una segunda familia dentro del centro.",
  detalle: "Torneo interno de facciones · Año escolar completo",
  equipos: [
    { nombre: "Facción 1", logo: "/images/copa-celpin/equipo-1.jpeg", alt: "Logo de la Facción 1 de la Copa CELPIN" },
    { nombre: "Facción 2", logo: "/images/copa-celpin/equipo-2.jpeg", alt: "Logo de la Facción 2 de la Copa CELPIN" },
    { nombre: "Facción 3", logo: "/images/copa-celpin/equipo-3.jpeg", alt: "Logo de la Facción 3 de la Copa CELPIN" },
    { nombre: "Facción 4", logo: "/images/copa-celpin/equipo-4.jpeg", alt: "Logo de la Facción 4 de la Copa CELPIN" },
  ] as Equipo[],
} as const;
