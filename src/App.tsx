import "./index.css";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { StickyCTA } from "./components/layout/StickyCTA";
import { Hero } from "./components/sections/Hero";
import { TrustStrip } from "./components/sections/TrustStrip";
import { Reconocimientos } from "./components/sections/Reconocimientos";
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
  return (
    <div className="min-h-screen bg-cream text-ink font-body">
      <Nav />
      <main className="main-content xl:pb-0">
        <Hero />
        <TrustStrip />
        <Reconocimientos />
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
