import { Drawer, useMediaQuery, Avatar, Typography, Divider, Paper, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../context/ui";
import { useTheme } from "@emotion/react";
import { islands } from "../../data";
export default function Cart() {

  const {cart, setShowCart, showCart} = useUIContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const cartContent = cart.map(island => (
    <Box key={island.id}>
      <Box 
        display="flex"
        sx=
          {{ pt: 2, pb: 2 }}
          alignItems="start"
          justifyContent={"space-between"}>
        <Avatar src = {island.image} sx={{ width: 100, height: 100, mr:2 }} />
          <Box display="flex" flexDirection={"column"}>
            <Typography variant="h6">{island.name}</Typography>
            {!matches && <Typography variant="subtitle2">{island.description}</Typography>}
          </Box>
        <Typography variant="body1" justifyContent={"end"}>
          ${island.price}
        </Typography>
      </Box>
            
        {matches && <Typography variant="subtitle2">{island.description}</Typography>}
      <Divider variant="inset" />
    </Box>
  ));

  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx:{
          width: matches ? '100%' : 500, 
          background: Colors.light_blue,
          borderRadius: 0
        }
      }}
      >

      {cart.length > 0 ? 
      <Box
        sx={{ p: 4 }}
        display="flex"
        justifyContent={"center"}
        flexDirection="column"
        alignItems="center">
          <Typography variant="h3" color={Colors.black}>
            Your Cart
          </Typography>
          <Typography variant="body1" color={Colors.black}>
            {" "}
          </Typography>

          <Paper
            elevation={0}
            sx={{
              mt: 2, 
              width: '90%',
              padding: 4,
            }}>
              {cartContent}
          </Paper>

          <Button sx={{ mt: 4 }} variant="contained">
            Proceed to checkout.
          </Button>
      </Box>: 

      <Box
        sx={{ 
          p:3,
        }}
        display="flex"
        justifyContent={"center"}
        flexDirection="column"
        alignItems="center">
        
        <Typography variant = {matches ? "h5" : "h3"} color={Colors.black}>
          Your Cart Is Empty!
        </Typography>
      </Box>}
      
      <Button onClick={() => setShowCart(false)}>Close</Button>
    </Drawer>
  )
}