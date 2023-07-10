import { Container, Grid, styled } from "@mui/material";
import { DefaultLayoutProps } from "./data";
import Header from "../header/Header";

const DefaultLayoutStyle = styled(Container)({
  paddingRight: "0 !important",
  paddingLeft: "0 !important",
  minWidth: "1200px !important",
});

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <DefaultLayoutStyle maxWidth="xl">
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item id="content">
          {children}
        </Grid>
      </Grid>
    </DefaultLayoutStyle>
  );
};

export default DefaultLayout;
