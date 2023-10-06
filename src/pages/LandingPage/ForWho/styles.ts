import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  forWhoErapper: {
    height: "100%",
    width: "auto",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    display: "flex",
    marginBottom: 100,
    padding: "0 7%",

    "@media (max-width:1000px)": {
      padding: 0,

      width: "100% !important",
      marginBottom: 50,
      position: "relative",
    },
  },
  blockName: {
    color: "#FFF",
    fontSize: 34,
    fontWeight: 600,
    textTransform: "uppercase",
    marginBottom: 70,
    "@media (max-width:1000px)": {
      marginBottom: 40,
    },
  },
  blockCardWrapper: {
    display: "flex",
    gap: 16,
    flexFlow: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 60,
  },
  blockCard: {
    backgroundColor: "#000",
    padding: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 260,
    height: 150,
    boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.19)",
    borderRadius: 16,
    zIndex: 3,
    "@media (max-width:1000px)": {
      width: "100%",
    },
  },
  blockCardNumber: {
    color: "#B7703D",
    fontSize: 55,
    fontWeight: 700,
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    marginBottom: 5,
  },
  blockCardDescription: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: `"Exo 2", sans-serif !important`,
    fontWeight: 300,
  },
  backgroundImage: {
    position: "absolute",
    width: 300,
    left: 0,
    top: 600,
    zIndex: 1,
    "@media (max-width:1000px)": {
      width: 250,
      top: 0,
      marginLeft: "-20px",
    },
  },
  backgroundImageLight: {
    position: "absolute",
    width: 300,
    left: 0,
    top: 500,
    zIndex: 2,
    "@media (max-width:1000px)": {
      width: "100%",
      top: 0,
      marginTop: "-100px",
      marginLeft: "-20px",
    },
  },
  bottle: {
    position: "absolute",
    top: 1510,
    right: 0,
    width: 250,
    zIndex: 1,
    "@media (max-width:1000px)": {
      top: "70rem",
      right: 0,
      marginRight: "-20px",
    },
  },
  lightBottle: {
    position: "absolute",
    top: 1530,
    right: 0,
    width: 250,
    zIndex: 2,
    "@media (max-width:1000px)": {
      top: "65rem",
      right: 0,
      marginRight: "-20px",
    },
  },
});

export default useStyles;
