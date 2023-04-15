import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  auth: boolean, 
}

const initialState: AuthState = {
  auth: true,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleAuth(state) {
      state.auth = !state.auth;
    }
  }
});

// Selectors
export const selectAuthState = (state: RootState) => state.auth.auth;

// Actions
export const { toggleAuth } = authSlice.actions;

export default authSlice.reducer;