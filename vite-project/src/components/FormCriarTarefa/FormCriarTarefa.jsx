import { Botao, CampoTexto } from "../../components";

const FormCriarTarefa = () => {
  return (
    <form>
      <CampoTexto />
      {/* DANDO ERRO NO TIPO!! */}<Botao texto="+" tipo={TIPO_BOTAO.SECUNDARIO}/>
    </form>
  )
};

export { FormCriarTarefa };