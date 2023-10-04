import { useTranslation } from "react-i18next";
import useStyles from "./styles";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const isMobileScreen = useMediaQuery("(max-width:1000px)");

  return isMobileScreen ? (
    <>
      <div className={classes.wrapper}>
        <img
          className={classes.photo}
          alt="Viktoria"
          src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2FViktoria%20gradient.png?alt=media&token=65a19795-8c43-44dc-9b12-25450c09308c&_gl=1*1pxiros*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjQxMzA3Ny41Ny4xLjE2OTY0MTMwOTMuNDQuMC4w"
        />
        <img
          className={classes.lightPhoto}
          src="../../assets/lightPhoto.svg"
          alt="Light"
        />
        <div className={classes.username}>{t("permanent.by.kushnir")}</div>
        <div className={classes.name}>{t("Вікторія Кушнір")}</div>
      </div>
      <div>
        <div className={classes.textWrapper}>
          <div className={classes.textBlockWrapper}>
            <span className={classes.lineShort} />
            <div>
              {t("Досвід роботи")}{" "}
              <strong style={{ color: "#FFF", opacity: 1 }}>
                {t("9 років")}
              </strong>
              , {t("пройшла всі техніки, від трешу до шикарних робіт")}
            </div>
          </div>
          <div className={classes.textBlockWrapper}>
            <span className={classes.lineShort} />
            <div>
              {t("Переможниця чемпіонатів")},{" "}
              <strong style={{ color: "#FFF1E8", opacity: 1 }}>
                {t("спікер та суддя")}
              </strong>{" "}
              {t("українських та міжнародних конференцій")}.
            </div>
          </div>

          <div className={classes.textBlockWrapper}>
            <span className={classes.lineShort} />
            <div>
              {t("Досвід роботи")}{" "}
              <strong style={{ color: "#FFF1E8", opacity: 1 }}>
                {t("9 років")}
              </strong>
              , {t("пройшла всі техніки, від трешу до шикарних робіт")}
            </div>
          </div>
          <div className={classes.textBlockWrapper}>
            <span className={classes.lineShort} />
            <div>
              {t("Переможниця чемпіонатів")},{" "}
              <strong style={{ color: "#FFF1E8", opacity: 1 }}>
                {t("спікер та суддя")}
              </strong>{" "}
              {t("українських та міжнародних конференцій")}.
            </div>
          </div>
          <img
            className={classes.logo}
            alt="Viktoria"
            src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Flogo.svg?alt=media&token=d3fe9092-2b8c-4ada-8fdc-62ccf9bea6fb&_gl=1*1fdu7wi*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjE5MTA1MS40OS4xLjE2OTYxOTM2OTcuNjAuMC4w"
          />
        </div>
      </div>
    </>
  ) : (
    <div className={classes.wrapper}>
      <div className={classes.blockWrapper}>
        <img
          className={classes.photo}
          alt="Viktoria"
          src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fviktoria.svg?alt=media&token=edd328dd-5a5b-4242-b598-b9ec4d1241af&_gl=1*68ngw4*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjI0NTE1NC41Mi4xLjE2OTYyNDY4NTguNTcuMC4w"
        />
        <img
          className={classes.lightPhoto}
          src="../../assets/lightPhoto.svg"
          alt="Light"
        />
        <div className={classes.textWrapper}>
          <div className={classes.leftBlock}>
            <div className={classes.textBlockWrapper}>
              <div>
                {t("Досвід роботи")}{" "}
                <strong style={{ color: "#FFF", opacity: 1 }}>
                  {t("9 років")}
                </strong>
                , {t("пройшла всі техніки, від трешу до шикарних робіт")}
              </div>
              <span className={classes.lineLong} />
            </div>
            <div className={classes.textBlockWrapper}>
              <div>
                {t("Переможниця чемпіонатів")},{" "}
                <strong style={{ color: "#FFF1E8", opacity: 1 }}>
                  {t("спікер та суддя")}
                </strong>{" "}
                {t("українських та міжнародних конференцій")}.
              </div>
              <span className={classes.lineShort} />
            </div>
          </div>
          <div className={classes.rightBlock}>
            <div className={classes.textBlockWrapper}>
              <span className={classes.lineLong} />
              <div>
                {t("Досвід роботи")}{" "}
                <strong style={{ color: "#FFF1E8", opacity: 1 }}>
                  {t("9 років")}
                </strong>
                , {t("пройшла всі техніки, від трешу до шикарних робіт")}
              </div>
            </div>
            <div className={classes.textBlockWrapper}>
              <span className={classes.lineShort} />
              <div>
                {t("Переможниця чемпіонатів")},{" "}
                <strong style={{ color: "#FFF1E8", opacity: 1 }}>
                  {t("спікер та суддя")}
                </strong>{" "}
                {t("українських та міжнародних конференцій")}.
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={classes.nameWrapper}>
        <div className={classes.name}>{t("Вікторія Кушнір")}</div>
        <div className={classes.username}>{t("permanent.by.kushnir")}</div>
      </div>
    </div>
  );
};

export default Footer;
