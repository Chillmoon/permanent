import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",

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
    maxWidth: 800,
    textAlign: "center",
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
  buttonWrapper: {
    position: "relative",
    marginTop: 20,
    height: 120,
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    bottom: 50,
    background:
      "var(--BTN_MAIN, radial-gradient(29.03% 41.72% at 50% 99.35%, #EDC9AF 0.02%, #CCA081 47.92%, #BA7441 100%))",
    padding: "19px 25px 18px 25px",
    borderRadius: 15,
    border: "none",
    color: "#FFF",
    borderBottom: "5px solid #482B19",
    width: 250,
    zIndex: 1000,
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 18,

    "&:hover": {
      marginTop: 22,
      cursor: "pointer",
      borderBottom: "none",
      filter: "drop-shadow(0px 0px 40px #B7703D)",
      transition: "all 0.3s ease",
      background:
        "radial-gradient(69.13% 99.35% at 50% 99.35%, #EDC9AF 0.02%, #CCA081 47.92%, #BA7441 100%)",
    },
    boxShadow: "0 0 25.5px rgba(183, 112, 61, 0.11)",
  },
});

export default useStyles;
