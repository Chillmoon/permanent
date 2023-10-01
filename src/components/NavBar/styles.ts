import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navBar: {
    display: "flex",
    position: "fixed",
    top: 0,
    backgroundColor: "transparent !important",
    lineHeight: "28.6px",
    boxShadow: "none !important",
    textDecoration: "none",
    textTransform: "uppercase",
    color: "#000000",
    fontWeight: "400 !important",

    "& :visited": {
      color: "#000000",
    },
  },
  navBarTitle: {
    position: "absolute",
    display: "flex",
    zIndex: 1500,
    left: 50,
    padding: 0,
    textDecoration: "none ",
    "@media (max-width:600px)": {
      left: "15%",
    },
    "@media (max-width:376px)": {
      left: "5%",
    },
  },
  link: {
    flexDirection: "row",
    display: "flex",
    "&>a": {
      fontSize: 16,
      textDecoration: "none",
      color: "#000000",
    },
  },
  linkPages: {
    position: "absolute",
    left: 400,
    top: 20,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    "&>a": {
      fontSize: 16,
      textDecoration: "none",
      color: "#000000",
    },
    "@media (max-width:900px)": {
      left: "50%",
    },
    "@media (max-width:600px)": {
      left: "35%",
      top: 17,
    },
    "@media (max-width:450px)": {
      display: "none",
    },
  },
  menu: {
    display: "none",
    position: "absolute",
    right: "2%",
    color: "#000000",
    "@media (max-width:450px)": {
      display: "flex",
    },
  },
  menuLink: {
    textDecoration: "none !important",
    color: "#000000",
    fontSize: 16,
    "&>a": {
      textDecoration: "none !important",
    },
    "& :visited": {
      color: "#000000",
    },
  },
  linkWrapper: {
    flexDirection: "row",
    display: "flex",
    gap: 100,
    justifyContent: "space-between",
  },
  avatar: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 50,
    "@media (max-width:600px)": {
      right: "10%",
    },
    "@media (max-width:450px)": {
      display: "none",
    },
  },
  logo: {
    marginTop: 50,
    width: 200,
  },
});

export default useStyles;
