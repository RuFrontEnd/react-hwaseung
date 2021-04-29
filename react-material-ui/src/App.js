import { useEffect, useState } from "react";
import "./App.css";
import {
  withStyles,
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import facebook from "static/facebook.png";
import line from "static/line.png";
import hamburger from "static/hamburger.png";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 576,
      sm: 768,
      md: 991,
      lg: 1440,
      xl: 1920,
    },
  },
}); // customized breakpoints

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 24,
  },
}))(TableCell); // table cell style

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "#EEEEEE",
  },
}))(TableRow); // table  row style

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
} // table item name

const rows = [
  createData("ID", "日期", "事件", "刪除"),
  createData("01", "08/14", "文案一", <Button variant="outlined">按鈕</Button>),
  createData("02", "02/14", "文案二", <Button variant="outlined">按鈕</Button>),
  createData("03", "01/12", "文案三", <Button variant="outlined">按鈕</Button>),
]; // table content

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  navBarContainer: {
    paddingRight: "0px",
    paddingLeft: "0px",
  },
  logo: {
    fontSize: "80px",
  },
  navBarWarp: {
    marginBottom: 60,
    paddingRight: 130,
    paddingLeft: 130,
    paddingTop: 18,
    paddingBottom: 6,
    ["@media (max-width:1440px)"]: {
      paddingRight: 25,
      paddingLeft: 25,
    },
  },
  OperatingContainer: {
    paddingTop: "30px",
    ["@media (max-width:991px)"]: {
      display: "none",
    },
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  logIn: {
    padding: "5px 15px",
    backgroundColor: "black",
    color: "white",
    fontSize: 14,
  },
  navigationContainer: {
    marginTop: 16,
  },
  navigation: {
    padding: "0px 20px",
    borderLeft: "1px solid black",
    cursor: "pointer",
  },
  navigationLast: {
    position: "relative",
    padding: "0px 20px",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    cursor: "pointer",
  },
  navigationLastSelector: {
    color: "white",
    position: "absolute",
    top: 45,
    left: 0,
    padding: "10px 28px",
  },
  navigationLastOption: {
    margin: "10px 0px",
  },
  hamburgerContainer: {
    display: "none",
    ["@media (max-width:991px)"]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  circleContainer: {
    marginBottom: "60px",
  },
  circleItem: {
    color: "black",
    fontSize: "24px",
    border: "1px solid black",
    borderRadius: "50%",
  },
  tableContainer: {
    marginBottom: "48px",
    padding: "54px 80px",
    ["@media (max-width:1440px)"]: {
      paddingRight: "25px",
      paddingLeft: "25px",
    },
  },
  table: {
    minWidth: 700,
  },
  firstRow: {
    width: 58,
  },
  secondRow: {
    width: 133,
  },
  thirdRow: {
    width: 100,
    paddingRight: 800,
  },
  card: {
    maxWidth: 220,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 27,
    marginRight: 27,
  },

  introductionContainer: {
    paddingRight: "50px",
    paddingLeft: "110px",
    ["@media (max-width:1440px)"]: {
      paddingRight: "25px",
      paddingLeft: "25px",
    },
  },
  articleContainer: {
    height: "100%",
    padding: "25px 25px",
    boxSizing: "border-box",
    ["@media (max-width:1280px)"]: {
      paddingRight: "10px",
      paddingLeft: "10px",
    },
  },
  articleTitle: {
    fontSize: 50,
    marginBottom: 20,
  },
  footer: {
    marginTop: "48px",
    padding: "40px 0px",
  },
}));

function App() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [isShowSelection, setIsShowSelection] = useState(false);
  const [navigationHoverStatusA, setNavigationHoverStatusA] = useState(false);
  const [navigationHoverStatusB, setNavigationHoverStatusB] = useState(false);
  const [navigationHoverStatusC, setNavigationHoverStatusC] = useState(false);
  const [navigationHoverStatusD, setNavigationHoverStatusD] = useState(false);
  const [navigationHoverStatusE, setNavigationHoverStatusE] = useState(false);
  const getData = () => {
    axios
      .post("http://multipleproduct.wacocolife.com/api/gallery/showClient/1")
      .then((res) => {
        console.log(res);
        const items = res.data.items;
        const _data = items.map((item) => ({
          id: item.id,
          title: item.title,
          url: `https://multipleproduct.wacocolife.com${item.url}`,
          alt: item.alt,
          note: { __html: item.note },
        }));
        setData(_data);
      });
  }; // fetch data

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <MuiThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Container maxWidth="xl" className={classes.navBarContainer}>
          <Box
            w={1}
            display="flex"
            justifyContent="space-between"
            bgcolor="#EEEEEE"
            className={classes.navBarWarp}
          >
            <Box className={classes.logo}>LOGO</Box>
            <Box className={classes.OperatingContainer}>
              <Box display="flex" justifyContent="flex-end" alignItems="center">
                <Avatar
                  className={classes.avatar}
                  variant="square"
                  src={facebook}
                ></Avatar>
                <Box>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={line}
                  ></Avatar>
                </Box>
                <Box className={classes.logIn}>登入</Box>
              </Box>
              <Box className={classes.navigationContainer} display="flex">
                <Box
                  className={classes.navigation}
                  style={
                    navigationHoverStatusA
                      ? { color: "#00B6C4" }
                      : { color: "black" }
                  }
                  onMouseMove={() => {
                    setNavigationHoverStatusA(true);
                  }}
                  onMouseLeave={() => {
                    console.log("a");
                    setNavigationHoverStatusA(false);
                  }}
                >
                  首頁
                </Box>
                <Box
                  className={classes.navigation}
                  style={
                    navigationHoverStatusB
                      ? { color: "#00B6C4" }
                      : { color: "black" }
                  }
                  onMouseMove={() => {
                    setNavigationHoverStatusB(true);
                  }}
                  onMouseLeave={() => {
                    setNavigationHoverStatusB(false);
                  }}
                >
                  關於我們
                </Box>
                <Box
                  className={classes.navigation}
                  style={
                    navigationHoverStatusC
                      ? { color: "#00B6C4" }
                      : { color: "black" }
                  }
                  onMouseMove={() => {
                    setNavigationHoverStatusC(true);
                  }}
                  onMouseLeave={() => {
                    setNavigationHoverStatusC(false);
                  }}
                >
                  最新消息
                </Box>
                <Box
                  className={classes.navigation}
                  style={
                    navigationHoverStatusD
                      ? { color: "#00B6C4" }
                      : { color: "black" }
                  }
                  onMouseMove={() => {
                    setNavigationHoverStatusD(true);
                  }}
                  onMouseLeave={() => {
                    setNavigationHoverStatusD(false);
                  }}
                >
                  服務項目
                </Box>
                <Box
                  className={classes.navigationLast}
                  style={
                    navigationHoverStatusE
                      ? { color: "#00B6C4" }
                      : { color: "black" }
                  }
                  onMouseMove={() => {
                    setNavigationHoverStatusE(true);
                    setIsShowSelection(true);
                  }}
                  onMouseLeave={() => {
                    setNavigationHoverStatusE(false);
                    setIsShowSelection(false);
                  }}
                >
                  Q&A活動
                  {isShowSelection && (
                    <Box
                      bgcolor={"black"}
                      className={classes.navigationLastSelector}
                    >
                      <Typography className={classes.navigationLastOption}>
                        問題一
                      </Typography>
                      <Typography className={classes.navigationLastOption}>
                        問題二
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
            <Box className={classes.hamburgerContainer}>
              <Avatar
                className={classes.avatar}
                variant="square"
                src={hamburger}
              ></Avatar>
            </Box>
          </Box>
        </Container>
        <Container maxWidth="lg">
          <Grid container spacing={3} className={classes.circleContainer}>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <Box
                className={classes.paper}
                display="flex"
                justifyContent="center"
              >
                <Box
                  width={230}
                  height={230}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.circleItem}
                >
                  項目一
                </Box>
              </Box>
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <Box
                className={classes.paper}
                display="flex"
                justifyContent="center"
              >
                <Box
                  width={230}
                  height={230}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.circleItem}
                >
                  項目二
                </Box>
              </Box>
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <Box
                className={classes.paper}
                display="flex"
                justifyContent="center"
              >
                <Box
                  width={230}
                  height={230}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.circleItem}
                >
                  項目三
                </Box>
              </Box>
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <Box
                className={classes.paper}
                display="flex"
                justifyContent="center"
              >
                <Box
                  width={230}
                  height={230}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.circleItem}
                >
                  項目四
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box bgcolor={"#EEEEEE"}>
          <Container maxWidth="lg" className={classes.tableContainer}>
            <Grid container spacing={3}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <TableContainer
                  component={Paper}
                  style={{ border: "1px solid black" }}
                >
                  <Table
                    className={classes.table}
                    aria-label="customized table"
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>項目</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            className={classes.firstRow}
                          >
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell
                            align="left"
                            className={classes.secondRow}
                          >
                            {row.calories}
                          </StyledTableCell>
                          <StyledTableCell
                            align="left"
                            className={classes.thirdRow}
                          >
                            {row.fat}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.carbs}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container maxWidth="lg" className={classes.introductionContainer}>
          <Grid container spacing={3}>
            <Grid item xl={8} lg={8} md={7} sm={12} xs={12}>
              <Box
                className={classes.introductionWarp}
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
              >
                {data.map((dataItem) => (
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        image={dataItem.url}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {dataItem.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <span dangerouslySetInnerHTML={dataItem.note} />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </Box>
            </Grid>
            <Grid item xl={4} lg={4} md={5} sm={12} xs={12}>
              <Box
                className={classes.articleContainer}
                display="flex"
                justifyContent="center"
              >
                <Box
                  style={{
                    border: "1px solid black",
                    paddingLeft: 31,
                    paddingRight: 31,
                    paddingTop: 38,
                    paddingBottom: 38,
                    textAlign: "left",
                    width: 350,
                    boxSizing: "border-box",
                  }}
                >
                  <Typography className={classes.articleTitle}>標題</Typography>
                  <Typography>
                    介紹介紹介紹介紹介紹介紹介紹介紹
                    介紹介紹介紹介紹介紹介紹介紹介紹
                    介紹介紹介紹介紹介紹介紹介紹介紹
                    介紹介紹介紹介紹介紹介紹介紹介紹 介紹介紹介紹介紹介紹
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="xl"
          style={{
            paddingRight: "0px",
            paddingLeft: "0px",
          }}
        >
          <Box
            className={classes.footer}
            width={1}
            bgcolor="#EEEEEE"
            display="flex"
            justifyContent="center"
          >
            Footer
          </Box>
        </Container>
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
