import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexDirection: "column",
    position: "relative",
    "@media (max-width:1000px)": {
      height: "100vh",
      padding: 0,
      marginLeft: "7.69%",
      width: "100%",
    },
  },
  brownBackground: {
    top: 50,
    position: "absolute",
    zIndex: 4,
    width: "100%",
  },
  text: {
    marginTop: 190,
    color: "#FFFFFF",
    width: 500,
    zIndex: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontStyle: "italic",
    fontSize: 18,
    fontFamily: `"Exo 2", sans-serif !important`,
    gap: 20,
    textAlign: "center",
  },
  quotes: {
    zIndex: 5,
    position: "absolute",
    left: 330,
    width: 130,
  },
  quotes2: {
    zIndex: 5,
    position: "absolute",
    transform: "scaleY(-1) scaleX(-1)",
    bottom: 0,
    right: 330,
    width: 130,
  },
});

export default useStyles;
