import React from "react";
import AnswerButton from "./AnswerButton";

const Test = ({ answerId, questionTitle = "", answers = [], setAnswer }) => {
  return (
    <div>
      <h3>{questionTitle}</h3>
      {answers.map(answer => (
        <AnswerButton
          {...answer}
          key={answer._id}
          setAnswer={setAnswer}
          answerId={answerId}
        />
      ))}
    </div>
  );
};

export default Test;
