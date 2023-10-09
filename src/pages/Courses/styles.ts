import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  coursesPageMainBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    position: "relative",
  },
  backgroundDetails: {
    position: "absolute",
    zIndex: 5,
    width: "100%",
    "@media (max-width:1000px)": {
      bottom: "-100px",
      maxWidth: 390,
    },
  },
  whiteBackground: {
    position: "absolute",
    top: "-200px",
    width: "100%",
    zIndex: 6,
    "@media (max-width:1000px)": {
      top: "-180px",
    },
  },
  cardWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 19,
    marginLeft: 20,
    marginRight: 20,
    zIndex: 7,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#482B19",
    width: 280,
    height: 165,
    borderRadius: 16,
    padding: "40px 35px",
  },
  cardName: {
    marginBottom: 10,
    "&>img": {
      width: "250px",
    },
  },
  courseDescription: {
    color: "rgba(255, 255, 255, 0.70)",
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
    height: 165,
    borderRadius: 16,
    padding: "40px 35px",
    backgroundColor: "#EBEBEB",
  },
  blockTitle: {
    fontFamily: `"Noto Serif", sans-serif !important`,
    textTransform: "uppercase",
    fontSize: 36,
    lineHeight: "46px",
    fontWeight: "600 !important",
    marginBottom: "40px !important",
    paddingTop: "70px",
    zIndex: 7,
    "@media (max-width:600px)": {
      fontSize: 28,
      "@media (max-width:1000px)": {
        paddingTop: 0,
        marginTop: "-30px !important",
      },
    },
  },
  wrapper: {
    marginTop: 20,
    height: "600px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "@media (max-width:1000px)": {
      height: "100%",
      padding: 0,
      width: "100% !important",
      alignItems: "center",
      marginTop: 130,
    },
  },

  blockWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  photo: {
    position: "absolute",
    zIndex: 6,
    width: 530,
    "@media (max-width:1000px)": {
      position: "relative",
      width: "100%",
      top: 0,
    },
  },
  lightPhoto: {
    position: "absolute",
    zIndex: 5,
    width: 600,
    "@media (max-width:1000px)": {
      width: "100%",
      bottom: "-30px",
      left: 0,
    },
  },
  textWrapper: {
    display: "flex",
    marginTop: 170,
    gap: 70,
    fontFamily: `"Exo 2", sans-serif !important`,

    "@media (max-width:1000px)": {
      justifyContent: "space-between",
      marginTop: 20,
      width: "100%",
      flexDirection: "column",
      top: 100,
      gap: 25,
    },
    "&>div": {
      display: "flex",
      flexDirection: "column",
      gap: 70,
      "@media (max-width:1000px)": {
        flexDirection: "row",
        gap: 15,
      },
    },
    "&>div>div": {
      fontSize: 14,
      color: "#F5DBC8",
      fontWeight: 300,
      lineHeight: "125%",
      zIndex: 5,
      "@media (max-width:1000px)": {
        fontSize: 16,
      },
    },
  },
  textBlockWrapper: {
    display: "flex",
    gap: 15,
    "&>div": {
      width: "300px",
      "@media (max-width:1000px)": {
        width: 450,
      },
    },
  },
  lineLong: {
    height: 1,
    borderBottom: "1px solid #FFD7BB",
    width: 150,
    marginTop: 7,
    zIndex: 7,
    "@media (max-width:1000px)": {
      width: 100,
    },
  },
  lineShort: {
    height: 1,
    borderBottom: "1px solid #FFD7BB",
    width: 150,
    marginTop: 5,
    zIndex: 7,
    "@media (max-width:1000px)": {
      width: 70,
      marginTop: 10,
    },
  },
  leftBlock: {
    "&>div": {
      textAlign: "right",
    },
  },
  rightBlock: {
    marginTop: 40,
    "&>div": {
      textAlign: "left",
    },
  },
  name: {
    textTransform: "uppercase",
    fontSize: 35,
    marginBottom: 10,
    "@media (max-width:1000px)": {
      zIndex: 100,
      marginTop: 0,
      color: "#FFF",
    },
  },
  nameWrapper: {
    color: "#FFF",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "-7px",
  },
  username: {
    color: "#FFF",
    opacity: "0.6",
    fontFamily: `"Exo 2", sans-serif !important`,
    padding: "12px 25px",
    border: "1px solid #FFF",
    borderRadius: 10,
    "@media (max-width:1000px)": {
      width: 160,
      padding: "6px 20px",
      marginTop: 0,
      marginBottom: 5,
    },
  },
  logo: {
    width: 180,
    display: "block",
    margin: "0 auto",
    paddingLeft: 40,
  },
});

export default useStyles;
