import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './slices/authSlice';
import ThemeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    theme: ThemeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;