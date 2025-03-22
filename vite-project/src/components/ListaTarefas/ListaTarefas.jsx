import { ListaTarefasItem } from './ListaTarefasItem';

import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
  return (
    <ul className={style.ListaTarefas}>
      <ListaTarefasItem nome="Tarefa 1" />
      <ListaTarefasItem nome="Tarefa 2" />
      <ListaTarefasItem nome="Tarefa 3" />
    </ul>
  )
};

export { ListaTarefas };