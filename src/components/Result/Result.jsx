import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import ProfessionDescr from '../ProfessionDescr/ProfessionDescr';
import FormToEmail from '../FormToEmail/FormToEmail';
import style from './Result.module.css';

const title = ['Результаты тестирования'];

const options = {
  // maintainAspectRatio: false,
  // responsive: true,
  legend: {
    position: 'bottom',
    labels: {
      boxWidth: 20,
      padding: 30,
      fontSize: 16

    }
  }
}

// for testing
  const res =  
    {
        result: {
          tester: 30,
          frontend: 30,
          backend: 20,
          manager: 20
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

  render() {

    // const { result = {}, profession = []} = this.props.results;
    const { result = {}, profession = []} = res;
    const dataPie = {
      labels: ['FRONT-END', 'BACK-END', 'QA', 'MANAGER'],
      datasets: [{
        data: [result.frontend, result.backend, result.tester, result.manager],
        backgroundColor: ['#75ffff', '#a44deb', '#f5a623', '#f3a82d51'],
        hoverBackgroundColor: ['#75ffff', '#a44deb', '#f5a623', '#f3a82d51']
      },
      ],
    };
    return (
      <div className={style.wrapper}>
        <div className={style.wrapperShadow}>
          <h1 className={style.title}>{title}</h1>
          <Pie data={dataPie} options={options} />
        </div>
          {profession.map(prof=><ProfessionDescr key="prof._id" {...prof} />)}
          <FormToEmail />
      </div>
    );
  }
};
