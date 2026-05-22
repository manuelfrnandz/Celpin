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
    nombre: "Marisol Mendoza",
    relacion: "Mamá de estudiante CELPIN",
    videoFile: "/videos/testimonio-marisol.mp4",
    thumbnail: "/images/placeholder.png",
  },
  {
    id: "t2",
    nombre: "Belkys Grullón",
    relacion: "Mamá de estudiante CELPIN",
    videoFile: "/videos/testimonio-belkys.mp4",
    thumbnail: "/images/placeholder.png",
  },
  {
    id: "t3",
    nombre: "Pamela Ciccone",
    relacion: "Mamá de estudiante CELPIN",
    videoFile: "/videos/testimonio-pamela.mp4",
    thumbnail: "/images/placeholder.png",
  },
];
