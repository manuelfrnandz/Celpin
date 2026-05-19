/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      // Paleta canónica CELPIN — no usar colores de Tailwind por defecto
      cream:        "#FAF8F3",
      ink:          "#0B1B2E",
      "ink-soft":   "#3A4A5E",
      "ink-muted":  "#7A8AA0",
      border:       "rgba(11,27,46,0.10)",
      white:        "#FFFFFF",
      green:        "#85A93D",
      "green-dark": "#5A7A28",
      "green-ink":  "#4F6D24",
      "green-tint": "rgba(133,169,61,0.10)",
      ocre:         "#D4A574",
      pine:         "#1E4D3B",
      whatsapp:     "#25D366",
      transparent:  "transparent",
      current:      "currentColor",
    },
    fontFamily: {
      display: ["'Bricolage Grotesque'", "sans-serif"],
      body:    ["'Geist'", "system-ui", "-apple-system", "sans-serif"],
      serif:   ["'Instrument Serif'", "Georgia", "serif"],
      mono:    ["ui-monospace", "'JetBrains Mono'", "monospace"],
    },
    extend: {
      fontSize: {
        "h1-hero":    ["88px",  { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "h1-mobile":  ["56px",  { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "h2-section": ["64px",  { lineHeight: "1.0",  letterSpacing: "-0.035em" }],
        "h2-mobile":  ["40px",  { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "h3-card":    ["28px",  { lineHeight: "1.1",  letterSpacing: "-0.02em"  }],
        "lead-lg":    ["19px",  { lineHeight: "1.5"  }],
        body:         ["15px",  { lineHeight: "1.6"  }],
        "body-sm":    ["14px",  { lineHeight: "1.55" }],
        eyebrow:      ["11px",  { lineHeight: "1.0",  letterSpacing: "0.18em"   }],
      },
      maxWidth: {
        landing: "1400px",
      },
      boxShadow: {
        "btn-primary": "0 6px 14px -4px rgba(11,27,46,0.4)",
        "btn-green":   "0 10px 30px -8px rgba(133,169,61,0.6)",
        card:          "0 2px 16px rgba(11,27,46,0.08)",
      },
    },
  },
  plugins: [],
};
