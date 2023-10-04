import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  progressCard: {
    width: "800px !important",
    height: "225px ",
    display: "flex",
    flexDirection: "row",
    borderRadius: "20px !important",
    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.19) !important",
    backgroundColor: "#FFFFFF",
    paddingRight: 20,

    "@media (max-width:900px)": {
      paddingTop: 10,
      width: "340px !important",
      height: "459px !important",
      paddingRight: 0,
      alignItems: "center",
    },
  },
  progressCardContent: {
    minWidth: 300,
    display: "flex",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: "15px !important",
    paddingBottom: "30px !important",
    "&.MuiGrid-root": {
      flexDirection: "column",
    },
    "@media (max-width:900px)": {
      paddingRight: 26,
      paddingLeft: 26,
    },
  },
  progressCardTitle: {
    color: "#39291D",
    fontWeight: "700 !important",
    fontSize: "32px !important",
    marginBottom: 15,
    marginTop: "50px !important",
    display: "flex",
    textTransform: "uppercase",
    fontFamily: "'Montserrat', sans-serif !important",
    "@media (max-width:900px)": {
      justifyContent: "center",
    },
  },
  progressBarText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },
  progressBar: {
    marginBottom: 30,
    height: "9px !important",
    borderRadius: 100,
  },
  progressButton: {
    padding: "0px !important",
    display: "flex",
    width: "100%",
    "@media (max-width:900px)": {
      justifyContent: "center",
    },
    "&>button": {
      padding: "17px 67px",

      "@media (max-width:900px)": {
        padding: "19px 76px",
        borderRadius: 16,
      },
    },
  },
  progressCardImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default useStyles;
