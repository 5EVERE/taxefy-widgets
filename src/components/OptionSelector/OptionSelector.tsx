import React from 'react';
import Option from '../Option/Option';
import './OptionSelector.css';

interface Option {
  value: string;
  title: any;
}

interface OptionSelectorProps {
  options: Option[];
  onOptionClick: (value: string) => void;
  selectedLanguage: string;
  animationClass: string;
}

const OptionSelector: React.FC<OptionSelectorProps> = ({
  options,
  onOptionClick,
  selectedLanguage,
  animationClass,
}) => {
  return (
    <div className={`${'option-selector'} ${animationClass}`}>
      {options.map((option, index) => (
        <Option
          key={index}
          title={option.title[selectedLanguage]}
          onClick={() => onOptionClick(option.value)}
        />
      ))}
    </div>
  );
};

export default OptionSelector;
