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
      "&>div.MuiCollapse-root": {
        marginTop: 4,

        "&>div>div>div>div": {
          paddingLeft: 30,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        },
      },
    },

    "& a": {
      textDecoration: "none",
      color: "#FFF",
      fontWeight: "bold",

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
      paddingBottom: 0,
      paddingLeft: 0,
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
  accordionLinks: {},
  accordionLinksDisabled: {
    pointerEvents: "none",
    color: "#696059 !important",
  },
  accordionLinksBonus: {
    "&>p": {
      fontWeight: "700 !important",
      color: "#E8A41A",
    },
  },
});

export default useStyles;
