import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
  name: "locale",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLang(state, action) {
      state.lang = action.payload;
    },
  },
});

export const localeReducer = localeSlice.reducer;
export const { changeLang } = localeSlice.actions;


/// через createReducer and createAction 

// const localeinitialState = {
//   lang: "en",
// };

// export const localeReducer = createReducer(localeinitialState, (builder) => {
//   builder.addCase("locale/changeLang", (state, action) => {
//     state.lang = action.payload;
//   });
// });

// export const changeLang = createAction("locale/changeLang");
