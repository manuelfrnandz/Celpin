import { motion } from "framer-motion";
import { STATS } from "../../data/stats";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function TrustStrip() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-ink py-16 xl:py-20">
      <div className="max-w-landing mx-auto px-5 xl:px-14">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-12 xl:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col gap-1"
            >
              {/* Big number */}
              <p className="font-display font-semibold text-[56px] xl:text-[80px] leading-none text-cream tracking-tight">
                {stat.value}
                {stat.suffix && (
                  <span className="text-cream/40">{stat.suffix}</span>
                )}
              </p>

              {/* Label */}
              <p className="font-body text-body text-cream/60 whitespace-pre-line">
                {stat.label}
              </p>

              {/* Sublabel — hide TODOs in production */}
              {stat.sublabel && !stat.sublabel.startsWith("TODO") && (
                <p className="font-mono text-eyebrow text-cream/30 tracking-[0.14em] uppercase mt-0.5">
                  {stat.sublabel}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
