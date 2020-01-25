import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {
  makeStyles,
  createStyles,
  useTheme,
} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Fab from "@material-ui/core/Fab";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      flexGrow: 1,
      margin: "4vw"
    },
    root: {
      border: "7px solid",
      "border-color": red[500],
      "border-radius": "8px",
      width: "fit-content"
    },
    btns: {
      position: "absolute",
      top: "8%"
    }
  })
);

const TestCardDisplay = () => {
  const classes = useStyles(useTheme());
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.main}>
        <Paper elevation={3}>
          <Grid container spacing={3}>
            <Grid item xs={1}>
              <Fab
                className={classes.btns}
                size="small"
              >
                <ArrowBackIosIcon />
              </Fab>
            </Grid>
            <Grid item xs={5}>
              <Container className={classes.root} fixed>
                <h2>Title</h2>
              </Container>
            </Grid>

            <Grid item xs={5}>
              <Container className={classes.root} fixed>
                <h2>Title</h2>
              </Container>
            </Grid>
            <Grid item xs={1}>
              <Fab
                className={classes.btns}
                size="small"
              >
                <ArrowForwardIosIcon />
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </React.Fragment>
  );
}

export default TestCardDisplay;