import { Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { RootState } from "../../app/store";
import HomePageSkeleton from "../../components/Skeletons/HomePageSkeleton";
import retrievePaymentData from "../../app/functions/retrievePaymentData";

import useStyles from "./styles";
import { useEffect } from "react";

const cardData = [
  {
    name: "FAST EYELINER",
    id: "eyeliner",
    description: "Курс по виконанню міжвійної зони з ідеальним загоєнням",
  },
  {
    name: "Скоро",
  },
  {
    name: "Скоро",
  },
];

const HomePage = () => {
  const classes = useStyles();
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const userId = useSelector((state: RootState) => state.user.user?.uid);

  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const isPayed = retrievePaymentData(userId);

    if (!isPayed) {
      navigate("/courses/eyeliner");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isMobileScreen = useMediaQuery("(max-width:1000px)");

  return isLoading ? (
    <HomePageSkeleton />
  ) : isMobileScreen ? (
    <div className={classes.wrapper}>
      <Typography variant="h4" className={classes.blockTitle}>
        {t("Доступні курси")}
      </Typography>
      <div className={classes.cardWrapper}>
        {cardData.map((data, index) =>
          data.name === "Скоро" ? null : (
            <div className={classes.card}>
              <div className={classes.cardName}>{data.name}</div>
              <div className={classes.courseDescription}>
                {data.description}
              </div>
              <button
                className={classes.button}
                onClick={() => navigate(`/platform/${data.id}/block0-lesson1`)}
              >
                {t("Перейти до уроків")}
              </button>
            </div>
          )
        )}
        <div className={classes.coursePlaceholder} />
      </div>
    </div>
  ) : (
    <div className={classes.wrapper}>
      <img
        className={classes.backgroundDetails}
        src="../../assets/loginBackground.png"
        alt="details"
      />
      <img
        className={classes.backgroundDetails1}
        src="../../assets/loginBackground.png"
        alt="details"
      />
      <Typography variant="h4" className={classes.blockTitle}>
        {t("Доступні курси")}
      </Typography>
      <div className={classes.cardWrapper}>
        {cardData.map((data, index) =>
          data.name === "Скоро" ? (
            <div className={classes.coursePlaceholder} />
          ) : (
            <div className={classes.card}>
              <div className={classes.cardName}>{data.name}</div>
              <div className={classes.courseDescription}>
                {data.description}
              </div>
              <button
                className={classes.button}
                onClick={() => navigate(`/platform/${data.id}/block0-lesson1`)}
              >
                {t("Перейти до уроків")}
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
