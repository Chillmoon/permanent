import Timer from "../../components/Timer";
import useStyles from "./styles";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <img className={classes.lightTop} src="../../assets/lightTop.svg" />
      <div className={classes.body}>
        <header className={classes.header}>
          <div className={classes.headerText}>
            <div className={classes.orangeText}>
              {t("Старт")}{" "}
              <span className={classes.boldText}>{t("16 жовтня")}</span>
            </div>
            <img
              className={classes.eyeliner}
              src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Feyeliner.svg?alt=media&token=01ea8c33-de2d-4ea1-9b87-6c648a22b942&_gl=1*q4lsv3*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjE3OTI0My40Ny4xLjE2OTYxODA3MDcuNTEuMC4w"
            />
            <div className={classes.courseDescription}>
              {t("Курс по виконанню міжвійної зони з ідеальним загоєнням")}
            </div>
            <div className={classes.counterDescription}>
              {t("до кінця знижки залишилось")}
            </div>
            <Timer initialTimeInSeconds={112352} />
            <div className={classes.buttonWrapper}>
              <img
                className={classes.lightButton}
                src="../../assets/lightButton.svg"
              />
              <button
                className={classes.button}
                onClick={() => console.log("button")}
              >
                {t("ПРИЄДНАТИСЬ ЗАРАЗ")}
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default LandingPage;
