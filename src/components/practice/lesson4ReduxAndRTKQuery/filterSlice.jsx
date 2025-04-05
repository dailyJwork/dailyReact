import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    actionFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { actionFilter } = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilter = (state) => state.filter.filter;
