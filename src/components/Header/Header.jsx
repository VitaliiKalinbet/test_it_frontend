import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.Wrapper}>
        <NavLink className={style.link}
         to="/">
          <div className={style.Logo}>
            <div>
              <span className={style.logoTag}>&lt;</span>
              <span >it</span>
              <span className={style.logoTag}>&gt;</span>
              <span > test </span>
            </div>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
