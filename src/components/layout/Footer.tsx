import { Phone, Mail, MapPin } from "lucide-react";

function IgIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YtIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { SITE } from "../../data/site";

const NAV_LINKS = [
  { label: "Programas", href: "#programas" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Deportes", href: "#deportes" },
  { label: "Vida en CELPIN", href: "#vida" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Admisiones", href: "#admisiones" },
  { label: "Preguntas frecuentes", href: "#faq" },
];

const NIVELES = ["Primaria", "Secundaria", "Strukturas"];


export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="max-w-landing mx-auto px-5 xl:px-14 py-16 xl:py-20">

        {/* Main grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 xl:gap-10">

          {/* Brand column */}
          <div className="sm:col-span-2 xl:col-span-1 flex flex-col gap-5">
            {/* Logo crop — removes "Centro Educativo Los Pinos Nuevos" subtitle */}
            <div className="h-[60px] overflow-hidden">
              <img
                src="/images/celpin-logo-transparent.png"
                alt="CELPIN"
                className="h-[88px] w-auto brightness-0 invert"
              />
            </div>
            <p className="text-body text-cream/60 leading-relaxed max-w-xs">
              Centro educativo privado en Santo Domingo, R.D. Educación personalizada desde primaria hasta bachillerato, desde 2007.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2.5">
              <div className="flex flex-col items-center gap-1">
                <a
                  href={SITE.redes.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
                  aria-label="Instagram CELPIN"
                >
                  <IgIcon />
                </a>
                <span className="font-mono text-[7px] tracking-[0.14em] uppercase text-cream/25 select-none">CELPIN</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <a
                  href={SITE.redes.instagramStrukturas}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
                  aria-label="Instagram Strukturas"
                >
                  <IgIcon />
                </a>
                <span className="font-mono text-[7px] tracking-[0.14em] uppercase text-cream/25 select-none">STRUKT.</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <a
                  href={SITE.redes.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
                  aria-label="YouTube CELPIN"
                >
                  <YtIcon />
                </a>
                <span className="font-mono text-[7px] tracking-[0.14em] uppercase text-cream/25 select-none">YOUTUBE</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-eyebrow tracking-[0.18em] uppercase text-cream/30 mb-5">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body text-cream/60 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Niveles */}
          <div>
            <p className="font-mono text-eyebrow tracking-[0.18em] uppercase text-cream/30 mb-5">
              Niveles
            </p>
            <ul className="flex flex-col gap-3">
              {NIVELES.map((n) => (
                <li key={n}>
                  <span className="text-body text-cream/60">{n}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-eyebrow tracking-[0.18em] uppercase text-cream/30 mb-5">
              Contacto
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${SITE.contacto.whatsapp}`}
                  className="flex items-center gap-2.5 text-body text-cream/60 hover:text-cream transition-colors"
                >
                  <Phone size={14} strokeWidth={1.5} className="flex-shrink-0 text-green" />
                  {SITE.contacto.telefono}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.contacto.email}`}
                  className="flex items-center gap-2.5 text-body text-cream/60 hover:text-cream transition-colors"
                >
                  <Mail size={14} strokeWidth={1.5} className="flex-shrink-0 text-green" />
                  {SITE.contacto.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-body text-cream/50">
                  <MapPin size={14} strokeWidth={1.5} className="flex-shrink-0 text-green mt-0.5" />
                  <span>{SITE.contacto.direccion}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-body text-body-sm text-cream/30">
            © {year} {SITE.nombre}. Todos los derechos reservados.
          </p>
          <p className="font-mono text-eyebrow tracking-[0.25em] uppercase text-cream/20 sm:text-right">
            {SITE.lema}
          </p>
        </div>

      </div>
    </footer>
  );
}
