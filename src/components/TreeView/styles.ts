import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  treeViewWrapper: {
    "& a": {
      textDecoration: "none",
      color: "#000",
      fontWeight: "bold",
      marginLeft: 10,
    },
  },
  accordionSummary: {
    "&.MuiAccordionSummary-root": {
      flexDirection: "row-reverse",
    },
    // "& .MuiAccordionSummary-expandIconWrapper": {
    //   paddingRight: 10,
    // },
  },
  accordionLinks: {
    "&:hover": {
      color: "blue !important",
    },
  },
});

export default useStyles;
