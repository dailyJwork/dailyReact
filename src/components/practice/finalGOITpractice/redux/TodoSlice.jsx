import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "toDo",
  initialState: {
    todos: [],
  },
  reducers: {
    createTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo(state, action) {
      state.todos = state.todos = state.todos.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const { createTodo, deleteTodo } = TodoSlice.actions;
