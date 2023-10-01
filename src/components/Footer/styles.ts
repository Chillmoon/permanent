import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footerWrapper: {
    position: "relative",
    backgroundColor: "#6F97CC",
    height: 199,
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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
    alignItems: "end",
    flexDirection: "column",
    marginLeft: 100,
    "@media (max-width:550)": {
      marginLeft: "0 !important",
    },

    "&>button": {
      textAlign: "right",
      color: "#FFF",
      fontFamily: `"Open Sans", sans-serif !important`,
      fontWeight: 400,
      textDecoration: "underline",
    },
    "&>div": {
      textTransform: "uppercase",
    },
  },
  notAButton: {
    textDecoration: "none !important",
  },
});

export default useStyles;
