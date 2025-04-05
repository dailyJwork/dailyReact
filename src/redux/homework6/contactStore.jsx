import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";

export const contactStore = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
