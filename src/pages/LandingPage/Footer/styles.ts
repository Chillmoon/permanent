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
      height: "100%",
      padding: 0,
      width: "100% !important",
      alignItems: "center",
      marginTop: 0,
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
      position: "relative",
      width: "100%",
      top: 0,
    },
  },
  lightPhoto: {
    position: "absolute",
    zIndex: 5,
    width: 500,
    "@media (max-width:1000px)": {
      width: "100%",
      top: 0,
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
      justifyContent: "space-between",
      marginTop: 10,
      width: "100%",
      flexDirection: "column",
      top: 0,
      gap: 25,
      marginLeft: "-20px",
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
      color: "#F5DBC8",
      fontWeight: 300,
      lineHeight: "125%",
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
    "@media (max-width:1000px)": {
      width: 100,
    },
  },
  lineShort: {
    height: 1,
    borderBottom: "1px solid #FFD7BB",
    width: 150,
    marginTop: 5,
    zIndex: 7,
    "@media (max-width:1000px)": {
      width: 70,
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
    marginTop: "11px",
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
      marginTop: 0,
      marginBottom: 5,
    },
  },
  logo: {
    width: 180,
    display: "block",
    margin: "0 auto",
    paddingLeft: 40,
  },
});

export default useStyles;
