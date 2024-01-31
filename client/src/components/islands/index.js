import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { islands } from "../../data";
import IslandProducts from "./IslandProducts";
import IslandProductsDesktop from "./IslandProductsDesktop";

export default function Islands() {

  const theme = useTheme ();
  const matches = 
    useMediaQuery(theme.breakpoints.down("md"));

  const renderIslands = islands.map(island => (
    <Grid item key = {island.id} 
    xs={2}
    sm={4}
    md={6}
    display={"flex"} flexDirection={"column"} alignItems={"center"}>
      {matches ? (
      <IslandProducts  island={island} matches={matches}/> )
      : <IslandProductsDesktop island={island} matches={matches}/>}
    </Grid>
  ));
  
  return (
    <Container>
      <Grid container 
        spacing={{ xs:2, md: 3}}
      justifyContent={"center"} 
        sx={{margin: '20px 4px 10px 4px'}}
        columns={{xs: 4, sm: 8, md: 12}}
      >
        {renderIslands}
      </Grid>
    </Container>
  );
}
