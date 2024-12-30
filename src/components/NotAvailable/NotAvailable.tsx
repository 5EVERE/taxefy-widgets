import React from "react";
import "./NotAvailable.css";
import {useTranslation} from "../../hooks/useTranslation";
import {IConfig} from "../../api/config/config.interface";
import {LANGUAGE} from "../../utils/getPartnerConfigFromScriptUrl/getPartnerConfigFromScriptUrl.interface";

interface NotAvailableProps {
	config: IConfig;
}

const NotAvailable: React.FC<NotAvailableProps> = ({config}) => {
	const { t } = useTranslation(config.language || LANGUAGE.DE);
	
	return (
		<div className="not-available">
			<p className="not-available__text">
				{t("widgets.notAvailable.title")}
			</p>
		</div>
	);
}

export default NotAvailable;
