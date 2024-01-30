import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";

export const Island = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    position: 'relative',
  }
}));

export const IslandImage = styled('img')(({src, theme}) => ({
  src: `url(${src})`,
  width: '100%',
  padding: '10px',
  background: Colors.light_blue,
  [theme.breakpoints.down('md')]: {
    width: '80%',
    padding: '24px',
  }
}));

export const IslandActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin:4,
}));

export const IslandFavButton = styled(IslandActionButton)(({ isfav, theme}) => ({
  color: isfav ? Colors.primary : Colors.light,
  [theme.breakpoints.down('md')]: {
    position: "absolute",
    right: 0,
    top: 0,
  }
}));

export const IslandAddToCard = styled(Button)(({show, theme}) => ({
  width: '120px',
  fontSize: '12px',
  [theme.breakpoints.down('md')]: {
    position: 'absolute',
    bottom: '2%',
    width: '300px',
    padding: '10px 5px',
  },
  background: Colors.secondary,
  opacity: 0.9,
}));

export const IslandMetaWrapper = styled(Box)(({theme}) => ({
  padding: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const IslandActionsWrapper = styled(Box)(({show, theme}) => ({
  [theme.breakpoints.up('md')]: {
    display: show ? 'visible' : 'none',
    position: 'absolute',
    right: 0,
    top: '20%',
  },
}));