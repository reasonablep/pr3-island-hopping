import { useUIContext } from "../context/ui";
import { IconButton, Slide } from "@mui/material";
import { SearchBoxContainer, SearchField } from "../../styles/search";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export default function SearchBox() {

  const { showSearchBox, setShowSearchBox } = useUIContext();

  return (
    <Slide direction='down' in={showSearchBox} timeout={250}>
      <SearchBoxContainer>
        <SearchField
          color="primary"
          variant="standard"
          fullWidth
          placeholder="search..."/>
            
            <IconButton>
              <SearchIcon sx={{
                fontSize: { xs: '2rem', md: '3rem'}
              }}
                color="secondary" />
            </IconButton>
              
            <IconButton 
            onClick={() => setShowSearchBox(false)}
            sx={{
              position: 'absolute',
              top:10,
              right:10,
            }}>
              <CloseIcon sx={{
                fontSize: '5rem'}}
                color="black" />
            </IconButton>  

      </SearchBoxContainer>
    </Slide>
  )
}