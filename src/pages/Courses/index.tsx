import { Typography, useMediaQuery } from "@mui/material";

import CustomButton from "../../components/CustomButton";

import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const cardData = [
  {
    name: "FAST EYELINER",
    id: "fastEyeliner",
    description: "Курс по виконанню міжвійної зони з ідеальним загоєнням",
  },
  {
    name: "Скоро",
  },
  {
    name: "Скоро",
  },
];

const Courses = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const isMobileScreen = useMediaQuery("(max-width:1000px)");

  return (
    <>
      {isMobileScreen ? (
        <>
          <img
            className={classes.backgroundDetails}
            src="../../assets/mobileDetails.svg"
            alt="details"
          />
          <div className={classes.wrapper}>
            <div className={classes.username}>permanent.by.kushnir</div>
            <div className={classes.name}>{t("Вікторія Кушнір")}</div>{" "}
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
                <div>{t("Переможниця чемпіонатів")}</div>
              </div>

              <div className={classes.textBlockWrapper}>
                <span className={classes.lineShort} />
                <div>
                  {t("Пройшла всі техніки, від трешу до шикарних робіт")}
                </div>
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
            </div>
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
          </div>
          <div className={classes.coursesPageMainBlock}>
            <img
              className={classes.whiteBackground}
              src="../../assets/homeWhiteBackMobile.png"
              alt="background"
            />
            <Typography variant="h4" className={classes.blockTitle}>
              {t("Доступні курси")}
            </Typography>
            <div className={classes.cardWrapper}>
              {cardData.map((data, index) =>
                data.name === "Скоро" ? null : (
                  <div className={classes.card}>
                    <div className={classes.cardName}>{data.name}</div>
                    <div className={classes.courseDescription}>
                      {t(
                        "Курс по виконанню міжвійної зони з ідеальним загоєнням"
                      )}
                    </div>
                    <button
                      className={classes.button}
                      onClick={() => navigate(`/courses/${data.id}`)}
                    >
                      {t("Деталі про курс")}
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.wrapper}>
            <img
              className={classes.backgroundDetails}
              src="../../assets/backgroundDetails.png"
              alt="details"
            />
            <div className={classes.nameWrapper}>
              <div className={classes.name}>{t("Вікторія Кушнір")}</div>
              <div className={classes.username}>
                {t("permanent.by.kushnir")}
              </div>
            </div>
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
                      <strong style={{ color: "#FFE5D1" }}>
                        {t("9 років")}
                      </strong>
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
                    <div>
                      {t("Пройшла всі техніки, від трешу до шикарних робіт")}
                    </div>
                  </div>
                  <div className={classes.textBlockWrapper}>
                    <span className={classes.lineShort} />
                    <div>{t("Переможниця чемпіонатів")}</div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={classes.coursesPageMainBlock}>
            <img
              className={classes.whiteBackground}
              src="../../assets/homeWhiteBack.png"
              alt="background"
            />
            <Typography variant="h4" className={classes.blockTitle}>
              {t("Доступні курси")}
            </Typography>
            <div className={classes.cardWrapper}>
              {cardData.map((data, index) =>
                data.name === "Скоро" ? (
                  <div className={classes.coursePlaceholder}></div>
                ) : (
                  <div className={classes.card}>
                    <div className={classes.cardName}>{data.name}</div>
                    <div className={classes.courseDescription}>
                      {t(
                        "Курс по виконанню міжвійної зони з ідеальним загоєнням"
                      )}
                    </div>
                    <button
                      className={classes.button}
                      onClick={() => navigate(`/courses/${data.id}`)}
                    >
                      {t("Деталі про курс")}
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Courses;
