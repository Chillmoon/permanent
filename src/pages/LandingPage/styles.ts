import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  lightTop: {
    position: "absolute",
    top: 0,
    width: 400,
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  lightButton: {
    position: "absolute",
    top: 0,
    marginTop: "-40px",
    marginLeft: "-55px",
    width: 350,
    zIndex: 999,
    "@media (max-width:1000px)": {
      width: 500,
      top: "-60px",
      marginLeft: 0,
    },
  },
  lightPhoto: {
    position: "absolute",
    top: 0,
    zIndex: 999,
    width: 700,
    marginRight: "-7%",
    "@media (max-width:1000px)": {
      width: 600,
      top: 250,
    },
  },

  header: {
    padding: "0 7%",
    height: "100vh",
    marginTop: 50,
    width: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  headerMobile: {
    marginTop: 120,
    width: "100% !important",
    backgroundImage: "linear-gradient(104deg, #ffd7bb -10.85%, #fff 102.7%)",
    "-webkit-background-clip": "text",
    color: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    zIndex: 1000,
    display: "flex",
    backgroundImage: "linear-gradient(104deg, #ffd7bb -10.85%, #fff 102.7%)",
    "-webkit-background-clip": "text",
    color: "transparent",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
  },
  orangeText: {
    fontFamily: `"Exo 2", sans-serif !important`,
    borderRadius: 6.522,
    padding: "4px 16px",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "300 !important",
    backgroundColor: "#B7703D", // Установите цвет фона
    color: "white", // Наследование цвета текста от родительского элемента (body)
    width: 150,
    zIndex: 1000,
    "@media (max-width:1000px)": {
      marginLeft: "60px",
    },
  },
  boldText: {
    fontWeight: 600,
  },
  eyeliner: {
    marginTop: "-6px !important",
    width: 300,
    height: 60.6,
    marginBottom: 10,
    "@media (max-width:1000px)": {
      marginLeft: "60px",
    },
  },
  courseDescription: {
    fontSize: 40,
    fontWeight: 600,
    textTransform: "uppercase",
    textAlign: "center",
    width: 700,
    marginBottom: 20,
    "@media (max-width:1000px)": {
      fontSize: 25,
      width: "auto",
      fontWeight: 900,
      marginLeft: "60px",
    },
  },
  counterDescription: {
    fontFamily: `"Exo 2", sans-serif !important`,
    fontWeight: 600,
    lineHeight: "125%",
    textTransform: "uppercase",
    fontSize: 14,
    "@media (max-width:1000px)": {
      fontSize: 18,
    },
  },
  buttonWrapper: {
    position: "relative",
  },
  button: {
    position: "relative",
    marginTop: 20,
    background:
      "var(--BTN_MAIN, radial-gradient(29.03% 41.72% at 50% 99.35%, #EDC9AF 0.02%, #CCA081 47.92%, #BA7441 100%))",
    padding: "19px 25px 18px 25px",
    borderRadius: 15,
    border: "none",
    color: "#FFF",
    borderBottom: "3px solid #754929;",
    width: 215,
    zIndex: 1000,
    textTransform: "uppercase",
    "&:hover": {
      cursor: "pointer",
    },
    boxShadow: "0 0 25.5px rgba(183, 112, 61, 0.11)",
    "@media (max-width:1000px)": {
      width: 380,
      fontSize: 25,
      marginTop: "-5px",
      marginLeft: "60px",
      marginBottom: 40,
    },
  },
  headerPhoto: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: "-50px",
  },
  photo: {
    width: 600,
    zIndex: 1000,
    marginTop: "-50px",
    marginRight: "-7%",
    "@media (max-width:1000px)": {
      marginTop: "-40px",
      width: 500,
    },
  },
  photoDescription: {
    padding: "10px 30px",
    backgroundColor: "#FFFFFF",
    borderRadius: "25px 0px 25px 0px",
    color: "#000",
    width: 400,
    textAlign: "center",
    fontSize: 14,
    zIndex: 1000,
    marginLeft: 50,
    marginTop: "-20px",
    "@media (max-width:1000px)": {
      borderRadius: "0",
      fontSize: 20,
      width: "414px",
      position: "absolute",
      top: 650,
      background: "rgba(255, 255, 255, 0.82)",
      fontWeight: 500,
      fontFamily: `"Exo 2", sans-serif !important`,
    },
  },
});

export default useStyles;
