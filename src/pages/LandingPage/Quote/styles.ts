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
      height: "331px",
      padding: 0,
      width: "100% !important",
      justifyContent: "center",
      marginBottom: 50,
    },
  },
  brownBackground: {
    top: 50,
    position: "absolute",
    zIndex: 4,
    width: "100%",
    "@media (max-width:1000px)": {
      width: "calc(100% + 40px)",
      top: 0,
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
      fontSize: 16,
      width: "100%",
      marginTop: 0,
    },
  },
  quotes: {
    zIndex: 5,
    position: "absolute",
    left: 330,
    width: 130,
    "@media (max-width:1000px)": {
      top: 30,
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
      bottom: 30,
    },
  },
  quotesLine: {
    zIndex: 6,
    position: "absolute",
    top: 100,
    width: 550,
    "@media (max-width:1000px)": {
      width: "100%",
      top: 20,
    },
  },
  quotesLine2: {
    zIndex: 6,
    position: "absolute",
    top: 450,
    width: 550,
    "@media (max-width:1000px)": {
      width: "100%",
      top: "90%",
    },
  },
});

export default useStyles;
