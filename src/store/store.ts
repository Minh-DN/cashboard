import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    theme: ThemeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;