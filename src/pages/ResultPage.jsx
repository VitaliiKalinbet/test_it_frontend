import React, { Component } from 'react';
import Result from '../components/Result/Result';
import style from './ResultPage.module.css';
import { ResultContext } from '../context/ResultContext';

class ResultPage extends Component {

    static contextType = ResultContext;

    render() {
        return (
            <div className={style.test}>
                <Result {...this.context}/>
            </div>
        );
    }
}

export default ResultPage;