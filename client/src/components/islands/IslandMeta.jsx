import { Typography } from "@mui/material"
import { IslandMetaWrapper } from "../../styles/islands"

export default function IslandMeta({ island, matches}) {

  return (
    <IslandMetaWrapper>
      <Typography variant= {matches ? "h6" : "h5"} lineHeight={2}>
      {island.name}
      </Typography>

      <Typography variant= {matches ? 'caption' : 'body1'}>
      ${island.price}
      </Typography>

    </IslandMetaWrapper>
  )
}
