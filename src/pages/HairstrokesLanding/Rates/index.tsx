import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { RootState } from "../../../app/store";
import retrievePaymentData from "../../../app/functions/retrievePaymentData";

import useStyles from "./styles";

const Rates = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user.user);
  const [rate, setRate] = useState(undefined);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        if (user) {
          const payedData = await retrievePaymentData(user.uid);
          const hairCourseData = payedData?.hairCourse;
          if (hairCourseData) {
            setRate(hairCourseData.rate);
          }
        }
      } catch (error) {
        console.error("Error checking payment status:", error);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    checkPaymentStatus();
  }, [user]);

  return (
    <div className={classes.wrapper}>
      <img
        src="../../assets/ratesFigure.png"
        alt="figure"
        className={classes.figure}
      />
      <img
        src="../../assets/ratesFigure.png"
        alt="figure"
        className={classes.figure2}
      />
      <img
        src="../../assets/ratesLight.png"
        alt="rates Light"
        className={classes.ratesLight}
      />
      <img
        src="../../assets/ratesEllipse.png"
        alt="rates Ellipse"
        className={classes.ratesEllipse}
      />
      <img
        className={classes.pen1}
        src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fpen1.png?alt=media&token=c333ecde-7692-43a9-9b4b-87a9f6c622a2"
        alt="Pen"
      />
      <Element name="programBlock" className={classes.label}>
        {t("Тарифи")}
      </Element>
      <div className={classes.ratesWrapper}>
        <div className={classes.rate}>
          <img
            className={classes.rateImg}
            alt="start"
            src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fstart.png?alt=media&token=2bf03713-a66d-46f0-aba0-d4502b9fa18a"
          />
          <div className={classes.rateName}>{t("Start")}</div>
          <div className={classes.available}>∞</div>
          <div className={classes.rateBlock}>{t("Блок")} 1</div>
          <div className={classes.blockContains}>
            <div>• {t("типи шкіри")}</div>
            <div>• {t("голки, підбір під кожного клієнта")}</div>
            <div>• {t("апарати, різниця в них, який вибрати")}</div>
            <div>
              •
              {t(
                "пігменти. Мінерали, органіка та їх різниця. Який підібрати під шкіру, щоб отримати ідеальний вихід з часом"
              )}
            </div>
            <div>• {t("післядогляд та загоєння")}</div>
            <div>• {t("УФ та ферментний розпад")}</div>
            <div>• {t("підготовка робочого місця до процедури")}</div>
          </div>
          <div className={classes.rateBlock}>{t("Блок")} 2</div>
          <div className={classes.blockContains}>
            <div>• {t("побудова першого ескізу (рамка)")}</div>
            <div>• {t("аналіз рідної схеми росту брів клієнта")}</div>
            <div>• {t("типи волосків, можливі з‘єднання")}</div>
            <div>
              •{" "}
              {t(
                "види схем, як одну схему можна підлаштувати під кожного клієнта"
              )}
            </div>
            <div>• {t("відпрацювання 3х схем (домашнє завдання)")}</div>
          </div>
          <div className={classes.rateBlock}>{t("Блок")} 3</div>
          <div className={classes.blockContains}>
            <div>• {t("правильна постановка рук")}</div>
            <div>• {t("розбираємо правила штриха")}</div>
            <div>• {t("вправи на латексі на чіткість лініі і градієнт")}</div>
            <div>• {t("малюємо типи волосків на латексі та їх з‘єднання")}</div>
            <div>• {t("виконнання всієї брови на латексі")}</div>
          </div>
          <div className={classes.rateBlock}>{t("Блок")} 4</div>
          <div className={classes.blockContains}>
            <div>
              •{" "}
              {t(
                "виконання на моделі, розширення форми (шкіра після видалень)"
              )}
            </div>
            <div className={classes.disabledFeatures}>
              • {t("виконання на моделі 50+, щільна шкіра")}
            </div>
            <div className={classes.disabledFeatures}>
              • {t("виконання змішаної техніки, суха шкіра")}
            </div>
            <div>• {t("виконання на моделі 65+")}</div>
            <div>• {t("виконання корекції")}</div>
          </div>
          <div className={classes.rateBlock}>{t("Блок")} 5</div>
          <div className={classes.blockContains}>
            <div>• {t("фото, лінзи, ракурси")}</div>
            <div className={classes.disabledFeatures}>
              • {t("обробка та програми")}
            </div>
            <div className={classes.disabledFeatures}>
              • {t("малюємо на iPad")}
            </div>
          </div>
          <div className={classes.rateBlock}>{t("Блок")} 6</div>
          <div className={classes.blockContains}>
            <div className={classes.disabledFeatures}>
              • {t("підбір моделі, зовнішній вигляд, шкіра, волосок")}
            </div>
            <div className={classes.disabledFeatures}>
              • {t("розбір роботи по основним критеріям")}
            </div>
            <div className={classes.disabledFeatures}>
              • {t("гігієнічні аспекти, підготовка місця")}
            </div>
            <div className={classes.disabledFeatures}>
              • {t("основні помилки")}
            </div>
          </div>
          <div className={classes.rateBlock}>{t("Блок")} 7</div>
          <div className={classes.blockContains}>
            <div>• {t("упаковка профілю")}</div>
            <div>• {t("типи та формати контенту")}</div>
            <div>• {t("комунікація")}</div>
            <div className={classes.disabledFeatures}>
              • {t("аналіз конкурентів")}
            </div>
            <div className={classes.disabledFeatures}>• {t("креативи")}</div>
            <div className={classes.disabledFeatures}>
              • {t("налаштування реклами")}
            </div>
            <div className={classes.disabledFeatures}>
              • {t("LAL-аудиторія та ретаргет")}
            </div>
          </div>
          <div className={classes.rateBonus}>{t("Бонуси")} </div>
          <div className={classes.blockBonuses}>
            <div>• {t("чат-підтримка протягом курсу")}</div>
            <div>• {t("1 zoom-зустріч")}</div>
          </div>
          <div className={classes.blockContains}>
            <div
              style={{
                marginTop: 10,
              }}
            >
              {t("доступ до курсу 4 місяців")}
            </div>
          </div>
          <div
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: `"Exo 2", sans-serif !important`,
              textTransform: "uppercase",
              fontSize: 14,
              marginTop: 10,

              fontWeight: 600,
            }}
          >
            {t("старт навчання 01.01.2024")}
          </div>
          <div className={classes.actualPrice}>
            {t("ціна зараз")}
            <div className={classes.price}>850€</div>
          </div>
          <div className={classes.fullPriceLabel}>{t("ціна з 12.12")}</div>
          <div className={classes.fullPrice}>950€</div>
          <button
            className={classes.rateButton}
            // disabled={new Date() >= new Date("2023-11-01T00:00:00")}
            onClick={() => {
              if (rate === "Rate1" || rate === "Rate2" || rate === "Rate3") {
                navigate("/paymentSuccess");
              } else if (user?.uid) {
                window.location.href =
                  "https://pay.fondy.eu/s/NXuwkJTz?_gl=1*cchsxz*_gcl_aw*R0NMLjE2OTc2MTE2NDAuQ2owS0NRanc0YmlwQmhDeUFSSXNBRnNpZUN4WEtkclNiUmZmeS1PaG9fanNGUFRvNi1taE1sdm80eXZzOU5QOUNuMVZCYXJoSkNNM1FRd2FBc1lQRUFMd193Y0I.*_gcl_au*ODc0MDg1MjY5LjE2OTcxMDk5NDM.*_ga*NTEwODE2NDI3LjE2OTcxMDk5NDM.*_ga_Z2KY5VSWGZ*MTcwMTgxNzAwNS4xOS4xLjE3MDE4MTcxOTUuMC4wLjA.&_ga=2.234496413.2069655254.1701805207-510816427.1697109943";
              } else {
                navigate("/signup");
              }
            }}
          >
            {t("Придбати")}
            <div style={{ fontSize: 12 }}>{t("+ розстрочка monobank")}</div>
          </button>{" "}
          <a
            className={classes.link}
            style={{ marginBottom: 10 }}
            href="https://t.me/+QTM6Op9mbjZhYTY6"
          >
            {t("Забронювати місце")}
          </a>
          <a
            className={classes.link}
            href="https://t.me/+CgZE2V_M179kZDQy"
            target="_blank"
          >
            {t("Розстрочка")}
          </a>
        </div>
        <div className={classes.rate} style={{ background: "#3E2513" }}>
          <img
            className={classes.rateImg}
            alt="advanced"
            src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fadvanced.png?alt=media&token=78488320-b717-4378-aae2-d57f23fb98f6"
          />
          <div className={classes.rateName}>{t("Advanced")}</div>
          <div
            className={classes.available}
            style={{
              color: "rgba(255, 255, 255, 0.70)",
            }}
          >
            {t("всього 14/30 місць")}
          </div>
          <div className={classes.rateBlock}>{t("Блок")} 1</div>
          <div className={classes.blockContains}>
            <div>• {t("типи шкіри")}</div>
            <div>• {t("голки, підбір під кожного клієнта")}</div>
            <div>• {t("апарати, різниця в них, який вибрати")}</div>
            <div>
              •
              {t(
                "пігменти. Мінерали, органіка та їх різниця. Який підібрати під шкіру, щоб отримати ідеальний вихід з часом"
              )}
            </div>
            <div>• {t("післядогляд та загоєння")}</div>
            <div>• {t("УФ та ферментний розпад")}</div>
            <div>• {t("підготовка робочого місця до процедури")}</div>
          </div>
          <div className={classes.rateBlock}>{t("Блок")} 2</div>
          <div className={classes.blockContains}>
            <div>• {t("побудова першого ескізу (рамка)")}</div>
            <div>• {t("аналіз рідної схеми росту брів клієнта")}</div>
            <div>• {t("типи волосків, можливі з‘єднання")}</div>
            <div>
              •{" "}
              {t(
                "види схем, як одну схему можна підлаштувати під кожного клієнта"
              )}
            </div>
            <div>• {t("відпрацювання 3х схем (домашнє завдання)")}</div>
          </div>
          <div className={classes.rateBlock}>{t("Блок")} 3</div>
          <div className={classes.blockContains}>
            <div>• {t("правильна постановка рук")}</div>
            <div>• {t("розбираємо правила штриха")}</div>
            <div>• {t("вправи на латексі на чіткість лініі і градієнт")}</div>
            <div>• {t("малюємо типи волосків на латексі та їх з‘єднання")}</div>
            <div>• {t("виконнання всієї брови на латексі")}</div>
          </div>
          <div className={classes.rateBlock}>{t("Блок")} 4</div>
          <div className={classes.blockContains}>
            <div>
              •{" "}
              {t(
                "виконання на моделі, розширення форми (шкіра після видалень)"
              )}
            </div>
            <div>• {t("виконання на моделі 50+, щільна шкіра")}</div>
            <div>• {t("виконання змішаної техніки, суха шкіра")}</div>
            <div>• {t("виконання на моделі 65+")}</div>
            <div>• {t("виконання корекції")}</div>
          </div>
          <div className={classes.rateBlock}>{t("Блок")} 5</div>
          <div className={classes.blockContains}>
            <div>• {t("фото, лінзи, ракурси")}</div>
            <div>• {t("обробка та програми")}</div>
            <div>• {t("малюємо на iPad")}</div>
          </div>
          <div className={classes.rateBlock}>{t("Блок")} 6</div>
          <div className={classes.blockContains}>
            <div>• {t("підбір моделі, зовнішній вигляд, шкіра, волосок")}</div>
            <div>• {t("розбір роботи по основним критеріям")}</div>
            <div>• {t("гігієнічні аспекти, підготовка місця")}</div>
            <div>• {t("основні помилки")}</div>
          </div>
          <div className={classes.rateBlock}>{t("Блок")} 7</div>
          <div className={classes.blockContains}>
            <div>• {t("упаковка профілю")}</div>
            <div>• {t("типи та формати контенту")}</div>
            <div>• {t("комунікація")}</div>
            <div>• {t("аналіз конкурентів")}</div>
            <div>• {t("креативи")}</div>
            <div>• {t("налаштування реклами")}</div>
            <div>• {t("LAL-аудиторія та ретаргет")}</div>
          </div>
          <div className={classes.rateBonus}>{t("Бонуси")} </div>
          <div className={classes.blockBonuses}>
            <div>• {t("чат-підтримка протягом курсу")}</div>
            <div>• {t("3 zoom-зустрічі")}</div>
          </div>
          <div className={classes.blockContains}>
            <div
              style={{
                marginTop: 10,
              }}
            >
              {t("доступ до курсу 6 місяці")}
            </div>
          </div>
          <div
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: `"Exo 2", sans-serif !important`,
              textTransform: "uppercase",
              fontSize: 14,
              marginTop: 10,
              fontWeight: 600,
            }}
          >
            {t("старт навчання 01.01.2024")}
          </div>
          <div
            className={classes.actualPrice}
            style={{ backgroundColor: "#221207" }}
          >
            {t("ціна зараз")}
            <div className={classes.price}>1090€</div>
          </div>
          <div className={classes.fullPriceLabel}>{t("ціна з 12.12")}</div>
          <div className={classes.fullPrice}>1190€</div>
          <button
            className={classes.rateButton}
            // disabled={new Date() >= new Date("2023-11-01T00:00:00")}
            onClick={() => {
              if (rate === "Rate2" || rate === "Rate3") {
                navigate("/paymentSuccess");
              } else if (user?.uid) {
                window.location.href = "https://pay.fondy.eu/s/S07QHnuU4mGz";
              } else {
                navigate("/signup");
              }
            }}
          >
            {t("Придбати")}
            <div style={{ fontSize: 12 }}>{t("+ розстрочка monobank")}</div>
          </button>{" "}
          <a
            className={classes.link}
            style={{ marginBottom: 10 }}
            href="https://t.me/+QTM6Op9mbjZhYTY6"
          >
            {t("Забронювати місце")}
          </a>
          <a
            className={classes.link}
            href="https://t.me/+CgZE2V_M179kZDQy"
            target="_blank"
          >
            {t("Розстрочка")}
          </a>
        </div>
        <div className={classes.rate} style={{ backgroundColor: "#EBEBEB" }}>
          <img
            className={classes.rateImg}
            alt="vip"
            src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fvip.png?alt=media&token=8381b0f6-8d8f-4e03-9f85-30ba75affee4"
          />
          <div className={classes.rateName} style={{ color: "#3E2513" }}>
            {t("Індивідуальна")}
            {<br />}
            {t("Робота з Вікторією Кушнір по курсу ADVANCED ")}
          </div>
          <div className={classes.available} style={{ color: "#3E2513" }}>
            {t("всього 5/8 місць")}
          </div>
          <div
            style={{
              color: "#3E2513",
              textAlign: "center",
              fontFamily: `"Exo 2", sans-serif !important`,
              textTransform: "uppercase",
              fontSize: 14,
              marginTop: 15,
              fontWeight: 600,
            }}
          >
            {t("старт навчання 01.01.2024")}
          </div>
          <div
            className={classes.actualPrice}
            style={{
              backgroundColor: "#FFF",
              border: "1px solid #3E2513",
              color: "#3E2513",
              marginBottom: 120,
            }}
          >
            {t("ціна зараз")}
            <div className={classes.price}>1700€</div>
          </div>

          <button
            className={classes.rateButton}
            style={{
              backgroundColor: "#3E2513",
              color: "#FFF",
              bottom: 60,
            }}
            // disabled={new Date() >= new Date("2023-11-01T00:00:00")}
            onClick={() => {
              if (rate === "Rate3") {
                navigate("/paymentSuccess");
              } else if (user?.uid) {
                window.location.href = "https://pay.fondy.eu/s/yLoN6j6";
              } else {
                navigate("/signup");
              }
            }}
          >
            {t("Придбати")}
            <div style={{ fontSize: 12 }}>{t("+ розстрочка monobank")}</div>
          </button>
          <a
            className={classes.link}
            style={{ color: "#000" }}
            href="https://t.me/+CgZE2V_M179kZDQy"
            target="_blank"
          >
            {t("Розстрочка")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rates;
