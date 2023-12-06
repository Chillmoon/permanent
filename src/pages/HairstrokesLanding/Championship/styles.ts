import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
    gap: 21,
    "@media (max-width:1000px)": {
      padding: "0px 20px",
      flexDirection: "column",
      height: "100%",
    },
  },
  img: {
    zIndex: 50,
    width: 400,
    "@media (max-width:1000px)": {
      width: 300,
    },
  },
  label: {
    fontSize: 30,
    textShadow: "0px 0px 100px #A66B4D, 2px 3px 3px #000",
    fontFamily: "Playfair Display",
    fontWeight: 800,
  },
  description: {
    fontSize: 22,
    fontFamily: `"Exo 2", sans-serif !important`,
    fontWeight: 400,
    "@media (max-width:1000px)": {
      fontSize: 20,
    },
  },
  textWrapper: {
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 21,
    color: "#FFF",
    textAlign: "center",
  },
  button: {
    zIndex: 1000,
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
      marginTop: 5,
      filter: "drop-shadow(0px 0px 40px #B7703D)",
    },
  },
});

export default useStyles;
