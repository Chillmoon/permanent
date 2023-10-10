import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",

    overflow: "hidden",
    fontFamily: `"Exo 2", sans-serif !important`,
    "@media (max-width:1000px)": {
      margin: "0 20px",
    },
  },
  backgroundDetails: {
    position: "absolute",
    zIndex: 1,
    right: 0,
    top: 0,
    height: "100%",
    transform: "scaleX(1) scaleY(-1);",
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  backgroundDetails1: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    transform: "scaleX(-1) scaleY(1);",
    height: "100%",
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  text: {
    zIndex: 2,
    fontSize: 45,
    fontWeight: 600,
    background: "linear-gradient(104deg, #FFD7BB -10.85%, #FFF 102.7%);",
    backgroundClip: "text",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "@media (max-width:1000px)": {
      fontSize: 40,
      textAlign: "center",
    },
  },
  textSmall: {
    zIndex: 2,
    fontSize: 27,
    marginTop: 30,
    fontWeight: 600,
    background: "linear-gradient(104deg, #FFD7BB -10.85%, #FFF 102.7%);",
    backgroundClip: "text",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    marginBottom: 10,
  },
  textTiny: {
    zIndex: 2,
    fontSize: 14,
    marginTop: 5,
    fontWeight: 600,
    background: "linear-gradient(104deg, #FFD7BB -10.85%, #FFF 102.7%);",
    backgroundClip: "text",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    marginBottom: 10,
    "@media (max-width:1000px)": {
      fontSize: 16,
    },
  },
});

export default useStyles;
