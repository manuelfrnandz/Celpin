export const FONT = {
  display: "'Bricolage Grotesque', sans-serif",
  body:    "'Geist', system-ui, -apple-system, sans-serif",
  serif:   "'Instrument Serif', Georgia, serif",
  mono:    "ui-monospace, 'JetBrains Mono', monospace",
} as const;

export const TYPE = {
  h1Hero:    { size: 88,  lh: 0.95, tracking: "-0.035em", weight: 600 },
  h1Mobile:  { size: 56,  lh: 1.05, tracking: "-0.025em", weight: 600 },
  h2Section: { size: 64,  lh: 1.0,  tracking: "-0.035em", weight: 600 },
  h2Mobile:  { size: 40,  lh: 1.05, tracking: "-0.025em", weight: 600 },
  h3Card:    { size: 28,  lh: 1.1,  tracking: "-0.02em",  weight: 600 },
  leadLg:    { size: 19,  lh: 1.5,  weight: 400 },
  body:      { size: 15,  lh: 1.6,  weight: 400 },
  bodySm:    { size: 14,  lh: 1.55, weight: 400 },
  btn:       { size: 14,  lh: 1.0,  weight: 500 },
  eyebrow:   { size: 11,  weight: 500, tracking: "0.18em" },
} as const;
