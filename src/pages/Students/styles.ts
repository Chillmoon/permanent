import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  homePageMainBlockWithoutSidebar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
    overflow: "auto",
  },
  homePageMainBlockTitle: {
    marginBottom: "50px !important",
    fontFamily: `"Open Sans", sans-serif !important`,
    fontSize: "30px !important",
    fontWeight: "700 !important",
    color: "rgba(0, 0, 0, 0.7)",
    position: "sticky",
    marginTop: "100px !important",
  },
  button: {
    borderRadius: 6,
    border: "2.364px solid #004AAD",
    background: "#FFF",
    padding: "10px 20px",
    color: "#004AAD",
    fontWeight: 700,
    fontFamily: `"Open Sans", sans-serif !important`,
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      cursor: "pointer",
      borderColor: "blue",
      color: "blue",
    },
  },
  accordion: {
    width: "100%",
    marginBottom: "10px",
    boxShadow: "none",
    "&>div.MuiCollapse-root": {
      marginBottom: "10px",
    },
  },

  accordionChild: {
    width: "100%",
    padding: "0 !important",
    boxShadow: "none",
  },
  accordionUl: {
    padding: 10,
    margin: 0,
    listStyleType: "none",
  },
  accordionLi: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  accordionDetails: {
    boxShadow: "none",
    marginBottom: 10,
  },
  accordionContainer: {
    flexGrow: 1,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 400,
  },
  p: {
    overflow: "hidden",
    marginRight: 5,
  },
}));

export default useStyles;
