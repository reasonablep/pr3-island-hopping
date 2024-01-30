import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import theme, { Colors } from "../theme";
import { Typography } from "@mui/material";

export const PromotionsContainer = styled(Box)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    padding: '40px 0px 40px 0px'
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 0px 20px 0px',
  overflow: 'hidden',
  background: Colors.secondary,
}));

export const MessageText = styled(Typography)(({theme}) => ({
  fontFamily: 'sans-serif',
  [theme.breakpoints.down('md')]: {
    fontsize: '1.5rem',
  },
  color:Colors.white,
  fontSize: '2rem',
}));