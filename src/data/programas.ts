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
    key: "primaria",
    tag: "Primaria",
    edad: "1° – 6° grado",
    titulo: "Bases académicas sólidas, con corazón.",
    desc: "Educación personalizada que fortalece las bases académicas y socioemocionales mediante metodologías activas, materiales concretos y estrategias Montessori y STEAM, respetando los ritmos de aprendizaje de cada estudiante.",
    foto: "/images/prog-inicial.jpg",
  },
  {
    key: "secundaria",
    tag: "Secundaria",
    edad: "1° – 6° media",
    titulo: "Líderes con criterio.",
    desc: "Metodología orientada al desarrollo de competencias académicas, pensamiento crítico y autonomía, integrando proyectos STEAM y la práctica deportiva como parte esencial del currículo.",
    foto: "/images/prog-primaria.jpg",
  },
  {
    key: "strukturas",
    tag: "Strukturas",
    edad: "0–8 años · Programa paralelo",
    titulo: "Educación adaptada a cómo aprende tu hijo.",
    desc: "Programa paralelo de vida práctica, terapia ocupacional y aprendizajes académicos para estudiantes de 0 a 8 años. Acompaña a quienes lo requieren con estructura emocional, sensorial y académica integrada en su día a día.",
    foto: "/images/prog-strukturas-foto.jpg",
    featured: true,
  },
];
