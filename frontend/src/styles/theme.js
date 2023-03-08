import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  slg: "980px",
  lg: "1200px",
  xl: "1441px",
};

const colors = {
  brand: {
    primary: "#635FC7",
    black: "#000112",
    primaryLight: "#A8A4FF",
    bg: "#FAFCFF",
    seconday: "#EA5555",
    secondayLight: "#FF9898",
    white: "#ffffff",
    grey: {
      text: "#83889D",
      600: "#20212C",
      500: "#2B2C37",
      400: "#3E3F4E",
      300: "#828FA3",
      200: "#E4EBFA",
      100: "#F4F7FD",
    },
  },
};

const styles = {
  global: {
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
    },
    body: {
      fontSize: "1.6rem",
      fontFamily: "'Karla', sans-serif",
      color: "#23273B",
    },
    a: {
      color: "#23273B",
    },
    input: {
      fontSize: "1.4rem",
    },
    "::placeholder": {
      color: "rgba(0, 0, 0, 0.54)",
    },
  },
};

const fonts = {
  heading: "Karla, sans-serif",
  body: "Karla, sans-serif",
};

const theme = extendTheme({
  breakpoints,
  colors,
  styles,
  fonts,
});

export { theme };
