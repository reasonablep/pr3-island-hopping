import { ThemeProvider} from '@mui/system';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import theme from '../src/styles/theme/index';
import Appbar from '../src/components/appbar/index.jsx';
import Banner from '../src/components/appbar/banner/index.jsx';
import Promotions from '../src/components/promotions/index.jsx';
import Islands from '../src/components/islands/index.jsx';
import './App.css'

function App() {

  useEffect(() => {
    document.title = "Prime Isles Estate: Elevate Your Lifestyle with Exclusive Private Islands-Home"
  }, 
  []);

  return (
    <ThemeProvider theme={theme}>
    <Container  
      maxWidth="x1"
      sx={{
        background: '#fff'
      }}
    >
      <Appbar />
      <Banner />
      <Promotions />
      <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
        <Typography variant='h4'>Our Islands</Typography>
      </Box>
      <Islands />
     
      {
        /*
        Title
        Products
        Footer
        Search box
        App drawer
        */
      }
    </Container>
    </ThemeProvider>
  );
}

export default App;
