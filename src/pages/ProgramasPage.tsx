import { Page } from "./Page";
import { Programas } from "../components/sections/Programas";
import { JornadaExtendida } from "../components/sections/JornadaExtendida";

export function ProgramasPage() {
  return (
    <Page title="Programas">
      <Programas />
      <JornadaExtendida />
    </Page>
  );
}
