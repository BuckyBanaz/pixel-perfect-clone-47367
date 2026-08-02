import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { nl, type Dict } from "@/content/nl";
import { en } from "@/content/en";

export type Lang = "nl" | "en";

const dicts: Record<Lang, Dict> = { nl, en };
const STORAGE_KEY = "zurali-lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LanguageContext = createContext<Ctx>({ lang: "nl", setLang: () => {}, t: nl });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("nl");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "nl" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: dicts[lang] }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useT(): Dict {
  return useContext(LanguageContext).t;
}
