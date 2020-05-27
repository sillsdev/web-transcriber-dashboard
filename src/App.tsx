import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import amber from '@material-ui/core/colors/amber';
import NavBar from './NavBar';
import Report from './Report';

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: amber,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Report />
    </ThemeProvider>
  );
}

export default App;
