import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    overflow: "hidden",
    "@media (max-width:1000px)": {
      gap: 0,
      overflow: "hidden",
    },
  },
  backgroundDetails: {
    position: "absolute",
    zIndex: 1,
    right: 0,
    top: 0,
    height: "100%",
    "@media (max-width:1000px)": { display: "none" },
  },
  backgroundDetails1: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    transform: "scaleX(-1) scaleY(-1);",
    height: "100%",
    "@media (max-width:1000px)": { display: "none" },
  },
  loginBackgroundMobile: {
    display: "none",
    "@media (max-width:1000px)": {
      display: "block",
      position: "absolute",
      zIndex: 1,
      right: 0,
      top: 0,
      width: "100%",
      height: "auto",
    },
  },
  lightTop: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 500,
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  mainWrapper: {
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 330,
    padding: "20px 55px",
    height: 370,
    backgroundColor: "#FCF5EF",
    borderRadius: 12,
    boxShadow: "3.15242px 3.15242px 15.7621px rgba(0, 0, 0, 0.19)",
    position: "relative",
    "@media (max-width:1000px)": {
      width: 290,
      padding: "30px 25px",
      height: 380,
      justifyContent: "start",
    },
  },
  mainWrapperLogin: {
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 330,
    padding: "37px 55px",
    height: 325,
    backgroundColor: "#FCF5EF",
    borderRadius: 12,
    boxShadow: "3.15242px 3.15242px 15.7621px rgba(0, 0, 0, 0.19)",
    position: "relative",
    "@media (max-width:1000px)": {
      width: 290,
      height: 340,
      padding: "30px 25px",
      justifyContent: "start",
    },
  },
  googleWrapper: {
    display: "flex",
    width: 433,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    boxShadow: "3.15242px 3.15242px 15.7621px rgba(0, 0, 0, 0.19)",
    paddingLeft: 8,
    zIndex: 5,
    "&>button": {
      paddingLeft: 0,
      "&:hover": {
        backgroundColor: "inherit",
        borderRadius: "12px !important",
      },
      "&:active": {
        background: "transparent",
      },
    },
    "@media (max-width:1000px)": {
      width: 332,
      marginTop: "-18px",
    },
  },
  googlelinkWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 14,
    textDecoration: "none",
    "&>img": {
      width: 50,
      padding: 3,
      paddingLeft: 0,
    },
    "&>p": {
      textTransform: "none !important",
      color: "rgba(0, 0, 0, 0.70)",
      fontFamily: `"Exo 2", sans-serif !important`,
      fontSize: 16,
    },
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    width: "100%",
    marginBottom: 100,
    "@media (max-width:1000px)": {
      marginBottom: 10,
    },
  },
  input: {
    border: "none !important",
    fontFamily: `"Exo 2", sans-serif !important`,
    backgroundColor: "transparent !important",
    borderRadius: 6,
    borderBottom: "2px solid #B7703D !important",
    padding: "10px 0px 10px 10px",
    "&:focus-visible": {
      outline: "none",
    },
  },
  inputError: {
    border: "none !important",
    fontFamily: `"Exo 2", sans-serif !important`,
    backgroundColor: "transparent !important",
    borderRadius: 6,
    padding: "10px 0px 10px 10px",
    "&:focus-visible": {
      outline: "none",
    },
    borderBottom: "2px solid #DE1818 !important",
    color: "#DE1818",
  },
  signUpButton: {
    position: "absolute",
    background:
      "var(--BTN_MAIN, radial-gradient(29.03% 41.72% at 50% 99.35%, #EDC9AF 0.02%, #CCA081 47.92%, #BA7441 100%))",
    padding: "19px 25px 18px 25px",
    borderRadius: 15,
    border: "none",
    color: "#FFF",
    borderBottom: "5px solid #482B19",
    width: 330,
    zIndex: 1000,
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 18,
    boxShadow: "0 0 25.5px rgba(183, 112, 61, 0.11)",
    "@media (min-width:1000px)": {
      "&:hover": {
        cursor: "pointer",
        borderBottom: "none",
        filter: "drop-shadow(0px 0px 40px #B7703D)",
        transition: "all 0.3s ease",
        background:
          "radial-gradient(69.13% 99.35% at 50% 99.35%, #EDC9AF 0.02%, #CCA081 47.92%, #BA7441 100%)",
      },
    },
    "@media (max-width:1000px)": {
      position: "relative",
      width: 290,
      marginTop: 80,
    },
  },
  signUpTitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    color: "#3B2616",
    textAlign: "center",
    fontFamily: "Noto Serif",
    fontSize: 28,
    fontWeight: 500,
    "@media (max-width:1000px)": {
      fontSize: 22,
      textTransform: "uppercase",
    },
  },
  link: {
    textDecoration: "none",
    "& :active": {
      color: "darkblue",
    },
  },
  signUpLoginLinks: {
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    fontFamily: `"Exo 2", sans-serif !important`,
    "& :active": {
      color: "darkblue",
    },
    "&>a": {
      textDecorationLine: "underline",
    },
    "@media (max-width:1000px)": {
      marginTop: "-60px",
    },
  },
  forgotPassword: {
    fontSize: 14,
    display: "flex",
    flexDirection: "row",
    fontFamily: `"Exo 2", sans-serif !important`,
    "& :active": {
      color: "darkblue",
    },
    "&>a": {
      textDecorationLine: "underline",
    },
  },
  disabledLink: {
    pointerEvents: "none",
    color: "lightgrey",
    textDecorationLine: "none !important",
  },
  forgotPasswordLinks: {
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    fontFamily: `"Exo 2", sans-serif !important`,
    "& :active": {
      color: "darkblue",
    },
    "&>a": {
      textDecorationLine: "underline",
    },
  },
  forgotPasswordText: {
    fontSize: 14,
    textAlign: "center",
    "@media (max-width:1000px)": {
      marginTop: "-60px",
    },
  },
});

export default useStyles;
