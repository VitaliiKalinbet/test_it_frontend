// Core
import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

import style from './Result.module.css';

 export default class Result extends Component {
  state = {
    dataPie: {
      labels: [	'Frontend','Backend',	'Manager'	],
      datasets: [ {
          data: [60, 30, 50],
          backgroundColor: [ '#a44deb','#f5a623','#75ffff'],
          hoverBackgroundColor: [	 '#a44deb','#f5a623','#75ffff'	]
        } ]
    }
  }
  render() {
    return (
          <div className={style.test}>
            <h1>Results</h1>
            <div style={{ height: '500px', width: '500px', margin: '0 auto'}}>
              <Pie data={this.state.dataPie} options={{ responsive: true }}/>
            </div>
          </div>
    );
  }
};

// https://github.com/jerairrest/react-chartjs-2/issues/214
// https://github.com/jerairrest/react-chartjs-2/issues/214

// https://drive.google.com/drive/folders/1KQrr1w8U9VyH-qVJqQ5icF_ywVw81Nnb

// https://www.npmjs.com/package/react-chartjs2

// https://www.youtube.com/watch?v=BjbB5rxiFM8