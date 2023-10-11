import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  backgroundDetails: {
    position: "absolute",
    zIndex: 1,
    right: 0,
    top: 0,
    height: "100%",
    transform: "scaleX(1) scaleY(-1);",
  },
  backgroundDetails1: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    transform: "scaleX(-1) scaleY(1);",
    height: "100%",
  },
  homePageWrapper: {
    display: "flex",
  },
  homePageMainBlockTitle: {
    marginBottom: "50px !important",
    fontFamily: "'Montserrat', sans-serif !important",
    fontSize: "30px !important",
    fontWeight: "700 !important",
    color: "#FFF",
  },
  coursePageMobile: {
    display: "none",
    "@media (max-width:1000px)": {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      width: "100%",
      height: "100vh",
      paddingTop: 100,
    },
  },
  homePageMainBlock: {
    position: "relative",
    paddingLeft: 360,
    marginTop: 134,
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  homePageMainBlockWithoutSidebar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  myCoursePageWideScreen: {
    display: "block",
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  myCoursePageSmallScreen: {
    "@media (min-width:1000px)": {
      display: "none",
    },
  },
  cardWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    zIndex: 7,
    gap: 20,
    "@media (max-width:1000px)": {
      gap: 40,
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background:
      "var(--BG_PODL, linear-gradient(141deg, #FFE1E1 -1.82%, #FFEBDC 86.55%))",

    width: 280,
    height: 220,
    borderRadius: 16,
    padding: "20px 35px",
  },
  cardName: {
    fontSize: 40,
    textAlign: "center",
    lineHeight: "106%",
    fontWeight: 900,
    color: "#3B2616",
    marginBottom: 10,
  },
  courseDescription: {
    color: "#3B2616",
    textAlign: "center",
  },
  button: {
    position: "relative",
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
    marginTop: 20,
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
    "@media (max-width:1000px)": {
      marginBottom: 0,
    },
  },
  coursePlaceholder: {
    width: 280,
    height: 220,
    borderRadius: 16,
    padding: "20px 35px",
    background:
      "linear-gradient(141deg, rgba(255, 225, 225, 0.03) -1.82%, rgba(255, 235, 220, 0.03) 86.55%)",

    "&>div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      color: "rgba(255, 255, 255, 0.20)",
      fontFamily: "Noto Serif",
      fontSize: 47,
      fontWeight: 600,
      letterSpacing: "3.42px",
      textTransform: "uppercase",
    },
  },
  blockTitle: {
    fontFamily: `"Noto Serif", sans-serif !important`,
    textTransform: "uppercase",
    fontSize: 36,
    lineHeight: "46px",
    fontWeight: "600 !important",
    marginBottom: "40px !important",
    paddingTop: "70px",
    color: "#FFF",
    zIndex: 7,
    "@media (max-width:600px)": {
      fontSize: 28,
      "@media (max-width:1000px)": {
        paddingTop: 0,
      },
    },
  },
});

export default useStyles;
