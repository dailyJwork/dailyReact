import { Component } from "react";
import todolistJson from "./todolist.json";
import { ToDo } from "./ToDo";
import css from "./ToDoList.module.css";

export class ToDoList extends Component {
  state = {
    todoUl: todolistJson,
  };

  handleCheck = (id) => {
    this.setState((prevState) => {
      return {
        todoUl: prevState.todoUl.map((todo) => {
          return todo.id === id
            ? { ...todo, complited: !todo.complited }
            : todo;
        }),
      };
    });
  };

  handleDelete = (id) => {
    this.setState((prevState) => {
        return {
            todoUl: prevState.todoUl.filter((todo) => {
                return todo.id !== id
            })
        }
    })
  }

  render() {
    return (
      <div className={css.toDoContainer}>
        <h1>my to do list</h1>
        <ul className={css.toDoList}>
          {this.state.todoUl.map((el) => {
            return <ToDo key={el.id} todo={el} handleCheck={this.handleCheck} handleDelete={this.handleDelete} />;
          })}
        </ul>
      </div>
    );
  }
}
