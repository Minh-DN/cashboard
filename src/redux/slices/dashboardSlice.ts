import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

/**
 * Notes on why rowTwoHeight is managed this way
 * 
 * Row 2 Card 2 (TotalTransactionsCard) is a list of items which can overflow
 * so it needs to have a fixed height. However, this card also needs to have
 * the same height as Card 1 (ExpenseBreakDownCard), whose height is dynamic.
 * 
 * By using redux to manage rowTwoHeight, Card 1 can 'share' its height with 
 * Card 2. Currently, this is the most suitable solution I can think of. 
 */

interface DashboardState {
  rowTwoHeight: number | null, 
}

const initialState: DashboardState = {
  rowTwoHeight: null,
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setRowTwoHeight(state, action) {
      state.rowTwoHeight = action.payload;
    }
  }
})

// Selectors
export const selectRowTwoHeight = (state: RootState) => state.dashboard.rowTwoHeight;

// Actions
export const { setRowTwoHeight } = dashboardSlice.actions;

export default dashboardSlice.reducer;