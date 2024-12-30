import React from 'react';

import OptionSelector from '../../components/OptionSelector/OptionSelector';

interface QuestionRendererProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentQuestion: any;
  handleNext: (value: string) => void;
  selectedLanguage: string;
  animationClass: string;
}

const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  currentQuestion,
  handleNext,
  selectedLanguage,
  animationClass,
}) => {
  if (!currentQuestion) {
    return <div>Component not found</div>;
  }

  switch (currentQuestion.component) {
    case 'options':
      return (
        <OptionSelector
          options={currentQuestion.options}
          onOptionClick={handleNext}
          selectedLanguage={selectedLanguage}
          animationClass={animationClass}
        />
      );
    default:
      return <div>Component not found</div>;
  }
};

export default QuestionRenderer;
