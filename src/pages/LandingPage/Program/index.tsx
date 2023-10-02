import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";

import useStyles from "./styles";

const Program = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const isMobileScreen = useMediaQuery("(max-width:1000px)");
  return (
    <>
      <div className={classes.wrapper}>
        <img
          className={classes.whiteBackground}
          alt="background"
          src={
            isMobileScreen
              ? "../../assets/whiteBackgroundMobile.svg"
              : "../../assets/whiteBackground.svg"
          }
        />
      </div>
      <div className={classes.blockName}>{t("Програма курсу")}</div>
      <div className={classes.programWrapper}>
        <div className={classes.table}>
          <div className={classes.tableHeader}>{t("Практична частина")}</div>
          <div className={classes.tableBody}>
            <ul>
              <li>{t("Виконання процедури на моделі, чорним пігментом")}</li>
              <li>
                {t(
                  "Виконання процедури на віковій моделі коричневим пігментом"
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.table}>
          <div className={classes.tableHeader}>{t("Теоретична частина")}</div>
          <div className={classes.tableBody}>
            <ul>
              <li>{t("Розбір постановки руки і штриха на пучкових голках")}</li>
              <li>
                {t(
                  "Апарати. В чому різниця між дорогими і дешевими, який результат вони дають"
                )}
              </li>
              <li>
                {t(
                  "Пігменти. Склад, типи карбону, як зрозуміти який у вас пігмет. Органіка та неорганіка, які з них краще обирати"
                )}
              </li>
              <li>
                {t(
                  "Правильне змішування пігментів з коректорами, щоб не було розслоєння кольору"
                )}
              </li>
              <li>{t("Анестезія, та безпечність її використання")}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Program;
