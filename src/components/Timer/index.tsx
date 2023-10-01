import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";

interface TimerProps {
  initialTimeInSeconds: number;
}

const Timer: React.FC<TimerProps> = ({ initialTimeInSeconds }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [timeRemaining, setTimeRemaining] = useState(initialTimeInSeconds);

  useEffect(() => {
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
    <div className={classes.wrapper}>
      <div className={classes.timerWrapper}>
        <div className={classes.decorativeLine} />
        <h1>{formatTime(timeRemaining)}</h1>
        <div className={classes.decorativeLine} />
      </div>
      <div className={classes.timeDescription}>
        <span style={{ marginLeft: isMobileScreen ? 0 : 13, marginRight: 30 }}>
          {t("дні")}
        </span>
        <span style={{ marginRight: 25 }}>{t("годин")}</span>
        <span style={{ marginRight: 17 }}>{t("хвилин")}</span>
        <span>{t("секунд")}</span>
      </div>
    </div>
  );
};

export default Timer;
