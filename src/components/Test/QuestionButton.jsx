import React from "react";
import style from "./Test.module.css";

const QuestionButton = ({ text = "", index = "", setAnswer }) => {
  return (
    <div
      className={style.questionButton}
      name={index}
      onClick={e => setAnswer(e)}
    >
      <span>{index}</span>
      <span>{text}</span>
    </div>
  );
};

export default QuestionButton;
