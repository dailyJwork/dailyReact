import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "todos",
  storage,
};

const persistReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDORE]
        }
    })
})

