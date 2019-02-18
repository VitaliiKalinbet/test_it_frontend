// Core
import React from "react";
// Instruments
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.Wrapper}>
      <Link to="/">
        <div className={style.Logo}> 
         
            <div>
              <span className={style.logoTag}>&lt;</span>
              <span >it</span>
              <span className={style.logoTag}>&gt;</span>
            </div>
            <span > test </span>
          
        </div> 
        </Link>
        {/* <div className={style.Login}>
              <span> Логин   &#9776; </span>
  
        </div> */}
      </div>
    </header>
  );
};

export default Header;
