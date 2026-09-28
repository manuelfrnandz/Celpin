import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./index.css";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { StickyCTA } from "./components/layout/StickyCTA";
import { Home } from "./pages/Home";
import { Nosotros } from "./pages/Nosotros";
import { ProgramasPage } from "./pages/ProgramasPage";
import { VidaEstudiantil } from "./pages/VidaEstudiantil";
import { AdmisionesPage } from "./pages/AdmisionesPage";

// On page change: jump to top, or to the #section when the link carries one.
// Hash targets are retried because Instagram embeds and images reflow the page
// for a few seconds after load; stop once the target position stabilizes.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let lastY = -1;
    let stableHits = 0;
    const scrollToHash = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const navH = document.querySelector("header")?.getBoundingClientRect().height ?? 72;
      const y = Math.max(0, el.getBoundingClientRect().top + window.scrollY - navH - 12);
      if (Math.abs(y - lastY) < 4) {
        if (++stableHits >= 2) return;
      } else {
        stableHits = 0;
      }
      lastY = y;
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    const timers = [50, 400, 1200, 2200, 3500].map((d) => setTimeout(scrollToHash, d));
    return () => timers.forEach(clearTimeout);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen bg-cream text-ink font-body">
        <Nav />
        <main className="main-content xl:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/programas" element={<ProgramasPage />} />
            <Route path="/vida-estudiantil" element={<VidaEstudiantil />} />
            <Route path="/admisiones" element={<AdmisionesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </BrowserRouter>
  );
}
