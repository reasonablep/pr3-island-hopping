import { Dialog, DialogTitle, DialogContent, Slide, IconButton, useMediaQuery, Typography, Button, } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../../styles/theme";
import { useTheme } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import { IslandImage } from "../../styles/islands";
import { islands } from "../../data";
import IncDec from "../ui";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';

function SlideTransition(props){
  return <Slide direction="down" {...props} />
}

const IslandDetailWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(4)
}));

const IslandDetailInfoWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));

export default function IslandDetail ({open, onClose, island}) {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
  <Dialog 
    TransitionComponent= {SlideTransition}
    variant="permanent"
    open={open}
    fullScreen>

      <DialogTitle 
      sx={{
        background: Colors.secondary
      }}>
        <Box
          Display= {'flex'}
          alignItems= 'center'
          justifyContent={"space-between"}>
            Island Details
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <IslandDetailWrapper flexDirection={matches ? 'column': 'row'}>
          <islands sx= {{ mr: 6}}>
            <IslandImage src={island.image} />
          </islands>
          <IslandDetailInfoWrapper sx={{ mr: 6, 
            ml:6,
            lineHeight: 2 }}>
          <Typography variant="subtitle1">Recently placed on the market!</Typography>
          <Typography variant="subtitle1">This could be yours!</Typography>
            <Typography variant="h2">{island.name}</Typography>
            <Typography variant="body"> ${island.price} per sq miles</Typography>
            <Typography variant="body">{island.size}</Typography>
            <Typography variant="body">{island.location}</Typography>
            <Typography variant="body">{island.description}</Typography>
              
              <Box
                sx={{mt:4}}
                display="flex"
                alignItems="center"
                justifyContent="space-between">
                  <IncDec />
                  <Button variant ="contained"> Add to cart</Button>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                sx={{ mt: 4, color: Colors.dim_grey}}>
                <FavoriteIcon sx={{mr:2}}/>
                  Favorite this for later!
              </Box>

              <Box 
                sx={{ mt: 4, color: Colors.dim_grey}}>
                  <FacebookIcon />
                  <XIcon sx={{ pl: theme.spacing(4)}} />
                  <InstagramIcon sx={{ pl: theme.spacing(4)}} />
                </Box>
          </IslandDetailInfoWrapper>
        </IslandDetailWrapper>
      </DialogContent>
    </Dialog>
  )
}