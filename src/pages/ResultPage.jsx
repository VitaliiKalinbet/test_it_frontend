import React, {Component} from 'react';
import Result from '../components/Result/Result';
import { ResultContext } from '../context/ResultContext';
import * as api from '../services/api';
import style from './ResultPage.module.css';

class ResultPage extends Component {
  static contextType = ResultContext;

  state = {

  }

  handleGetUserResult = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props

    api
      .getUserResults(id)
      .then(({ data }) => {
        if (data.results) {
          this.setState(data.results)
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount () {
    this.handleGetUserResult()
  }

  render () {
    const { results } = this.context;

    const resultsToRender = results.result ? results : this.state;

    return (
      <div className={style.test}>
        {resultsToRender && <Result userAnswersId={this.props.match.params.id} results={resultsToRender} />}
      </div>
    )
  }
}

export default ResultPage
