import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    position: "relative",
  },
  programWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexDirection: "column",
    marginBottom: 10,
    "@media (max-width:1000px)": {
      height: "100%",
      padding: 0,
      width: "100% !important",
    },
  },
  whiteBackground: {
    position: "absolute",
    width: "100%",
    marginTop: "-150px",
    zIndex: 3,
    "@media (max-width:1000px)": {
      width: "calc(100% + 40px)",
      marginTop: "-270px",
      height: "6000",
      marginLeft: "-20px",
      marginRight: "-20px",
    },
  },
  blockName: {
    position: "relative",
    marginTop: 100,
    color: "#482B19",
    fontSize: 40,
    fontWeight: 600,
    textTransform: "uppercase",
    textAlign: "center",
    zIndex: 4,
    marginBottom: 50,
    "@media (max-width:1000px)": {
      marginBottom: 20,
      fontSize: 34,
      marginTop: "-160px",
    },
  },
  table: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background:
      "var(--BG_PODL, linear-gradient(141deg, #FFE1E1 -1.82%, #FFEBDC 86.55%))",
    width: 650,
    zIndex: 4,
    borderRadius: 16,
    marginBottom: 40,
    "@media (max-width:1000px)": {
      width: "100%",
      marginBottom: 20,
    },
  },
  tableHeader: {
    fontSize: 35,
    width: "100%",
    textAlign: "center",
    padding: "20px 0px",
    backgroundColor: "#482B19",
    color: "#FFF",
    borderRadius: "16px 16px 0px 0px",
    "@media (max-width:1000px)": {
      fontSize: 20,
      padding: "10px 0px",
    },
  },
  tableBody: {
    padding: 20,
    fontFamily: `"Exo 2", sans-serif !important`,
    "&>ul": {
      color: "#8D7467",
      padding: "0px 0px 0px 20px",
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      fontSize: 16,
    },
  },
});

export default useStyles;
