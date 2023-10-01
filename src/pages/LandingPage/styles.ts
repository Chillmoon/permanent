import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  lightTop: {
    position: "absolute",
    top: 0,
    width: 400,
  },
  lightButton: {
    position: "absolute",
    top: 0,
    marginTop: "-40px",
    marginLeft: "-55px",
    width: 350,
  },
  body: {
    height: "100vh",
    backgroundImage: "linear-gradient(104deg, #ffd7bb -10.85%, #fff 102.7%)",
    "-webkit-background-clip": "text",
    color: "transparent",
    padding: "0 7%",
  },
  header: {
    marginTop: 120,
    width: "auto",
  },
  headerText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
  },
  boldText: {
    fontWeight: 600,
  },
  eyeliner: {
    marginTop: "-6px !important",
    width: 300,
    height: 60.6,
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 30,
    fontWeight: 600,
    textTransform: "uppercase",
    textAlign: "center",
    width: 550,
    marginBottom: 20,
  },
  counterDescription: {
    fontFamily: `"Exo 2", sans-serif !important`,
    fontWeight: 600,
    lineHeight: "125%",
    textTransform: "uppercase",
    fontSize: 14,
  },
  buttonWrapper: {
    position: "relative",
  },
  button: {
    marginTop: 20,
    background:
      "var(--BTN_MAIN, radial-gradient(29.03% 41.72% at 50% 99.35%, #EDC9AF 0.02%, #CCA081 47.92%, #BA7441 100%))",
    padding: "19px 25px 18px 25px",
    borderRadius: 15,
    border: "none",
    color: "#FFF",
    borderBottom: "3px solid #754929;",
    width: 215,
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export default useStyles;
