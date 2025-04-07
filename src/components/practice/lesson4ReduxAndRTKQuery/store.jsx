import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        [commentApi.reducerPath]: commentApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        getDefaultMiddleware(),
        commentApi.middleware
    }
})

