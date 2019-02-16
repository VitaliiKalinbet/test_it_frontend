// Core 
import React from 'react';
// Instruments
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.Wrapper}>
        <div className={style.Logo}>
              <div>
                  <span className={style.logoTag}>&lt;</span>
                  it
                  <span className={style.logoTag}>&gt;</span>
              </div>

              <span> test </span>
        </div>
        {/* <div className={style.Login}>
              <span> Логин   &#9776; </span>
  
        </div> */}
      </div>
    </header>
  );
};


export default Header;