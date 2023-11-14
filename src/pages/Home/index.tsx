import { Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import { RootState } from "../../app/store";
import HomePageSkeleton from "../../components/Skeletons/HomePageSkeleton";
import retrievePaymentData from "../../app/functions/retrievePaymentData";

import useStyles from "./styles";

const cardData = [
  {
    name: "FAST EYELINER",
    id: "fastEyeliner",
    description: "Курс по виконанню міжвійної зони з ідеальним загоєнням",
  },
  {
    name: "Підготовка до курсу",
    id: "hairCourse",
    description: "Навчись робити брови з волосковою технікою",
  },
  {
    name: "Скоро",
  },
];

const HomePage = () => {
  const classes = useStyles();
  const user = useSelector((state: RootState) => state.user.user);
  const currentLanguage = useSelector(
    (state: RootState) => state.user.language
  );

  const [availableCourses, setAvailableCourses] = useState<any[]>([]);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const isMobileScreen = useMediaQuery("(max-width:1000px)");

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const payedCourses = await retrievePaymentData(user?.uid);

        setAvailableCourses(payedCourses);
      } catch (error) {
        console.error("Error checking payment status:", error);
      }
    };
    checkPaymentStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return isMobileScreen ? (
    <div className={classes.wrapper}>
      <Typography variant="h4" className={classes.blockTitle}>
        {t("Доступні курси")}
      </Typography>
      <div className={classes.cardWrapper}>
        {cardData.map((data) => {
          const isCourseAvailable =
            availableCourses &&
            data.id !== undefined &&
            Object.keys(availableCourses).includes(data.id);

          return data.name === "Скоро" ||
            (currentLanguage === "en" && data.name === "FAST EYELINER") ||
            !isCourseAvailable ? null : (
            <div className={classes.card} key={data.id}>
              <div className={classes.cardName}>
                {t(data.name).toUpperCase()}
              </div>
              <div className={classes.courseDescription}>
                {data.description && t(data.description)}
              </div>
              <button
                className={classes.button}
                onClick={() => navigate(`/platform/${data.id}/block0-lesson1`)}
              >
                {"Перейти до уроків"}
              </button>
            </div>
          );
        })}
        {currentLanguage === "en" && (
          <div className={classes.coursePlaceholder} />
        )}
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
        {cardData.map((data) => {
          const isCourseAvailable =
            availableCourses &&
            data.id !== undefined &&
            Object.keys(availableCourses).includes(data.id);

          return data.name === "Скоро" ||
            (currentLanguage === "en" && data.name === "FAST EYELINER") ||
            !isCourseAvailable ? (
            <div className={classes.coursePlaceholder} />
          ) : (
            <div className={classes.card}>
              <div className={classes.cardName}>
                {t(data.name).toUpperCase()}
              </div>
              <div className={classes.courseDescription}>
                {data.description && t(data.description)}
              </div>
              <button
                className={classes.button}
                onClick={() => navigate(`/platform/${data.id}/block0-lesson1`)}
              >
                {t("Перейти до уроків")}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
