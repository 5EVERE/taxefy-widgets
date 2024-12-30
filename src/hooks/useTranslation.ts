import { useState, useEffect } from "preact/hooks";
import { LANGUAGE } from "../utils/getPartnerConfigFromScriptUrl/getPartnerConfigFromScriptUrl.interface";
import deTranslations from "../locales/de.json";
import enTranslations from "../locales/en.json";

const loadTranslations = (language: string): any => {
	console.log("deTranslations", deTranslations)
	switch (language) {
		case "de":
			return deTranslations;
		case "en":
		default:
			return enTranslations;
	}
};

// useTranslation Hook
export const useTranslation = (language: LANGUAGE) => {
	const [translations, setTranslations] = useState<any>(null);
	
	console.log("language", language);
	
	useEffect(() => {
		const loadedTranslations = loadTranslations(language)
		console.log("loadedTranslations", loadedTranslations);
		setTranslations(loadedTranslations.default || loadedTranslations);
	}, [language]);
	
	const t = (key: string): string => {
		console.log("t, translations", translations);
		return key
		.split(".")
		.reduce((obj: any, part: string) => obj?.[part], translations) || key;
	};
	
	return { t };
};
