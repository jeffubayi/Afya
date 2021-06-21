//Global theme styles throughout the app
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  // Color themes for the entire app
  overrides: {
    // you declare you override default material-ui styles
    MuiDrawer: {
      paper: {
        paddingTop: "14rem",
      },
    },
  },
  palette: {
    primary: {
      main: "#4615b2",
    },
    secondary: {
      main: "#FFFFF",
    },
  },
});
