import { PaletteMode, ThemeOptions } from "@mui/material";
import { Theme } from "@emotion/react";

// themes
export interface Color {
  100: string,
  200: string,
  300: string,
  400: string,
  500: string,
  600: string,
  700: string,
  800: string,
  900: string,
}

export interface Colors {
  grey: Color,
  primary: Color,
  greenAccent: Color,
  redAccent: Color,
  blueAccent: Color
}
// declare module '@mui/material/styles' {
//   interface CustomTheme extends Theme {
//     palette: {
//       mode: PaletteMode,
//       primary: {
//         main: string,
//       },
//       secondary: {
//         main: string,
//       },
//       neutral: {
//         dark: string,
//         main: string,
//         light: string,
//       },
//       background: {
//         default: string,
//       },
//     },
//     typography: {
//       fontFamily: string,
//       fontSize: number,
//       h1: {
//         fontFamily: string,
//         fontSize: number,
//       },
//       h2: {
//         fontFamily: string,
//         fontSize: number,
//       },
//       h3: {
//         fontFamily: string,
//         fontSize: number,
//       },
//       h4: {
//         fontFamily: string,
//         fontSize: number,
//       },
//       h5: {
//         fontFamily: string,
//         fontSize: number,
//       },
//       h6: {
//         fontFamily: string,
//         fontSize: number,
//       },
//     },
//   }

//   interface CustomThemeOptions extends ThemeOptions {
//     palette: {
//       mode: PaletteMode,
//       primary: {
//         main: string,
//       },
//       secondary: {
//         main: string,
//       },
//       neutral: {
//         dark: string,
//         main: string,
//         light: string,
//       },
//       background: {
//         default: string,
//       },
//     },
//     typography: {
//       fontFamily: string,
//       fontSize: number,
//       h1: {
//         fontFamily: string,
//         fontSize: number,
//       },
//       h2: {
//         fontFamily: string,
//         fontSize: number,
//       },
//       h3: {
//         fontFamily: string,
//         fontSize: number,
//       },
//       h4: {
//         fontFamily: string,
//         fontSize: number,
//       },
//       h5: {
//         fontFamily: string,
//         fontSize: number,
//       },
//       h6: {
//         fontFamily: string,
//         fontSize: number,
//       },
//     },
//   }

//   export function createTheme(options?: CustomThemeOptions): CustomTheme;
// }