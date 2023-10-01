import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  inputWrapper: {
    marginTop: 20,
  },
  inputButton: {
    borderRadius: 6,
    border: "2.364px solid #004AAD",
    background: "#FFF",
    padding: "17px 33px",
    color: "#004AAD",
    fontWeight: 700,
    fontFamily: `"Open Sans", sans-serif !important`,
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      cursor: "pointer",
      borderColor: "blue",
      color: "blue",
    },
    "&:disabled": {
      color: "#A0B6D5",
      cursor: "auto",
      borderColor: "#A0B6D5",
    },
  },
  input: {
    minWidth: 300,
    "&::file-selector-button": {
      borderRadius: 6,
      border: "2.364px solid #004AAD",
      background: "#FFF",
      padding: "17px 33px",
      color: "#004AAD",
      fontWeight: 700,
      fontFamily: `"Open Sans", sans-serif !important`,
      cursor: "pointer",
      transition: "background-color 0.3s, color 0.3s",
      "&:hover": {
        cursor: "pointer",
        borderColor: "blue",
        color: "blue",
      },
    },
  },
});

export default useStyles;
