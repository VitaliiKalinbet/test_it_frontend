import React from "react";
import style from "./Instruction.module.css";
import { instruction } from "../../languages/ru/Instruction";
import { NavLink } from "react-router-dom";
import Particles from "react-particles-js";

const part = {
  particles: {
    number: {
      value: 30
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

const partDesktop = {
  particles: {
    number: {
      value: 200
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
const Instructions = () => {
  return (
    <div className={style.pageWrap}>
      <div className={style.instructWrap}>
        <div className={style.instructImage}>
          {window.innerHeight < 768 ? (
            <Particles params={part} className={style.image} />
          ) : (
            <Particles params={partDesktop} className={style.image} />
          )}
        </div>
        <div className={style.post}>
          <h1 className={style.title}> {instruction.title}</h1>
          <p>{instruction.post}</p>
        </div>

        <NavLink to="/test" className={style.button_wrapper}>
          <button className={style.button}>перейти к вопросам</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Instructions;
