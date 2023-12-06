import { useTranslation } from "react-i18next";

import useStyles from "./styles";
import { Link } from "react-scroll";

const Championship = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.wrapper}>
      <img
        className={classes.img}
        src="../../assets/Championship.png"
        alt="Championship"
      />
      <div className={classes.textWrapper}>
        <div className={classes.label}>{t("ЧЕМПІОНАТ СЕРЕД УЧАСНИКІВ")}</div>
        <div className={classes.description}>
          {t(
            "Наприкінці курсу на тебе чекає чемпіонат, на якому ти зможеш поборотись за цінні призи"
          )}
        </div>
        <Link
          to="programBlock"
          spy={true}
          smooth={true}
          duration={500}
          className={classes.button}
        >
          {t("Взяти участь")}
        </Link>
      </div>
    </div>
  );
};

export default Championship;
