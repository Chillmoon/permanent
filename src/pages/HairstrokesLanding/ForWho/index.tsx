import { useTranslation } from "react-i18next";
import useStyles from "./styles";

const ForWho = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img
        className={classes.rectangleHairstrokes}
        src="../../assets/RectangleHairstrokes.png"
        alt="Rectangle"
      />
      <img
        className={classes.rectangleMobile}
        src="../../assets/rectangleMobile.png"
        alt="Rectangle"
      />
      <img
        className={classes.pen1}
        src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fpen1.png?alt=media&token=c333ecde-7692-43a9-9b4b-87a9f6c622a2"
        alt="Pen"
      />
      <img
        className={classes.pen2}
        src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fpen2.png?alt=media&token=92387b9b-60ec-4358-96b5-d3740713f293"
        alt="Pen"
      />
      <div className={classes.label}>{t("Кому підійде цей курс?")}</div>
      <div className={classes.listWrapper}>
        <div className={classes.listUnit}>
          <div className={classes.listNumber}>1</div>
          <div className={classes.listText}>
            {t("Майстрам, які ")}
            <strong>{t("мають досвід в тіньових техніках")}</strong>
          </div>
        </div>
        <div className={classes.listUnit}>
          <div className={classes.listNumber}>2</div>
          <div className={classes.listText}>
            {t("Майстрам, які хочуть розвитку та виходу ")}
            <strong>{t("на новий рівень")}</strong>
          </div>
        </div>
        <div className={classes.listUnit}>
          <div className={classes.listNumber}>3</div>
          <div className={classes.listText}>
            {t("Майстрам, що хочуть опанувати ")}
            <strong>{t("найбажанішку техніку")}</strong>
            {t(" серед клієнтів")}
          </div>
        </div>
        <div className={classes.listUnit}>
          <div className={classes.listNumber}>4</div>
          <div className={classes.listText}>
            {t("Майстрам, які хочуть ")}
            <strong>{t("збільшити свій чек х2 ")}</strong>
            {t("та закрити запис на декілька місяців вперед")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForWho;
