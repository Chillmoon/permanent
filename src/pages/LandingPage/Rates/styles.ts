import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexDirection: "column",
    position: "relative",
    "@media (max-width:1000px)": {
      height: "100vh",
      padding: 0,
      marginLeft: "7.69%",
      width: "100%",
      marginTop: "-350px",
      marginBottom: 300,
    },
  },
  cardsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexDirection: "row",
    gap: 100,
    "@media (max-width:1000px)": {
      flexDirection: "column",
      marginTop: 200,
      gap: 50,
    },
  },
  cardWrapper: {
    zIndex: 4,
    width: 450,
    height: "100%",
    borderRadius: 16,
    background:
      "var(--1, linear-gradient(154deg, #482B19 0.88%, #664532 98.45%))",
    boxShadow: "5px 7px 39px 0px rgba(0, 0, 0, 0.51)",
    "@media (max-width:1000px)": {
      width: "100%",
    },
  },
  cardWrapper1: {
    zIndex: 4,
    width: 450,
    height: "100%",
    borderRadius: 16,
    background: "var(--2, linear-gradient(155deg, #1E150F 0%, #292623 100%))",
    boxShadow: "5px 7px 39px 0px rgba(0, 0, 0, 0.51)",
    "@media (max-width:1000px)": {
      width: "100%",
    },
  },
  card: {
    margin: 20,
    borderRadius: 16,
    border: "2px solid #FFF",
    height: 475,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
    "@media (max-width:1000px)": {
      margin: 5,
      padding: "35px 20px",
    },
  },

  cardTitle: {
    color: "#FFF",
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: 700,
  },
  cardList: {
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 0,
    gap: 20,
    marginBottom: 40,
    "&>li": {
      fontSize: 16,
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      fontWeight: 300,
      fontFamily: `"Exo 2", sans-serif !important`,
    },
  },
  cardListItemLined: {
    textDecorationLine: "line-through",
    color: "rgba(255, 255, 255, 0.60)",
  },
  originalPrice: {
    fontSize: 16,
    color: "#FFF",
    textDecorationLine: "line-through",
    "@media (max-width:1000px)": {
      color: "rgba(255, 255, 255, 0.60)",
    },
  },
  discountedPrice: { fontSize: 40, color: "#FFF", fontWeight: 700 },
  priceDescription: {
    color: "#FFF",
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
      cursor: "pointer",
    },
    boxShadow: "0 0 25.5px rgba(183, 112, 61, 0.11)",
    "@media (max-width:1000px)": {
      marginBottom: 40,
    },
  },
  label: {
    transform: "rotate(12deg)",
    position: "absolute",
    top: 85,
    right: 220,
    color: "#FFF",
    backgroundColor: "#B7703D",
    borderRadius: 12,
    padding: "12px 20px",
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 14,
    fontFamily: `"Exo 2", sans-serif !important`,
    "&>div": {
      marginTop: "-5px",
      fontSize: 25,
    },
    "@media (max-width:1000px)": {
      top: 580,
      right: 0,
    },
  },
  blockName: {
    position: "relative",
    color: "#482B19",
    fontSize: 40,
    fontWeight: 600,
    textTransform: "uppercase",
    textAlign: "center",
    zIndex: 4,
    marginBottom: 50,
    "@media (max-width:1000px)": {
      marginBottom: 30,
    },
  },
});

export default useStyles;
