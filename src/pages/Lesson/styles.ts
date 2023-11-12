import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  lessonPageWrapper: {
    display: "flex",
    position: "relative",
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
    zIndex: 2,
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
    zIndex: 2,
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
    zIndex: 2,
    fontSize: "18px !important",
    fontWeight: "700 !important",
    color: "rgba(117, 73, 41, 0.50)",
    fontFamily: `"Noto Serif", sans-serif !important`,
  },
  lessonLabel: {
    zIndex: 2,
    maxWidth: 805,
    color: "#3B2616",
    fontFamily: `"Noto Serif", sans-serif !important`,
    fontWeight: "700 !important",
  },
  videoPlayerWrapper: {
    marginBottom: 20,
    zIndex: 2,
  },
  videoPlayer: {
    zIndex: 2,
    position: "relative",
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
    zIndex: 2,
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
  textTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 20,
  },
  backgroundDetails: {
    position: "absolute",
    zIndex: 0,
    right: 0,
    top: 0,
    height: "100%",
    transform: "scaleX(-1) scaleY(-1);",
  },
  mobileLessonWrapper: {
    marginTop: 80,
    width: "100%",
    backgroundRepeat: "repeat",
    backgroundImage: "url('../../assets/mobileDetails.svg')",
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
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    width: "100% !important",
    paddingBottom: 50,
    padding: "0 20px",
    zIndex: 2,
  },
  mobileLessonLabel: (props: { courseId: string }) => ({
    fontFamily: `"Noto Serif", sans-serif !important`,
    color: props.courseId === "fastEyeliner" ? "#FFD7BB" : "#FFF",
    fontWeight: 700,
    fontSize: 26,
    paddingTop: 20,
    marginBottom: "20px !important",
    zIndex: 2,
  }),
  horizontalLine: {
    border: "none",
    borderTop: "1px solid #FFF",
    width: "100%",
    zIndex: 2,
  },
  mobileLessonAccordion: {
    borderRadius: "16px !important",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    zIndex: 2,
    "& .MuiPaper-root": {
      borderRadius: "8px !important",
      "&::before": {
        display: "none",
      },
    },
  },
  mobileLessonAccordionSummary: (props: { courseId: string }) => ({
    fontFamily: `"Exo 2", sans-serif !important`,
    fontWeight: 400,
    fontSize: 18,
    overflow: "hidden",
    padding: 5,
    color: "#000000",
    height: "auto",
    zIndex: 2,
    boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.12)",
    borderRadius: "8px !important",
    "&.MuiAccordionSummary-root": {
      background: "#FFF",
      "&.Mui-expanded": {
        background: props.courseId === "fastEyeliner" ? "#FFD7BB" : "#DBDBDB",
      },
    },
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: "#004AAD",
    },
  }),
  mobileLessonAccordionDetails: {
    background: "#FFFFFF",
    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.07)",
    borderRadius: "0px 0px 16px 16px",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "22px",
    color: "rgba(0, 0, 0, 0.5)",
    zIndex: 2,
    padding: "0px 20px  !important",
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
    border: "none",
    background: "transparent",
    padding: 0,
    paddingBottom: 3,
    color: "#B7703D",
    fontWeight: 700,
    textAlign: "left",
    fontFamily: `"Exo 2", sans-serif !important`,
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    borderBottom: "1px solid #B7703D",
    borderRadius: 0,
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
  fileDescription: {
    color: "#3B2616",
    fontFamily: `"Exo 2", sans-serif !important`,
    fontSize: 18,
    fontWeight: 600,
  },
});

export default useStyles;
