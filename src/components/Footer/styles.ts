import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footerWrapper: {
    position: "relative",
    backgroundColor: "transparent",
    height: "100%",
    color: "white",
    display: "flex",
    flexDirection: "row",
    bottom: 0,
    justifyContent: "space-between",

    alignItems: "center",
    padding: "0 7%",
    marginBottom: 20,
  },
  mobileWrapper: {
    marginTop: 50,
    marginBottom: 21,
  },
  linksWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    "&>a>svg": {
      color: "#FFF",
      width: 33,
      height: 32,
    },
    "@media (max-width:1000px)": {
      justifyContent: "end",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    "&>button": {
      textAlign: "right",
      backgroundImage: "linear-gradient(104deg, #ffd7bb -10.85%, #fff 102.7%)",
      "-webkit-background-clip": "text",
      color: "transparent",
      fontFamily: `"Noto Serif", sans-serif !important`,
      fontWeight: 400,
      textTransform: "none !important",
    },
  },
  downloadWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",

    fontSize: 21,
    "@media (max-width:1000px)": {
      marginBottom: 22,
      flexDirection: "column",
    },

    "&>button": {
      textAlign: "right",
      backgroundImage: "linear-gradient(104deg, #ffd7bb -10.85%, #fff 102.7%)",
      "-webkit-background-clip": "text",
      color: "transparent",
      fontFamily: `"Noto Serif", sans-serif !important`,
      fontWeight: 400,
      textTransform: "none !important",
    },
  },
  notAButton: {
    textDecoration: "none !important",
    width: 180,
  },
});

export default useStyles;
