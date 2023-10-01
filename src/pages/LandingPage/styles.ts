import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  homePageMainBlockWithoutSidebar: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F6F6F6",
    marginTop: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:600px)": {
      marginTop: 50,
    },
  },
  header: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundImage: "url('../../assets/background.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    "@media (max-width:1000px)": {
      paddingTop: 20,
    },
  },
  landingDescription: {
    fontFamily: "'Montserrat', sans-serif",
    display: "flex",
    fontSize: 15,
    lineHeight: "29px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    "@media (max-width:1248px)": {
      fontSize: 12,
      paddingTop: 20,
    },
    "@media (max-width:1089px)": {
      fontSize: 10,
      paddingTop: 40,
    },
    "@media (max-width:347px)": {
      fontSize: 8,
      paddingTop: 40,
    },
  },

  about: {
    fontSize: 14,
    lineHeight: "140%",
    fontWeight: 400,
    "@media (max-width:1089px)": {
      fontSize: 12,
    },
  },
  aboutWrapper: {
    marginTop: 39,
    marginLeft: "-40%",
    width: 593,
    display: "flex",
    flexDirection: "row",
    padding: "18px 22px 21px 17px",
    boxShadow: "2px 4px 16px 0px rgba(0, 0, 0, 0.12)",
    zIndex: 100,
    backgroundColor: "#FFF",
    "@media (max-width:1089px)": {
      marginTop: 25,
    },
  },
  aboutIcon: {
    marginRight: 15,
  },
  descriptionBelowCourseTitle: {
    fontWeight: 400,
    fontSize: 28,
    marginBottom: 25,
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.7)",
    textTransform: "uppercase",
    "@media (max-width:1248px)": {
      fontSize: 20,
      marginBottom: 15,
    },
    "@media (max-width:1089px)": {
      fontSize: 16,
    },
    "@media (max-width:347px)": {
      fontSize: 12,
    },
  },
  courseTitle: {
    display: "flex",
    marginBottom: 15,

    "@media (max-width:1400px)": {
      "&>div>svg": {
        width: "700px",
      },

      marginLeft: "-60px",
      marginBottom: 12,
    },
    "@media (max-width:1248px)": {
      "&>div>svg": {
        width: "600px",
      },
      marginRight: "-30px",
      marginBottom: 12,
    },
    "@media (max-width:1089px)": {
      "&>div>svg": {
        width: "500px",
      },
      marginBottom: 12,
    },
    "@media (max-width:530px)": {
      "&>div>svg": {
        width: "350px",
      },
      marginRight: "-30px",
      marginBottom: 12,
    },
  },

  image: {
    width: "500px",
    marginRight: "-100px",
    minWidth: "500px",
    "@media (max-width:1252px)": {
      width: "450px",
      minWidth: "450px",
      marginRight: 0,
    },
    "@media (max-width:1089px)": {
      width: "400px",
      minWidth: "400px",
    },
    "@media (max-width:800px)": {
      width: "270px",
      minWidth: "270px",
      marginBottom: "-10px",
    },
    "@media (max-width:400px)": {
      width: "250px",
      minWidth: "250px",
    },
  },
  left: {
    display: "flex",
    justifyContent: "end",
    width: "100%",
    "@media (max-width:1000px)": {
      marginLeft: 0,
      justifyContent: "center",
      alignItems: "center",
    },
  },
  right: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:1089px min-width:1000px)": {
      marginLeft: "-50px",
    },
  },
  rightWrapper: {
    display: "flex",
    justifyContent: "start",
  },
  payButton: {
    backgroundColor: "#004AAD",
    color: "#FFFFFF",
    padding: "17px 10px",
    borderRadius: 16,
    textTransform: "uppercase",
    textDecoration: "none",
    textAlign: "center",
  },
  button: {
    marginTop: "-5px",
    padding: "17px 10px",
    fontSize: 16,
    fontWeight: 700,
    textTransform: "uppercase",
    textDecoration: "none",
    background: "#004AAD",
    color: "#FFF",
    "&:hover": {
      cursor: "pointer",
      background: "#013C8A",
    },
    "@media (max-width:1000px)": {
      marginBottom: 80,
      fontSize: 14,
      padding: "17px 20px",
      width: "100%",
      marginRight: 30,
      marginLeft: 30,
      textAlign: "center",
    },
  },
  anotherButton: {
    marginTop: 80,
    border: "3px solid #004AAD",
    padding: "17px 33px",
    color: "#004AAD",
    textTransform: "uppercase",
    fontWeight: "700 !important",
    "&:hover": {
      cursor: "pointer",
    },
  },
  wideScreenDisplay: {
    display: "flex",
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  mobileDisplay: {
    display: "none",
    "@media (max-width:1000px)": {
      display: "flex",
      justifyContent: "center",
    },
  },
  targetAudienceBlock: {
    paddingTop: 110,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: 126,
    backgroundColor: "#FFFFFF",
    "@media (max-width:1014px)": {
      paddingTop: 70,
    },
  },
  blockTitle: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 36,
    lineHeight: "46px",
    fontWeight: 700,
    marginBottom: 50,
    "@media (max-width:600px)": {
      fontSize: 24,
    },
  },
  blockTitletargetAudience: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 36,
    fontWeight: 700,
    marginBottom: 50,
    "@media (max-width:600px)": {
      fontSize: 24,
    },
  },
  cardWrapper: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    maxWidth: "392px !important",
    backgroundColor: "#FFFFFF",
    height: "710px",
    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.19)",
  },
  cardInfo: {
    padding: 25,
  },
  cardAfter: {
    backgroundColor: "#004AAD",
    borderRadius: "16px 16px 0px 0px",
    padding: "30px 22px",
    color: "#FFF",
    fontWeight: 400,
  },
  cardAfterTitle: { fontWeight: 700, fontSize: 18 },
  cardEmojiWrapper: { paddingTop: 25, paddingLeft: 25, paddingBottom: 15 },
  cardEmojiBackground: {
    position: "absolute",
    content: "''",
    zIndex: "1",
    backgroundColor: "rgba(0, 74, 173, 0.39)",
    width: 90,
    filter: "blur(16px)",
    height: 90,
    borderRadius: "50%",
    marginTop: "-15px",
    marginLeft: "-15px",
    boxShadow: "0 0 16px rgba(0, 74, 173, 0.39)",
  },
  cardEmojiImg: {
    position: "relative",
    marginTop: "-15px",
    marginLeft: "-15px",
    zIndex: "2",

    "&>img": {
      width: "90px",
    },
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: 26,
    lineHeight: "29px",
    fontFamily: "'Montserrat', sans-serif",
    fontStyle: "normal",
    color: "rgba(0, 0, 0, 0.7)",
    marginTop: "10px",
    marginBottom: 8,
  },
  cardDescription: {
    color: "rgba(0, 0, 0, 0.5)",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "22,4px",
  },
  programBlock: {
    backgroundColor: "#004AAD",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "80",
    paddingTop: 120,

    color: "#FFF",
    "@media (max-width:1000px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  programBlockWrapper: {
    margin: "0px 300px",
    border: "1px dashed #FFF",
    borderWidth: "0 0 0 2px",
    "@media (max-width:1120px)": {
      margin: "0px 150px",
    },
    "@media (max-width:850px)": {
      margin: "0px 100px",
    },
    "@media (max-width:650px)": {
      margin: "0px 25px",
    },
  },
  programBlockDescription: {
    backgroundColor: "#FFF",
    color: "rgba(0, 0, 0, 0.70)",
    padding: 20,
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 18,
    fontWeight: 500,
  },
  programBlockElement: {
    display: "flex",
    justifyContent: "center",
    width: "100% !important",
    marginBottom: 40,
  },
  programBlockLabel: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: 20,
    paddingTop: 20,
    marginBottom: "20px !important",
    position: "relative", // Добавляем позиционирование для псевдоэлементов
    paddingLeft: "20px", // Отступ справа для места под точку
    "&::before": {
      content: '""',
      position: "absolute",
      left: "-10px", // Позиционируем точку слева от блока
      top: "50%", // Центрируем точку вертикально
      transform: "translateY(-50%)",
      width: 18,
      height: 18,
      borderRadius: "50%",
      backgroundColor: "#FFF", // Цвет точки
    },
  },
  redAngle: {
    position: "absolute",
    right: "-20px",
    top: "-5px",
  },
  titleWithRedAngle: {
    position: "relative",
  },
  blockSpeaker: {
    color: "#004AAD",
    marginTop: 10,
    fontWeight: 700,
  },
  questionsBlock: {
    display: "flex",
    margin: "100px 360px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  questionsBlockCardWrapper: {
    display: "flex",
    gap: 20,
    flexFlow: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 60,
  },
  questionsBlockCard: {
    backgroundColor: "#FFF",
    padding: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 360,
    height: 200,
    boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.19)",
  },
  questionsBlockCardNumber: {
    color: "#004AAD",
    fontSize: 45,
    backgroundColor: "#FFF",
    border: "4px solid #004AAD",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 500,
    marginBottom: 19,
  },
  questionsBlockCardDescription: {
    fontSize: 18,
  },

  reviewsBlock: {
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 150,
  },
  formBlock: {
    marginBottom: 150,
    width: "100%",
    margin: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&>div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.19) !important",
      borderRadius: "16px !important",
    },
  },
  form: {
    "&>form": {
      maxWidth: 404,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "&>button": {
        marginTop: 43,
        padding: "21.5px 100px",
        marginBottom: 37,
        borderRadius: 16,
      },
    },
  },
  formBlockTitleBlue: {
    margin: "0 60px",
    padding: "19px 39px",
    backgroundColor: "#004AAD",
    color: "#FFFFFF",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    "@media (max-width:750px)": {
      margin: 0,
    },
    "@media (max-width:300px)": {
      padding: "19px 20px",
    },
  },
  formBlockRedText: {
    color: "#E41735",
  },
  formBlockTitle: {
    flexDirection: "column",
    textTransform: "uppercase",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 34,
    lineHeight: "44px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.7)",
    marginBottom: 25,
    "@media (max-width:750px)": {
      fontSize: 26,
    },
  },
  formBlockCard: {
    maxWidth: 710,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:750px)": {
      minWidth: 0,
    },
  },
  formInput: {},
  ratesBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  ratesBlockCardWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px !important",
  },
  ratesBlockCard: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    maxWidth: 392,
    background: "#FFFFFF",
    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.19) !important",
    borderRadius: "0 !important",
    "@media (max-width:750px)": {
      padding: 20,
      width: "100%",
      height: "100%",
    },
  },
  ratesBlockCardMain: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "105%",
    maxWidth: 392,
    backgroundColor: "#004AAD !important",
    color: "#FFF !important",
    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.19) !important",
    borderRadius: "0 !important",
    "@media (max-width:750px)": {
      padding: 20,
      width: "100%",
    },
    "@media (max-width:327px)": {
      padding: 15,
      height: 700,
    },
  },
  ratesBlockcardTitle: {
    "&>div>span": {
      fontSize: 36,
      fontWeight: "700 !important",
      color: "#004AAD",
      fontFamily: "'Montserrat', sans-serif",
      textTransform: "uppercase",
    },
  },
  ratesBlockcardTitleMain: {
    "&>div>span": {
      fontSize: 36,
      fontWeight: "700 !important",
      color: "#FFF",
      fontFamily: "'Montserrat', sans-serif",
      textTransform: "uppercase",
    },
  },
  ratesBlockcardContent: {
    padding: "0 !important",
  },
  ratesBlockcardButton: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  ratesBlockcardPrice: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat, sans-serif",
    alignItems: "center",
    textAlign: "center",
    "& > :first-child": {
      fontWeight: 400,
      fontSize: 19,
      textDecorationLine: "line-through",
      color: "rgba(0, 0, 0, 0.7)",
    },
    "& > :last-child": {
      fontWeight: 700,
      fontSize: 41,
      color: "#004AAD",
      marginBottom: 10,
    },
  },
  ratesBlockcardPriceMain: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat, sans-serif",
    alignItems: "center",
    textAlign: "center",
    "& > :first-child": {
      fontWeight: 400,
      fontSize: 19,
      color: "rgba(255, 255, 255, 0.70)",
      textDecorationLine: "line-through",
    },
    "& > :last-child": {
      fontWeight: 700,
      fontSize: 41,
      color: "#FFF",
      marginBottom: 10,
    },
  },
  spots: {
    padding: "5px 20px",
    marginLeft: 10,
    fontSize: 26,
    fontWeight: 700,
    backgroundColor: "#004AAD",
    color: "#FFF",
    borderRadius: 16,
  },
  spotsMain: {
    padding: "5px 20px",
    marginLeft: 10,
    fontSize: 26,
    fontWeight: 700,
    backgroundColor: "#FFF",
    color: "#004AAD",
    borderRadius: 16,
  },
  spotsWrapper: {
    marginTop: "-15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledPerks: {
    color: "rgba(0, 0, 0, 0.25)",
    textDecorationLine: "strikethrough",
  },
  disabledPerksMain: {
    color: "rgba(255, 255, 255, 0.40);",
  },
});

export default useStyles;
