export interface Programa {
  key: string;
  tag: string;
  edad: string;
  titulo: string;
  desc: string;
  foto: string;
  featured?: boolean;
}

export const PROGRAMAS: Programa[] = [
  {
    key: "inicial",
    tag: "Inicial",
    edad: "3–5 años",
    titulo: "Donde empieza el amor por aprender.",
    desc: "Estimulación temprana y desarrollo socioemocional en un entorno cálido. Pequeños grupos para gran atención individual.",
    foto: "/images/inicial-1.png",
  },
  {
    key: "primaria",
    tag: "Primaria",
    edad: "1° – 6° grado",
    titulo: "Bases académicas sólidas, con corazón.",
    desc: "Educación personalizada que fortalece las bases académicas y socioemocionales mediante metodologías activas, materiales concretos y estrategias Montessori y STEAM, respetando los ritmos de aprendizaje de cada estudiante.",
    foto: "/images/primaria-3.png",
  },
  {
    key: "secundaria",
    tag: "Secundaria",
    edad: "1° – 6° media",
    titulo: "Líderes con criterio.",
    desc: "Metodología orientada al desarrollo de competencias académicas, pensamiento crítico y autonomía, integrando proyectos STEAM y la práctica deportiva como parte esencial del currículo.",
    foto: "/images/inicial-3.png",
  },
  {
    key: "strukturas",
    tag: "Strukturas",
    edad: "Apoyo especializado",
    titulo: "Educación adaptada a cómo aprende tu hijo.",
    // TODO: Víctor confirmará el pitch oficial del programa
    desc: "Programa especializado de acompañamiento educativo para estudiantes con perfiles de aprendizaje diversos. Terapeutas integrados, plan individual por estudiante y comunicación continua con la familia.",
    foto: "/images/placeholder.png", // TODO: foto real Strukturas
    featured: true,
  },
];
