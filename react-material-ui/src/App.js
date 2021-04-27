import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const theme = createMuiTheme({
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xs: 576,
      sm: 768,
      md: 1280,
      lg: 1440,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: "pink",
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  circleContainer: {
    border: "1px solid black",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <div
          style={{
            width: "100%",
            backgroundColor: "pink",
            marginBottom: "60px",
          }}
        >
          header
        </div>
        <Container
          maxWidth="lg"
          // style={{
          //   paddingRight: "65px",
          //   paddingLeft: "65px",
          // }}
        >
          <Grid container spacing={3} style={{ marginBottom: "60px" }}>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <div
                className={classes.paper}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{
                    border: "1px solid black",
                    width: "230px",
                    height: "230px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  項目一
                </div>
              </div>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <div
                className={classes.paper}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{
                    border: "1px solid black",
                    width: "230px",
                    height: "230px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  項目二
                </div>
              </div>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <div
                className={classes.paper}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{
                    border: "1px solid black",
                    width: "230px",
                    height: "230px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  項目三
                </div>
              </div>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <div
                className={classes.paper}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{
                    border: "1px solid black",
                    width: "230px",
                    height: "230px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  項目四
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="lg"
          style={{ paddingRight: "80px", paddingLeft: "80px" }}
        >
          <Grid container spacing={3}>
            <Grid item xl={12} lg={12} md={12} sm={12}>
              <div className={classes.paper}>項目</div>
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="lg"
          style={{ paddingRight: "80px", paddingLeft: "80px" }}
        >
          <Grid container spacing={3}>
            <Grid item xl={9} lg={9} md={9} sm={9}>
              <div className={classes.paper}>JPG</div>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3}>
              <div className={classes.paper}>標題</div>
            </Grid>
          </Grid>
        </Container>
        <div style={{ width: "100%", backgroundColor: "pink" }}>footer</div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
