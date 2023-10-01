import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    color: "#FFFFFF",
    borderRadius: 6,
    fontSize: 16,
    fontWeighn: 700,
    border: "none",
    padding: "17px 33px",
    backgroundColor: "#004AAD",
    textTransform: "none",
    "&:hover": {
      cursor: "pointer",
      background: "#013C8A",
    },
    "@media (max-width:1089px)": {
      "&>span": {
        fontSize: 10,
      },
    },
  },
});

export default useStyles;
