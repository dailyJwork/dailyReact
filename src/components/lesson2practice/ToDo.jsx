import css from "./ToDoList.module.css";

export const ToDo = ({ todo, handleCheck, handleDelete }) => {
  return (
    <li className={css.toDoItem}>
      <input type="checkbox" checked={todo.complited} onChange={() => {return handleCheck(todo.id)}}/>
      {todo.title}
      <button type="button" onClick={() => {return handleDelete(todo.id)}}>X</button>
    </li>
  );
};
