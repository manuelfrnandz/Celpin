// Fuente: "Transporte Escolar CELPIN 2026-2027 (V1.1).pdf". Sin precios por decisión del cliente.

export const TRANSPORTE = {
  descripcion:
    "El transporte escolar de CELPIN está diseñado para brindar seguridad, puntualidad y tranquilidad, acompañando a nuestros estudiantes y familias en cada trayecto.",
  pilares: [
    { titulo: "Seguridad", desc: "en cada kilómetro" },
    { titulo: "Personal", desc: "confiable" },
    { titulo: "Puntualidad", desc: "garantizada" },
    { titulo: "Tranquilidad", desc: "para tu familia" },
  ],
  cobertura:
    "Transporte escolar seguro, organizado y confiable para todos nuestros estudiantes, sin importar su zona de cobertura. Mismo servicio en todas las zonas.",
  cupos: "Cupos limitados por ruta",
  pasos: [
    { titulo: "Solicita", corto: "Solicitas el servicio", desc: "Completa el formulario de inscripción." },
    { titulo: "Confirma", corto: "Validamos tu zona", desc: "Validamos la zona, disponibilidad y tarifa." },
    { titulo: "Asegura", corto: "Confirmamos tu cupo", desc: "Recibe la confirmación de tu cupo." },
    { titulo: "Listo", corto: "Tu hijo viaja con CELPIN", desc: "Tu hijo viaja con el respaldo de CELPIN." },
  ],
  foto: "/images/transporte/estudiante-transporte.jpg",
} as const;
