import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

interface ThemeState {
  mode: PaletteMode,
}

const initialState: ThemeState = {
  mode: 'dark',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleColorMode(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  }
})

export const { toggleColorMode } = themeSlice.actions

export default themeSlice.reducer;