import { createSlice } from "@reduxjs/toolkit";

const acoountSlice = createSlice({
  name: "account",
  initialState: {
    balance: 100,
    username: "jacob",
  },
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});

export const accountReducer = acoountSlice.reducer;
export const { deposit, withdraw } = acoountSlice.actions;


/// через createReducer and createAction 

// const accountInitialState = {
//   balance: 100,
//   username: "Jacob",
// };

// export const accountReducer = createReducer(accountInitialState, (builder) => {
//   builder
//     .addCase("account/deposit", (state, action) => {
//       state.balance += action.payload;
//     })
//     .addCase("account/withdraw", (state, action) => {
//       state.balance -= action.payload;
//     });
// });

// export const deposit = createAction("account/deposit");

// export const withdraw = createAction("account/withdraw");
