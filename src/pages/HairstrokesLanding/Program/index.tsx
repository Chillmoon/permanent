import { useTranslation } from "react-i18next";

import useStyles from "./styles";

const Program = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.wrapper}>
      <img
        className={classes.brow}
        alt="Brow"
        src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2Fbrow.png?alt=media&token=fe7ec392-4ade-41c3-ae02-8a7b636f887d"
      />
      <div className={classes.label}>{t("Програма курсу")}</div>
      <div className={classes.programBlockLine}>
        <div className={classes.programBlock}>
          <div className={classes.blockLabel}>● {t("Блок")} 1</div>
          <div className={classes.block}>
            <div className={classes.blockLabelMobile}>{t("Блок")} 1</div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>
              {t("Вступна частина")}
            </div>
            <div>-{t("типи шкіри")}</div>
            <div>-{t("апарати, різниця в них, який вибрати")}</div>
            <div>-{t("голки, підбір під кожного клієнта")}</div>
            <div>
              -
              {t(
                "пігменти. Мінерали, органіка та їх різниця. Який підібрати під шкіру, щоб отримати ідеальний вихід з часом"
              )}
            </div>
            <div>-{t("післядогляд та загоєння")}</div>
            <div>-{t("УФ та ферментний розпад")}</div>
            <div>-{t("підготовка робочого місця до процедури")}</div>
            <div className={classes.result}>
              <div
                style={{
                  fontSize: 18,
                  textTransform: "uppercase",
                }}
              >
                {t("Результат")}
              </div>
              <div>
                {t(
                  "Закриєш всі питання в складних питаннях теоретичної частини"
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.programBlock}>
          <div className={classes.blockLabel}>● {t("Блок")} 2</div>
          <div className={classes.block}>
            {" "}
            <div className={classes.blockLabelMobile}>{t("Блок")} 1</div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>{t("Схеми")}</div>
            <div>-{t("побудова першого ескізу (рамка)")}</div>
            <div>-{t("аналіз рідної схеми росту брів клієнта")}</div>
            <div>-{t("типи волосків, можливі з‘єднання")}</div>
            <div>
              -
              {t(
                "види схем, як одну схему можна підлаштувати під кожного клієнта"
              )}
            </div>
            <div>-{t("відпрацювання 3х схем (домашнє завдання)")}</div>
            <div className={classes.result2}>
              <div
                style={{
                  fontSize: 18,
                  textTransform: "uppercase",
                }}
              >
                {t("Результат")}
              </div>
              <div>
                {t(
                  "Дізнаєшся які є типи волосків та їх з’єднання, види схем. Відпрацюєш 3 схеми"
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.programBlock}>
          <div className={classes.blockLabel}>● {t("Блок")} 3</div>
          <div className={classes.block}>
            {" "}
            <div className={classes.blockLabelMobile}>{t("Блок")} 1</div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>{t("Латекс")}</div>
            <div>-{t("правильна постановка рук")}</div>
            <div>-{t("розбираємо правила штриха")}</div>
            <div>-{t("вправи на латексі на чіткість лініі і градієнт")}</div>
            <div>-{t("малюємо типи волосків на латексі та їх з‘єднання")}</div>
            <div>-{t("виконнання всієї брови на латексі")}</div>
            <div className={classes.result}>
              <div
                style={{
                  fontSize: 18,
                  textTransform: "uppercase",
                }}
              >
                {t("Результат")}
              </div>
              <div>
                {t(
                  "Поставиш руку на латексі, і будеш максимально готова/ий до роботи на шкірі клієнта"
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.programBlock}>
          <div className={classes.blockLabel}>● {t("Блок")} 4</div>
          <div className={classes.block}>
            {" "}
            <div className={classes.blockLabelMobile}>{t("Блок")} 1</div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>
              {t("Показовий")}
            </div>
            <div>
              -
              {t("виконання на моделі,розширення форми (шкіра після видалень)")}
            </div>
            <div>-{t("виконання на моделі 50+, щільна шкіра")}</div>
            <div>-{t("виконання змішаної техніки, суха шкіра")}</div>
            <div>-{t("виконання на моделі 65+")}</div>
            <div>-{t("виконання корекції")}</div>
            <div className={classes.result2}>
              <div
                style={{
                  fontSize: 18,
                  textTransform: "uppercase",
                }}
              >
                {t("Результат")}
              </div>
              <div>
                {t(
                  "На прикладі побачиш роботу на абсолютно різних клієнтах, різного віку і типу шкіри. Зрозумієш як правильно робити корекцію"
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.programBlock}>
          <div className={classes.blockLabel}>● {t("Блок")} 5</div>
          <div className={classes.block}>
            {" "}
            <div className={classes.blockLabelMobile}>{t("Блок")} 1</div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>{t("Контент")}</div>
            <div>-{t("фото, лінзи, ракурси")}</div>
            <div>-{t("обробка та програми")}</div>
            <div>-{t("малюємо на iPad")}</div>
            <div className={classes.result}>
              <div
                style={{
                  fontSize: 18,
                  textTransform: "uppercase",
                }}
              >
                {t("Результат")}
              </div>
              <div>
                {t("Навчишся створювати красивий та унікальний контент")}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.programBlock}>
          <div className={classes.blockLabel}>● {t("Блок")} 6</div>
          <div className={classes.block}>
            {" "}
            <div className={classes.blockLabelMobile}>{t("Блок")} 1</div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>
              {t("Чемпіонат")}
            </div>
            <div>-{t("підбір моделі, зовнішній вигляд, шкіра, волосок")}</div>
            <div>-{t("розбір роботи по основним критеріям")}</div>
            <div>-{t("гігієнічні аспекти, підготовка місця")}</div>
            <div>-{t("основні помилки")}</div>
            <div className={classes.result2}>
              <div
                style={{
                  fontSize: 18,
                  textTransform: "uppercase",
                }}
              >
                {t("Результат")}
              </div>
              <div>
                {t("Приймеш участь у чемпіонаті з можливістю виграти приз")}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.programBlock}>
          <div className={classes.blockLabel}>● {t("Блок")} 7</div>
          <div className={classes.block}>
            {" "}
            <div className={classes.blockLabelMobile}>{t("Блок")} 1</div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>
              {t("Просування в Instagram")}
            </div>
            <div>-{t("упаковка профілю")}</div>
            <div>-{t("типи та формати контенту")}</div>
            <div>-{t("комунікація")}</div>
            <div>-{t("аналіз конкурентів")}</div>
            <div>-{t("креативи")}</div>
            <div>-{t("налаштування реклами")}</div>
            <div>-{t("LAL-аудиторія та ретаргет")}</div>
            <div className={classes.result}>
              <div
                style={{
                  fontSize: 18,
                  textTransform: "uppercase",
                }}
              >
                {t("Результат")}
              </div>
              <div>
                {t(
                  "Упакуєш свій профіль та навчишся знаходити клієнтів через таргетовану рекламу"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
