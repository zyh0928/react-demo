import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@@/locales/en.yaml";
import zh from "@@/locales/zh.yaml";

import { langs } from "~/variables.json";

const i18n = createInstance();

const lng = langs[0].code;

i18n.use(initReactI18next).init({
  fallbackLng: lng,
  interpolation: {
    escapeValue: !1,
  },
  lng,
  ns: ["pages", "common", "validations"],
  resources: {
    en: { ...en },
    zh: { ...zh },
  },
});

export default i18n;
