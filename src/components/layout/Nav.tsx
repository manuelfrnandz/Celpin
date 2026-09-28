import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "../../data/site";
import { useScrolled } from "../../hooks/useScrolled";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";

export const NAV_LINKS = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Programas", href: "/programas" },
  { label: "Vida estudiantil", href: "/vida-estudiantil" },
  { label: "Admisiones", href: "/admisiones" },
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
            ? "bg-cream-solid backdrop-blur-md border-b border-border shadow-sm"
            : "bg-cream-solid"
        )}
      >
        <div className="max-w-landing mx-auto px-5 xl:px-14 h-[72px] flex items-center justify-between gap-8">
          {/* Logo — crop removes "Centro Educativo Los Pinos Nuevos" subtitle */}
          <Link to="/" className="flex-shrink-0" aria-label="CELPIN — Inicio">
            <div className="h-[52px] overflow-hidden">
              <img
                src="/images/celpin-logo-transparent.png"
                alt={SITE.siglas}
                className="h-[76px] w-auto"
              />
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "relative text-body-sm font-body font-medium transition-colors duration-150 py-1",
                    isActive
                      ? "text-ink after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-green"
                      : "text-ink-soft hover:text-ink"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Button variant="secondary" size="sm" href={WA_LINK} external>
              Agenda una visita
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
                <Link to="/" onClick={() => setOpen(false)} className="h-[44px] overflow-hidden" aria-label="CELPIN — Inicio">
                  <img
                    src="/images/celpin-logo-transparent.png"
                    alt={SITE.siglas}
                    className="h-[64px] w-auto"
                  />
                </Link>
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
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.05 }}
                  >
                    <NavLink
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "block py-4 text-h3-card font-display font-medium border-b border-border/50 hover:text-green-dark transition-colors",
                          isActive ? "text-green-dark" : "text-ink"
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTAs */}
              <div className="px-6 pb-8 pt-4 flex flex-col gap-3 flex-shrink-0 border-t border-border">
                <Button
                  variant="whatsapp"
                  href={WA_LINK}
                  external
                  className="w-full justify-center"
                >
                  <MessageCircle size={16} />
                  Agenda una visita
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
