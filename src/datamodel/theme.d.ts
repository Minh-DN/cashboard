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

export interface ColorModeType {
  toggleColorMode: () => void
}
