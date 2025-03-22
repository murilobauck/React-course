const ListaTarefasItem = (props) => {
  const { nome } = props;

  return (
    <li>
        {nome}
        <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
    </li>
  );
};

export { ListaTarefasItem };