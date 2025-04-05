import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// value

// через Slice
const mySlice = createSlice({
    name: "myValue",
    initialState: 100,
    reducers: {
        increment(state, action) {
            return state + action.payload
        },
        decrement(state, action) {
            return state - action.payload
        }
    }
});

export const increment = createAction("myCounter/increment");
export const decrement = createAction("myCounter/decrement");

const myReducer = createReducer(0, {
  increment: (state, action) => state + action.payload,
  decrement: (state, action) => state - action.payload,
});

// items

export const add = createAction("items/add");
export const remove = createAction("items/remove");

const itemsReducer = createReducer([], {
  add: (state, action) => [...state, action.payload],
  remove: (state, action) => state.filter((el) => el.id !== action.payload),
});

// store

export const practiceStore = configureStore({
  reducer: {
    myValue: myReducer,
    items: itemsReducer,
  },
});

