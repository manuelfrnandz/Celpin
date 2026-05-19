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
    titulo: "Visita guiada",
    desc: "Agenda una visita al campus para conocer las instalaciones, el equipo docente y el ambiente del colegio en persona.",
    duracion: "1 hora",
  },
  {
    num: "03",
    titulo: "Entrevista familiar",
    desc: "Una reunión con la dirección académica para conocer las necesidades del estudiante y confirmar que CELPIN es el fit correcto.",
    duracion: "45 min",
  },
  {
    num: "04",
    titulo: "Confirmación de cupo",
    desc: "Una vez completado el proceso, confirmamos el cupo y te guiamos en los siguientes pasos para el año escolar.",
    duracion: "Para siempre",
  },
];
