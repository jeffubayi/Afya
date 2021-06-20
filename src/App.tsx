import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//styles imports to inject the main theme off the app
import { theme } from "./css/globalStyles";
import { ThemeProvider } from "@material-ui/core/styles";
//screens
import Login from "./screens/auth/login";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
