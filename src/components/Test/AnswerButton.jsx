import React from "react";
import style from "../../pages/TestPage.module.css";

const QuestionButton = ({
  answerTitle = "",
  typeProfession = "",
  _id = "",
  answerId,
  setAnswer
}) => {
  return (
    <div
      className={answerId === _id ? `${style.activeButton} ${style.answerButton}` : `${style.defaultButton, style.answerButton}`}
      name={typeProfession}
      onClick={() => setAnswer(typeProfession, _id)}
    >
    <div>
    <span className={answerId === _id ? `${style.answerVariantText} ${style.activeAnswerVariantText}` : `${style.answerVariantText}`}>{typeProfession}</span>
    </div>
      
      <span>{answerTitle}</span>
    </div>
  );
};

export default QuestionButton;
