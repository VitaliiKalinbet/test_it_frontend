import React from "react";
import style from "./Instruction.module.css";
import { instruction } from "../../languages/ru/Instruction";
import { NavLink } from "react-router-dom";

const Instructions = () => {
  return (
    <div className={style.pageWrap}>
      <div className={style.instructWrap}>
        <div className={style.instructImage}> </div>
        <div className={style.post}>
          <h1 className={style.title}> {instruction.title}</h1>
          <p>{instruction.post}</p>
        </div>
        <div className={style.wrapper_btn}>
          <NavLink className={style.btn} to="/test">
            перейти к вопросам
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
