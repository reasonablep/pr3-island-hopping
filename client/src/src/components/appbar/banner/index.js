import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitile } from "../../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BannerContainer>
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6">Your own private getaway starts here!</Typography>
        <BannerTitile variant="h2">
        </BannerTitile>
        
        <BannerDescription variant="subtitle">
        Welcome to Prime Isle Estate, where dreams of owning a piece of paradise become reality. Explore our curated collection of exclusive luxury islands, each embodying a world of leisure, tranquility, and unparalleled beauty. Whether you seek a private sanctuary, a tropical retreat, or an investment in natural splendor, our portfolios await your discovery. Elevate your lifestyle, embrace the extraordinary – your private island sanctuary begins here.
        </BannerDescription>

      </BannerContent>
    </BannerContainer>
  )
}