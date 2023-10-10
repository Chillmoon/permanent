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
      marginBottom: 100,
      padding: 0,
      width: "100% !important",
      paddingBottom: 500,
      position: "relative",
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
      fontSize: 34,
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
      top: "64%",
      left: 0,
      transform: "scaleX(1)",
      width: "100%",
    },
  },
  lightPhoto: {
    position: "absolute",
    left: 70,
    top: 1500,
    width: 500,
    zIndex: 1,
    "@media (max-width:1000px)": {
      top: "60%",
      width: "80%",
      left: 25,
    },
  },
  list: {
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 40,
    "&>li": {
      color: "#C3B1A4",
      gap: 16,
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

  blob: {
    display: "none",
    "@media (max-width:1000px)": {
      display: "flex",
      position: "absolute",
      top: "10%",
      width: 70,
      right: 0,
      zIndex: 10,
      marginRight: "-20px",
    },
  },
});

export default useStyles;
