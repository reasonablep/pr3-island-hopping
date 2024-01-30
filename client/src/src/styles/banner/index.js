import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import theme, { Colors } from "../theme";
import { Typography } from "@mui/material";

export const BannerContainer = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: '0px 0px',
  background: Colors.light_blue,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export const BannerImage = styled('img')(({src, theme}) => ({
  src: `url(${src})`,
  width: '500px',
  [theme.breakpoints.down('md')]: {
    width: '350px',
  },

  [theme.breakpoints.down('sm')]: {
    width: '300px',
    height: '300px',
  }
}));

export const BannerContent = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: "100%",
  padding: '30px'
}));

export const BannerTitile = styled(Typography)(({theme}) => ({
  lineHeight: 1.5,
  fontSize: '100px',
  marginBottom: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '42px',
  }
}));

export const BannerDescription = styled(Typography)(({theme}) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down('md')]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  }
}));