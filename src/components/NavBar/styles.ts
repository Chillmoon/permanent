import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navBar: {
    display: "flex",
    position: "fixed",
    top: 0,
    backgroundColor: "transparent !important",
    lineHeight: "28.6px",
    boxShadow: "none !important",
    textDecoration: "none",
    textTransform: "uppercase",
    color: "#000000",
    fontWeight: "400 !important",

    "& :visited": {
      color: "#000000",
    },
    "&>div": {
      "@media (max-width:1000px)": {
        display: "flex !important",
        justifyContent: "center",
        alignContent: "center",
      },
    },
    "@media (max-width:1000px)": {
      height: 100,
      marginTop: "-1px",
      backgroundColor: "#38281D !important",
      display: "flex !important",
      justifyContent: "center",
      alignContent: "center",
    },
  },
  navBarTitle: {
    position: "absolute",
    display: "flex",
    zIndex: 1500,
    left: "20px",
    padding: 0,
    textDecoration: "none ",
    "&:hover": {
      cursor: "pointer",
    },
    "@media (max-width:1000px)": {
      left: "25%",
    },
  },
  link: (props: { courseId: string }) => ({
    flexDirection: "row",
    display: "flex",
    color:
      props.courseId === "fastEyeliner"
        ? "#FFD7BB !important"
        : "#FFF !important",
    "&>a": {
      fontSize: 16,
      margin: "0px 5px",
      textDecoration: "none",
      color:
        props.courseId === "fastEyeliner"
          ? "#FFD7BB !important"
          : "#FFF !important",
      fontFamily: `"Noto Serif", sans-serif !important`,
    },
  }),
  linkPages: {
    position: "absolute",
    left: 400,
    top: 20,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    "&>a": {
      fontSize: 16,
      textDecoration: "none",
      color: "#000000",
    },
    "@media (max-width:900px)": {
      left: "50%",
    },
    "@media (max-width:600px)": {
      left: "35%",
      top: 17,
    },
    "@media (max-width:450px)": {
      display: "none",
    },
  },
  menu: {
    display: "none",
    position: "absolute",
    right: "2%",

    "@media (max-width:450px)": {
      display: "flex",
      position: "absolute",
      bottom: "-10px",
      right: "15px",
    },
  },
  menuLink: {
    display: "flex",
    justifyContent: "center",
    fontFamily: `"Exo 2", sans-serif !important`,
    textDecoration: "none !important",
    color: "#3B2616",
    fontSize: "14px !important",
    fontWeight: 600,
    "&>a": {
      textDecoration: "none !important",
    },
    "& :visited": {
      color: "#000000",
    },
  },
  linkWrapper: {
    flexDirection: "row",
    display: "flex",
    gap: 100,
    justifyContent: "space-between",
  },
  avatar: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 97,

    "&>div>button>div.MuiAvatar-root": {
      backgroundColor: "#FCF5EF",
      color: "#3B2616",
      fontWeight: 700,
    },
    "@media (max-width:600px)": {
      right: "10%",
    },
    "@media (max-width:450px)": {
      display: "none",
    },
  },
  avatarCircle: {},
  avatarCircleOpen: {
    marginTop: 30,
    paddingBottom: 30,
    borderRadius: "50px 50px 0px 0px !important",
    transition: "height 300ms ease-in, border-radius 300ms ease-in",
  },

  logo: {
    marginTop: 10,
    width: 150,
    display: "flex",
  },
  mobileLogo: {
    width: 200,
    marginTop: 10,
    marginLeft: "-70px",
  },
  menuAvatar: {
    "&>div.MuiPaper-root": {
      "&.MuiPopover-paper": {
        "&.MuiMenu-paper": {
          boxShadow: "none !important",
          borderRadius: "16px !important",
          backgroundColor: "#FCF5EF !important",
          width: 200,
          "&>ul": {
            padding: "15px 0px",
          },
        },
      },
    },
  },
  menuEnter: {
    opacity: 0,
    transform: "scale(0.8)",
    transition: "opacity 300ms ease, transform 300ms ease",
  },
  menuEnterActive: {
    opacity: 1,
    transform: "scale(1)",
  },
  menuExit: {
    opacity: 1,
    transform: "scale(1)",
    transition: "opacity 300ms ease, transform 300ms ease",
  },
  menuExitActive: {
    opacity: 0,
    transform: "scale(0.8)",
  },
  languageSelectorWrapper: {
    display: "none",
    "@media (max-width:1000px)": {
      display: "flex",
      position: "absolute",
      right: "25px",
      top: "-3px",
      "&>div>div>button": {
        // fontSize: "12px !important",
      },
    },
  },
  menuWrapper: {
    "&>div.MuiPaper-root": {
      "&.MuiPopover-paper": {
        "&.MuiMenu-paper": {
          boxShadow: "none !important",
          borderRadius: "16px !important",
          backgroundColor: "#FCF5EF !important",
          "&>ul": {
            padding: "10px 0px",
            "&>li": {
              padding: "0px 16px",
              minHeight: "40px !important",

              lineHeight: 20,
            },
          },
        },
      },
    },
  },
});

export default useStyles;
