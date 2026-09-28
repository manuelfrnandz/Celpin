import { Page } from "./Page";
import { Admisiones } from "../components/sections/Admisiones";
import { Transporte } from "../components/sections/Transporte";
import { Documentos } from "../components/sections/Documentos";

export function AdmisionesPage() {
  return (
    <Page title="Admisiones">
      <Admisiones />
      <Transporte />
      <Documentos />
    </Page>
  );
}
