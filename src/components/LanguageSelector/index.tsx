import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../app/features/i118n/i18n";
import { userSlice } from "../../app/features/userSlice";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

function LanguageSelect() {
  const { t } = useTranslation();
  const classes = useStyles();
  const { setLanguage } = userSlice.actions;
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.user.language
  );

  useEffect(() => {
    const language = localStorage.getItem("language") || i18n.language;
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
  }, [dispatch, setLanguage]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const language = event.target.value;
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <Select
      value={currentLanguage}
      onChange={handleChange}
      className={classes.select}
    >
      <MenuItem value="ua">{t("UA")}</MenuItem>
      <MenuItem value="ru">{t("RU")}</MenuItem>
    </Select>
  );
}

export default LanguageSelect;
