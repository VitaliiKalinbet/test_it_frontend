// Core
import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

// Instruments
import { home } from "../../languages/ru/Home";
import style from "./Home.module.css";

const part = {
  particles: {
    number: {
      value: 100
    },
    size: {
      value: 2
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
};
const Home = () => {
  return (
    <div className={style.Home}>
      <Particles params={part} />
      <div className={style.postWrap}>
        <h1 className={style.title}> {home.title}</h1>
        <p className={style.post}>{home.post}</p>
				<div className={style.btnWrap}> 
				<Link to="/instruction" className={style.btn}>
          Начать тестирование
        </Link>
				</div>
       
      </div>
    </div>
  );
};

export default Home;
