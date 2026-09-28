// Fuente: "CELPIN 2026-2027 - JE (V1.1).pdf". Sin precios por decisión del cliente.

export interface ClaseExtra {
  nombre: string;
  horario: string;
  desc: string;
}

export const JORNADA = {
  horario: "Lunes a jueves · 2:30 PM – 5:00 PM",
  descripcion:
    "La Jornada Extendida de CELPIN es un programa complementario que brinda acompañamiento educativo después del horario escolar regular. Está diseñada para aprovechar el tiempo adicional de manera productiva, según las necesidades de cada estudiante.",
  academico: ["Sala de tareas", "Nivelación", "Refuerzo académico"],
  habitos:
    "Además del apoyo académico, promovemos el desarrollo de hábitos de estudio, organización, responsabilidad y autonomía, manteniendo el acompañamiento y enfoque educativo que caracteriza a CELPIN.",
  extracurricularesIntro:
    "Como parte de nuestra Jornada Extendida, CELPIN ofrece actividades extracurriculares que permiten a nuestros estudiantes explorar nuevos talentos, desarrollar habilidades artísticas y fortalecer su expresión y creatividad.",
  ingles: {
    nombre: "Inglés",
    horario: "Lunes, martes y jueves · 2:30 PM – 5:00 PM",
    desc: "A través de clases dinámicas y prácticas, trabajamos comprensión, conversación, pronunciación, vocabulario, lectura y escritura, promoviendo el uso del inglés en situaciones cotidianas.",
  } as ClaseExtra,
  artes: [
    {
      nombre: "Piano",
      horario: "Martes y jueves · sesiones de 1 hora",
      desc: "Desarrollo musical, coordinación, disciplina y apreciación artística, con lectura musical, teoría y práctica instrumental.",
    },
    {
      nombre: "Guitarra",
      horario: "Jueves · sesiones de 1 hora",
      desc: "Introducción y desarrollo de habilidades musicales a través del aprendizaje práctico del instrumento.",
    },
    {
      nombre: "Canto",
      horario: "Jueves · sesiones de 1 hora",
      desc: "Técnica vocal, expresión artística, confianza y desarrollo de las capacidades musicales.",
    },
    {
      nombre: "Locución",
      horario: "Jueves · sesiones de 1 hora",
      desc: "Dicción, expresión oral, proyección de la voz, manejo del micrófono y desenvolvimiento frente al público.",
    },
  ] as ClaseExtra[],
  cierre:
    "La Jornada Extendida de CELPIN transforma las horas después de clases en nuevas oportunidades para aprender, reforzar, descubrir talentos y desarrollar nuevas habilidades.",
} as const;
