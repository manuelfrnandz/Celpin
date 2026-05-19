export const COLORS = {
  cream:     "#FAF8F3",
  ink:       "#0B1B2E",
  inkSoft:   "#3A4A5E",
  inkMuted:  "#7A8AA0",
  border:    "rgba(11,27,46,0.10)",
  white:     "#FFFFFF",
  green:     "#85A93D",
  greenDark: "#5A7A28",
  greenInk:  "#4F6D24",
  greenTint: "rgba(133,169,61,0.10)",
  ocre:      "#D4A574",
  pine:      "#1E4D3B",
  whatsapp:  "#25D366",
} as const;

export type ColorKey = keyof typeof COLORS;
