import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../../app/store";

import useStyles from "./styles";
import { useEffect, useState } from "react";
import retrievePaymentData from "../../../app/functions/retrievePaymentData";

const Rates = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [rate, setRate] = useState(undefined);

  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const payedData = await retrievePaymentData(user?.uid);
        const payedRate = payedData.rate;
        setRate(payedRate);
      } catch (error) {
        console.error("Error checking payment status:", error);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    checkPaymentStatus();
  }, [user]);

  return (
    <div className={classes.wrapper}>
      <Element name="programBlock" className={classes.blockName}>
        {t("Тарифи")}
      </Element>
      <div className={classes.cardsWrapper}>
        <div className={classes.cardWrapper}>
          <div className={classes.card}>
            <div className={classes.cardTitle}>Classic</div>
            <ul className={classes.cardList}>
              <li>{t("Практичні демонстрації")}</li>
              <li>{t("Теоретичний блок")}</li>
              <li>{t("Пігметнологія пігментів для очей")}</li>
              <li>{t("Доступ на платформі 3 місяці")}</li>
              <li>
                <div className={classes.cardListItemLined}>
                  {t("Zoom з Вікторією питання/відповіді")}
                </div>
              </li>
              <li>
                <div className={classes.cardListItemLined}>
                  {t("Чат-підтримка протягом 3х місяців")}
                </div>
              </li>
            </ul>
            <div className={classes.originalPrice}>$190</div>
            <div className={classes.discountedPrice}>$150</div>
            <div className={classes.priceDescription}>{t("до 17 жовтня")}</div>
            <button
              className={classes.button}
              onClick={() => {
                if (rate === "Rate1" || rate === "Rate2") {
                  navigate("/platform");
                } else if (user?.uid) {
                  window.location.href =
                    "https://pay.fondy.eu/s/RTUBH8ZDpDRagDO";
                } else {
                  navigate("/login");
                }
              }}
            >
              {rate === "Rate1" || rate === "Rate2"
                ? t("Перейти до уроків")
                : t("Придбати зараз")}
            </button>
          </div>
        </div>
        <div className={classes.cardWrapper1}>
          <div className={classes.card}>
            <div className={classes.label}>
              {t("залишилось")}
              <div>{t("11 місць")}</div>
            </div>
            <div className={classes.cardTitle}>Advanced</div>
            <ul className={classes.cardList}>
              <li>{t("Практичні демонстрації")}</li>
              <li>{t("Теоретичний блок")}</li>
              <li>{t("Пігметнологія пігментів для очей")}</li>
              <li>
                <div>
                  {t("Доступ на платформі")} <strong>{t("6 місяців")}</strong>
                </div>
              </li>
              <li>
                <strong>{t("Zoom з Вікторією питання/відповіді")}</strong>
              </li>
              <li>
                <strong>{t("Чат-підтримка протягом 3х місяців")}</strong>
              </li>
            </ul>
            <div className={classes.originalPrice}>$250</div>
            <div className={classes.discountedPrice}>$190</div>
            <div className={classes.priceDescription}>{t("до 17 жовтня")}</div>
            <button
              className={classes.blackButton}
              onClick={() => {
                if (rate === "Rate2") {
                  navigate("/platform");
                } else if (user?.uid) {
                  window.location.href =
                    "https://pay.fondy.eu/s/RTUBH8ZDpDRagDO";
                } else {
                  navigate("/login");
                }
              }}
            >
              {rate === "Rate2" ? t("Перейти до уроків") : t("Придбати зараз")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rates;
