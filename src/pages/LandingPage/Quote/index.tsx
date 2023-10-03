import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

import useStyles from "./styles";

const Quote = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const isMobileScreen = useMediaQuery("(max-width:1000px)");
  return (
    <div className={classes.wrapper}>
      <img
        className={classes.brownBackground}
        alt="background"
        src={
          isMobileScreen
            ? "../../assets/brownBackgroundMobile.svg"
            : "../../assets/brownBackground.svg"
        }
      />
      <div className={classes.text}>
        <div>"{t("Я вважаю цю техніку ідеальною і найлегшою в роботі")}.</div>
        <div>
          {t(
            "Коли я починала працювати, я, як більшість майстрів, ненавиділа робити міжвійку"
          )}
          .
        </div>
        <div>
          {t(
            " Боляче, страшно, тремтять очі клієнта, пігмент заливає все, а залишку все ще немає"
          )}
          .
        </div>
        <div>
          {t("Тому я")}{" "}
          <strong>
            {t("збирала всі знання, і вже 6 років працюю в цій техніці,")}
          </strong>{" "}
          {t("бо легшого нічого ще не бачила")}."
        </div>
      </div>
      <img
        className={classes.quotesLine}
        alt="quotes line"
        src="../../assets/quotesLine.svg"
      />
      <img
        className={classes.quotesLine2}
        alt="quotes line"
        src="../../assets/quotesLine.svg"
      />
      <img
        className={classes.quotes}
        alt="quotes"
        src="../../assets/quotes.svg"
      />
      <img
        className={classes.quotes2}
        alt="quotes"
        src="../../assets/quotes.svg"
      />
    </div>
  );
};

export default Quote;
