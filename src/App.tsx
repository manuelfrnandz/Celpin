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
  // Scroll to hash after React mounts. This SPA has heavy async content —
  // Instagram embeds in Deporte and Vida, images throughout — that reflow the
  // page as they load. A single scroll lands too high because sections below
  // haven't been pushed down yet. So we retry across the embed load window
  // (up to ~4s) and stop as soon as the target position stabilizes.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    let lastY = -1;
    let stableHits = 0;
    const scrollToHash = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const nav = document.querySelector("header");
      const navH = nav?.getBoundingClientRect().height ?? 72;
      const y = Math.max(0, el.getBoundingClientRect().top + window.scrollY - navH - 12);
      if (Math.abs(y - lastY) < 4) {
        stableHits++;
        if (stableHits >= 2) return; // page stabilized, don't rescroll
      } else {
        stableHits = 0;
      }
      lastY = y;
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    const delays = [150, 500, 1200, 2200, 3500];
    const timers = delays.map((d) => setTimeout(scrollToHash, d));
    return () => timers.forEach(clearTimeout);
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
