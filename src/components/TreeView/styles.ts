import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  treeViewWrapper: {
    "&>div": {
      "&.MuiPaper-root": {
        "&.MuiAccordion-root": {
          backgroundColor: "transparent !important",
          "&::before": {
            height: 0,
          },
        },
      },
    },

    "& a": {
      textDecoration: "none",
      color: "#FFF",
      fontWeight: "bold",
      marginLeft: 10,

      "&>p": {
        fontSize: "14px !important",
        fontFamily: `"Exo 2", sans-serif !important`,
      },
      "&:hover": {
        color: "#FFD7BB",
      },
    },
  },
  accordionSummary: {
    "&.MuiAccordionSummary-root": {
      flexDirection: "row-reverse",
      borderBottom: "1px solid #FFF",
      width: 225,
      marginTop: 20,
      paddingBottom: 10,
      "&>div>p": {
        color: "#FFF",
        fontFamily: `"Noto Serif", sans-serif !important`,
        "&:hover": {
          color: "#FFD7BB",
        },
      },
    },
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: "#FFF",
      marginRight: 5,
    },
  },
  accordionLinks: {
    // "&:hover": {
    //   color: "blue !important",
    // },
  },
});

export default useStyles;
