import {COUNTRY, IGetPartnerConfigFromScriptUrl, LANGUAGE} from "./getPartnerConfigFromScriptUrl.interface";

export function extractPartnerFromUrl(url: string): IGetPartnerConfigFromScriptUrl {
	const result: IGetPartnerConfigFromScriptUrl = {
		language: LANGUAGE.DE,
		country: COUNTRY.AT,
	};
	
	// Parse the URL and check if the hostname is correct
	const parsedUrl = new URL(url);
	/*if (parsedUrl.hostname !== "widget.taxefy.at") {
		result.partner = undefined;
		return result;
	}*/
	
	// Extract the "partner" query parameter if the domain is correct
	const urlParams = new URLSearchParams(parsedUrl.search);
	result.partner = urlParams.get("partner") || undefined;
	
	// Check if language is provided and check if it is a valid language
	if (urlParams.get("lang")) {
		const lang = urlParams.get("lang");
		if (Object.values(LANGUAGE).includes(lang as LANGUAGE)) {
			result.language = lang as LANGUAGE;
		}
	}
	
	// Check if country is provided and check if it is a valid country
	if (urlParams.get("country")) {
		const country = urlParams.get("country");
		if (Object.values(COUNTRY).includes(country as COUNTRY)) {
			result.country = country as COUNTRY;
		}
	}
	
	return result;
}


export function getPartnerConfigFromScriptUrl(): IGetPartnerConfigFromScriptUrl | null {
	const scripts = document.getElementsByTagName("script");
	for (let i = 0; i < scripts.length; i++) {
		const url = scripts[i].src;
		
		// Check if the script URL is from the correct domain and includes "widget.js"
		if (url.includes("widget.js") && !url.includes("_json.widget.js")) {
			return extractPartnerFromUrl(url);
		}
	}
	return null;
}
