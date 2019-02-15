import React, { Component, createRef } from "react";
import { Progress } from "react-sweet-progress";

import Test from "../components/Test/Test";
import PrevQuestionButton from "../components/Test/PrevQuestionButton";
import NextQuestionButton from "../components/Test/NextQuestionButton";

import * as api from "../services/api";

import "react-sweet-progress/lib/style.css";
import style from "./TestPage.module.css";

const INITIAL_STATE = {
  item: {
    _id: {
      $oid: "5c6712ba0c8b70803285cca3"
    },
    questionTitle: "Выберите, что Вашему ребенку больше нравиться делать:",
    answers: [
      {
        _id: "5c6712ba0c8b70803285cca7",
        typeProfession: "tester",
        answerTitle: "Разбираться в чертежах и схемах"
      },
      {
        _id: "5c6712ba0c8b70803285cca6",
        typeProfession: "frontEnd",
        answerTitle: "Помогать решать конфликты и споры между людьми"
      },
      {
        _id: "5c6712ba0c8b70803285cca5",
        typeProfession: "backEnd",
        answerTitle: "Разбираться в чертежах и схемах"
      },
      {
        _id: "5c6712ba0c8b70803285cca4",
        typeProfession: "manager",
        answerTitle: "Помогать решать конфликты и споры между людьми"
      }
    ],
    __v: 0
  },
  totalQuestions: 20,
  currentQuestion: 1,
  currentAnswer: ""
};

class TestPage extends Component {
  containerRef = createRef();

  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.handleGetFirstQuestion();
  }

  handleGetFirstQuestion = () => {
    api.getFirstQuestion().then(({ data }) => {
      this.setState({
        item: data.question
      });
    });
  };

  handleNextQuestion = () => {
    const { currentQuestion, totalQuestions } = this.state;

    api.getNextQuestion(currentQuestion + 1).then(({ data }) => {
      this.setState({
        item: data.question
      });
    });

    this.setState(prevState => {
      return { currentQuestion: prevState.currentQuestion + 1 };
    });

    if (currentQuestion === totalQuestions) {
      this.props.history.replace("/result");
    }
  };

  handlePrevQuestion = () => {
    const { currentQuestion } = this.state;

    api.getNextQuestion(currentQuestion - 1).then(({ data }) => {
      this.setState({
        item: data.question
      });
    });
    this.setState(prevState => {
      return { currentQuestion: prevState.currentQuestion - 1 };
    });
  };

  handleSetAnswer = e => {
    this.setState({
      currentAnswer: e.currentTarget.attributes.name.value
    });
  };

  render() {
    const { totalQuestions, currentQuestion } = this.state;

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
        <Test {...this.state} setAnswer={this.handleSetAnswer} />
        {currentQuestion > 1 && (
          <PrevQuestionButton prevQuestion={this.handlePrevQuestion} />
        )}
        <NextQuestionButton nextQuestion={this.handleNextQuestion} />
      </div>
    );
  }
}

export default TestPage;
