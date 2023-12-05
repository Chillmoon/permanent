import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    position: "relative",
    marginTop: 60,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:1000px)": {
      padding: "0px 20px",
      marginTop: "-150px",
    },
  },
  rectangleHairstrokes: {
    marginTop: "-40px",
    width: "100%",
    position: "absolute",
    zIndex: 2,
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  pen1: {
    position: "absolute",
    zIndex: 3,
    right: 0,
    height: 450,
    top: 80,
    "@media (max-width:1000px)": {
      height: 350,
      top: 230,
    },
  },
  pen2: {
    position: "absolute",
    zIndex: 5,
    right: 0,
    height: 450,
    top: 80,
    "@media (max-width:1000px)": {
      height: 320,
      top: 250,
    },
  },
  label: {
    zIndex: 3,
    color: "#FFF",
    fontSize: 35,
    fontFamily: "Playfair Display",
    marginTop: 120,
    textTransform: "uppercase",
    fontWeight: 800,
    textShadow: "0px 0px 100px #A66B4D, 2px 3px 3px #000",
    marginBottom: 50,
    "@media (max-width:1000px)": {
      textAlign: "center",
      zIndex: 6,
      fontSize: 50,
    },
  },
  listWrapper: {
    margin: "0 50px",
    zIndex: 4,
    display: "flex",
    flexDirection: "row",
    borderRadius: 30,
    backgroundColor: "#EBEBEB",
    boxShadow: "8px 8px 5.6px 0px rgba(0, 0, 0, 0.43)",
    height: 150,
    padding: 30,
    gap: 30,
    "@media (max-width:1000px)": {
      flexDirection: "column",
      height: "100%",
    },
  },
  listUnit: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: 300,
  },
  listNumber: {
    color: "#291206",
    fontFamily: "Playfair Display",
    fontSize: 60,
    fontWeight: 900,
    marginBottom: 10,
  },
  listText: {
    textAlign: "center",
    fontFamily: `"Exo 2", sans-serif !important`,
  },
  rectangleMobile: {
    display: "none",
    position: "absolute",
    "@media (max-width:1000px)": {
      display: "block",
      zIndex: 3,
    },
  },
});

export default useStyles;
