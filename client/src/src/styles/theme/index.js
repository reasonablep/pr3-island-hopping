import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#F9B5AC",
  secondary: "#F39C6B",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#5DAA00a",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",

  dim_grey: "#696969",
  dove_grey: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_blue: "#0DE0EA",

  white: "#fff",
  black: "#000",
}

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    }
  },
  
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    }
  }
});

export default theme;