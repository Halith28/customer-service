import { createSlice } from "@reduxjs/toolkit";

export const ticketSlice = createSlice({
  name: "ticket",
  initialState: [
    {
      id: 120393,
      issueType: "Laptop issue",
      description: "Laptop is not opening",
      reporter: "Abdul",
      status: "closed",
    },
  ],
  reducers: {
    submitIssue: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload);
    },
    updateIssue: (state, action) => {
      state[action.payload].status = "Open";
      // state[action.id] = action.payload;
    },
  },
});

export const { submitIssue, updateIssue } = ticketSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTicket = (state) => state.services;

export default ticketSlice.reducer;
