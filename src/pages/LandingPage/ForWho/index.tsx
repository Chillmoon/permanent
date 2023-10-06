import { useTranslation } from "react-i18next";

import useStyles from "./styles";

const ForWho = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const forWhoList = [
    {
      id: 1,
      description:
        "для початківців, які не розуміють як правильно працювати з міжвійкою",
    },
    {
      id: 2,
      description: "для всіх, хто хоче досягнути яскравих загоєних результатів",
    },
    {
      id: 3,
      description: "для майстрів, які на очах працюють більше 20 хвилин",
    },
    {
      id: 4,
      description:
        "для експертів, які хочуть розібратись які пігменти краще використовувати на очах, і що в їх складі",
    },
    {
      id: 5,
      description:
        "для тих, хто боіться клієнтів у віці, тремтячих очей, попадання анестезіі в очі",
    },
    {
      id: 6,
      description:
        "для тих, хто хоче навчитись правильно заповнювати зону без болі",
    },
    {
      id: 7,
      description: "для тих, хто хоче позбутись страху роботи з очима",
    },
    {
      id: 8,
      description:
        "для тих, хто хоче працювати дорого, без корекціі, і з постійним потоком вдячних клієнтів",
    },
  ];

  return (
    <div className={classes.forWhoErapper}>
      <img
        alt="background"
        className={classes.backgroundImage}
        src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fbackground%20image.svg?alt=media&token=68cb4618-de30-49c9-ab20-c3b630f632c7&_gl=1*1d8ntaq*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjI0NTE1NC41Mi4xLjE2OTYyNDUxODUuMjkuMC4w"
      />
      <img
        alt="background light"
        className={classes.backgroundImageLight}
        src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fbackground%20image%20light.svg?alt=media&token=33614c98-6e91-4dc6-b497-9caa3bdb0f9b&_gl=1*rz196j*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjI0NTE1NC41Mi4xLjE2OTYyNDUzMDguMzMuMC4w"
      />
      <img
        className={classes.bottle}
        alt="Bottle"
        src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fbottle.svg?alt=media&token=b9da3c1d-bd21-4b8b-9a48-037b3b279c5f&_gl=1*agjvm1*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjI0OTM3MS41My4xLjE2OTYyNDk0MjMuOC4wLjA."
      />
      <img
        className={classes.lightBottle}
        src="../../assets/bottleLight.svg"
        alt="Light"
      />
      <div className={classes.blockName}>{t("Для кого")}</div>
      <div className={classes.blockCardWrapper}>
        {forWhoList.map((el: { id: number; description: string }) => (
          <div className={classes.blockCard}>
            <div className={classes.blockCardNumber}>{el.id}</div>
            <div className={classes.blockCardDescription}>
              {t(el.description)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForWho;
