import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  reviewImage: { maxHeight: 700, objectFit: "contain" },
  reviewsWrapper: {
    maxWidth: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowButtonPrev: {
    position: "absolute",
    zIndex: 2,
    top: "50%",
    cursor: "pointer",
    width: "46px",
    height: "46px",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "none",
    "&:disabled": {
      display: "none",
    },
  },
  arrowButtonNext: {
    position: "absolute",
    zIndex: 2,
    top: "50%",
    right: 0,
    cursor: "pointer",
    border: "none",
    width: "46px",
    height: "46px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "none",
    "&:disabled": {
      display: "none",
    },
  },
});

export default useStyles;
