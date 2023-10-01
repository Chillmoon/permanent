import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import ua from "./locales/ua.json";
import ru from "./locales/ru.json";

const resources = {
  ua: {
    translation: ua,
  },
  ru: {
    translation: ru,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ua",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
