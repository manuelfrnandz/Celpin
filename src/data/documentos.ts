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
  // TODO: agregar cuando Víctor envíe el archivo
  // {
  //   titulo: "Formulario de admisión 2026–2027",
  //   descripcion: "Formulario oficial para solicitar ingreso.",
  //   href: "/docs/formulario-admision-2026-2027.pdf",
  //   tipo: "PDF",
  // },
];
