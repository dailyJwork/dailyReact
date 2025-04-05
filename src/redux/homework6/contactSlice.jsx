import { createSlice } from "@reduxjs/toolkit";
import contactsData from "./contactBook.json";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: contactsData,
    filter: "",
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
        console.log(state);
      state.contacts.filter((el) => {
        return el.id !== action.payload;
      });
    },
  },
});

export const contactsReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
