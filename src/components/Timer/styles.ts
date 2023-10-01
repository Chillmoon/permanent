import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  },
  timerWrapper: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: "-20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: `"Noto Serif", sans-serif !important`,
    backgroundImage: "linear-gradient(104deg, #ffd7bb -10.85%, #fff 102.7%)",
    "-webkit-background-clip": "text",
    color: "transparent",
  },
  decorativeLine: {
    width: 25,
    margin: "0px 7px",
    borderTop: "0.5px solid #FFF5EE",
  },
  timeDescription: {
    marginTop: "-30px",
    fontSize: 9,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "215px",
    textTransform: "uppercase",
  },
});

export default useStyles;
