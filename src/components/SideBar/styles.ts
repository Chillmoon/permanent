import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  sideBarWrapper: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    zIndex: 1300,
    width: 250,
    height: "100%",
    overflowY: "auto",
    paddingLeft: 25,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.07);",
    textDecoration: "none",
    color: "#FFF",
    background:
      "var( --BG_ALL, linear-gradient(17deg, #292929 -10.12%, #38281d 66.27%))",
    fontWeight: "400 !important",

    "& :visited": {
      color: "#FFF",
    },
    "&>a": {
      color: "#FFF",
    },

    "&::-webkit-scrollbar": {
      width: "0.5em",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,0)",
      borderRadius: "1em",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "rgba(0,0,0,0)",
    },
  },
  sideBarMenu: {},
  sideBarCourseName: {
    marginTop: "100px !important",
    marginBottom: "20px !important",
    marginLeft: "20px !important",
    fontWeight: 400,
    fontSize: "20px !important",
    fontFamily: `"Noto Serif", sans-serif !important`,
  },
  sideBarTitle: {
    position: "absolute",
    display: "flex",
    zIndex: 1500,
    left: 50,
    top: 16,
    padding: 0,
    textDecoration: "none ",
  },
  logo: {
    marginTop: 10,
    width: 130,
  },
});

export default useStyles;
