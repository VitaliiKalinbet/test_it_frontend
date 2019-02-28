import React from "react";
import { NavLink } from "react-router-dom";
import Particles from "react-particles-js";
import { home } from "../../languages/ru/Home";
import style from "./Home.module.css";

const part = {
  particles: {
    number: {
      value: 40
    },
    size: {
      value: 2
    },
    shape: {
      type: {
        value: "star"
      }
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
    <div className={style.pageWrap}>
      <div className={style.canvasWrap}>
        <Particles
          params={part}
          height={window.innerHeight}
          width={window.innerHeight}
        />
      </div>
      <div className={style.postWrap}>
        <h1 className={style.title}> {home.title}</h1>
        <p className={style.post}>{home.post}</p>
        <NavLink to="/instruction" className={style.button_wrapper}>
          <button className={style.button}>начать тестирование</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
