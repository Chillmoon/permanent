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
          <div className={classes.tableHeader}>{t("Теоретична частина")}</div>
          <div className={classes.tableBody}>
            <ul>
              <li>{t("Голки")}</li>
              <li>{t("Апарати")}</li>
              <li>{t("Пігментологія")}</li>
              <li>{t("Опік рогівки")}</li>
              <li>
                {t(
                  "Особливості техніки виконання міжвійки за 15 хвилин з ідеальним загоєнням"
                )}
              </li>
              <li>{t("Фото міжвійки, світло, лінза, ракурси")}</li>
              <li>{t("Особливості роботи з віковими клієнтами")}</li>
              <li>
                {t("Особливості виконання міжвійки коричневими пігментами")}
              </li>
              <li>
                {t(
                  "Правила роботи з коричневим пігментом, щоб міжвійка виглядала яскраво і не виходила через червоний"
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.table}>
          <div className={classes.tableHeader}>{t("Практична частина")}</div>
          <div className={classes.tableBody}>
            <ul>
              <li>{t("Показова робота на міжвійці пучком")}</li>
              <li>{t("Правильна постановка рук і натяжка шкіри")}</li>
              <li>
                {t(
                  "Показова робота на моделі коричневим пігментом на моделі 60+"
                )}
              </li>
              <li>{t("Правильна натяжка на вікових клієнтах")}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Program;
