export interface Documento {
  titulo: string;
  descripcion: string;
  href: string;
  tipo: "PDF" | "DOCX" | "XLSX";
}

export const DOCUMENTOS: Documento[] = [
  {
    titulo: "Folleto informativo 2026–2027",
    descripcion: "Programas, metodología, admisiones y vida en CELPIN.",
    href: "/docs/folleto-celpin-2026-2027.pdf",
    tipo: "PDF",
  },
  {
    titulo: "Requisitos de inscripción 2026–2027",
    descripcion: "Lista completa de documentos requeridos para formalizar la inscripción.",
    href: "/docs/requisitos-inscripcion-2026-2027.pdf",
    tipo: "PDF",
  },
  {
    titulo: "Formulario de inscripción 2026–2027",
    descripcion: "Formulario oficial para solicitar ingreso a CELPIN.",
    href: "/docs/formulario-inscripcion-2026-2027.pdf",
    tipo: "PDF",
  },
];
