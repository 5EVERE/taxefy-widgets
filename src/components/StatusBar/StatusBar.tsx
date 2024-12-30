
import React from "react";
import "./StatusBar.css";

interface IStatusBar{
    currentQuestionIndex: number;
    questionLength: number;
}

const StatusBar: React.FC<IStatusBar> = ({currentQuestionIndex, questionLength}) => {
    const progress = ((currentQuestionIndex) / questionLength) * 100;
  return (
    <div>
      <div className="status-bar">
        <div style={{ width: `${progress}%` }} className="status-progress"></div>
      </div>
    </div>
  );
};

export default StatusBar;
