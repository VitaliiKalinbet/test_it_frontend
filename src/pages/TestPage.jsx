import React, { Component } from "react";
//libs
import { Progress } from "react-sweet-progress";
import { ResultContext } from "../context/ResultContext";
//components
import Test from "../components/Test/Test";
import Loader from "../components/Test/Loader";
//services
import * as api from "../services/api";
//language
import { test } from "../languages/ru/Test";
//style , icons
import "react-sweet-progress/lib/style.css";
import style from "./TestPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/Header/Header';

class TestPage extends Component {
  static contextType = ResultContext;

  state = {
    currentQuestion: 1,
    answers: [],
    errorMessage: "",
    isLoading: false
  };

  componentDidMount() {
    this.handleGetFirstQuestion();
  }

  handleGetFirstQuestion = () => {
    api.getFirstQuestion().then(({ data }) => {
      this.setState({
        ...data,
        isLoading: true
      });
    });
  };

  handleSetResults = () => {
    const { answers, userAnswersId } = this.state;
    const { updateResults } = this.context;

    api
      .setResuts({ answers, userAnswersId })
      .then(resp => updateResults(resp.data))
      .catch(err => console.log(err));
  };

  handleNextQuestion = () => {
    const { currentQuestion, question = [], userAnswersId = "" } = this.state;

    const totalQuestions = question.length;

    const isSelectedAnswer = question.find(
      el => el.questionNumber === currentQuestion
    );

    if (!isSelectedAnswer.answerId) {
      this.setState({
        errorMessage: test.error
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
      this.props.history.replace(`/result/${userAnswersId}`);
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
    const {
      currentQuestion = 1,
      question = [],
      errorMessage,
      isLoading
    } = this.state;

    const totalQuestions = question.length;

    const progressPercent =
      currentQuestion <= totalQuestions
        ? Math.round((currentQuestion / totalQuestions) * 100)
        : 100;

    return (
      <div className={style.wrapper}>
        <Header />
        {!isLoading ? (
          <Loader />
        ) : (
            <div className={style.testBlock}>
              <div className={style.progressBlock}>
                <div className={style.countBlock}>
                  <span className={style.countItem}>
                    {currentQuestion} / {totalQuestions}
                  </span>
                </div>
                <Progress
                  percent={progressPercent}
                  status="success"
                  theme={{
                    success: {
                      color: "#f5a623"
                    }
                  }}
                  symbolClassName={style.symbolProgress}
                  className={style.progress}
                />
              </div>

              {errorMessage && (
                <p className={style.errorMessage}>{errorMessage}</p>
              )}
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
              <div className={style.buttonBlock}>
                {currentQuestion > 1 && (
                  <button
                    type="button"
                    onClick={() => this.handlePrevQuestion()}
                    className={style.buttonNav}
                  >
                    <span>
                      <FontAwesomeIcon icon={faArrowLeft} /> {test.prev}
                    </span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => this.handleNextQuestion()}
                  className={`${style.buttonNav} ${style.buttonNavRight}`}
                >
                  {currentQuestion !== totalQuestions ? test.next : test.results}
                  &#8194;<FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default TestPage;