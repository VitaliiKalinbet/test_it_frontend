import React, { Component } from 'react';
import Result from '../components/Result/Result';

import { ResultContext } from '../context/ResultContext';
import * as api from '../services/api'

import style from './ResultPage.module.css';


class ResultPage extends Component {

    static contextType = ResultContext;

    state = {
        results: {
            profession: [],
            userData: {
                result: {}
            }
        }            
    }


    handleGetUserResult = () => {
        const { match } = this.props;
        api.getUserResults(match.params.id)
        .then(({data})=>{
            this.setState(prevState => {
                return prevState.results = {...data}
            })
        }).catch(err=>console.log(err))
    }

    componentDidMount() {
        this.handleGetUserResult()
    }

    render() {

        const { profession, results: {userData: { result }} } = this.state;
        const resultObject = {
            results: {
                profession,
                result
            }
            
        }
        console.log(this.context)

        return (
            <div className={style.test}>
                {(this.context.results.length !== 0 ) ? <Result { ...this.context }/> : <Result  {...resultObject} /> }
            </div>
        );
    }
}

export default ResultPage;