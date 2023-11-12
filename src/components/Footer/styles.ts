import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footerWrapper: {
    position: "relative",
    backgroundColor: "#2D2927",
    height: "100%",
    color: "white",
    display: "flex",
    flexDirection: "row",
    bottom: 0,
    zIndex: 10,
    justifyContent: "space-between",
    paddingTop: 11,
    alignItems: "center",
    padding: "0 20px",
    marginBottom: 20,
  },

  footerWrapperTransparent: {
    position: "relative",
    backgroundColor: "transparent",
    height: "100%",
    color: "white",
    display: "flex",
    flexDirection: "row",
    bottom: 0,
    zIndex: 10,
    justifyContent: "space-between",
    paddingTop: 11,
    alignItems: "center",
    padding: "0 20px",
    marginBottom: 20,
  },

  footerWrapperSidebar: (props: { courseId: string }) => ({
    position: "relative",
    backgroundColor: props.courseId === "fastEyeliner" ? "#2D2927" : "#120F0D",
    height: "100%",
    color: "white",
    display: "flex",
    flexDirection: "row",
    bottom: 0,
    zIndex: 10,
    justifyContent: "space-between",
    marginLeft: 200,
    alignItems: "center",
    padding: "0 7%",
    marginBottom: 20,
  }),
  mobileWrapper: {
    marginBottom: 21,
    padding: "20px 20px 0px 20px",
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
      marginBottom: 7,
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
    display: "flex",
  },
});

export default useStyles;
