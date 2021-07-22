import { createTheme } from "@material-ui/core/styles";
import { Colors } from "./colors";

const font = "'Roboto Condensed', 'Roboto', sans-serif";

export default createTheme({
  palette: {
    // type: "dark",
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    background: {
      default: Colors.white,
    },
    // error: {
    //   main: "#F7F735",
    // },
    text: {
      primary: Colors.secondary,
    },
  },
  typography: {
    fontFamily: font,
    h1: {
      fontFamily: "Spectral",
      lineHeight: "36.53px",
      fontSize: 24,
      fontWeight: 600,
      color: Colors.title,
    },
    h2: {
      fontFamily: "PT Serif",
      lineHeight: "31.8px",
      fontSize: 24,
      fontWeight: 700,
      color: Colors.text,
    },
    h3: {
      fontFamily: "PT Serif Caption",
      lineHeight: "31.8px",
      fontSize: 24,
      fontWeight: 400,
      color: Colors.text,
    },
    h4: {
      fontFamily: "Roboto Condensed",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "20px",
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Roboto Condensed",
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "20px",
    },
    caption: {
      fontFamily: "Roboto Condensed",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "10px",
      color: Colors.text,
    },
    // overline: {
    //   fontSize: 10,
    //   textTransform: "initial",
    // },
  },
  overrides: {
    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: 0,
        },
      },
    },
    MuiSelect: {
      root: {
        fontSize: 12,
      },
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "& span": {
            fontWeight: 700,
          },
        },
      },
      button: {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
  },
});
