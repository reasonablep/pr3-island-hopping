import IslandMeta from "./IslandMeta";
import { Stack } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { useState } from 'react';
import IslandDetail from "../islanddetails";
import useDialogModal from "../../hooks/useDialogModal";
import { Island, 
  IslandActionButton, 
  IslandActionsWrapper, 
  IslandAddToCart, 
  IslandFavButton, 
  IslandImage, } from "../../styles/islands";
  import useCart from "../../hooks/useCart";

export default function IslandProductsDesktop({island, matches}) {

    const [showOptions, setShowOptions] = useState(false);

    const [IslandDetailDialog, showIslandDetailDialog, closeIslandDetailDialog] = useDialogModal(IslandDetail);

    const { addToCart, addToCartText } = useCart(island);

    const handleMouseEnter = () => {
      setShowOptions(true);
    }
    
    const handleMouseLeave = () => {
      setShowOptions(false);
    }
    
  return (
    <>
    <Island onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
      <IslandImage src={island.image} />
      <IslandMeta island={island} matches={matches}/>
      <IslandFavButton isFav={0}>
        <FavoriteIcon />
      </IslandFavButton>
        
      {showOptions && 
      <IslandAddToCart 
        onClick={addToCart}
        show={showOptions} 
        variant="contained" 
        style={{ color: 'black'}}>
          {addToCartText}
      </IslandAddToCart>}

      <IslandActionsWrapper show={showOptions}>
        <Stack direction="row">
       
          <IslandActionButton>
            <ShareIcon color="light" />
          </IslandActionButton>

          <IslandActionButton onClick={() => showIslandDetailDialog()}>
            <FitScreenIcon color="light" />
          </IslandActionButton>

        </Stack>
      </IslandActionsWrapper>
    </Island>
    
    <IslandDetailDialog island={island} />
    </>
  )
}