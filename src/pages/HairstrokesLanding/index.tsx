import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../app/store";

import Header from "./Header";
import ForWho from "./ForWho";
import Program from "./Program";
import Rates from "./Rates";
import Footer from "./Footer";

import useStyles from "./styles";

const HairstrokesLanding = () => {
  const classes = useStyles();

  const currentLanguage = useSelector(
    (state: RootState) => state.user.language
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return currentLanguage === "en" ? (
    <div className={classes.wrapper2}>
      <div className={classes.text}>
        The course in English will start on February 1, 2024.
      </div>
      <div className={classes.textSmall}>
        To be the first to access the course, go to Telegram and wait for the
        news.
      </div>

      <div className={classes.buttonWrapper}>
        <button
          className={classes.button}
          onClick={() =>
            window.open("https://t.me/+hY1z3w6Dj6xhZjVi", "_blank")
          }
        >
          Go to telegram
        </button>
      </div>
    </div>
  ) : (
    <div className={classes.wrapper}>
      <Header />
      <ForWho />
      <Program />
      <Rates />
      <Footer />
    </div>
  );
};

export default HairstrokesLanding;
