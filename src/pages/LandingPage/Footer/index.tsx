import { useTranslation } from "react-i18next";
import useStyles from "./styles";
import { useMediaQuery } from "@mui/material";

const FooterLanding = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const isMobileScreen = useMediaQuery("(max-width:1000px)");

  return isMobileScreen ? (
    <>
      <div className={classes.wrapper}>
        <img
          className={classes.photo}
          alt="Viktoria"
          src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Ftransparent%20Viktoria.png?alt=media&token=ed6491ab-bb3d-425c-8873-75d16a9e2d75&_gl=1*zdtqxb*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjUzMTI3OS42NC4xLjE2OTY1MzEyOTQuNDUuMC4w"
        />
        <img
          className={classes.lightPhoto}
          src="../../assets/lightPhoto.svg"
          alt="Light"
        />
        <div className={classes.username}>permanent.by.kushnir</div>
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
            </div>
          </div>
          <div className={classes.textBlockWrapper}>
            <span className={classes.lineShort} />
            <div>{t("Переможниця чемпіонатів")}, </div>
          </div>

          <div className={classes.textBlockWrapper}>
            <span className={classes.lineShort} />
            <div>{t("Пройшла всі техніки, від трешу до шикарних робіт")}</div>
          </div>
          <div className={classes.textBlockWrapper}>
            <span className={classes.lineShort} />
            <div>
              <strong style={{ color: "#FFF1E8", opacity: 1 }}>
                {t("Спікер та суддя")}
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
          src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fviktoria.svg?alt=media&token=edd328dd-5a5b-4242-b598-b9ec4d1241af&_gl=1*ll42eo*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjYwNDIzOS42Ni4xLjE2OTY2MDQyNTEuNDguMC4w"
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
                <strong style={{ color: "#FFE5D1" }}>{t("9 років")}</strong>
              </div>
              <span className={classes.lineLong} />
            </div>
            <div className={classes.textBlockWrapper}>
              <div>
                <strong style={{ color: "#FFE5D1" }}>
                  {t("Спікер та суддя")}
                </strong>{" "}
                {t("українських та міжнародних конференцій")}.
              </div>
              <span className={classes.lineShort} />
            </div>
          </div>
          <div className={classes.rightBlock}>
            <div className={classes.textBlockWrapper}>
              <span className={classes.lineLong} />
              <div>{t("Пройшла всі техніки, від трешу до шикарних робіт")}</div>
            </div>
            <div className={classes.textBlockWrapper}>
              <span className={classes.lineShort} />
              <div>{t("Переможниця чемпіонатів")} </div>
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

export default FooterLanding;
