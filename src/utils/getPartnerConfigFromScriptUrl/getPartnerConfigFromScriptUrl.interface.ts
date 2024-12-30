export enum LANGUAGE {
	DE = "de",
	EN = "en"
}

export enum COUNTRY {
	AT = "at",
	DE = "de"
}

export interface IGetPartnerConfigFromScriptUrl {
	language: LANGUAGE;
	country: COUNTRY;
	partner?: string;
}
