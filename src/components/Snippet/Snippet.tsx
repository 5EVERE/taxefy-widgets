
import React from "react";
import "./Snippet.css";
import { GoStarFill } from "react-icons/go";
import { OrbitProgress } from "react-loading-indicators";
import { useTranslation } from "react-i18next";

const Snippet: React.FC = () => {
  const { t } = useTranslation("snippet");
  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-color")
    .trim();
  const totalStars = 5;
  const filledStars = 5;

  return (
    <div>
      <div className="loading">
        <OrbitProgress dense color={primaryColor} size="medium" />
      </div>
      <h1 className="title">{t("title")}</h1>
      <div className="subTitle">
        <span>{t("subTitle")}</span>
      </div>
      <div className="stars">
        {[...Array(totalStars)].map((_, index) => (
          <GoStarFill
            key={index}
            style={{
              color: index < filledStars ? primaryColor : "#ccc",
              fontSize: "20px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Snippet;
