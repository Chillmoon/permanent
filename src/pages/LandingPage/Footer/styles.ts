import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    marginTop: 40,
    height: "600px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "@media (max-width:1000px)": {
      height: "100vh",
      padding: 0,
      marginLeft: "7.69%",
      width: "100% !important",
      alignItems: "center",
    },
  },

  blockWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  photo: {
    position: "absolute",
    zIndex: 6,
    width: 430,
    "@media (max-width:1000px)": {
      width: 350,
      marginTop: "-400px",
    },
  },
  lightPhoto: {
    position: "absolute",
    zIndex: 5,
    width: 500,
    "@media (max-width:1000px)": {
      width: 380,
      marginTop: "-400px",
    },
  },
  textWrapper: {
    display: "flex",
    marginTop: 330,
    gap: 50,
    top: 330,
    left: 0,
    fontFamily: `"Exo 2", sans-serif !important`,
    "@media (max-width:1000px)": {
      width: 450,
      flexDirection: "column",
      marginTop: "-330px",
      gap: 25,
    },
    "&>div": {
      display: "flex",
      flexDirection: "column",
      gap: 30,
      "@media (max-width:1000px)": {
        flexDirection: "row",
        gap: 15,
      },
    },
    "&>div>div": {
      fontSize: 14,
      color: "#FFF",
      fontWeight: 300,
      lineHeight: "125%",
      opacity: "0.7",
      zIndex: 5,
      "@media (max-width:1000px)": {
        fontSize: 16,
      },
    },
  },
  textBlockWrapper: {
    display: "flex",
    gap: 10,
    "&>div": {
      width: "300px",
      "@media (max-width:1000px)": {
        width: 450,
      },
    },
  },
  lineLong: {
    height: 1,
    borderBottom: "1px solid #FFD7BB",
    width: 150,
    marginTop: 5,
    zIndex: 7,
  },
  lineShort: {
    height: 1,
    borderBottom: "1px solid #FFD7BB",
    width: 150,
    marginTop: 5,
    zIndex: 7,
    "@media (max-width:1000px)": {
      width: 50,
      marginTop: 10,
    },
  },
  leftBlock: {
    "&>div": {
      textAlign: "right",
    },
  },
  rightBlock: {
    "&>div": {
      textAlign: "left",
    },
  },
  name: {
    textTransform: "uppercase",
    fontSize: 35,
    marginBottom: 10,
    "@media (max-width:1000px)": {
      marginBottom: 0,
      color: "#FFF",
    },
  },
  nameWrapper: {
    color: "#FFF",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "-7px",
  },
  username: {
    color: "#FFF",
    opacity: "0.6",
    fontFamily: `"Exo 2", sans-serif !important`,
    padding: "12px 25px",
    border: "1px solid #FFF",
    borderRadius: 10,
    "@media (max-width:1000px)": {
      width: 160,
      padding: "6px 20px",
      marginTop: 50,
      marginBottom: 5,
    },
  },
  logo: {
    width: 180,
    display: "block",
    margin: "0 auto",
    marginTop: 100,
    marginBottom: 27,
  },
});

export default useStyles;
