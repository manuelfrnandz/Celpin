export interface Testimonio {
  id: string;
  nombre: string;
  relacion: string;
  videoFile: string;  // archivo local en /videos/ o URL YouTube
  thumbnail: string;
}

export const TESTIMONIOS: Testimonio[] = [
  {
    id: "t1",
    nombre: "Pamela Ciccone",
    relacion: "Mamá de Johnny Ricardo León Ciccone",
    videoFile: "/videos/testimonio-marisol.mp4",
    thumbnail: "/images/placeholder.png",
  },
  {
    id: "t2",
    nombre: "Belkys Grullón",
    relacion: "Mamá de Mia Marie y Joan Alejandro Torres Grullón",
    videoFile: "/videos/testimonio-belkys.mp4",
    thumbnail: "/images/placeholder.png",
  },
  {
    id: "t3",
    nombre: "Marisol Mendoza",
    relacion: "Mamá de María Victoria Adrián Mendoza",
    videoFile: "/videos/testimonio-pamela.mp4",
    thumbnail: "/images/placeholder.png",
  },
];
