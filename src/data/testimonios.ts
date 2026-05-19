export interface Testimonio {
  id: string;
  // TODO: Víctor confirmar nombres y relación de cada video
  nombre: string;
  relacion: string;
  videoFile: string;  // archivo local en /videos/ o URL YouTube
  thumbnail: string;
}

export const TESTIMONIOS: Testimonio[] = [
  {
    id: "t1",
    nombre: "TODO: nombre del testimonio 1",
    relacion: "TODO: relación (ej: mamá de estudiante de 3er grado)",
    videoFile: "/videos/testimonio-1.mp4",
    thumbnail: "/images/placeholder.png",
  },
  {
    id: "t2",
    nombre: "TODO: nombre del testimonio 2",
    relacion: "TODO: relación",
    videoFile: "/videos/testimonio-2.mp4",
    thumbnail: "/images/placeholder.png",
  },
  {
    id: "t3",
    nombre: "TODO: nombre del testimonio 3",
    relacion: "TODO: relación",
    videoFile: "/videos/testimonio-3.mp4",
    thumbnail: "/images/placeholder.png",
  },
];
