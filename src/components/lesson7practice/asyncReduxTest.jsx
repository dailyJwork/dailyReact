import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";

const myMiddleWare1 = (store) => {
  return (next) => {
    return (action) => {
      next(action);
    };
  };
};

const reduxThunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch);
    return;
  }
  next(action);
};

// пример прослойки с гугл аналитикой (зачем использовать прослойки)

const gaMiddleware = (store) => (next) => (action) => {
  if (action?.meta?.ga) {
    console.log("Send to Google Analitics");
  }
  next(action);
};

const myMiddleWare2 = (store) => (next) => (action) => {
  next(action);
};

const store = configureStore({
  reducer: {
    somereducer: reducer,
  },
  middleware(getDefaultMiddleware) {
    const defaultMiddleware = getDefaultMiddleware();
    return [...defaultMiddleware, myMiddleWare1, myMiddleWare2];
  },
});

/// async reduxThink practice

const addTodoOpperation = () => {
  return (dispatch) => {
    const todo = axios.get("...");
    dispatch(addTodo(todo));
  };
};

const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const responce = await bookShelfAPI.fetchBooks();
  return responce.data;
});

/// rtk query (react toolkit query) (data-fetching(api) and cashing)
/// библиотека для управления серверным состоянием 
/// использует под капотом createSlice, createAsyncThunk
