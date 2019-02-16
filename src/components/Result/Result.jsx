// Core
import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
// COmponents
import Task from './Task';

import style from './Result.module.css';

const options = {
  maintainAspectRatio: false,
  responsive: false,
  legend: {
    position: 'bottom',
    labels: {
      boxWidth: 13,
      padding: 10
    }
  }
}

 export default class Result extends Component {
  state = {
      dataPie: {
        labels: [	'FRONT-END','BACK-END',	'QA'	],
        datasets: [ {
            data: [60, 30, 50],
            backgroundColor: [ '#75ffff','#a44deb','#f5a623']
          } ]
      },
  }
  render() {
    const  {dataPie} = this.state;
    return (
          <div className={style.test}>
            <h1>Results</h1>
            <div style={{ height: '500px', width: '500px', margin: '0 auto'}}>
              <Pie data={dataPie} options={options}/>
            </div>
            <Task />
          </div>
    );
  }
};

// https://github.com/jerairrest/react-chartjs-2/issues/214
// https://github.com/jerairrest/react-chartjs-2/issues/214
// https://drive.google.com/drive/folders/1KQrr1w8U9VyH-qVJqQ5icF_ywVw81Nnb
// https://www.npmjs.com/package/react-chartjs2
// https://www.youtube.com/watch?v=BjbB5rxiFM8