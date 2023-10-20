import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    position: "fixed",
    right: 30,
    bottom: 30,
    zIndex: 1001,
    opacity: 0.7,
    "&>a": {
      display: "block", // Изменяем на блочный элемент
      borderRadius: "50%",
      width: 70,
      height: 70,
      textDecoration: "none", // Убираем стандартное подчеркивание для ссылки
      "&>img": {
        width: "100%",
        height: "100%",
      },
      "&:hover": {
        boxShadow: "0 0 15px #B7703D",
        cursor: "pointer",
      },
    },
  },
});

export default useStyles;
