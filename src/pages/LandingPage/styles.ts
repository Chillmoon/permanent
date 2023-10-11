import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    position: "relative",
    "@media (max-width:1000px)": {
      margin: "0px 20px",
    },
  },
  backgroundDetails: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    top: 1300,
    width: 400,
    transform: "scaleX(-1) scaleY(-1);",
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  backgroundDetails1: {
    position: "absolute",
    zIndex: 1,
    top: 900,
    right: 0,
    width: 500,
    transform: "scaleX(1) scaleY(1);",
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  backgroundDetails2: {
    position: "absolute",
    zIndex: 2,
    top: 0,
    left: 0,
    width: "100%",
    transform: "scaleX(1) scaleY(1);",
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  backgroundDetails3: {
    position: "absolute",
    zIndex: 4,
    left: 0,
    top: 2200,
    width: 1000,
    transform: "rotate(0.423deg)",
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  backgroundDetails4: {
    position: "absolute",
    zIndex: 2,
    right: 0,
    bottom: "-140px",
    width: 500,
    transform: "rotate(180deg);",
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  backgroundDetails5: {
    position: "absolute",
    zIndex: 2,
    left: "-20px",
    bottom: "-115px",
    width: 500,
    transform: "rotate(-90deg);",
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  loginBackgroundMobile: {
    display: "none",
    "@media (max-width:1000px)": {
      display: "block",
      position: "absolute",
      zIndex: 1,
      right: 0,
      top: 30,
      width: "100%",
      height: "auto",
      transform: "scaleX(1) scaleY(1);",
      filter: "blur(6.5px);",
    },
  },
  loginBackgroundMobile1: {
    display: "none",
    "@media (max-width:1000px)": {
      display: "block",
      position: "absolute",
      zIndex: 1,
      right: "-20px",
      top: 2200,
      width: "100%",
      height: "auto",
      transform: "scaleX(-1) scaleY(-1);",
      filter: "blur(6.5px);",
    },
  },
  loginBackgroundMobile2: {
    display: "none",
    "@media (max-width:1000px)": {
      display: "block",
      position: "absolute",
      zIndex: 1,
      left: "-20px",
      top: 3650,
      width: "100%",
      height: "auto",
      transform: "scaleX(-1) scaleY(-1);",
      filter: "blur(6.5px);",
    },
  },
  loginBackgroundMobile3: {
    display: "none",
    "@media (max-width:1000px)": {
      display: "block",
      position: "absolute",
      zIndex: 1,
      left: "-20px",
      bottom: 400,
      width: "100%",
      height: "auto",
      transform: "scaleX(1) scaleY(1);",
    },
  },
});

export default useStyles;
