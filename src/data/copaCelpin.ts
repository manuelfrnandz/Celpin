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
    { nombre: "Casa Silva", logo: "/images/copa-celpin/equipo-1.jpeg", alt: "Escudo de la Casa Silva — Copa CELPIN" },
    { nombre: "Casa Astra", logo: "/images/copa-celpin/equipo-2.jpeg", alt: "Escudo de la Casa Astra — Copa CELPIN" },
    { nombre: "Casa Luna", logo: "/images/copa-celpin/equipo-3.jpeg", alt: "Escudo de la Casa Luna — Copa CELPIN" },
    { nombre: "Casa Nox",  logo: "/images/copa-celpin/equipo-4.jpeg", alt: "Escudo de la Casa Nox — Copa CELPIN" },
  ] as Equipo[],
} as const;
