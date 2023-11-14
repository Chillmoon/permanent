import { Button, ButtonGroup } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../app/features/i118n/i18n";
import { userSlice } from "../../app/features/userSlice";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

function LanguageSelect({ isMenu = false }) {
  const { t } = useTranslation();
  const classes = useStyles();
  const { setLanguage } = userSlice.actions;
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.user.language
  );

  useEffect(() => {
    const language = i18n.language;
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
  }, [dispatch, setLanguage]);

  const changeLanguage = (language: string) => {
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <ButtonGroup>
      <button
        style={{ fontWeight: currentLanguage === "ua" ? 700 : 300 }}
        className={isMenu ? classes.menuLink : classes.link}
        onClick={() => changeLanguage("ua")}
      >
        UA
      </button>
      /
      <button
        style={{ fontWeight: currentLanguage === "ru" ? 700 : 300 }}
        className={isMenu ? classes.menuLink : classes.link}
        onClick={() => changeLanguage("ru")}
      >
        RU
      </button>
      /
      <button
        style={{ fontWeight: currentLanguage === "en" ? 700 : 300 }}
        className={isMenu ? classes.menuLink : classes.link}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </ButtonGroup>
  );
}

export default LanguageSelect;
