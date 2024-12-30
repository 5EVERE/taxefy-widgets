/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import StatusBar from '../../components/StatusBar/StatusBar';
import PageTitle from '../../components/PageTitle/PageTitle';
import './Form.css';
import QuestionRenderer from './QuestionRenderer';
import useFormNavigation from './useFormNavigation';
import Snippet from '../../components/Snippet/Snippet';
import Success from '../../components/Success/Success';

const Form: React.FC = () => {
  const selectedLanguage = 'de';
  const {
    progress,
    currentQuestion,
    questionLength,
    handleNext,
    animationClass,
  } = useFormNavigation();
  const [hasCompleted, setHasCompleted] = useState(false);
  const [showNewComponent, setShowNewComponent] = useState(false);

  const isLastQuestion = progress.currentQuestion === questionLength;

  const handleNextAndCheckCompletion = (value: string) => {
    handleNext(value);
    if (isLastQuestion) {
      setHasCompleted(true);
    }
  };

  useEffect(() => {
    if (hasCompleted) {
      const timer = setTimeout(() => {
        setShowNewComponent(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hasCompleted]);

  return (
    <section className="section">
      {hasCompleted ? (
        showNewComponent ? (
          <Success />
        ) : (
          <Snippet />
        )
      ) : (
        <div>
          <StatusBar
            currentQuestionIndex={progress.currentQuestion}
            questionLength={questionLength}
          />
          <PageTitle title={currentQuestion?.title[selectedLanguage] || ''} />
          <QuestionRenderer
            currentQuestion={currentQuestion}
            handleNext={handleNextAndCheckCompletion}
            selectedLanguage={selectedLanguage}
            animationClass={animationClass}
          />
        </div>
      )}
    </section>
  );
};

export default Form;
