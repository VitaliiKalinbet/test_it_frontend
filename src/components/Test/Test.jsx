import React from "react";
import QuestionButton from "../Test/QuestionButton";

const Test = ({ item: { questionTitle = "", answers = [] }, setAnswer }) => {
  return (
    <div>
      <h3>{questionTitle}</h3>
      {answers.map(answer => (
        <QuestionButton
          text={answer.answerTitle}
          index={answer.typeProfession}
          key={answer._id}
          setAnswer={setAnswer}
        />
      ))}
    </div>
  );
};

export default Test;
