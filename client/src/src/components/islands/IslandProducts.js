import { Island, IslandActionsWrapper, IslandFavButton, IslandImage, } from "../../styles/islands";
import IslandMeta from "./IslandMeta";
import { Stack } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import FitScreenIcon from '@mui/icons-material/FitScreen';

export default function IslandProducts({island, matches}) {

  return (
    <Island>
      <IslandImage src={island.image} />
      <IslandMeta island={island} matches={matches}/>
      <IslandActionsWrapper>
        <Stack direction="column">
          <IslandFavButton isFav={0}>
            <FavoriteIcon />
          </IslandFavButton>
        </Stack>
      </IslandActionsWrapper>
    </Island>
  )
}