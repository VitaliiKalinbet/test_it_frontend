import React from "react";

const PrevQuestionButton = ({ prevQuestion }) => {
  return (
    <button type="button" onClick={() => prevQuestion()}>
      {" "}
      PrevQuestionButton
    </button>
  );
};

export default PrevQuestionButton;
