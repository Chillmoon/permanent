import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

import Timer from "../../../components/Timer";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const isMobileScreen = useMediaQuery("(max-width:1000px)");
  return (
    <>
      <img
        className={classes.lightTop}
        src="../../assets/lightTop.svg"
        alt="Light"
      />
      {isMobileScreen ? (
        <div className={classes.headerMobile}>
          <div className={classes.courseDescription}>
            {t("Курс по виконанню міжвійної зони з ідеальним загоєнням")}
          </div>
          <div className={classes.orangeText}>
            {t("Старт")}{" "}
            <span className={classes.boldText}>{t("16 жовтня")}</span>
          </div>
          <img
            className={classes.eyeliner}
            alt="Name"
            src="../../assets/eyeliner.png"
          />
          <img
            className={classes.lightPhoto}
            src="../../assets/lightPhoto.svg"
            alt="Light"
          />
          <img
            className={classes.photo}
            alt="Viktoria"
            src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fviktoria.svg?alt=media&token=edd328dd-5a5b-4242-b598-b9ec4d1241af&_gl=1*1ypcyqb*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjE5MTA1MS40OS4xLjE2OTYxOTQ5MjQuNTcuMC4w"
          />

          <div className={classes.photoDescription}>
            {t(
              "Ідеальна нетравматична техніка, яку після вивчення освоїли 99% учнів, і отримали круті результати."
            )}
          </div>
          <div className={classes.buttonWrapper}>
            <img
              className={classes.lightButton}
              src="../../assets/lightButton.svg"
              alt="Light"
            />
            <button
              className={classes.button}
              onClick={() => console.log("button")}
            >
              {t("Придбати курс")}
            </button>
          </div>
          <div className={classes.counterDescription}>
            {t("до кінця знижки залишилось")}
          </div>
          <Timer />
        </div>
      ) : (
        <div className={classes.header}>
          <div className={classes.headerText}>
            <div className={classes.orangeText}>
              {t("Старт")}{" "}
              <span className={classes.boldText}>{t("16 жовтня")}</span>
            </div>
            <img
              className={classes.eyeliner}
              alt="Name"
              src="../../assets/eyeliner.png"
            />
            <div className={classes.courseDescription}>
              {t("Курс по виконанню міжвійної зони з ідеальним загоєнням")}
            </div>
            <div className={classes.counterDescription}>
              {t("до кінця знижки залишилось")}
            </div>
            <Timer />
            <div className={classes.buttonWrapper}>
              <img
                className={classes.lightButton}
                src="../../assets/lightButton.svg"
                alt="Light"
              />
              <button
                className={classes.button}
                onClick={() => console.log("button")}
              >
                {t("Приєднатись зараз")}
              </button>
            </div>
          </div>
          <div className={classes.headerPhoto}>
            <img
              className={classes.lightPhoto}
              src="../../assets/lightPhoto.svg"
              alt="Light"
            />
            <img
              className={classes.photo}
              alt="Viktoria"
              src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2FviktoriaHeaderPhoto.svg?alt=media&token=4b2ade4e-8f52-4f10-9c6b-2cd85450398b&_gl=1*1i9g166*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjE5MTA1MS40OS4xLjE2OTYxOTIxMTQuNDcuMC4w"
            />
            <div className={classes.photoDescription}>
              {t(
                "Ідеальна нетравматична техніка, яку після вивчення освоїли 99% учнів, і отримали круті результати."
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
