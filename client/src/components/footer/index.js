import { FooterTitle, SignUpEmail } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import { Box, 
  Button, 
  Grid, 
  List, 
  ListItemText, 
  Stack, 
  Typography, 
  colors} from "@mui/material";


export default function Footer () {
  return (
    <Box 
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        padding: { xs:4, md: 10},
        fontSize: { xs: '12px', md: '18px'} }}>
   
      <Grid container spacing={2} justifyContent="center" >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
             Welcome to Prime Isle Estate, where we are redefining the boundaries of the real estate market by creating a more inclusive and equitable world.  Born from a vision that is outside the conventional norms of housing real estate, our unique enterprise embarks on a groundbreaking mission to offer individuals the opportunity to own a piece of paradise.*
             
             At Prime Isle Estate, we believe in turning dreams into reality, and what better dream than owning your own island? Our unconventional approach to island ownership challenges the status quo, presenting a once-in-a-lifetime opportunity for enthusiasts to become proud island owners.  While the idea may seem audacious, our driving force is the sincere belief that everyone deserves a chance to experience the serenity and beauty of their own private heaven. 
          </Typography>
          
          <Box
            sx={{
              mt:4,
              color: Colors.dove_grey, /*Creates box with grey*/
            }}>
              <FacebookIcon sx={{ mr: 1 }} /> 
              <XIcon sx={{ mr: 1 }} />  
              <InstagramIcon />
          </Box>
        </Grid> 

        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
            <List>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  About Us
                </Typography>
              </ListItemText>

              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Privacy &amp; Policy
                </Typography>
              </ListItemText>

              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Terms &amp; Conditions
                </Typography>
              </ListItemText>

            </List>
          </Grid>

        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">My Account</FooterTitle>
          <List>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Login
                </Typography>
              </ListItemText>

              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  My Account
                </Typography>
              </ListItemText>

              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Wishlist
                </Typography>
              </ListItemText>
            </List>
        </Grid>

        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">Sign Up!</FooterTitle>
          <Stack>
            <SignUpEmail
              color="primary"
              label="Email Address"
              variant="standard"/>
            <Button
              startIcon={<SendIcon 
              sx= {{color: Colors.white}} />} 
              sx={{ mt: 4, mb:4}}
              variant="contained" >
              Subscribe       
            </Button>   
          </Stack>
        </Grid>

      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={4}>
          <FooterTitle variant="body1">*Disclaimer*</FooterTitle>
          <Typography variant="caption2">
             *Note that this is strictly for demonstration purposes.  We do not own any of the land we are selling, but will give you a cool certificate that make it appear that you own land.
             </Typography>
      </Grid>
    </Box>
  )
}