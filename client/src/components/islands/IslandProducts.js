import IslandMeta from "./IslandMeta";
import { Stack } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { useState } from 'react';
import useDialogModal from "../../hooks/useDialogModal";
import useCart from "../../hooks/useCart";
import IslandDetail from "../islanddetails"
import { Island, 
  IslandActionButton, 
  IslandActionsWrapper, 
  IslandAddToCart, 
  IslandFavButton, 
  IslandImage, } from "../../styles/islands";

export default function IslandProducts({island, matches}) {

  const [IslandDetailDialog, showIslandDetailDialog, closeIslandDetailDialog] = useDialogModal(IslandDetail);

  const { addToCart, addToCartText } = useCart(island)

  const [showOptions, setShowOptions] = useState(false);

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
      <IslandMeta island={island} matches={matches} />
      <IslandFavButton isFav={0}>
        <FavoriteIcon />
      </IslandFavButton>
        
      {showOptions && <IslandAddToCart 
      show={showOptions} 
      variant="outlined"
      style={{ color: 'black',
      position: 'relative',
      top: 0,
      right: 0,
      zIndex: 2,
    }}
      >Add to cart </IslandAddToCart>}

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
    <IslandDetailDialog island={island}/>
    </>
  )
}