import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexDirection: "column",
    position: "relative",
    marginBottom: 150,
    "@media (max-width:1000px)": {
      height: "100vh",
      padding: 0,
      marginLeft: "7.69%",
      width: "100% !important",
      marginBottom: 0,
    },
  },
  brownBackground: {
    top: 50,
    position: "absolute",
    zIndex: 4,
    width: "100%",
    "@media (max-width:1000px)": {
      width: "115.38%",
      marginTop: "-150px",
    },
  },
  text: {
    marginTop: 160,
    color: "#FFFFFF",
    width: 500,
    zIndex: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontStyle: "italic",
    fontSize: 20,
    fontFamily: `"Exo 2", sans-serif !important`,
    gap: 20,
    textAlign: "center",
    "@media (max-width:1000px)": {
      marginTop: "-650px",
      fontSize: 16,
      width: 330,
    },
  },
  quotes: {
    zIndex: 5,
    position: "absolute",
    left: 330,
    width: 130,
    "@media (max-width:1000px)": {
      top: 0,
      width: 80,
      left: 0,
    },
  },
  quotes2: {
    zIndex: 5,
    position: "absolute",
    transform: "scaleY(-1) scaleX(-1)",
    bottom: 0,
    right: 330,
    width: 130,
    "@media (max-width:1000px)": {
      width: 80,
      right: 0,
      top: 150,
    },
  },
  quotesLine: {
    zIndex: 6,
    position: "absolute",
    top: 100,
    width: 550,
    "@media (max-width:1000px)": {
      width: 350,
      top: "-60px",
    },
  },
  quotesLine2: {
    zIndex: 6,
    position: "absolute",
    top: 450,
    width: 550,
    "@media (max-width:1000px)": {
      width: 350,
      top: 245,
    },
  },
});

export default useStyles;
