import React from "react";
import { IConfig } from "../../api/config/config.interface";
import { useTranslation } from "../../hooks/useTranslation";
import { LANGUAGE } from "../../utils/getPartnerConfigFromScriptUrl/getPartnerConfigFromScriptUrl.interface";
import "./Button.css";



// Define the prop type for the component
interface ButtonProps {
  config: IConfig;
}

const Button: React.FC<ButtonProps> = ({config}) => {
  const { t } = useTranslation(config.language || LANGUAGE.DE);

  return (
    <button
      className="button"
      onClick={() => {
        // Navigate to the partner link in new tab
        window.open(config.link, "_blank");
      }}
    >
      <p>{t("widgets.button.download")}</p>
    </button>
  );
};

export default Button;
