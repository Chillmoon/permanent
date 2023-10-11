import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  link: {
    backgroundColor: "transparent",
    color: "#FFD7BB",
    border: "none",
    boxShadow: "none",
    fontWeight: 700,
    fontFamily: `"Exo 2", sans-serif !important`,
    padding: 0,
    fontSize: 16,
    margin: "0px 5px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  menuLink: {
    backgroundColor: "transparent",
    color: "#000",
    border: "none",
    boxShadow: "none",
    fontWeight: 700,
    fontFamily: `"Exo 2", sans-serif !important`,
    padding: 0,
    fontSize: 16,
    margin: "0px 5px",
    textTransform: "lowercase",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export default useStyles;
