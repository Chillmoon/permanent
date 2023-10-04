import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    height: "100%",
    width: "auto",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    display: "flex",
    padding: "0 7%",

    "@media (max-width:1000px)": {
      marginBottom: 150,
      padding: 0,
      marginLeft: "7.69%",
      width: "100%",
      paddingBottom: 500,
    },
  },
  blockName: {
    color: "#FFF",
    fontSize: 40,
    fontWeight: 600,
    textTransform: "uppercase",
    marginBottom: 70,
    textAlign: "center",
    "@media (max-width:1000px)": {
      marginBottom: 40,
    },
  },
  mobileWrapper: {
    height: "100%",
  },
  wideWrapper: {
    display: "flex",
    maxWidth: "100vw !important",
  },
  photo: {
    position: "absolute",
    left: 100,
    top: 1550,
    width: 500,
    transform: "scaleX(-1)",
    zIndex: 2,
    "@media (max-width:1000px)": {
      top: 3970,
      left: 0,
      transform: "scaleX(1)",
      width: 400,
    },
  },
  lightPhoto: {
    position: "absolute",
    left: 70,
    top: 1500,
    width: 500,
    zIndex: 1,
    "@media (max-width:1000px)": {
      top: 3870,
      left: 20,
      width: 400,
    },
  },
  list: {
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 40,
    "&>li": {
      color: "#FFF1E8",
      fontFamily: `"Exo 2", sans-serif !important`,
      fontSize: 16,
      fontWeight: 200,
      listStyle: "none",
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
    },
  },
  icon: {
    width: 20,
    marginRight: 10,
    "@media (max-width:1000px)": {
      marginRight: 15,
    },
  },
  bottle: {
    position: "absolute",
    top: 1550,
    right: 0,
    width: 250,
    zIndex: 1,
    "@media (max-width:1000px)": {
      top: 2150,
      right: "-70px",
    },
  },
  lightBottle: {
    position: "absolute",
    top: 1550,
    right: 0,
    width: 250,
    zIndex: 2,
    "@media (max-width:1000px)": {
      top: 2150,
      right: "-70px",
    },
  },
  blob: {
    display: "none",
    "@media (max-width:1000px)": {
      display: "flex",
      position: "absolute",
      top: 3200,
      width: 70,
      right: "-70px",
    },
  },
  ribbon: {
    position: "absolute",
    top: 1720,
    left: 35,
    width: 600,
    zIndex: 1,
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
});

export default useStyles;
