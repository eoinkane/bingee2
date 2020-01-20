import React from "react";

import { BrowserRouter } from "react-router-dom";

import classNames from "classnames";

import {
  createMuiTheme,
  createStyles,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
  Theme
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import PaddedDivider from "./UI/CustomDivider/CustomDivider";

import "./App.css";

import ResponsiveDrawer2 from "./UI/ResponsiveDrawer/ResponsiveDrawer2";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#b0ff57",
      main: "#76ff03",
      dark: "32cb00",
      contrastText: "#000000"
    },
    secondary: {
      light: "#ffff72",
      main: "#ffeb3b",
      dark: "#c8b900",
      contrastText: "#000000"
    }
  }
});

theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ResponsiveDrawer2>
          {/* start screen content */}
          <Typography paragraph>
            Text1 Lorem Ipsum etac vinae Lorem Ipsum etac vinae Lorem Ipsum etac vinae 
            Lorem Ipsum etac vinae Lorem Ipsum etac vinae Lorem Ipsum etac vinae  
          </Typography>
          <PaddedDivider width={75} />
          <Typography paragraph>Text2</Typography>
          <PaddedDivider />
          {/* stop */}
      </ResponsiveDrawer2>
      </div>
    </ThemeProvider>
  );
};

export default App;
