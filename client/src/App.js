import { ThemeProvider} from '@mui/system';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/appbar/banner';
import Promotions from './components/promotions';
import Islands from './components/islands';

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
