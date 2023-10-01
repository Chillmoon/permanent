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
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.07);",
    textDecoration: "none",
    color: "#000000",
    fontWeight: "400 !important",

    "& :visited": {
      color: "#000000",
    },
    "&>a": {
      color: "blue",
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
    marginTop: "150px !important",
    marginBottom: "20px !important",
    marginLeft: "20px !important",
    fontWeight: 400,
    fontSize: "20px !important",
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
    width: 100,
  },
});

export default useStyles;
