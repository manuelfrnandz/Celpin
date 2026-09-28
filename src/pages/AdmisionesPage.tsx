import { Page } from "./Page";
import { Admisiones } from "../components/sections/Admisiones";
import { FAQ } from "../components/sections/FAQ";
import { Documentos } from "../components/sections/Documentos";

export function AdmisionesPage() {
  return (
    <Page title="Admisiones">
      <Admisiones />
      <FAQ />
      <Documentos />
    </Page>
  );
}
