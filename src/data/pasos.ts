export interface Paso {
  num: string;
  titulo: string;
  desc: string;
  duracion: string;
}

export const PASOS: Paso[] = [
  {
    num: "01",
    titulo: "Solicitud de información",
    desc: "Escríbenos por WhatsApp o completa el formulario. Te enviamos el dossier 2026–2027 con toda la información del programa.",
    duracion: "5 min",
  },
  {
    num: "02",
    titulo: "Entrevista familiar y visita",
    desc: "Una reunión con la dirección académica para conocer las necesidades del estudiante, seguida de un recorrido por el campus. La visita guiada toma 15 minutos.",
    duracion: "15 min + entrevista",
  },
  {
    num: "03",
    titulo: "Proceso de evaluación",
    desc: "Evaluación individualizada para conocer el perfil del estudiante y asegurarnos de que CELPIN sea el entorno correcto para su desarrollo.",
    duracion: "1 sesión",
  },
  {
    num: "04",
    titulo: "Confirmación de cupo",
    desc: "Una vez completado el proceso, confirmamos el cupo y te guiamos en los siguientes pasos para el año escolar.",
    duracion: "Para siempre",
  },
];
