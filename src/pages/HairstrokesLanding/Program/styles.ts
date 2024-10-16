import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    position: "relative",
    marginTop: "-200px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150,
    "@media (max-width:1000px)": {
      padding: "0px 20px",
      marginBottom: 50,
      height: "100%",
    },
  },
  brow: {
    position: "absolute",
    zIndex: 5,
    left: 0,
    width: 150,
    top: 350,
  },
  label: {
    zIndex: 5,
    color: "#FFF",
    fontSize: 35,
    fontFamily: "Playfair Display",
    marginTop: 60,
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
  programBlock: {
    zIndex: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start",
    gap: 50,
    marginBottom: 40,
    position: "relative",
  },
  blockLabel: {
    marginTop: 27,
    marginLeft: "-9px",
    color: "#FFF",
    fontFamily: `"Exo 2", sans-serif !important`,
    fontSize: 22,
    fontWeight: 700,
    textTransform: "uppercase",
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  blockLabelMobile: {
    display: "none",
    "@media (max-width:1000px)": {
      display: "block",
      padding: 20,
      backgroundColor: "#221207",
      borderRadius: "30px 30px 0px 0px",
      margin: "-31px",
      marginBottom: 30,
      fontSize: 18,
      textTransform: "uppercase",
      color: "#FFF",
    },
  },
  block: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    padding: 30,
    color: "#000",
    fontFamily: `"Exo 2", sans-serif !important`,
    width: 470,
    fontSize: 14,
    boxShadow: "8px 8px 5.6px 0px rgba(0, 0, 0, 0.43)",
    "@media (max-width:1000px)": {
      width: "100%",
    },
  },
  result: {
    padding: 20,
    backgroundColor: "#B7703D",
    borderRadius: 30,
    margin: "-31px",
    marginTop: 30,
    color: "#FFF",
  },
  result2: {
    padding: 20,
    backgroundColor: "#492A14",
    borderRadius: 30,
    margin: "-31px",
    marginTop: 30,
    color: "#FFF",
  },
  programBlockLine: {
    borderLeft: "2px dashed #FFF",
    zIndex: 2,
    "@media (max-width:1000px)": {
      borderLeft: "none",
      zIndex: 6,
    },
  },
});

export default useStyles;
