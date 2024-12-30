import React from "react";
import "./Option.css";


interface OptionProps {
  title: string;
  onClick: () => void;
}

const Option: React.FC<OptionProps> = ({ title, onClick }) => {
  return (
    <button className="option-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Option;
