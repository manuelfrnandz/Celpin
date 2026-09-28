import { useEffect, type ReactNode } from "react";

const BASE_TITLE = "CELPIN | El Centro que se adapta a tu hijo";

export function Page({ title, children }: { title?: string; children: ReactNode }) {
  useEffect(() => {
    document.title = title ? `${title} | CELPIN` : BASE_TITLE;
  }, [title]);

  // Home's Hero already clears the fixed nav; inner pages need the offset.
  return <div className={title ? "pt-[72px]" : undefined}>{children}</div>;
}
