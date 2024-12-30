import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextHttpBackend from "i18next-http-backend";
import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .use(initReactI18next) 
  .init({
    fallbackLng: "en", 
    debug: true,
    ns: ["snippet", "success"], 
    defaultNS: "snippet",
    backend: {
      loadPath: "/src/locales/{{lng}}/{{ns}}.json", 
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["localStorage", "cookie"],
    },
  });
