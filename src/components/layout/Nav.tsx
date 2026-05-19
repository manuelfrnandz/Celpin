import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "../../data/site";
import { useScrolled } from "../../hooks/useScrolled";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";

const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Programas", href: "#programas" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Deportes", href: "#deportes" },
  { label: "Admisiones", href: "#admisiones" },
];

const WA_LINK = `https://wa.me/${SITE.contacto.whatsapp}?text=${encodeURIComponent(
  "Hola, me interesa conocer más sobre CELPIN. ¿Podría agendar una visita?"
)}`;

export function Nav() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(40);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-landing mx-auto px-5 xl:px-14 h-[72px] flex items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src="/images/celpin-logo-transparent.png"
              alt={SITE.siglas}
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body-sm font-body font-medium text-ink-soft hover:text-ink transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Button variant="secondary" size="sm" href="#admisiones">
              Agenda una visita
            </Button>
            <Button variant="whatsapp" size="sm" href={WA_LINK} external>
              <span className="w-2 h-2 rounded-full bg-white/60 flex-shrink-0" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -mr-2 text-ink"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-[min(320px,90vw)] bg-cream flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-border flex-shrink-0">
                <img
                  src="/images/celpin-logo-transparent.png"
                  alt={SITE.siglas}
                  className="h-9 w-auto"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 -mr-2 text-ink-soft hover:text-ink"
                  aria-label="Cerrar menú"
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 flex flex-col px-6 pt-6 overflow-y-auto">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.05 }}
                    className="py-4 text-h3-card font-display font-medium text-ink border-b border-border/50 hover:text-green-dark transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom CTAs */}
              <div className="px-6 pb-8 pt-4 flex flex-col gap-3 flex-shrink-0 border-t border-border">
                <Button
                  variant="primary"
                  href="#admisiones"
                  onClick={() => setOpen(false)}
                  className="w-full justify-center"
                >
                  Agenda una visita
                </Button>
                <Button
                  variant="whatsapp"
                  href={WA_LINK}
                  external
                  className="w-full justify-center"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
