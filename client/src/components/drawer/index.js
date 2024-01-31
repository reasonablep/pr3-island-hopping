import { styled } from '@mui/system';
import { useUIContext } from '../context/ui';
import CloseIcon from '@mui/icons-material/Close';
import { Divider, 
  Drawer, 
  List, 
  ListItemButton, 
  ListItemText } from '@mui/material';
import { DrawerCloseButton } from '../../styles/appbar';
import { Colors } from '../../styles/theme';

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props}/>  
))``;

export default function AppDrawer () {

  const{drawerOpen, setDrawerOpen} = useUIContext();

  return (
    <>

    {drawerOpen && <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
        <CloseIcon
          sx={{
            fontSize: '2.5rem',
            color: Colors.secondary
          }}/> 
      </DrawerCloseButton> }

    <Drawer open={drawerOpen}>
    
      <List>
        <ListItemButton>
          <ListItemText>
            Home
          </ListItemText>
        </ListItemButton>
        <MiddleDivider/>

        <ListItemButton>
          <ListItemText>
            Categories
          </ListItemText>
        </ListItemButton>
        <MiddleDivider/>

        <ListItemButton>
          <ListItemText>
            About Us
          </ListItemText>
        </ListItemButton>
        <MiddleDivider/>

        <ListItemButton>
          <ListItemText>
            Contact Us
          </ListItemText>
        </ListItemButton>
        <MiddleDivider/>

      </List>
    </Drawer>
    </>
  )
}