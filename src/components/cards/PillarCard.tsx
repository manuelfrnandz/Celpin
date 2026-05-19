import { motion } from "framer-motion";
import { type Pilar } from "../../data/pilares";

interface Props {
  pilar: Pilar;
  index?: number;
}

export function PillarCard({ pilar, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white rounded-2xl p-7 xl:p-8 flex flex-col gap-5 border border-border"
    >
      <span className="font-display font-semibold text-[52px] leading-none text-green">
        {pilar.num}
      </span>
      <div>
        <h3 className="font-display font-semibold text-h3-card text-ink">
          {pilar.titulo}
        </h3>
        <p className="text-body text-ink-soft mt-2">{pilar.desc}</p>
      </div>
    </motion.div>
  );
}
