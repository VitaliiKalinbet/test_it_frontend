import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import ProfessionDescr from '../ProfessionDescr/ProfessionDescr';
import ButtonTryAgain from'./Button/ButtonTryAgain';
import FormToEmail from '../FormToEmail/FormToEmail';
// import { ResultContext } from '../context/ResultContext';
import * as api from '../../services/api.js'
import style from './Result.module.css';

// const title = ["Результаты тестирования"];

const options = {
  // maintainAspectRatio: false,
  responsive: true,
  legend: {
    position: "bottom",
    labels: {
      boxWidth: 20,
      padding: 10,
      fontSize: 16
    }
  }
};

export default class Result extends Component {

  state = {
    email: '',
    canvasImage: '',
    messageFromSendEmail: '',
  };

  handelChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  sendResultOnEmail = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    // this.canvasTagToImage();
    const canvas = document.querySelector('canvas');
    const canvasImage = canvas.toDataURL();
    console.log(canvasImage);
    const { email } = this.state;
    const { userAnswersId } = this.props;
    console.log({ email: email, userAnswersId: userAnswersId, image: canvasImage });
    api
      .sendMail({ email: email, userAnswersId: userAnswersId, image: canvasImage })
      .then(resp => this.setState({
        messageFromSendEmail: resp.message,
        email: '',
      }))
      .catch(err => console.log(err));
  };

  render() {
    const { result = {}, profession = [] } = this.props.results;
    // const { result = {}, profession = []} = res;
    const dataPie = {
      labels: ["FRONT-END", "BACK-END", "QA", "MANAGER"],
      datasets: [
        {
          data: [
            result.frontend,
            result.backend,
            result.tester,
            result.manager
          ],
          backgroundColor: ["#75ffff", "#a44deb", "#f5a623", "#f3a82d51"],
          hoverBackgroundColor: ["#75ffff", "#a44deb", "#f5a623", "#f3a82d51"]
        }
      ]
    };
    return (
      <div className={style.wrapper}>
        <div className={style.wrapperShadow}>
            <div  className={style.title}> 
              <h1>Результаты <span className={style.hideOnModal}>тестирования</span></h1> 
              
            </div>
         
          <Pie data={dataPie} options={options} />
        </div>
        {profession.map(prof => <ProfessionDescr key="prof._id" {...prof} />)}
        <ButtonTryAgain />
        <FormToEmail messageFromSendEmail={this.state.messageFromSendEmail} sendResultOnEmail={this.sendResultOnEmail} email={this.state.email} handelChange={this.handelChange} />
      </div>
    );
  }
};

