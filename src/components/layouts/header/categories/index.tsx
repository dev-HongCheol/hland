import { Grid } from "@mui/material";
import CategoryItem from "../category-item";

const Categories = () => {
  const categories = ["WOMEN", "MEN", "SHOSE", "BAG&ACC", "LIVING", "BEAUTY"];

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        backgroundColor: "rgba(255,255,255,0.9)",
        borderBottom: "1px solid #e9e8e8",
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      {categories.map((category) => (
        <Grid item key={category}>
          <CategoryItem name={category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;
