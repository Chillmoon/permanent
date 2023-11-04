import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import ua from "./locales/ua.json";
import ru from "./locales/ru.json";
import en from "./locales/en.json";

const resources = {
  ua: {
    translation: ua,
  },
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
