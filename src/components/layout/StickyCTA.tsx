import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE } from "../../data/site";

const WA_LINK = `https://wa.me/${SITE.contacto.whatsapp}?text=${encodeURIComponent(
  "Hola, me interesa conocer más sobre CELPIN."
)}`;

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Mobile: full-width bottom bar */}
          <motion.div
            key="sticky-mobile"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 340 }}
            className="xl:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pt-2 bg-ink/95 backdrop-blur-sm border-t border-white/10"
            style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-whatsapp text-white font-body font-medium text-body shadow-btn-green"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              Agenda una visita por WhatsApp
            </a>
          </motion.div>

          {/* Desktop: floating pill bottom-right */}
          <motion.a
            key="sticky-desktop"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="hidden xl:flex fixed bottom-8 right-8 z-50 items-center gap-2.5 px-5 py-3.5 rounded-full bg-whatsapp text-white font-body font-medium text-body shadow-btn-green"
          >
            <MessageCircle size={18} strokeWidth={1.5} />
            WhatsApp
          </motion.a>
        </>
      )}
    </AnimatePresence>
  );
}
