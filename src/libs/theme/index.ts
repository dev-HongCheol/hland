import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#333",
    },
    secondary: {
      main: grey[900],
    },
  },
});

export default muiTheme;
