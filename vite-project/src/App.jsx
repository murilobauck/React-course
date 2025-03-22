import { Cabecalho, Conteudo, Footer, } from "./components";
import { Inicial } from "./pages";

import "./App.css";

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Murilo"/>
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Footer criador="Murilo"/>
    </>
  );
};

export { App };
