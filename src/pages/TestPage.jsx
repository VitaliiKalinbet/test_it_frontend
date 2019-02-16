import React, { Component } from "react";
import { Progress } from "react-sweet-progress";

import Test from "../components/Test/Test";
import PrevQuestionButton from "../components/Test/PrevQuestionButton";
import NextQuestionButton from "../components/Test/NextQuestionButton";

import * as api from "../services/api";

import "react-sweet-progress/lib/style.css";
import style from "./TestPage.module.css";

// import data from "./data.json";

class TestPage extends Component {
  state = { currentQuestion: 1, answers: [], errorMessage: "" };

  componentDidMount() {
    this.handleGetFirstQuestion();
  }

  handleGetFirstQuestion = () => {
    api.getFirstQuestion().then(({ data }) => {
      this.setState({
        ...data
      });
    });
  };

  handleSetResults = () => {
    const { answers, userAnswerId } = this.state;

    api
      .setResuts({ answers, userAnswerId })
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  };

  handleNextQuestion = () => {
    const { currentQuestion, question = [] } = this.state;

    const totalQuestions = question.length;

    const isSelectedAnswer = question.find(
      el => el.questionNumber === currentQuestion
    );

    if (!isSelectedAnswer.answerId) {
      this.setState({
        errorMessage: "Выберите вариант ответа!"
      });
      return;
    }

    this.setState(prevState => {
      return {
        currentQuestion: prevState.currentQuestion + 1,
        errorMessage: ""
      };
    });

    if (currentQuestion === totalQuestions) {
      this.handleSetResults();
      this.props.history.replace("/result");
    }
  };

  handlePrevQuestion = () => {
    this.setState(prevState => {
      return {
        currentQuestion: prevState.currentQuestion - 1,
        errorMessage: ""
      };
    });
  };

  handleIsSelectedAnswer = answer => {};

  handleSetAnswer = (variant, id) => {
    const { currentQuestion, question } = this.state;
    const currentQuestionId = question.find(
      el => el.questionNumber === currentQuestion
    )._id;
    this.setState(prevState => {
      const filteredAswers = prevState.answers.filter(
        el => el.questionId !== currentQuestionId
      );

      prevState.answers = [
        ...filteredAswers,
        { questionId: currentQuestionId, typeProfession: variant }
      ];
      const nextState = { ...prevState };

      prevState.question.map(el =>
        el._id === currentQuestionId ? (el.answerId = id) : false
      );

      return nextState;
    });
  };

  render() {
    const { currentQuestion = 1, question = [], errorMessage } = this.state;

    const totalQuestions = question.length;

    const progressPercent =
      currentQuestion <= totalQuestions
        ? Math.round((currentQuestion / totalQuestions) * 100)
        : 100;

    return (
      <div className={style.wrapper}>
        <span>
          {currentQuestion} / {totalQuestions}
        </span>
        <Progress percent={progressPercent} status="success" />
        {errorMessage && <p>{errorMessage}</p>}
        {question.map(
          el =>
            el.questionNumber === currentQuestion && (
              <Test
                {...el}
                selectedAnswer={el.answerId}
                key={el._id}
                setAnswer={this.handleSetAnswer}
              />
            )
        )}
        {currentQuestion > 1 && (
          <PrevQuestionButton prevQuestion={this.handlePrevQuestion} />
        )}
        <NextQuestionButton nextQuestion={this.handleNextQuestion} />
      </div>
    );
  }
}

export default TestPage;
