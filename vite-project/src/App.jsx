import { Cabecalho, Conteudo } from "./components";

import "./App.css";

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Murilo"/>
      <Conteudo>
        <h1>Titulo</h1>
        <p>Texto</p>
      </Conteudo>
    </>
  );
};

export { App };
