// Core
import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
// Components
import Task from "./Task";
import Links from "./Links";
// Instruments
import style from "./Result.module.css";

const title = ["Результаты тестирования"];

const options = {
  // maintainAspectRatio: false,
  // responsive: true,
  legend: {
    position: "bottom",
    labels: {
      boxWidth: 20,
      padding: 30,
      fontSize: 16
    }
  }
};

export default class Result extends Component {
  render() {
    const { result = {}, profession = [] } = this.props.results;
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
          <h1 className={style.title}>{title}</h1>
          <Pie data={dataPie} options={options} />
        </div>
        {profession.map(prof => (
          <Task key="prof._id" {...prof} />
        ))}
        <Links />
      </div>
    );
  }
}

// https://github.com/jerairrest/react-chartjs-2/issues/214
// https://github.com/jerairrest/react-chartjs-2/issues/214
// https://drive.google.com/drive/folders/1KQrr1w8U9VyH-qVJqQ5icF_ywVw81Nnb
// https://www.npmjs.com/package/react-chartjs2
// https://www.youtube.com/watch?v=BjbB5rxiFM8
