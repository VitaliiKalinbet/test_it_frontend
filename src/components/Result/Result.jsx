import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import ProfessionDescr from '../ProfessionDescr/ProfessionDescr';
import ButtonTryAgain from '../ButtonStartTestAgain/ButtonTryAgain';
import FormToEmail from '../FormToEmail/FormToEmail';
import Particles from "react-particles-js";
import * as api from '../../services/api.js'
import style from './Result.module.css';

// const part = {
//   particles: {
//     number: {
//       value: 10
//     },
//     size: {
//       value: 1
//     }
//   },
//   interactivity: {
//     events: {
//       onhover: {
//         enable: true,
//         mode: "repulse"
//       }
//     }
//   },
//   style: {
//     height: '7rem'
//   }
// };

const options = {
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

 // for testing
 const res =
 {
   result: {
     tester: 60,
     frontend: 30,
     backend: 5,
     manager: 5
   },
   profession: [
     {
       _id: "5c6872176ad71a1e451fb3f1",
       typeProfession: "tester",
       title: "ТЕСТИРОВЩИК",
       descriptionTitle: "Описание профессии",
       descriptionText: "В круг задач тестировщика программного обеспечения входит формирование стратегии проверки, создание тест-кейсов и тест-дизайна, репорт ошибок в случае их выявления, работа с документацией написание подробного отчета о процессе с указанием причин и обстоятельств возникших проблем.",
       "dutiesTitle": "Обязанности",
       "dutiesText": "В идеале испытатель ПО - это сотрудник, участвующий в разрешении технических проблем, связанных с разработкой софта, а не только обнаруживающий их. Это исследователь и инженер, задействованный во всех этапах жизненного цикла проекта.",
       "perspectivesTitle": "Перспективы профессии",
       "perspectivesText": "На сегодняшний день часть процессов тестирования ПО уже автоматизируется и отдается на аутсорсинг искусственному интеллекту.",
       createdAt: "2019-02-16T20:27:03.307Z",
       updatedAt: "2019-02-16T20:27:03.307Z",
       "__v": 0
     },
   ]
 }; 

export default class Result extends Component {

  state = {
    email: '',
    messageFromSendEmail: '',
  };

  handelChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  sendResultOnEmail = (event) => {
    event.preventDefault();
    // event.stopPropagation();
    const canvas = document.querySelector('canvas');
    const canvasImage = canvas.toDataURL("image/png");
    const { email } = this.state;
    const { userAnswersId } = this.props;
    api
      .sendMail({ email: email, userAnswersId: userAnswersId, image: canvasImage })
      .then(resp => {
        console.log('resp', resp);
        this.setState({
        messageFromSendEmail: resp.data.message,
        email: '',
      }) 
    })
      
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

          <div className={style.wrapHead}>
            {/* <div className={style.canvasWrap}>
              <Particles params={part} />
            </div> */}
              <h2 className={style.title}> 
                Результаты&#8194;  
                <span className={style.hideOnModal}> тестирования</span>
              </h2>
          </div>

          <div className={style.pieStyle}>
            <Pie data={dataPie} options={options} />
          </div>

        </div>

        {profession.map(prof => <ProfessionDescr key="prof._id" {...prof} />)}
        <ButtonTryAgain />
        <FormToEmail messageFromSendEmail={this.state.messageFromSendEmail} sendResultOnEmail={this.sendResultOnEmail} email={this.state.email} handelChange={this.handelChange} />

      </div>
    );
  }
};