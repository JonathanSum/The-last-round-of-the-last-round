// import './App.css';
import OutPutScreen from './components/OutPutScreen';
import SideBar from './components/SideBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const base = {
  bgcolor: 'background.default',
  color: 'text.primary',
  m: 5,
}


function App() {
  return (

    <Container

      maxWidth={false}
      sx={base}
    >

      <Grid container spacing={1} >

        <OutPutScreen value={"Hello?"} />
        <SideBar />
      </Grid>



    </Container>


  );
}

export default App;
