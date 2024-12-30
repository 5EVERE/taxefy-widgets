import { useState } from "react";
import formData from "../../mock/mock.json";

interface Progress {
  currentStep: string;
  currentQuestion: number;
}

const useFormNavigation = () => {
  const [currentStep, setCurrentStep] = useState(Object.keys(formData)[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const steps = Object.keys(formData);
  const questions = formData.questions;
  const currentQuestion = questions[currentQuestionIndex];

  const progress: Progress = {
    currentStep,
    currentQuestion: currentQuestionIndex + 1,
  };

  const handleSaveAnswer = (answer: string) => {
    if (currentQuestion) {
      currentQuestion.answer = answer;
    }
  };

  const handleNext = (value: string) => {
    handleSaveAnswer(value);
    if (questions.length === progress.currentQuestion) {
      const currentStepIndex = steps.indexOf(currentStep);

      if (currentStepIndex + 1 < steps.length) {
        setCurrentStep(steps[currentStepIndex + 1]);
      } else {
        console.log("End of form or invalid navigation.");
      }
    } else {
      setAnimationClass("forward");
      setTimeout(() => setAnimationClass(""), 300);
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  // const handleBack = () => {
  //   if (currentQuestionIndex > 0) {
  //     setCurrentQuestionIndex((prev) => prev - 1);
  //   } else {
  //     const currentStepIndex = steps.indexOf(currentStep);
  //     if (currentStepIndex > 0) {
  //       const previousStep: any = steps[currentStepIndex - 1];
  //       setCurrentStep(previousStep);
  //       setCurrentQuestionIndex((prev) => prev - 1);
  //     }
  //   }
  // };

  // const toStep = (step: string) => {
  //   if (steps.includes(step)) {
  //     setCurrentStep(step);
  //     setCurrentQuestionIndex(0);
  //   }
  // };

  // const getStepState = (step: string): "finished" | "current" | "empty" => {
  //   const currentStepIndex = steps.indexOf(currentStep);
  //   const stepIndex = steps.indexOf(step);

  //   if (currentStepIndex === stepIndex) return "current";
  //   if (currentStepIndex > stepIndex) return "finished";
  //   return "empty";
  // };

  return {
    progress,
    currentQuestion,
    questionLength: questions.length,
    handleNext,
    animationClass,
  };
};

export default useFormNavigation;
