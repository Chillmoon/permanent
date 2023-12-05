import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    position: "relative",
    marginTop: 60,
    paddingTop: 60,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:1000px)": {
      padding: "0px 20px",
      paddingTop: 160,
    },
  },
  stars: {
    zIndex: 1,
    position: "absolute",
    width: "100%",

    objectFit: "cover",
    marginTop: "-60px",
    "@media (max-width:1000px)": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  cshmr: {
    zIndex: 1,
    position: "absolute",
    width: 500,
    marginTop: "-10px",
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  hairstrokes: {
    zIndex: 1,
    position: "absolute",
    top: 250,
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  elipseHairstrokes: {
    zIndex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  courseLabel: {
    zIndex: 1000,
    color: "#FFF",
    textShadow: "0px 4px 0px #000",
    fontFamily: "Playfair Display",
    fontSize: 70,
    fontWeight: "400",
    lineHeight: "90%",
    textTransform: "uppercase",
    marginBottom: 9,
    "@media (max-width:1000px)": {
      fontSize: 50,
    },
  },
  courseAuthor: {
    zIndex: 1000,
    color: "#FFF",
    fontFamily: `"Exo 2", sans-serif !important`,
    fontSize: 18,
    fontWeight: 200,
    lineHeight: "90%",
    letterSpacing: 6.4,
    textTransform: "uppercase",
    "@media (max-width:1000px)": {
      fontSize: 16,
    },
  },
  vikaHeader: {
    zIndex: 1000,
    marginTop: "-15px",
    width: 450,
    "@media (max-width:1000px)": {
      maxWidth: 380,
    },
  },
  button: {
    zIndex: 1000,
    marginTop: "-30px",
    borderRadius: 7,
    background: "#221207",
    color: "#FFF",
    padding: "10px 53px 10px 54px",
    textTransform: "uppercase",
    fontFamily: "Exo 2 !important",
    fontWeight: "500",
    boxShadow: "0px 0px 100px 0px #AA6B41",
    borderBottom: "5px solid #000",
    fontSize: 20,
    "&:hover": {
      cursor: "pointer",
      borderBottom: "none",
      marginTop: "-25px",
      filter: "drop-shadow(0px 0px 40px #B7703D)",
    },
  },

  timerDescription: {
    zIndex: 1000,
    marginTop: 20,
    fontFamily: "Exo 2 !important",
    textTransform: "uppercase",
    color: "#FFF",
    fontSize: 12,
  },
  timer: { zIndex: 1000, marginTop: 15 },
});

export default useStyles;
