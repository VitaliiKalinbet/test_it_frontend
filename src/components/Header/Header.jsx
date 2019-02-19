import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.Header}>
        <NavLink className={style.link}
         to="/">
          <div className={style.Logo}>
              <span className={style.logoTag}>&lt;</span>
              <span >it</span>
              <span className={style.logoTag}>&gt;</span>
              <span > test </span>
          </div>
        </NavLink>
    </div>
  );
};

export default Header;