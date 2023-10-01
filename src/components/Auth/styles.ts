import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    padding: "32px 55px",
    margin: "auto",
    marginTop: 130,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    boxShadow: "3.15242px 3.15242px 15.7621px rgba(0, 0, 0, 0.19)",
  },
  googleWrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    width: 350,
    padding: "32px 55px",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    boxShadow: "3.15242px 3.15242px 15.7621px rgba(0, 0, 0, 0.19)",
  },
  googlelinkWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 14,
    textDecoration: "none",
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    marginBottom: 41,
  },
  signUpButton: {
    marginBottom: "18px !important",
  },
  signUpTitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 38,
  },
  link: {
    textDecoration: "none",
    "& :active": {
      color: "darkblue",
    },
  },
  signUpLoginLinks: {
    display: "flex",
    flexDirection: "row",
    "& :active": {
      color: "darkblue",
    },
    "&>a": {
      textDecoration: "none",
    },
  },
  disabledLink: {
    pointerEvents: "none",
    color: "lightgrey",
  },
});

export default useStyles;
