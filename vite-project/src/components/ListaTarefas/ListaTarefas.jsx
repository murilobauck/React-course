import { Botao, TIPO_BOTAO } from '../Botao';

import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
  return (
    <ul className={style.ListaTarefas}>
      <li>
        item 1
        <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
      </li>
      <li>
        item 2
        <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
      </li>
      <li>
        item 3
        <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
      </li>
    </ul>
  )
};

export { ListaTarefas };