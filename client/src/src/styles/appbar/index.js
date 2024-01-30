import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme"
import { Box} from "@mui/system";

//container
export const AppbarContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4, 
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4px 10px',
}));

//header
export const AppbarHeader = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '4rem',
  fontFamily: "sans-serif",
  color:  Colors.primary,
}))

export const MyList = styled(List)(({ type}) => ({
  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
}))

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.shaft,
  position: 'fixed',
  botom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99, 
  borderTop: `1px solid ${Colors.border}`,

}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));