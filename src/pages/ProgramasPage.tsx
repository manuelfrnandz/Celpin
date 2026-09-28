import { Page } from "./Page";
import { Programas } from "../components/sections/Programas";
import { JornadaExtendida } from "../components/sections/JornadaExtendida";
import { Transporte } from "../components/sections/Transporte";

export function ProgramasPage() {
  return (
    <Page title="Programas">
      <Programas />
      <JornadaExtendida />
      <Transporte />
    </Page>
  );
}
