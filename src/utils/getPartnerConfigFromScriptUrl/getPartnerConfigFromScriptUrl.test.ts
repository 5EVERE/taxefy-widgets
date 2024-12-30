import {extractPartnerFromUrl} from "./getPartnerConfigFromScriptUrl";
import {COUNTRY, LANGUAGE} from "./getPartnerConfigFromScriptUrl.interface";


describe("extractPartnerFromUrl", () => {
	it("Wrong widget url with partner should return NULL", () => {
		const url = "https://example.com/widget.js?partner=testPartner";
		const result = extractPartnerFromUrl(url);
		expect(result).toEqual({
			language: LANGUAGE.DE,
			country: COUNTRY.AT,
		});
	});
	
	it("Correct widget url without partner provided should return NULL", () => {
		const url = "https://widget.taxefy.at/widget.js";
		const result = extractPartnerFromUrl(url);
		expect(result).toEqual({
			language: LANGUAGE.DE,
			country: COUNTRY.AT,
		});
	});
	
	it("Correct widget url with partner provided should return partner name", () => {
		const url = "https://widget.taxefy.at/widget.js?partner=testPartner";
		const result = extractPartnerFromUrl(url);
		expect(result).toEqual({
			partner: "testPartner",
			language: LANGUAGE.DE,
			country: COUNTRY.AT,
		});
	});
	
	it("Language is detected and valid", () => {
		const url = "https://widget.taxefy.at/widget.js?lang=en";
		const result = extractPartnerFromUrl(url);
		expect(result).toEqual({
			language: LANGUAGE.EN,
			country: COUNTRY.AT,
		});
	});
	
	it("Language is detected and not valid, should set DE as default", () => {
		const url = "https://widget.taxefy.at/widget.js?lang=ar";
		const result = extractPartnerFromUrl(url);
		expect(result).toEqual({
			language: LANGUAGE.DE,
			country: COUNTRY.AT,
		});
	});
	
	it("Country is detected and valid", () => {
		const url = "https://widget.taxefy.at/widget.js?country=de";
		const result = extractPartnerFromUrl(url);
		expect(result).toEqual({
			country: COUNTRY.DE,
			language: LANGUAGE.DE,
		});
	});
	
	it("Country is detected and not valid, should set AT as default", () => {
		const url = "https://widget.taxefy.at/widget.js?country=cz";
		const result = extractPartnerFromUrl(url);
		expect(result).toEqual({
			country: COUNTRY.AT,
			language: LANGUAGE.DE,
		});
	});
	
});
