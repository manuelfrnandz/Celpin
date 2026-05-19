# CLAUDE.md — CELPIN

> Contexto persistente para Claude Code. Léeme primero antes de modificar nada.

## 1. ¿Qué es CELPIN?

**Centro Educativo Los Pinos Nuevos** — colegio privado de Santo Domingo, R.D., con educación personalizada desde inicial hasta bachillerato (incluye programa **Strukturas** de apoyo especializado). Operando desde 2007.

Este repo contiene la **landing pública de marketing** (web + mobile). Objetivo: que padres soliciten visita / agenden por WhatsApp.

**Tono y mensaje:**
- Lema: *"Nosotros sí podemos"*
- Voz cálida, profesional, anti-burocrática. Nunca corporativa.
- Acentos tipográficos en cursiva serif para palabras emocionales (*edad*, *estudiante*, *cuentan*, *necesitas saber*).
- Headline principal: "La escuela que se adapta a tu hijo. **No al revés.**"

---

## 2. Stack y librerías (versiones exactas)

### Recomendado para producción (migrar desde prototipo HTML+Babel a build real)

```
node          >= 20.11
pnpm          >= 9.0   (o npm >= 10)

react         18.3.1
react-dom     18.3.1
typescript    5.6.3
vite          5.4.10
@vitejs/plugin-react  4.3.3

# Estilos (elegir UNO — el código actual usa inline styles)
tailwindcss   3.4.14          ← RECOMENDADO migrar
postcss       8.4.47
autoprefixer  10.4.20
clsx          2.1.1

# Utilidades opcionales
framer-motion 11.11.17        ← para animaciones de scroll/hover
lucide-react  0.460.0         ← reemplazar emojis/SVG ad-hoc
```

### Prototipo actual (NO usar en producción)

El código fuente en `/handoff/CELPIN-consolidated.tsx` viene de un prototipo que cargaba React desde `unpkg` vía `@babel/standalone`. **No replicar eso en producción.** Migrar a Vite + módulos ES.

---

## 3. Paleta de colores (HEX completo)

Exportar como CSS variables o token TS. Estos valores son **canónicos** — están repetidos en `landing.jsx`, `mobile-b.jsx`, `sections.jsx`.

```ts
export const COLORS = {
  // ── Neutros (fondo + texto) ────────────────────────────
  cream:    "#FAF8F3",  // fondo principal / texto sobre dark
  ink:      "#0B1B2E",  // navy — texto principal + sección dark
  inkSoft:  "#3A4A5E",  // párrafos secundarios
  inkMuted: "#7A8AA0",  // labels, captions, metadatos
  border:   "rgba(11,27,46,0.10)",  // borde sutil sobre cream
  white:    "#FFFFFF",  // cards, surfaces sobre cream

  // ── Verde CELPIN (color de marca) ──────────────────────
  green:     "#85A93D", // verde lima del logo — CTA / acento
  greenDark: "#5A7A28", // mismo verde para texto sobre cream (AA)
  greenInk:  "#4F6D24", // pill / chip text sobre tinte
  greenTint: "rgba(133,169,61,0.10)",  // bg suave de chips
  pine:      "#1E4D3B", // verde pino (variant C cinematic; no usado en landing principal)

  // ── Acento secundario ──────────────────────────────────
  ocre:      "#D4A574", // ocre (usado mínimo, evitar abusar)

  // ── Utilidad de marca externa ──────────────────────────
  whatsapp:  "#25D366",
};
```

### Reglas de uso

| Color | Uso |
|---|---|
| `cream` | Fondo de toda la página. NUNCA usar blanco puro como bg de sección. |
| `ink` | Texto principal, sección "Trust strip", sección "Admisiones", footer. |
| `green` | Botones primarios solo en sección dark / banner final. Acentos pequeños. Texto cursivo de énfasis. |
| `greenDark` | Texto verde sobre cream (contraste). |
| `greenTint` | Fondo de badges, iconos circulares de "feature". |
| `#fff` | Tarjetas, modales, FAQ items sobre cream. |

**No inventar colores nuevos.** Si necesitas un estado (hover, disabled), deriva con `oklch()` o ajusta alfa.

---

## 4. Tipografías

Cargar vía Google Fonts (ya en `<head>`). Tres familias + una opcional:

```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700&family=Geist:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
```

| Familia | Uso | Tamaños comunes |
|---|---|---|
| **Bricolage Grotesque** | Títulos (H1–H3). `font-weight: 500–700`, `letter-spacing: -0.025 a -0.04em`, `line-height: 0.95–1.15` | H1: 88px · H2: 64px · H3: 28–36px · card title: 22–28px |
| **Geist** | UI body, botones, navegación, párrafos | Body: 15–19px · UI: 13–14px · small: 11–12px |
| **Instrument Serif** *italic* | Énfasis emocional inline ("*edad*", "*estudiante*", citas largas) | Hereda tamaño del padre. Siempre `font-style: italic, font-weight: 400`. |
| **ui-monospace / JetBrains Mono** | Eyebrows / kickers / metadatos (`◆ 02 · Programas`) | 10–11px, `letter-spacing: 0.12–0.18em`, `text-transform: uppercase` |
| ~~DM Sans~~ | Cargado por compatibilidad histórica; no usar en código nuevo. |

### Escala tipográfica (rem ≈ 16px base)

```ts
const TYPE = {
  // Display
  h1Hero:     { size: 88, lh: 0.95, tracking: "-0.035em", weight: 600, family: "Bricolage" },
  h2Section:  { size: 64, lh: 1.0,  tracking: "-0.035em", weight: 600, family: "Bricolage" },
  h2Sub:      { size: 56, lh: 1.0,  tracking: "-0.035em", weight: 500, family: "Bricolage" },
  h3Card:     { size: 28, lh: 1.1,  tracking: "-0.02em",  weight: 600, family: "Bricolage" },
  // Body
  leadLg:     { size: 19, lh: 1.5,  weight: 400, family: "Geist" },
  body:       { size: 15, lh: 1.6,  weight: 400, family: "Geist" },
  bodySm:     { size: 14, lh: 1.55, weight: 400, family: "Geist" },
  // UI
  btn:        { size: 14, lh: 1.0,  weight: 500, family: "Geist" },
  navItem:    { size: 14, lh: 1.0,  weight: 500, family: "Geist" },
  // Kicker / monospace
  eyebrow:    { size: 11, weight: 500, tracking: "0.18em", upper: true, family: "mono" },
  meta:       { size: 11, weight: 500, tracking: "0.10em", upper: true, family: "mono" },
};
```

### Detalles tipográficos clave

- **`text-wrap: pretty`** en todos los párrafos.
- Las palabras en cursiva siempre llevan también un cambio de family (Bricolage → Instrument Serif).
- Para títulos sobre dark, usar `cream` (no `white` puro).
- Los números grandes (stats `18`, `500+`, `96%`) usan Bricolage 80px con el sufijo `+` o `%` 25% más pequeño y en `green`.

---

## 5. Estructura de carpetas recomendada

Migrar a esta estructura cuando montes el proyecto Vite + TS:

```
celpin-landing/
├── public/
│   ├── images/                       ← ya provistas en el prototipo
│   │   ├── celpin-logo-transparent.png
│   │   ├── celpin-logo-dark.png
│   │   ├── celpin-logo-light.png
│   │   ├── liga-grupo.png            ← hero
│   │   ├── liga-bus.png              ← vida en CELPIN
│   │   ├── fundador.png              ← cita metodología
│   │   ├── inicial-{1,2,3}.png       ← placeholders nivel inicial
│   │   └── primaria-{1,2,3}.png      ← placeholders nivel primaria
│   └── favicon.svg
│
├── src/
│   ├── app.tsx                       ← composición top-level (Nav + Hero + … + Footer)
│   ├── main.tsx
│   ├── index.css                     ← tokens + reset + font imports
│   │
│   ├── tokens/
│   │   ├── colors.ts                 ← export COLORS
│   │   ├── type.ts                   ← export TYPE
│   │   └── spacing.ts                ← export SPACING
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── StickyCTA.tsx
│   │   ├── sections/                 ← una sección de landing por archivo
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustStrip.tsx
│   │   │   ├── Programas.tsx
│   │   │   ├── Metodologia.tsx
│   │   │   ├── VidaEnCelpin.tsx
│   │   │   ├── Testimonios.tsx
│   │   │   ├── Admisiones.tsx
│   │   │   └── FAQ.tsx
│   │   ├── cards/
│   │   │   ├── ProgramaCard.tsx
│   │   │   ├── MosaicTile.tsx
│   │   │   ├── PillarCard.tsx
│   │   │   ├── TestimonioCard.tsx
│   │   │   └── PasoCard.tsx          ← step de Admisiones
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Pill.tsx              ← announcement pill verde
│   │       ├── Eyebrow.tsx           ← "◆ 02 · Programas"
│   │       ├── PhotoPlaceholder.tsx
│   │       └── WhatsAppButton.tsx
│   │
│   ├── data/                         ← contenido editable (no JSX)
│   │   ├── programas.ts
│   │   ├── pilares.ts
│   │   ├── testimonios.ts
│   │   ├── pasos.ts
│   │   ├── faq.ts
│   │   └── stats.ts
│   │
│   ├── hooks/
│   │   ├── useScrolled.ts            ← detectar scrollY > N
│   │   └── useReducedMotion.ts
│   │
│   └── lib/
│       └── cn.ts                     ← clsx wrapper (si usas Tailwind)
│
├── CLAUDE.md                         ← este archivo
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── postcss.config.js
```

### Convenciones

- **Una sección por archivo** en `components/sections/`.
- **Contenido en `data/`** — separa copy de markup para que el cliente pueda editar `faq.ts`, `testimonios.ts`, etc., sin tocar componentes.
- **Tokens en `tokens/`** — nunca hardcodear hex en componentes.

---

## 6. Breakpoints y responsive

El prototipo actual está optimizado para **desktop ≥ 1280px** y **mobile = 393px (iPhone 14 Pro)**. Falta tablet y desktop intermedio.

```ts
export const BP = {
  sm:  640,   // móvil grande / phablet
  md:  768,   // tablet portrait
  lg:  1024,  // tablet landscape / laptop pequeña
  xl:  1280,  // desktop estándar (DISEÑO BASE)
  "2xl": 1536, // desktop ancho
};
```

### Reglas de adaptación por sección

| Sección | Desktop (≥1280) | Tablet (768–1279) | Mobile (<768) |
|---|---|---|---|
| **Nav** | logo + links + 2 CTAs | logo + hamburguesa + WA | logo + hamburguesa (drawer) |
| **Hero** | 2 cols (1.1fr / 0.9fr), H1 88px | 1 col, H1 64px, foto debajo | 1 col, H1 44px, sin floating cards |
| **TrustStrip** | 4 cols numbers | 2×2 grid | 2×2 stack vertical, números 56px |
| **Programas** (bento) | 2×2 grid, gaps 20 | 2 cols, todos iguales | 1 col, mantener foto + texto |
| **Metodología** | sticky left + 4 cards | 1 col, sin sticky | 1 col compact |
| **Vida (mosaico)** | 3 cols, fila 1 spanRow | 2 cols | 1 col scroll horizontal opcional |
| **Testimonios** | 3 cols | 1 col + slider | 1 col + slider snap |
| **Admisiones** | 4 cols steps + banner | 2×2 | stepper vertical |
| **FAQ** | max 1000px centered | igual | full-bleed con padding 20 |
| **Footer** | 1.4fr + 3 cols | 2×2 | accordion sections |
| **StickyCTA** | bottom-right desktop | igual | bottom bar full-width |

### Padding/spacing scale

```
padding sección desktop:  120px top/bottom · 56px lateral
padding sección tablet:    80px top/bottom · 32px lateral
padding sección mobile:    64px top/bottom · 20px lateral
gaps grid:                 20px (desktop) → 16 (tablet) → 12 (mobile)
border-radius cards:       16-20px (no bajar de 12 en mobile)
border-radius buttons:     8-10px (pill 100px para chips/pills)
```

### Imágenes

- Servir desde `/public/images/`. Comprimir a WebP/AVIF + fallback PNG.
- En Vite: `import heroImg from "@/assets/liga-grupo.png?w=900;1400&format=webp"` (vite-imagetools) — recomendado.
- `loading="lazy"` en todo lo que esté bajo el fold.

---

## 7. Decisiones de diseño (NO romper sin discutir)

1. **Cream como background único.** El blanco puro solo aparece en cards. Las secciones dark usan `ink` (navy), nunca negro.
2. **Verde solo como acento**, nunca como fondo de sección entera. Excepción: el banner final CTA dentro de Admisiones.
3. **Cursiva = emoción**. *Cada* H2 lleva 1–2 palabras en `Instrument Serif italic`. Patrón: "Texto recto **`palabra italic`** texto recto."
4. **Eyebrows numerados**: cada sección comienza con `◆ 0N · Nombre Sección` en mono mayúsculas (`02 · Programas`, `03 · Metodología`, etc.). Mantiene el flujo narrativo.
5. **Floating cards en hero**: el ratio `1:8` y la motto card en verde están posicionados a propósito con rotación leve (`rotate(-1.5deg)` y `rotate(2deg)`). No "enderezar".
6. **Programa Strukturas siempre destacado**: card variant `featured: true` con fondo `ink` en bento. Si reordena los programas, mantenerla featured.
7. **Lema en pie de footer**: `NOSOTROS SÍ PODEMOS` en mono mayúsculas siempre va al final, alineado a la derecha. Identidad de marca.
8. **Botones**:
   - Primario sobre cream: `bg: ink, text: cream` con `box-shadow: 0 6px 14px -4px rgba(11,27,46,0.4)`
   - Primario sobre dark: `bg: green, text: white` con `box-shadow: 0 10px 30px -8px rgba(133,169,61,0.6)`
   - Secundario: `bg: white, border: 1px solid border, text: ink`
   - WhatsApp: `bg: white` o `bg: #25D366` con punto verde `●` antes del label
9. **Placeholders visibles**: las fotos no provistas todavía muestran un badge `◉ Placeholder` (componente `PhotoPlaceholder`). Removerlo cuando la foto sea real, NO ocultarlo con CSS.
10. **Acreditación MINERD**: badge siempre visible. Argumento de confianza clave en R.D.

### Lista de pendientes de contenido (cliente)

Ver `/Pendientes Cliente.md` en el repo original. Resumen: faltan 8 fotos reales (programas + testimonios), 3 quotes verificados, dirección/teléfono/email reales, logo SVG oficial, confirmar estadísticas exactas (años, egresados, %).

---

## 8. Accesibilidad — pendientes conocidos

El prototipo NO cumple WCAG AA todavía. Antes de salir a producción:

- [ ] Reemplazar `div onClick` por `<button>` con `:focus-visible`.
- [ ] Agregar `aria-label` a todos los iconos-button (WhatsApp, social, FAQ toggle).
- [ ] `prefers-reduced-motion`: deshabilitar `transform: scale()` y rotaciones en hover.
- [ ] FAQ accordion: usar `<details>/<summary>` o roles `button` + `aria-expanded`.
- [ ] Imágenes: `alt` real, no string vacío.
- [ ] Contraste: validar `inkMuted (#7A8AA0)` sobre `cream` — pasa AA solo en texto ≥18px.

---

## 9. Comandos

```bash
pnpm install
pnpm dev         # → http://localhost:5173
pnpm build       # → dist/
pnpm preview     # servir build local
pnpm lint
pnpm typecheck
```

---

## 10. Cuando edites código

- **Nunca** introduzcas un color nuevo sin discutirlo. Usa `COLORS.*`.
- **Nunca** uses Tailwind defaults (`gray-500`, `blue-600`) — extiende `tailwind.config.ts` con los tokens.
- **Una sección por archivo** + un componente por concepto (`<Card>`, `<Pill>`, `<Eyebrow>`).
- **No agregues iconografía por inercia**. Si vas a meter un icono, debe ganarse el espacio. Preferir `lucide-react` (stroke 1.5px) o glifos unicode `◆ ◉ ◈ ◇ →` que ya usamos.
- **No inventes copy.** Si falta texto, escribe `{/* TODO: pendiente cliente */}` y déjalo visible en dev.
