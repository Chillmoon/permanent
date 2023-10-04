import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  lessonPageWrapper: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#FFF",
    "@media (max-width:900px)": {
      display: "none",
    },
  },
  smallScreenLessonPage: {
    display: "none",
    "@media (max-width:900px)": {
      display: "flex !important",

      height: "100%",
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
    color: "#FFFFFF",
    fontWeight: "700 !important",
    display: "flex",
    marginTop: 20,
    justifyContent: "center",
    fontSize: 32,
    maxWidth: 805,
    fontFamily: `"Noto Serif", sans-serif !important`,
    padding: "0 20px",
  },
  moduleLabel: {
    fontSize: "18px !important",
    fontWeight: "700 !important",
    color: "rgba(117, 73, 41, 0.50)",
    fontFamily: `"Noto Serif", sans-serif !important`,
  },
  lessonLabel: {
    maxWidth: 805,
    color: "#3B2616",
    fontFamily: `"Noto Serif", sans-serif !important`,
    fontWeight: "700 !important",
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
    marginTop: 80,

    marginLeft: "6%",
    height: "100%",
    backgroundColor: "transparent",
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
    fontFamily: `"Noto Serif", sans-serif !important`,
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: 24,
    paddingTop: 20,
    marginBottom: "20px !important",
  },
  horizontalLine: {
    border: "none",
    borderTop: "1px solid #FFF",
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
    fontFamily: `"Exo 2", sans-serif !important`,
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
    display: "flex",
    padding: "0px 32px  !important",
  },
  lessonInfo: {
    marginTop: "16px",
    marginBottom: "32px",
    maxWidth: 805,
    textAlign: "justify",

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
    border: "none",
    background: "#FFF",
    padding: 0,
    color: "#B7703D",
    fontWeight: 700,
    textAlign: "left",
    fontFamily: `"Exo 2", sans-serif !important`,
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
      color: "#38281D",
    },
  },
  saveIcon: {
    width: 14,
    marginRight: 5,
  },
  fileWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
  },
});

export default useStyles;
