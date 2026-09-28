import { Page } from "./Page";
import { Hero } from "../components/sections/Hero";
import { TrustStrip } from "../components/sections/TrustStrip";
import { HubCards } from "../components/sections/HubCards";
import { Testimonios } from "../components/sections/Testimonios";

export function Home() {
  return (
    <Page>
      <Hero />
      <TrustStrip />
      <HubCards />
      <Testimonios />
    </Page>
  );
}
