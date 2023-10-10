import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  wrapperBackground: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#B7703D",
    padding: 20,
    paddingBottom: 15,
    borderRadius: 16,
    "@media (max-width:1000px)": {
      padding: "20px 10px",
    },
  },
  timerWrapper: {
    fontSize: 20,
    fontWeight: 600,
    marginTop: "-20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: `"Noto Serif", sans-serif !important`,
    backgroundImage: "linear-gradient(104deg, #ffd7bb -10.85%, #fff 102.7%)",
    "-webkit-background-clip": "text",
    color: "transparent",
    "@media (max-width:1000px)": {
      fontSize: 30,
      maxWidth: "100%",
    },
  },
  time: {
    margin: "0px 7px",
    fontSize: "2em",
  },
  timeBackground: {
    fontSize: "1.7em",
  },
  decorativeLine: {
    width: 35,
    borderTop: "0.5px solid #FFF5EE",
    "@media (max-width:1000px)": {
      maxWidth: 25,
    },
  },
  timeDescription: {
    fontSize: 9,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textTransform: "uppercase",
    marginTop: "-7px",
    "@media (max-width:1000px)": {
      fontSize: 14,
    },
  },
  timeDescriptionBackground: {
    fontSize: 9,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textTransform: "uppercase",
    marginTop: "-7px",
    color: "#FFF",
    "@media (max-width:1000px)": {
      fontSize: 14,
    },
  },
});

export default useStyles;
