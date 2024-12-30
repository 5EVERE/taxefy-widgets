import {COUNTRY, LANGUAGE} from "../../utils/getPartnerConfigFromScriptUrl/getPartnerConfigFromScriptUrl.interface";

export interface IConfig {
	allowed: boolean;
	name: string;
	country: COUNTRY | undefined;
	language: LANGUAGE | undefined;
	link: string;
}
