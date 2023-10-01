import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  coursesPageMainBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    height: "100vh",
  },
  cardWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 100,
    backgroundColor: "#F1F1F1",
    marginLeft: 30,
    marginRight: 30,
  },
  card: {
    width: 340,
    height: 400,
    borderRadius: "20px !important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.19) !important",
  },
  cardTitle: {
    color: "#004AAD",
    fontWeight: "700 !important",
    fontSize: 32,
    fontFamily: "'Montserrat', sans-serif !important",
  },
  cardDescription: {
    fontFamily: `"Open Sans", sans-serif !important`,
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 16,
  },
  cardButton: {
    paddingBottom: "40px !important",
  },
  coursePlaceholder: {
    marginLeft: 30,
    marginRight: 30,
    width: 340,
    height: 400,
    borderRadius: 20,
    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.19)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    fontSize: 56,
    color: "#DFDFDF",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    marginBottom: 100,
  },
  blockTitle: {
    fontFamily: "'Montserrat', sans-serif !important",
    textTransform: "uppercase",
    fontSize: 36,
    lineHeight: "46px",
    fontWeight: "600 !important",
    marginBottom: "40px !important",
    paddingTop: "134px",
    "@media (max-width:600px)": {
      fontSize: 28,
    },
  },
});

export default useStyles;
