import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footerWrapper: {
    position: "relative",
    backgroundColor: "transparent",
    height: 100,

    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 7%",
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
  },
  downloadWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",

    fontSize: 21,
    "@media (max-width:550)": {
      marginLeft: "0 !important",
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
