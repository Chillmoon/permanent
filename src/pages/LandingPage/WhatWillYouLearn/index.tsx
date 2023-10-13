import { useTranslation } from "react-i18next";

import useStyles from "./styles";
import { Grid, useMediaQuery } from "@mui/material";

const WhatWillYouLearn = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const isMobileScreen = useMediaQuery("(max-width:1000px)");

  return (
    <div className={classes.wrapper}>
      <div className={classes.blockName}>{t("Що ви навчитесь на курсі")}?</div>
      <img
        className={classes.photo}
        alt="Viktoria"
        src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fviktoria.svg?alt=media&token=edd328dd-5a5b-4242-b598-b9ec4d1241af&_gl=1*68ngw4*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjI0NTE1NC41Mi4xLjE2OTYyNDY4NTguNTcuMC4w"
      />
      <img
        className={classes.lightPhoto}
        src="../../assets/Light1.svg"
        alt="Light"
      />
      <img className={classes.blob} src="../../assets/blob.svg" alt="Figure" />

      {isMobileScreen ? (
        <div className={classes.mobileWrapper}>
          <ul className={classes.list}>
            <li>
              <img
                className={classes.icon}
                alt="check icon"
                src="../../assets/checkIcon.svg"
              />
              <div>
                {t(`Виконувати процедуру`)}{" "}
                <strong style={{ color: "#FFE5D1" }}>
                  {t("швидше ніж за 20 хвилин")}.
                </strong>
              </div>
            </li>
            <li>
              <img
                className={classes.icon}
                alt="check icon"
                src="../../assets/checkIcon.svg"
              />
              <div>
                {t(
                  "Розбиратись в складі пігментів для очей, щоб розуміти різницю в результатах"
                )}
              </div>
            </li>
            <li>
              <img
                className={classes.icon}
                alt="check icon"
                src="../../assets/checkIcon.svg"
              />
              <div>
                {t("Правильно фіксувати, щоб виконати процедуру")}{" "}
                <strong style={{ color: "#FFE5D1" }}>
                  {t("безпечно і зручно")}.
                </strong>
              </div>
            </li>
            <li>
              <img
                className={classes.icon}
                alt="check icon"
                src="../../assets/checkIcon.svg"
              />
              <div>{t("Працювати з нависаючими повіками")}</div>
            </li>
            <li>
              <img
                className={classes.icon}
                alt="check icon"
                src="../../assets/checkIcon.svg"
              />
              <div>{t("Що робити, якщо анестезія потрапила в око")}</div>
            </li>
            <li>
              <img
                className={classes.icon}
                alt="check icon"
                src="../../assets/checkIcon.svg"
              />
              <div>{t("Підбирати кому який пігмент краще використати")}</div>
            </li>
            <li>
              <img
                className={classes.icon}
                alt="check icon"
                src="../../assets/checkIcon.svg"
              />
              <div>
                {t(
                  "Продуктивно і швидко працювати пучковими голками, навіть якщо раніше не мали такого досвіду"
                )}
              </div>
            </li>
            <li>
              <img
                className={classes.icon}
                alt="check icon"
                src="../../assets/checkIcon.svg"
              />
              <div>
                {t("Працювати")}{" "}
                <strong style={{ color: "#FFE5D1" }}>
                  {t("з усіма типами повік")}
                </strong>
              </div>
            </li>
            <li>
              <img
                className={classes.icon}
                alt="check icon"
                src="../../assets/checkIcon.svg"
              />
              <div>
                {t("Що робити в ситуації, якщо пігмент попав в капіляр")}
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <Grid container className={classes.wideWrapper}>
          <Grid xs={4}></Grid>
          <Grid xs={4}>
            <ul className={classes.list}>
              <li>
                <img
                  className={classes.icon}
                  alt="check icon"
                  src="../../assets/checkIcon.svg"
                />
                <div>
                  {t(`Виконувати процедуру`)}{" "}
                  <strong style={{ color: "#FFE5D1" }}>
                    {t("швидше ніж за 20 хвилин")}.
                  </strong>
                </div>
              </li>
              <li>
                <img
                  className={classes.icon}
                  alt="check icon"
                  src="../../assets/checkIcon.svg"
                />
                <div>
                  {t(
                    "Розбиратись в складі пігментів для очей, щоб розуміти різницю в результатах"
                  )}
                </div>
              </li>
              <li>
                <img
                  className={classes.icon}
                  alt="check icon"
                  src="../../assets/checkIcon.svg"
                />
                <div>
                  {t("Правильно фіксувати, щоб виконати процедуру")}{" "}
                  <strong style={{ color: "#FFE5D1" }}>
                    {t("безпечно і зручно")}.
                  </strong>
                </div>
              </li>
              <li>
                <img
                  className={classes.icon}
                  alt="check icon"
                  src="../../assets/checkIcon.svg"
                />
                <div>{t("Працювати з нависаючими повіками")}</div>
              </li>
              <li>
                <img
                  className={classes.icon}
                  alt="check icon"
                  src="../../assets/checkIcon.svg"
                />
                <div>{t("Що робити, якщо анестезія потрапила в око")}</div>
              </li>
            </ul>
          </Grid>
          <Grid xs={4}>
            <ul className={classes.list}>
              <li>
                <img
                  className={classes.icon}
                  alt="check icon"
                  src="../../assets/checkIcon.svg"
                />
                <div>{t("Підбирати кому який пігмент краще використати")}</div>
              </li>
              <li>
                <img
                  className={classes.icon}
                  alt="check icon"
                  src="../../assets/checkIcon.svg"
                />
                <div>
                  {t(
                    "Продуктивно і швидко працювати пучковими голками, навіть якщо раніше не мали такого досвіду"
                  )}
                </div>
              </li>
              <li>
                <img
                  className={classes.icon}
                  alt="check icon"
                  src="../../assets/checkIcon.svg"
                />
                <div>
                  {t("Працювати")} <strong> {t("з усіма типами повік")}</strong>
                </div>
              </li>
              <li>
                <img
                  className={classes.icon}
                  alt="check icon"
                  src="../../assets/checkIcon.svg"
                />
                <div>
                  {t("Що робити в ситуації, якщо пігмент попав в капіляр")}
                </div>
              </li>
            </ul>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default WhatWillYouLearn;
