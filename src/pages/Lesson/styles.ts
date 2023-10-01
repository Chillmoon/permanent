import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  lessonPageWrapper: {
    display: "flex",
    minHeight: "100vh",
    "@media (max-width:900px)": {
      display: "none",
    },
  },
  smallScreenLessonPage: {
    display: "none",
    "@media (max-width:900px)": {
      display: "flex !important",
      width: "100%",
      height: "100%",

      backgroundColor: "#EBEBEB",
    },
  },
  lessonPageMainBlock: {
    position: "relative",
    paddingLeft: 320,
    marginTop: 64,
    width: "80%",
    display: "flex",
    flexGrow: 1,
    paddingBottom: 30,
    flexDirection: "column",
    alignItems: "left",
    paddingTop: 30,
  },
  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  courseLabel: {
    color: "#004AAD",
    fontWeight: "700 !important",
    display: "flex",
    marginTop: 20,
    justifyContent: "center",
    fontSize: 32,
    maxWidth: 805,
    fontFamily: "'Montserrat', sans-serif !important",
    padding: "0 20px",
  },
  moduleLabel: {
    fontSize: 18,
    color: "#8A8A8A",
  },
  lessonLabel: {
    maxWidth: 805,
  },
  videoPlayerWrapper: {
    marginBottom: 20,
  },
  videoPlayer: {
    // position: "absolute",
    // top: 0,
    // left: 0,
  },
  videoPlayerMobile: {
    width: "100%",
    position: "relative",
    paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
  },
  reactPlayerMobile: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  materialsLabel: {
    fontWeight: 600,
    maxWidth: 640,
    fontSize: 21,
    color: "#000000",
    margintop: 20,
  },
  materials: {
    display: "flex !important",
    flexDirection: "column",
    gap: 10,
  },
  lessonButton: {
    width: 244,
  },
  mobileLessonWrapper: {
    paddingTop: 64,
    width: "100vw",
    height: "100%",
    backgroundColor: "#EBEBEB",
    "& a": {
      textDecoration: "underline",
      fontWeight: "400 !important",
      fontSize: 16,
      color: "#484848 !important",
    },
    "@media (max-width:600px)": {
      paddingTop: 48,
    },
    "@media (max-width:463px)": {
      paddingTop: 56,
    },
  },
  accordionSummary: {
    "&.MuiAccordionSummary-root": {
      flexDirection: "row-reverse",
    },
  },
  accordionLinks: {
    "&:hover": {
      color: "blue !important",
    },
  },
  mobileLessonElement: {
    display: "flex",
    justifyContent: "center",
    width: "100% !important",
    marginBottom: 80,
    padding: "0 20px",
  },
  mobileLessonLabel: {
    fontFamily: "'Montserrat', sans-serif",
    color: "#004AAD",
    fontWeight: 700,
    fontSize: 24,
    paddingTop: 20,
    marginBottom: "20px !important",
  },
  horizontalLine: {
    border: "none",
    borderTop: "1px solid #000000",
    width: "100%",
  },
  mobileLessonAccordion: {
    borderRadius: "16px !important",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    "& .MuiPaper-root": {
      borderRadius: "8px !important",
      "&::before": {
        display: "none",
      },
    },
  },
  mobileLessonAccordionSummary: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 400,
    fontSize: 18,
    overflow: "hidden",
    padding: 5,
    color: "#000000",
    height: "auto",
    background: "#FFFFFF",
    boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.12)",
    borderRadius: "8px !important",
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: "#004AAD",
    },
  },
  mobileLessonAccordionDetails: {
    background: "#FFFFFF",
    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.07)",
    borderRadius: "0px 0px 16px 16px",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "22px",
    color: "rgba(0, 0, 0, 0.5)",
  },
  lessonInfo: {
    marginTop: "16px",
    marginBottom: "32px",
    maxWidth: 805,
    textAlign: "justify",
    marginRight: 40,
    "& > div": {
      marginBottom: "16px",
      "& h6": {
        fontSize: "1.2rem",
        marginBottom: "8px",
        color: "black",
      },
      "& p": {
        fontSize: "1rem",
        lineHeight: 1.6,
        margin: "0",
        color: "black",
      },
    },
  },
  button: {
    marginTop: 20,
    borderRadius: 6,
    border: "2.364px solid #004AAD",
    background: "#FFF",
    padding: "10px 20px",
    color: "#004AAD",
    fontWeight: 700,
    fontFamily: `"Open Sans", sans-serif !important`,
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      cursor: "pointer",
      borderColor: "blue",
      color: "blue",
    },
  },
  fileWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
  },
});

export default useStyles;
