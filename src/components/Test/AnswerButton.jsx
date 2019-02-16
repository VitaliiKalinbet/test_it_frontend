import React from "react";
import style from "./Test.module.css";

const QuestionButton = ({
  answerTitle = "",
  typeProfession = "",
  _id = "",
  answerId,
  setAnswer
}) => {
  return (
    <div
      className={answerId === _id ? style.activeButton : style.defaultButton}
      name={typeProfession}
      onClick={() => setAnswer(typeProfession, _id)}
    >
      <span>{typeProfession}</span>
      <span>{answerTitle}</span>
      <span>{}</span>
    </div>
  );
};

export default QuestionButton;
