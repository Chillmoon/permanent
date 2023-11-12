import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// import { RootState } from "../../../app/store";
// import retrievePaymentData from "../../../app/functions/retrievePaymentData";

import useStyles from "./styles";

const Rates = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  // const [rate, setRate] = useState(undefined);

  // const navigate = useNavigate();

  // const user = useSelector((state: RootState) => state.user.user);

  // useEffect(() => {
  //   const checkPaymentStatus = async () => {
  //     try {
  //       if (user) {
  //         const payedData = await retrievePaymentData(user.uid);
  //         const fastEyelinerData = payedData?.fastEyeliner;
  //         if (fastEyelinerData) {
  //           setRate(fastEyelinerData.rate);
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error checking payment status:", error);
  //     }
  //   };

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   checkPaymentStatus();
  // }, [user]);

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
              <li
                style={{
                  fontSize: 18,
                  listStyle: "none",
                }}
              >
                <div>
                  {" "}
                  {t("Доступ на платформі")} <strong> {t("6 місяців")}</strong>
                </div>
              </li>
              <li style={{ fontWeight: 700, fontSize: 16 }}>
                {t("Теоретичний блок")}:
                <ul
                  style={{
                    listStyle: "none",
                    fontWeight: 270,
                    padding: 0,
                    fontSize: 14,
                    gap: 7,
                  }}
                >
                  <li>{t("Голки")}</li>
                  <li>{t("Апарати")}</li>
                  <li>{t("Пігментологія")}</li>
                  <li>{t("Опік рогівки")}</li>
                  <li>
                    {t(
                      "Особливості техніки виконання міжвійки за 15 хвилин з ідеальним загоєнням"
                    )}
                  </li>
                  <li>{t("Фото міжвійки, світло, лінза, ракурси")}</li>
                  <li
                    style={{
                      marginTop: 5,
                      textDecoration: "line-through",
                      opacity: 0.7,
                    }}
                  >
                    - {t("Особливості роботи з віковими клієнтами")}
                  </li>
                  <li
                    style={{
                      marginTop: 5,
                      textDecoration: "line-through",
                      opacity: 0.7,
                    }}
                  >
                    -{" "}
                    {t("Особливості виконання міжвійки коричневими пігментами")}
                  </li>
                  <li
                    style={{
                      marginTop: 5,
                      textDecoration: "line-through",
                      opacity: 0.7,
                    }}
                  >
                    -{" "}
                    {t(
                      "Правила роботи з коричневим пігментом, щоб міжвійка виглядала яскраво і не виходила через червоний"
                    )}
                  </li>
                </ul>
                <li
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    listStyle: "none",
                    marginTop: 10,
                  }}
                >
                  {t("Практика")}:
                  <ul
                    style={{
                      listStyle: "none",
                      fontWeight: 270,
                      padding: 0,
                      fontSize: 14,
                      width: 300,
                      gap: 7,
                    }}
                  >
                    <li>{t("Показова робота на міжвійці пучком")}</li>
                    <li>{t("Правильна постановка рук і натяжка шкіри")}</li>
                    <li
                      style={{
                        marginTop: 5,
                        textDecoration: "line-through",
                        opacity: 0.7,
                      }}
                    >
                      -{" "}
                      {t(
                        "Показова робота на моделі коричневим пігментом на моделі 60+ "
                      )}
                    </li>
                    <li
                      style={{
                        marginTop: 5,
                        textDecoration: "line-through",
                        opacity: 0.7,
                      }}
                    >
                      - {t("Правильна натяжка на вікових клієнтах")}
                    </li>
                  </ul>
                </li>
              </li>
            </ul>
            <img
              style={{ opacity: 0.5 }}
              className={classes.bonus}
              alt="bonus"
              src="../../assets/crossedBonus.svg"
            />
            <strong
              style={{
                color: "#E8A41A",
                fontSize: 14,
                textDecoration: "line-through",
                opacity: 0.7,
              }}
            >
              {t("Груповий Zoom з Вікторією")}
            </strong>
            <strong
              style={{
                color: "#E8A41A",
                fontSize: 14,
                textDecoration: "line-through",
                opacity: 0.7,
                marginBottom: 5,
              }}
            >
              {t("Чат-підтримка протягом 3х місяців")}
            </strong>
            {/* <div className={classes.originalPrice}>€190</div> */}
            <div className={classes.discountedPrice}>
              {" "}
              {new Date() >= new Date("2023-11-01T00:00:00") ? " " : "€190"}
            </div>
            {/* <div className={classes.priceDescription}>{t("до 17 жовтня")}</div> */}
            <button
              className={classes.button}
              disabled={new Date() >= new Date("2023-11-01T00:00:00")}
              // onClick={() => {
              //   if (rate === "Rate1" || rate === "Rate2") {
              //     navigate("/platform");
              //   } else if (user?.uid) {
              //     window.location.href = "https://pay.fondy.eu/s/bNRqXwTx8Sz";
              //   } else {
              //     navigate("/signup");
              //   }
              // }}
            >
              {t("Продажі закриті")}
            </button>
          </div>
        </div>
        <div className={classes.cardWrapper1}>
          <div className={classes.card}>
            <div className={classes.label}>{t("Місця обмежені")}</div>
            <div className={classes.cardTitle}>Advanced</div>
            <ul className={classes.cardList}>
              <li
                style={{
                  fontSize: 18,
                  listStyle: "none",
                }}
              >
                <div>
                  {" "}
                  {t("Доступ на платформі")} <strong> {t("6 місяців")}</strong>
                </div>
              </li>
              <li style={{ fontWeight: 700, fontSize: 16 }}>
                {t("Теоретичний блок")}:
                <ul
                  style={{
                    listStyle: "none",
                    fontWeight: 270,
                    padding: 0,
                    fontSize: 14,
                    gap: 7,
                  }}
                >
                  <li>{t("Голки")}</li>
                  <li>{t("Апарати")}</li>
                  <li>{t("Пігментологія")}</li>
                  <li>{t("Опік рогівки")}</li>
                  <li>
                    {t(
                      "Особливості техніки виконання міжвійки за 15 хвилин з ідеальним загоєнням"
                    )}
                  </li>
                  <li>{t("Фото міжвійки, світло, лінза, ракурси")}</li>
                  <li style={{ marginTop: 5, fontWeight: 700 }}>
                    + {t("Особливості роботи з віковими клієнтами")}
                  </li>
                  <li style={{ marginTop: 5, fontWeight: 700 }}>
                    +{" "}
                    {t("Особливості виконання міжвійки коричневими пігментами")}
                  </li>
                  <li style={{ marginTop: 5, fontWeight: 700 }}>
                    +{" "}
                    {t(
                      "Правила роботи з коричневим пігментом, щоб міжвійка виглядала яскраво і не виходила через червоний"
                    )}
                  </li>
                </ul>
                <li
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    listStyle: "none",
                    marginTop: 10,
                  }}
                >
                  {t("Практика")}:
                  <ul
                    style={{
                      listStyle: "none",
                      fontWeight: 270,
                      padding: 0,
                      fontSize: 14,
                      width: 300,
                      gap: 7,
                    }}
                  >
                    <li>{t("Показова робота на міжвійці пучком")}</li>
                    <li>{t("Правильна постановка рук і натяжка шкіри")}</li>
                    <li style={{ marginTop: 5, fontWeight: 700 }}>
                      +{" "}
                      {t(
                        "Показова робота на моделі коричневим пігментом на моделі 60+ "
                      )}
                    </li>
                    <li style={{ marginTop: 5, fontWeight: 700 }}>
                      + {t("Правильна натяжка на вікових клієнтах")}
                    </li>
                  </ul>
                </li>
              </li>
            </ul>
            <img
              className={classes.bonus}
              src="../../assets/bonus.svg"
              alt="bonus"
            />
            <strong style={{ color: "#E8A41A", fontSize: 14 }}>
              {t("Груповий Zoom з Вікторією")}
            </strong>
            <strong style={{ color: "#E8A41A", fontSize: 14, marginBottom: 5 }}>
              {t("Чат-підтримка протягом 3х місяців")}
            </strong>
            {/* <div className={classes.originalPrice}>€250</div> */}
            <div className={classes.discountedPrice}>
              {new Date() >= new Date("2023-11-01T00:00:00") ? " " : "€250"}
            </div>
            {/* <div className={classes.priceDescription}>{t("до 17 жовтня")}</div> */}
            <button
              className={classes.blackButton}
              disabled={new Date() >= new Date("2023-11-01T00:00:00")}
              // onClick={() => {
              //   if (rate === "Rate2") {
              //     navigate("/platform");
              //   } else if (user?.uid) {
              //     window.location.href =
              //       "https://pay.fondy.eu/s/RTUBH8ZDpDRagDO";
              //   } else {
              //     navigate("/signup");
              //   }
              // }}
            >
              {t("Продажі закриті")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rates;
