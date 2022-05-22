// import './App.css';
import OutPutScreen from './components/OutPutScreen';
import SideBar from './components/SideBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './App.css';
import React, { useState, useContext } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from './context/ColorModeContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const base = {
  bgcolor: 'background.default',
  color: 'text.primary',
  m: 0,
  p: 5
}


function App() {


  const [mode, setMode] = React.useState('light');


  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }

      ),
    [mode],
  );


  return (
    <ColorModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth={false}
          sx={base}
        >

          <Grid container spacing={1} >

            <OutPutScreen value={"Hello?"} />
            <SideBar />
          </Grid>



        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
