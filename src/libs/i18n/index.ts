import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import I18NextChainedBackend from "i18next-chained-backend";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(I18NextChainedBackend)
  .init({
    backend: {
      backends: [
        HttpBackend, // if a namespace can't be loaded via normal http-backend loadPath, then the inMemoryLocalBackend will try to return the correct resources
      ],
      backendOptions: [
        {
          loadPath: `${
            import.meta.env.VITE_FIREBASE_APIKEY
          }/locales/{{lng}}/{{ns}}.json`,
        },
      ],
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    debug: true,
  });

export default i18n;
