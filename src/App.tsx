import React from 'react';

//styles imports to inject the main theme off the app
import { theme } from "./css/globalStyles";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
     
    </ThemeProvider>
    </div>
  );
}

export default App;
