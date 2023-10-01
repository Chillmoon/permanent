import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  select: {
    marginRight: 10,

    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #004AAD",
      borderRadius: 100,
      "&:hover": {
        cursor: "pointer",
      },
    },
    "&>div": {
      color: "#000",
      fontWeight: 600,
      padding: "5px 27px 4px 11px !important",
      borderRadius: "20px !important",
    },
    "&>svg": {
      color: "#000",
      width: 20,
    },
  },
});

export default useStyles;
