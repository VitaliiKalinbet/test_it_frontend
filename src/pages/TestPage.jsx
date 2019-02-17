import React, { Component } from 'react'
import { Progress } from 'react-sweet-progress'
import { ResultContext } from '../context/ResultContext'

import Test from '../components/Test/Test'

import * as api from '../services/api'

import 'react-sweet-progress/lib/style.css'
import style from './TestPage.module.css'

class TestPage extends Component {
  static contextType = ResultContext

  state = { currentQuestion: 1, answers: [], errorMessage: '' }

  componentDidMount () {
    this.handleGetFirstQuestion()
  }

  handleGetFirstQuestion = () => {
    api.getFirstQuestion().then(({ data }) => {
      this.setState({
        ...data
      })
    })
  }

  handleSetResults = () => {
    const { answers, userAnswersId } = this.state
    const { updateResults } = this.context

    api
      .setResuts({ answers, userAnswersId })
      .then(resp => updateResults(resp.data))
      .catch(err => console.log(err))
  }

  handleNextQuestion = () => {
    const { currentQuestion, question = [], userAnswersId = '' } = this.state

    const totalQuestions = question.length

    const isSelectedAnswer = question.find(
      el => el.questionNumber === currentQuestion
    )

    if (!isSelectedAnswer.answerId) {
      this.setState({
        errorMessage: 'Выберите вариант ответа!'
      })
      return
    }

    this.setState(prevState => {
      return {
        currentQuestion: prevState.currentQuestion + 1,
        errorMessage: ''
      }
    })

    if (currentQuestion === totalQuestions) {
      this.handleSetResults()
      this.props.history.replace(`/result/${userAnswersId}`)
    }
  }

  handlePrevQuestion = () => {
    this.setState(prevState => {
      return {
        currentQuestion: prevState.currentQuestion - 1,
        errorMessage: ''
      }
    })
  }

  handleSetAnswer = (variant, id) => {
    const { currentQuestion, question } = this.state
    const currentQuestionId = question.find(
      el => el.questionNumber === currentQuestion
    )._id
    this.setState(prevState => {
      const filteredAswers = prevState.answers.filter(
        el => el.questionId !== currentQuestionId
      )

      prevState.answers = [
        ...filteredAswers,
        { questionId: currentQuestionId, typeProfession: variant }
      ]
      const nextState = { ...prevState }

      prevState.question.map(el =>
        el._id === currentQuestionId ? (el.answerId = id) : false
      )

      return nextState
    })
  }

  render () {
    const { currentQuestion = 1, question = [], errorMessage } = this.state

    const totalQuestions = question.length

    const progressPercent =
      currentQuestion <= totalQuestions
        ? Math.round((currentQuestion / totalQuestions) * 100)
        : 100

    return (
      <div className={style.wrapper}>
        <div className={style.testBlock}>
          <div className={style.countBlock}>
            <span className={style.countItem}>
              {currentQuestion} / {totalQuestions}
            </span>
          </div>
          <Progress
            percent={progressPercent}
            status='success'
            theme={{
              success: {
                symbol: null,
                color: '#f5a623'
              }
            }}
            className={style.progress}
          />
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
            <button type='button' onClick={() => this.handlePrevQuestion()}>
              PrevQuestion
            </button>
          )}
          <button type='button' onClick={() => this.handleNextQuestion()}>
            NextQuestion
          </button>
        </div>
      </div>
    )
  }
}

export default TestPage
