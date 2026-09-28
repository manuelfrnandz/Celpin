import { Page } from "./Page";
import { VidaEnCelpin } from "../components/sections/VidaEnCelpin";
import { Deporte } from "../components/sections/Deporte";
import { CopaCelpin } from "../components/sections/CopaCelpin";

export function VidaEstudiantil() {
  return (
    <Page title="Vida estudiantil">
      <VidaEnCelpin />
      <Deporte />
      <CopaCelpin />
    </Page>
  );
}
