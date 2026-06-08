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
    edad: "",
    titulo: "Bases académicas sólidas, con corazón.",
    desc: "Educación personalizada que fortalece las bases académicas y socioemocionales mediante metodologías activas, materiales concretos y estrategias Montessori y STEAM, respetando los ritmos de aprendizaje de cada estudiante.",
    foto: "/images/prog-inicial.jpg",
  },
  {
    key: "secundaria",
    tag: "Secundaria",
    edad: "",
    titulo: "Líderes con criterio.",
    desc: "Metodología orientada al desarrollo de competencias académicas, pensamiento crítico y autonomía, integrando proyectos STEAM y la práctica deportiva como parte esencial del currículo.",
    foto: "/images/secundaria-100050.png",
  },
  {
    key: "strukturas",
    tag: "Strukturas",
    edad: "Programa Especializado",
    titulo: "Educación adaptada a cómo aprende tu hijo.",
    desc: "Programa paralelo de vida práctica, autonomía y aprendizajes académicos para estudiantes neurodivergentes. Acompaña a quienes lo requieren con estructura emocional, sensorial y académica integrada en su día a día.",
    foto: "/images/prog-strukturas-foto.jpg",
    featured: true,
  },
];
