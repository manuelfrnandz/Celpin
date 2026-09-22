import { useEffect } from "react";
import "./index.css";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { StickyCTA } from "./components/layout/StickyCTA";
import { Hero } from "./components/sections/Hero";
import { TrustStrip } from "./components/sections/TrustStrip";
import { Programas } from "./components/sections/Programas";
import { Metodologia } from "./components/sections/Metodologia";
import { Deporte } from "./components/sections/Deporte";
import { CopaCelpin } from "./components/sections/CopaCelpin";
import { VidaEnCelpin } from "./components/sections/VidaEnCelpin";
import { Testimonios } from "./components/sections/Testimonios";
import { Admisiones } from "./components/sections/Admisiones";
import { FAQ } from "./components/sections/FAQ";
import { Documentos } from "./components/sections/Documentos";

export default function App() {
  // Scroll to hash after React mounts (SPA: sections don't exist on first paint).
  // Computes manual offset to clear the sticky nav — scroll-margin-top alone
  // doesn't cover it consistently across mobile/safe-areas.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const scrollToHash = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const nav = document.querySelector("header");
      const navH = nav?.getBoundingClientRect().height ?? 72;
      const y = el.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    // First attempt after mount, second attempt after fonts/images shift the layout
    const t1 = setTimeout(scrollToHash, 200);
    const t2 = setTimeout(scrollToHash, 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="min-h-screen bg-cream text-ink font-body">
      <Nav />
      <main className="main-content xl:pb-0">
        <Hero />
        <TrustStrip />
        <Programas />
        <Metodologia />
        <Deporte />
        <CopaCelpin />
        <VidaEnCelpin />
        <Testimonios />
        <Admisiones />
        <FAQ />
        <Documentos />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
