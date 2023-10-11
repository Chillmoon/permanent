import { Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

import ProgressCard from "../../components/ProgressCard";
import { RootState } from "../../app/store";
import HomePageSkeleton from "../../components/Skeletons/HomePageSkeleton";

import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const navigate = useNavigate();
  const { t } = useTranslation();

  const isCourseAvailable = useSelector(
    (state: RootState) => state.user.isPayed.eyeliner.isPayed
  );

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
        <div className={classes.coursePlaceholder}>
          <div>Скоро</div>
        </div>
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
            <div className={classes.coursePlaceholder}>
              <div>{data.name}</div>
            </div>
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
