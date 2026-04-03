import { useState } from "react";
import { fr } from "../i18n/fr";
import { en } from "../i18n/en";

export function useLang() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "fr";
  });

  const t = lang === "fr" ? fr : en;

  const toggleLang = () => {
    const next = lang === "fr" ? "en" : "fr";
    localStorage.setItem("lang", next);
    setLang(next);
  };

  return { lang, toggleLang, t };
}
