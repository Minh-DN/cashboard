import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './slices/authSlice';
import ThemeReducer from './slices/themeSlice';
import DashboardReducer from './slices/dashboardSlice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    theme: ThemeReducer,
    dashboard: DashboardReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;