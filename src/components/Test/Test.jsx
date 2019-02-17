import React from 'react'

import AnswerButton from './AnswerButton'

import style from '../../pages/TestPage.module.css'

const Test = ({ answerId, questionTitle = '', answers = [], setAnswer }) => {
  return (
    <div className={style.questionBlock}>
      <span className={style.questionTitle}>{questionTitle}</span>
      <div className={style.answerBlock}>
        {answers.map(answer => (
          <AnswerButton
            {...answer}
            key={answer._id}
            setAnswer={setAnswer}
            answerId={answerId}
          />
        ))}
      </div>
    </div>
  )
}

export default Test
