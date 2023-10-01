import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  homePageWrapper: {
    display: "flex",
  },
  homePageMainBlockTitle: {
    marginBottom: "50px !important",
    fontFamily: "'Montserrat', sans-serif !important",
    fontSize: "30px !important",
    fontWeight: "700 !important",
    color: "rgba(0, 0, 0, 0.7)",
  },
  coursePageMobile: {
    display: "none",
    "@media (max-width:900px)": {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      width: "100vw",
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
  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  myCoursePageWideScreen: {
    display: "block",
    "@media (max-width:900px)": {
      display: "none",
    },
  },
  myCoursePageSmallScreen: {
    "@media (min-width:900px)": {
      display: "none",
    },
  },
});

export default useStyles;
