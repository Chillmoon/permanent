import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";

interface TimerProps {
  isLanding?: boolean;
}

const Timer: React.FC<TimerProps> = ({ isLanding = true }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const targetDate = isLanding
      ? new Date("2023-12-11T23:59:00")
      : new Date("2024-01-01");
    const now = new Date();
    const differenceInSeconds = Math.floor(
      (targetDate.getTime() - now.getTime()) / 1000
    );

    if (differenceInSeconds > 0) {
      setTimeRemaining(differenceInSeconds);
    } else {
      setTimeRemaining(0);
    }

    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining]);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(days).padStart(2, "0")}:${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(
      2,
      "0"
    )}`;
  };

  const isMobileScreen = useMediaQuery("(max-width:1000px)");

  return (
    <div className={isLanding ? classes.wrapper : classes.wrapperBackground}>
      <div className={classes.timerWrapper}>
        {isLanding && <div className={classes.decorativeLine} />}
        <div className={classes.time}>{formatTime(timeRemaining)}</div>
        {isLanding && <div className={classes.decorativeLine} />}
      </div>
      <div
        className={
          isLanding
            ? classes.timeDescription
            : classes.timeDescriptionBackground
        }
      >
        <span
          style={{
            marginLeft: isMobileScreen ? 17 : 13,
            marginRight: isMobileScreen ? 45 : 30,
          }}
        >
          {t("дні")}
        </span>
        <span style={{ marginRight: isMobileScreen ? 30 : 25 }}>
          {t("годин")}
        </span>
        <span style={{ marginRight: isMobileScreen ? 33 : 17 }}>
          {t("хвилин")}
        </span>
        <span>{t("секунд")}</span>
      </div>
    </div>
  );
};

export default Timer;
