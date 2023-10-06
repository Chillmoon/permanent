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
  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    width: "100%",
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
});

export default useStyles;
