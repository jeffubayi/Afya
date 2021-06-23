//Global theme styles throughout the app
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  // Color themes for the entire app
  overrides: {
    // you declare you override default material-ui styles
    MuiDrawer: {
      paper: {
        paddingTop: "14rem",
        width:"5%",
        backgroundColor:"white"
      },
    },
    MuiTableCell:{
      body:{
        color:"#4615b2"
      }
    },
  },
  palette: {
    background: {
      default: "#F4F6F8",
      paper: "#FFFFF",
    },
    primary: {
      contrastText: "#ffffff",
      main: "#6b3bab",
    },
    secondary: {
      main: "#FFFFF",
    },
    text: {
      primary: "#172b4d",
      secondary: "#6b778c",
    },
  },
});
