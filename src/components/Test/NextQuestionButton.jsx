import React from "react";

const NextQuestionButton = ({ nextQuestion }) => {
  return (
    <button type="button" onClick={() => nextQuestion()}>
      NextQuestionButton
    </button>
  );
};

export default NextQuestionButton;
