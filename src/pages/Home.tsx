import { Page } from "./Page";
import { Hero } from "../components/sections/Hero";
import { TrustStrip } from "../components/sections/TrustStrip";
import { HubCards } from "../components/sections/HubCards";
import { Testimonios } from "../components/sections/Testimonios";
import { CtaConocernos } from "../components/sections/CtaConocernos";

export function Home() {
  return (
    <Page>
      <Hero />
      <TrustStrip />
      <HubCards />
      <Testimonios />
      <CtaConocernos />
    </Page>
  );
}
